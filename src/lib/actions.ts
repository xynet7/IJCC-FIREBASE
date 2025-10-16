
"use server";

import { z } from "zod";
import { ContactFormSchema, type ContactFormState, RazorpayVerificationSchema, MembershipFormSchema, MembershipFormState } from "./definitions";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function submitMembershipForm(
  values: z.infer<typeof MembershipFormSchema>
): Promise<MembershipFormState> {
    
  const validatedFields = MembershipFormSchema.safeParse(values);

  if (!validatedFields.success) {
    console.log('Server Validation Errors:', validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed on the server. Please check your input and try again.",
      success: false,
    };
  }
  
  try {
    const dataForGoogleSheet = {
      ...validatedFields.data,
      dateOfIncorporation: validatedFields.data.dateOfIncorporation?.toISOString().split('T')[0],
      applicantDate: validatedFields.data.applicantDate?.toISOString().split('T')[0],
    };
    
    // Fire-and-forget the request to Google Apps Script
    // The 'no-cors' mode is removed as it's not applicable in a server-side context.
    fetch(process.env.GOOGLE_SHEET_WEB_APP_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForGoogleSheet),
    }).catch(e => {
        // We log the error but don't block the user.
        // The request is likely to have gone through anyway.
        console.error("Error sending to Google Sheet (non-blocking):", e);
    });

    // Assume success and return immediately
    return {
        message: "Your application has been received! You will now be redirected to complete the payment.",
        success: true,
        errors: {},
    };

  } catch (error: any) {
      console.error("Error during form submission process:", error);
      return {
          message: error.message || "An unexpected error occurred. Please try again.",
          success: false,
          errors: {},
      }
  }
}


export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }

  const { name, email, phone, inquiryType, message } = validatedFields.data;

  if (!process.env.SMTP_HOST) {
    console.error("SMTP environment variables are not set.");
     return {
      message: "Server configuration error. Could not send email.",
      success: false,
      errors: {},
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"IJCC Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_FORM_RECEIVER,
    subject: `New Contact Form Submission - ${inquiryType}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      message: "Thank you! Your message has been sent successfully.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "An error occurred while sending your message. Please try again later.",
      success: false,
      errors: {},
    };
  }
}


export async function verifyRazorpayPayment(data: z.infer<typeof RazorpayVerificationSchema>) {
    const validatedFields = RazorpayVerificationSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, message: "Invalid verification data." };
    }
    
    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay secret key is not configured.");
      return { success: false, message: "Server configuration error." };
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = validatedFields.data;
    
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        return { success: true, message: "Payment verified successfully." };
    } else {
        console.error("Razorpay signature mismatch.");
        return { success: false, message: "Payment verification failed." };
    }
}

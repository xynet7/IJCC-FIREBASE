
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
      japanInterest: Array.isArray(validatedFields.data.japanInterest) ? validatedFields.data.japanInterest.join(', ') : validatedFields.data.japanInterest,
    };
    
    // This is the Google Apps Script URL from your environment variables
    const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_WEB_APP_URL;

    if (!GOOGLE_SHEET_URL) {
      throw new Error("Server configuration error: Google Sheet URL is not set.");
    }
    
    // Make the request to the Google Apps Script
    // The script will perform a redirect which we must handle.
    const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8', // Use text/plain for this redirect-based approach
        },
        body: JSON.stringify(dataForGoogleSheet),
        redirect: 'follow' // Explicitly tell fetch to follow the redirect
    });
    
    // Check if the final response (after following redirects) is successful
    if (!response.ok) {
        // Try to get more context from the response if possible
        const errorText = await response.text();
        console.error("Google Sheet submission failed. Status:", response.status, "Response:", errorText);
        throw new Error(`The form could not be submitted at this time (Status: ${response.status}). Please try again shortly.`);
    }

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

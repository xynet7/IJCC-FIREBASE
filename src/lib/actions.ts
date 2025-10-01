
"use server";

import { z } from "zod";
import { ContactFormSchema, type ContactFormState, RazorpayOrderSchema, RazorpayVerificationSchema } from "./definitions";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";
import crypto from "crypto";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    inquiryType: formData.get("inquiryType"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }

  const { name, email, phone, inquiryType, message } = validatedFields.data;

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

export async function createRazorpayOrder(data: z.infer<typeof RazorpayOrderSchema>) {
    const validatedFields = RazorpayOrderSchema.safeParse(data);

    if (!validatedFields.success) {
        throw new Error("Invalid order data.");
    }
    
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay API keys are not configured.");
    }

    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount, currency, receipt } = validatedFields.data;

    const options = {
        amount,
        currency,
        receipt,
    };

    try {
        const order = await razorpay.orders.create(options);
        return order;
    } catch (error) {
        console.error("Razorpay order creation failed:", error);
        throw new Error("Could not create Razorpay order.");
    }
}

export async function verifyRazorpayPayment(data: z.infer<typeof RazorpayVerificationSchema>) {
    const validatedFields = RazorpayVerificationSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, message: "Invalid verification data." };
    }
    
    if (!process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay secret key is not configured.");
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
        return { success: false, message: "Payment verification failed." };
    }
}

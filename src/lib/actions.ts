"use server";

import { z } from "zod";
import { ContactFormSchema, type ContactFormState } from "./definitions";
import nodemailer from "nodemailer";

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

  // IMPORTANT: For this to work, you must set the following environment variables.
  // A good place for this is the .env file in the root of your project.
  // SMTP_HOST=your_smtp_host
  // SMTP_PORT=your_smtp_port
  // SMTP_USER=your_smtp_username
  // SMTP_PASS=your_smtp_password
  // CONTACT_FORM_RECEIVER=email_address_to_receive_submissions

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
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

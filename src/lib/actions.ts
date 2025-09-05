"use server";

import { z } from "zod";
import { ContactFormSchema, type ContactFormState } from "./definitions";
import { recommendContent } from "@/ai/flows/personalized-content-recommendations";
import { summarizeMeeting } from "@/ai/flows/ai-meeting-summary-tool";

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

  // Simulate routing and processing
  console.log("New contact form submission:", validatedFields.data);
  console.log(`Routing to: ${validatedFields.data.inquiryType} department`);

  // In a real app, you would send an email, save to a DB, etc.

  return {
    message: "Thank you! Your message has been sent successfully.",
    success: true,
    errors: {},
  };
}

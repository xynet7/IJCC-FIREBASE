
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  inquiryType: z.enum([
    "general", 
    "membership", 
    "events",
    "indian-schools",
    "indian-universities",
    "indian-smes",
    "japanese-smes",
    "company-registration-jp-in",
    "company-registration-in-jp",
    "digital-services",
    "startup-support",
    "management-training"
  ], {
    errorMap: () => ({ message: "Please select an inquiry type." }),
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const MembershipFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  address: z.string().min(5, "Address is required."),
  city: z.string().min(2, "City is required."),
  pincode: z.string().min(5, "Pincode is required."),
  country: z.string().min(2, "Country is required."),
  interest: z.string().optional(),
  membershipTier: z.enum([
    "individual", 
    "startup", 
    "corporate",
    "large-corporate"
  ]),
});


export type ContactFormState = {
  message: string;
  errors?: z.ZodError<z.infer<typeof ContactFormSchema>>['formErrors']['fieldErrors'];
  success: boolean;
};

export type MembershipFormState = {
  message: string;
  errors?: z.ZodError<z.infer<typeof MembershipFormSchema>>['formErrors']['fieldErrors'];
  success: boolean;
};

export const RazorpayOrderSchema = z.object({
  amount: z.number().min(100), // Amount in paise, so at least 1 Rupee
  currency: z.string().length(3),
  receipt: z.string(),
});

export const RazorpayVerificationSchema = z.object({
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
});

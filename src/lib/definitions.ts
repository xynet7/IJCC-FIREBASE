
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
  legalCompanyName: z.string().min(2, "Legal company name is required."),
  entityType: z.enum(["private-ltd", "public-ltd", "llp", "partnership", "proprietorship"], {
    required_error: "You need to select an entity type.",
  }),
  dateOfIncorporation: z.date({
    required_error: "Date of incorporation is required.",
  }),
  msmeRegistration: z.string().optional(),
  registeredAddress: z.string().min(10, "Official registered address is required."),
  city: z.string().min(2, "City is required."),
  state: z.string().min(2, "State is required."),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  directors: z.string().min(2, "Please list at least one director."),
  primaryContactPerson: z.string().min(2, "Primary contact person is required."),
  mobileNumber: z.string().min(10, "A valid mobile number is required."),
  emailAddress: z.string().email("A valid email address is required."),
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

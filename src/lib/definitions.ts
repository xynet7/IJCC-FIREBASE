
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

const MAX_FILE_SIZE = 50 * 1024; // 50 KB
const MIN_FILE_SIZE = 10 * 1024; // 10 KB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const MembershipFormSchema = z.object({
  // Part A
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
  pincode: z.string().min(6, "Pincode must be at least 6 characters.").max(10, "Pincode can be at most 10 characters."),
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

  // Part B
  coreBusinessActivity: z.enum([
    "accounting-finance",
    "manufacturing",
    "it-ites",
    "engineering-automotive",
    "healthcare-pharma",
    "agri-food",
    "textiles-apparel",
    "cleantech-energy",
    "consulting-services",
    "other"
  ], {
    required_error: "Please select a core business activity.",
  }),
  otherBusinessActivity: z.string().optional(),
  annualTurnover: z.enum([
    "less-than-5cr",
    "5-25cr",
    "25-100cr",
    "above-100cr"
  ], {
    required_error: "Please select your annual turnover.",
  }),
  japanInterest: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest.",
  }),
  otherJapanInterest: z.string().optional(),
  companyDescription: z.string().min(50, "Description must be at least 50 words.").max(1000, "Description must be less than 1000 characters (approx. 150 words)."),
  marketObjectives: z.string().min(20, "Please provide more detail on your objectives."),
  
  // Part C
  declaration: z.literal(true, {
    errorMap: () => ({ message: "You must accept the declaration." }),
  }),
  applicantName: z.string().min(2, "Applicant name is required."),
  applicantDesignation: z.string().min(2, "Applicant designation is required."),
  applicantDate: z.date({
    required_error: "Please select the date of application.",
  }),
  applicantSignature: z
    .instanceof(File, { message: "Signature is required." })
    .refine((file) => file.size >= MIN_FILE_SIZE, `Signature image must be at least 10KB.`)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Signature image must be less than 50KB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),

}).refine(data => {
    if (data.coreBusinessActivity === 'other') {
        return !!data.otherBusinessActivity && data.otherBusinessActivity.length > 2;
    }
    return true;
}, {
    message: "Please specify your business activity.",
    path: ["otherBusinessActivity"],
}).refine(data => {
    if (data.japanInterest.includes('other')) {
        return !!data.otherJapanInterest && data.otherJapanInterest.length > 2;
    }
    return true;
}, {
    message: "Please specify your interest.",
    path: ["otherJapanInterest"],
});


export type ContactFormState = {
  message: string;
  errors?: z.ZodError<z.infer<typeof ContactFormSchema>>['formErrors']['fieldErrors'];
  success: boolean;
};

export type MembershipFormState = {
  message: string;
  // Use a more specific type for errors to allow for file upload errors
  errors?: z.ZodError<z.infer<typeof MembershipFormSchema>>['formErrors']['fieldErrors'] | { applicantSignature?: string[] };
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

    
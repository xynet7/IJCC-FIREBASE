
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  inquiryType: z.enum(["general", "membership", "events"], {
    errorMap: () => ({ message: "Please select an inquiry type." }),
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    inquiryType?: string[];
    message?: string[];
  };
  success: boolean;
};

// --- User Authentication ---
export interface User {
  id: string;
  name: string;
  email: string;
}

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, pass: string) => Promise<boolean>;
};

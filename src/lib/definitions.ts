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
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, pass: string) => boolean;
};


export const DUMMY_USERS = [
  {
    id: 'user-1',
    name: 'Sakura Tanaka',
    email: 'sakura.tanaka@example.com',
    password: 'password123',
    interests: 'Technology, Automotive',
    industry: 'IT & Software',
    recentActivity: 'Attended Tech Innovation Summit, read article on Indo-Japan trade relations.'
  },
  {
    id: 'user-2',
    name: 'Rohan Gupta',
    email: 'rohan.gupta@example.com',
    password: 'password123',
    interests: 'Finance, E-commerce',
    industry: 'Banking',
    recentActivity: 'Downloaded the "2024 Market Trends" report.'
  },
];

'use server';
/**
 * @fileOverview A site assistant AI agent for the IJCC website.
 *
 * - askSiteAssistant - A function that handles the site assistant process.
 * - SiteAssistantInput - The input type for the assistant (user prompt).
 * - SiteAssistantOutput - The return type for the assistant.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { SiteAssistantOutputSchema, type SiteAssistantOutput } from '@/lib/definitions';

const SiteAssistantInputSchema = z.string().describe('The user query for the assistant.');

export async function askSiteAssistant(input: string): Promise<SiteAssistantOutput> {
  // Check for API key at runtime to provide clear feedback
  if (!process.env.GEMINI_API_KEY) {
    console.error("CRITICAL: GEMINI_API_KEY is missing from environment variables.");
    return {
      responseText: "The assistant is currently offline. Please check the server configuration.",
    };
  }

  try {
    return await siteAssistantFlow(input);
  } catch (error: any) {
    console.error("Chatbot Flow Execution Error:", error);
    return {
      responseText: "I'm having a bit of trouble connecting to my brain right now. Could you please try asking in a slightly different way?",
    };
  }
}

const siteAssistantPrompt = ai.definePrompt({
  name: 'siteAssistantPrompt',
  input: { schema: SiteAssistantInputSchema },
  output: { schema: SiteAssistantOutputSchema },
  system: `You are the official digital assistant for the Indo-Japan Chamber of Commerce (IJCC).
Your primary goal is to help users find information about IJCC's services, membership, and events.

Website Navigation Map:
- Home: /
- About Us (Leadership, Vision): /about
- Services Overview: /services
- Japan Immersion Program: /events/japan-immersive-program
- Membership Directory: /members
- Membership Pricing & Tiers: /pricing
- Membership Application Form: /membership-application
- Latest News: /news
- Event Calendar: /events
- Resource Library: /resources
- Contact Us: /contact

Guidelines:
1. Be professional, warm, and helpful. 
2. Provide concise answers. 
3. If the user asks about something specific, suggest the relevant page in the 'navigation' field.
4. If you don't know the answer, suggest they contact the IJCC office via the /contact page.
5. ALWAYS return valid JSON matching the schema.`,
  prompt: `User Question: {{{this}}}`,
});

const siteAssistantFlow = ai.defineFlow(
  {
    name: 'siteAssistantFlow',
    inputSchema: SiteAssistantInputSchema,
    outputSchema: SiteAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await siteAssistantPrompt(input);
    
    if (!output) {
      throw new Error("Model failed to generate structured output.");
    }
    
    return output;
  }
);

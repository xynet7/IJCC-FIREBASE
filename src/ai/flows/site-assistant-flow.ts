
'use server';
/**
 * @fileOverview A site assistant AI agent for the IJCC website.
 *
 * - askSiteAssistant - A function that handles the site assistant process.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { SiteAssistantOutputSchema, type SiteAssistantOutput } from '@/lib/definitions';

const SiteAssistantInputSchema = z.string().describe('The user query for the assistant.');

export async function askSiteAssistant(input: string): Promise<SiteAssistantOutput> {
  // Runtime check for API key availability
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
  if (!apiKey) {
    console.error("CRITICAL: GEMINI_API_KEY is missing from environment variables.");
    return {
      responseText: "The assistant is currently offline. Please ensure the API key is set in the environment.",
    };
  }

  try {
    return await siteAssistantFlow(input);
  } catch (error: any) {
    console.error("Chatbot Flow Execution Error:", error);
    return {
      responseText: "I'm having a bit of trouble connecting to my brain right now. This usually happens if the AI model is busy or the API key is being validated. Please try asking again in a few seconds!",
    };
  }
}

const siteAssistantFlow = ai.defineFlow(
  {
    name: 'siteAssistantFlow',
    inputSchema: SiteAssistantInputSchema,
    outputSchema: SiteAssistantOutputSchema,
  },
  async (input) => {
    // Using ai.generate directly for better reliability with structured outputs
    const { output } = await ai.generate({
      model: 'googleai/gemini-1.5-flash',
      prompt: `You are the official digital assistant for the Indo-Japan Chamber of Commerce (IJCC).
Your primary goal is to help users find information about IJCC's services, membership, and events.

Website Navigation Map:
- Home: /
- About Us: /about
- Services: /services
- Japan Immersion Program: /events/japan-immersive-program
- Members Directory: /members
- Membership Pricing: /pricing
- Application Form: /membership-application
- News: /news
- Events Calendar: /events
- Resources: /resources
- Contact: /contact

Guidelines:
1. Be professional, warm, and helpful. 
2. Provide concise answers (2-3 sentences max). 
3. If the user asks about a specific topic, suggest the relevant page in the 'navigation' field.
4. If you don't know the answer, suggest they contact the IJCC office via the /contact page.
5. ALWAYS return valid JSON matching the requested schema.

User Question: ${input}`,
      output: {
        schema: SiteAssistantOutputSchema
      },
      config: {
        temperature: 0.5, // Lower temperature for more consistent professional responses
      }
    });
    
    if (!output) {
      throw new Error("Model failed to generate structured output.");
    }
    
    return output;
  }
);

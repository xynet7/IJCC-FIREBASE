
'use server';
/**
 * @fileOverview A site assistant AI agent for the IJCC website.
 *
 * This file exports the following:
 * - askSiteAssistant - An async function that handles user queries.
 */

import { ai } from '@/ai/genkit';
import { SiteAssistantOutputSchema, type SiteAssistantOutput } from '@/lib/definitions';
import { z } from 'zod';

const siteAssistantPrompt = ai.definePrompt({
    name: 'siteAssistantPrompt',
    input: { schema: z.object({ prompt: z.string() }) },
    output: { schema: SiteAssistantOutputSchema },
    prompt: `You are a friendly and helpful assistant for the Indo-Japan Chamber of Commerce website.
      Your goal is to answer user questions about the organization, its services, membership, events, and resources.
      You have access to the following page information:
      - About Us: /about
      - Services: /services
      - Membership, Pricing, & Application: /members, /pricing, /membership-application
      - News: /news
      - Events: /events
      - Resource Library: /resources
      - Contact Us: /contact
      - Home: /

      Based on the user's query: "{{{prompt}}}"

      1.  If the query can be directly answered by a specific page, set the 'navigation' object with the correct 'path' and 'label' for that page. Also provide a brief, introductory response in 'responseText', for example: "Certainly! You can find all the details about our membership options on this page."
      2.  If the query is a general question (e.g., "what is the purpose of IJCC?"), provide a concise answer in 'responseText' and do not include the 'navigation' object.
      3.  Keep your answers brief and professional. Do not make up information. If you don't know the answer, say "I'm not sure about that, but you can find more information on our website or by contacting us."
      `,
});


export async function askSiteAssistant(prompt: string): Promise<SiteAssistantOutput> {
    const llmResponse = await siteAssistantFlow(prompt);
    return llmResponse;
}

const siteAssistantFlow = ai.defineFlow(
    {
        name: 'siteAssistantFlow',
        inputSchema: z.string(),
        outputSchema: SiteAssistantOutputSchema,
    },
    async (prompt) => {
        const { output } = await siteAssistantPrompt({ prompt });

        if (!output) {
            // This case happens if the model doesn't return a parsable JSON object.
            // We'll return a graceful failure message instead of crashing.
            return {
                responseText: "I'm sorry, I couldn't process that request. Could you try rephrasing it?",
            };
        }
        
        return output;
    }
);

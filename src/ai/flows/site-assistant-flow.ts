
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

// Simplified the prompt to test core functionality without structured JSON output.
// This helps isolate whether the connection/API key is the problem.
const siteAssistantPrompt = ai.definePrompt({
    name: 'siteAssistantPrompt',
    input: { schema: z.object({ prompt: z.string() }) },
    model: 'googleai/gemini-1.5-flash-latest', // Explicitly define a reliable model
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

      Provide a concise answer. Do not make up information. If you don't know the answer, say "I'm not sure about that, but you can find more information on our website or by contacting us."
      If you think the user should visit a page, suggest it in your response, for example: "You can find information about membership on the /members page."
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
        try {
            // Call the simplified prompt that returns a simple text response
            const response = await siteAssistantPrompt({ prompt });
            const responseText = response.text;

            if (!responseText) {
                return {
                    responseText: "I'm sorry, I couldn't process that request. Could you try rephrasing it?",
                };
            }
            
            // Return the raw text response. The frontend component will display it.
            // This bypasses any potential JSON parsing errors for now.
            return {
                responseText: responseText,
            };
        } catch (error) {
            console.error("Error in siteAssistantFlow:", error);
            // This catch block is triggered if the call to the AI model fails.
            return {
                responseText: "I seem to be having some technical difficulties. Please try again in a moment.",
            };
        }
    }
);

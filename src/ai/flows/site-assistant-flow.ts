
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
            // Using ai.generate directly with a standard model for maximum reliability.
            const {text} = await ai.generate({
                model: 'googleai/gemini-pro',
                prompt: `You are a friendly and helpful assistant for the Indo-Japan Chamber of Commerce website.
                    Your goal is to answer user questions about the organization, its services, membership, events, and resources.
                    
                    Based on the user's query: "${prompt}"

                    Provide a concise answer. Do not make up information. If you don't know the answer, say "I'm not sure about that, but you can find more information on our website or by contacting us."
                `,
            });
            
            const responseText = text;

            if (!responseText) {
                return {
                    responseText: "I'm sorry, I couldn't process that request. Could you try rephrasing it?",
                };
            }
            
            return {
                responseText: responseText,
            };
        } catch (error: any) {
            console.error("Error in siteAssistantFlow calling ai.generate:", error.message || error);
            return {
                responseText: "I seem to be having some technical difficulties. Please try again in a moment.",
            };
        }
    }
);

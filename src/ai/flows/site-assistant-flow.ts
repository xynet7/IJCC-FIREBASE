
'use server';
/**
 * @fileOverview A site assistant AI agent for the IJCC website.
 *
 * This file exports the following:
 * - askSiteAssistant - An async function that handles user queries.
 */

import { ai } from '@/ai/genkit';
import { type SiteAssistantOutput } from '@/lib/definitions';

export async function askSiteAssistant(prompt: string): Promise<SiteAssistantOutput> {
    
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set in the environment.");
        return {
            responseText: "The server is not configured for the AI assistant. Please contact support.",
        };
    }

    try {
        const { text } = await ai.generate({
            model: 'googleai/gemini-1.5-flash-latest', 
            prompt: `You are a friendly and helpful assistant for the Indo-Japan Chamber of Commerce website.
                Your goal is to answer user questions about the organization, its services, membership, events, and resources.
                
                Based on the user's query: "${prompt}"

                Provide a concise and helpful answer. Do not make up information. If you don't know the answer, say "I'm not sure about that, but you can find more information on our website or by contacting us directly."
            `,
        });
        
        const responseText = text;

        if (!responseText) {
            console.error("AI model returned an empty response.");
            return {
                responseText: "I'm sorry, I couldn't process that request. Could you try rephrasing it?",
            };
        }
        
        return {
            responseText: responseText,
        };
    } catch (error: any) {
        console.error("CRITICAL: Error calling the AI model in askSiteAssistant:", error.message || error);
        return {
            responseText: "I seem to be having some technical difficulties. Please try again in a moment.",
        };
    }
}

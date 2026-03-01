'use server';
/**
 * @fileOverview A site assistant AI agent for the IJCC website.
 *
 * This file exports the following:
 * - askSiteAssistant - An async function that handles user queries using a Genkit flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { SiteAssistantOutputSchema, type SiteAssistantOutput } from '@/lib/definitions';

/**
 * Handles user queries about the IJCC website.
 * @param prompt The user's input string.
 * @returns A structured response containing text and optional navigation data.
 */
export async function askSiteAssistant(prompt: string): Promise<SiteAssistantOutput> {
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set in the environment.");
        return {
            responseText: "The server is not configured for the AI assistant. Please contact support.",
        };
    }

    try {
        return await siteAssistantFlow(prompt);
    } catch (error: any) {
        console.error("CRITICAL: Error in siteAssistantFlow:", error);
        return {
             responseText: "I seem to be having some technical difficulties. Please try again in a moment.",
        };
    }
}

const siteAssistantFlow = ai.defineFlow(
    {
        name: 'siteAssistantFlow',
        inputSchema: z.string(),
        outputSchema: SiteAssistantOutputSchema,
    },
    async (input) => {
        const { output } = await ai.generate({
            model: 'googleai/gemini-1.5-flash',
            system: `You are a friendly and helpful assistant for the Indo-Japan Chamber of Commerce (IJCC) website.
                Your goal is to answer user questions about the organization, its services, membership, events, and resources.
                
                Website Navigation Map:
                - Home: /
                - About Us (Leadership, Vision): /about
                - Services Overview: /services
                - Japan Immersion Program: /events/japan-immersion-program
                - Membership Directory (List of members): /members
                - Membership Pricing & Tiers: /pricing
                - Membership Application Form: /membership-application
                - Latest News: /news
                - Event Calendar: /events
                - Resource Library (All downloads): /resources
                - Contact Us (Office locations, email): /contact
                - JLPT Previous Papers: /resources/jlpt
                - Marugoto Books: /resources/marugoto-books
                - IJCC Magazines: /resources/magazines
                - Self Study Materials: /resources/self-study

                Guidelines:
                1. Provide a concise and helpful answer. 
                2. Do not make up information. If you don't know, suggest they contact IJCC via the /contact page.
                3. If the user's question relates to a specific page listed above, provide the path and a friendly label in the 'navigation' output field.
                4. Use a professional yet warm tone.`,
            prompt: input,
            output: { schema: SiteAssistantOutputSchema },
        });

        if (!output) {
            return {
                responseText: "I'm sorry, I couldn't process that request right now. How else can I help?",
            };
        }

        return output;
    }
);

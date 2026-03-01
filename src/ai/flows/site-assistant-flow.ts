
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
 * Handles user queries about the IJCC website using a Genkit flow.
 * @param prompt The user's input string.
 * @returns A structured response containing text and optional navigation data.
 */
export async function askSiteAssistant(prompt: string): Promise<SiteAssistantOutput> {
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set in the environment.");
        return {
            responseText: "The AI assistant is currently offline due to a configuration issue. Please check back later or use the contact form.",
        };
    }

    try {
        return await siteAssistantFlow(prompt);
    } catch (error: any) {
        console.error("Error in askSiteAssistant:", error);
        return {
             responseText: "I'm sorry, I'm having trouble thinking right now. Could you please try asking again?",
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
            system: `You are the official digital assistant for the Indo-Japan Chamber of Commerce (IJCC).
                Your primary goal is to help users find information about IJCC's services, membership, and events.
                
                Website Navigation Map:
                - Home: /
                - About Us (Leadership, Vision): /about
                - Services Overview: /services
                - Japan Immersion Program (Educational trip for students): /events/japan-immersion-program
                - Membership Directory (List of members): /members
                - Membership Pricing & Tiers: /pricing
                - Membership Application Form: /membership-application
                - Latest News & Articles: /news
                - Event Calendar: /events
                - Resource Library (Downloads): /resources
                - Contact Us (Office locations, email): /contact
                - JLPT Previous Papers: /resources/jlpt
                - Marugoto Books (Member resource): /resources/marugoto-books
                - IJCC Magazines (Member resource): /resources/magazines
                - Self Study Materials: /resources/self-study

                Guidelines:
                1. Be professional, warm, and helpful. 
                2. Provide concise answers. 
                3. Always suggest a relevant page using the 'navigation' field if the user's query matches a specific section of the site.
                4. If you don't know the answer, politely suggest they contact the IJCC office directly via the /contact page.
                5. Do not make up facts about the organization.`,
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

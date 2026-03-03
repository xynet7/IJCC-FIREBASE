
'use server';
/**
 * @fileOverview A site assistant AI agent for the IJCC website.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { SiteAssistantOutputSchema, type SiteAssistantOutput } from '@/lib/definitions';

/**
 * Handles user queries about the IJCC website.
 * @param prompt The user's input string.
 * @returns A structured response containing text and optional navigation data.
 */
export async function askSiteAssistant(prompt: string): Promise<SiteAssistantOutput> {
    // Check for API key at runtime
    if (!process.env.GEMINI_API_KEY) {
        console.error("CRITICAL: GEMINI_API_KEY is not set in the environment.");
        return {
            responseText: "The AI assistant is currently offline because the API key is not configured.",
        };
    }

    try {
        // Using ai.generate with strict output schema
        const { output } = await ai.generate({
            model: 'googleai/gemini-1.5-flash',
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
                5. IMPORTANT: You must return valid JSON that matches the output schema.`,
            prompt: prompt,
            output: { schema: SiteAssistantOutputSchema },
        });

        if (!output) {
            return {
                responseText: "I'm sorry, I couldn't process that request right now. How else can I help?",
            };
        }

        return output;
    } catch (error: any) {
        console.error("Chatbot Flow Error:", error);
        
        // Handle specific safety or rate limit errors
        if (error.message?.includes('SAFETY')) {
            return { responseText: "I'm sorry, but I can't answer that question due to safety guidelines." };
        }
        
        // Fallback response
        return {
             responseText: "I encountered a technical glitch while thinking. Could you please try rephrasing your question?",
        };
    }
}

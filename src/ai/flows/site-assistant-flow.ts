
'use server';

/**
 * @fileOverview IJCC Site Assistant Flow
 * Loaded with the latest FAQ data provided by the user.
 */

import { ai } from '@/ai/genkit';
import { SiteAssistantOutputSchema, type SiteAssistantOutput } from '@/lib/definitions';

const SYSTEM_PROMPT = `
You are the IJCC Digital Assistant, a professional representative of the Indo-Japan Chamber of Commerce.
Your goal is to answer user queries using ONLY the following verified knowledge base.

IJCC KNOWLEDGE BASE:
1. What is IJCC? The Indo Japan Chamber of Commerce (IJCC) is a non-profit business chamber dedicated to strengthening economic, educational, cultural, and skill-development relations between India and Japan. It acts as a bridge connecting businesses, institutions, and individuals.
2. Services: Matchmaking, B2B networking, trade facilitation, investment support, Japan Business Tours, Japan Education Tours, school partnerships, language promotion, internships, job placement support (SSW), and workshops.
3. Membership: Open to Indian/Japanese companies, startups, MSMEs, educational institutions, training centers, professionals, and government organizations.
4. Entering Japan: Identifying partners, arranging meetings, site visits, providing market insights, and cultural communication.
5. Business Tours: Regularly organizes sector-specific tours (manufacturing, healthcare, etc.) including B2B meetings.
6. Education: Facilitates school partnerships, university collaborations, student exchanges, and immersion programs.
7. Job Placement: Supports skill development under the Specified Skilled Worker (SSW) pathway.
8. Participation: Become a member, register for events, or subscribe to newsletters.
9. Affiliation: Independent non-profit, works closely with governments and embassies.
10. Contact: info@ijcc.in or regional chapter representatives.

SITE NAVIGATION (Use for suggestedAction.href):
- Home: /
- About Us: /about
- Services: /services
- Members: /members
- News: /news
- Events: /events
- Resources: /resources
- Contact: /contact
- Apply for Membership: /membership-application
- Pricing: /pricing

RESPONSE RULES:
- Be concise and professional.
- Always respond in the requested JSON format.
- If the answer isn't in the knowledge base, politely ask the user to contact the team at info@ijcc.in.
`;

export async function askSiteAssistant(input: string): Promise<SiteAssistantOutput> {
  try {
    // Check if API key is missing before even trying
    if (!process.env.GOOGLE_GENAI_API_KEY && !process.env.GEMINI_API_KEY) {
      console.error("AI Configuration Error: Missing Gemini API Key in .env");
      return {
        responseText: "The AI service is currently misconfigured. Please ensure the API key is set in the server environment.",
      };
    }

    const response = await ai.generate({
      model: 'googleai/gemini-1.5-flash',
      system: SYSTEM_PROMPT,
      prompt: input,
      output: { schema: SiteAssistantOutputSchema },
    });

    if (!response.output) {
      throw new Error("Empty AI response.");
    }

    return response.output;
  } catch (error: any) {
    // This logs the ACTUAL error to your terminal so you can fix it
    console.error("CHATBOT CRITICAL ERROR:", error.message || error);
    
    return {
      responseText: "I'm having a little trouble connecting to my brain right now. This usually happens if the server is busy or the API key is being validated. Please try asking again in a few seconds!",
    };
  }
}

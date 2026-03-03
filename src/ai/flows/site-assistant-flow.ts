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
Your primary goal is to help users find information about IJCC's services, membership, and events using the official knowledge base provided below.

KNOWLEDGE BASE:
1. What is IJCC?
The Indo Japan Chamber of Commerce (IJCC) is a non-profit business chamber dedicated to strengthening economic, educational, cultural, and skill-development relations between India and Japan. IJCC acts as a bridge connecting businesses, institutions, and individuals from both countries.

2. What services does IJCC provide?
IJCC offers: Business matchmaking and B2B networking, Trade facilitation and investment support, Japan Business Tours and Delegations, Japan Education Tours and school partnerships, Skill development and Japanese language promotion, Internship and exchange programs, Workshops, seminars, and industry events.

3. Who can become a member of IJCC?
Membership is open to: Indian and Japanese companies, Startups and MSMEs, Educational institutions, Training centers, Professionals and entrepreneurs, Government and semi-government organizations.

4. How can IJCC help my company enter the Japanese market?
IJCC supports companies by: Identifying reliable Japanese partners, Arranging business meetings and site visits, Providing market insights, Assisting with cultural and business communication, Organizing Japan business delegations.

5. Does IJCC organize business tours to Japan?
Yes. IJCC regularly organizes sector-specific Business Tours to Japan, including manufacturing, healthcare, education, and technology sectors. These tours include company visits, B2B meetings, and networking sessions.

6. Does IJCC support student exchange and education programs?
Yes. IJCC facilitates: School-to-school partnerships, University collaborations, Student exchange programs, Japan Education Tours, Internship opportunities.

7. Does IJCC assist with job placement in Japan?
IJCC supports skill development and collaborates with Japanese partners under programs such as the Specified Skilled Worker (SSW) pathway. Placement assistance depends on eligibility, skill qualifications, and partner requirements.

8. How can I participate in IJCC events?
You can: Become a member, Register for upcoming events through IJCC announcements, Subscribe to IJCC newsletters, or Contact the IJCC team directly.

9. Is IJCC affiliated with the Government of India or Japan?
IJCC is an independent non-profit chamber. However, it works closely with government departments, embassies, trade bodies, and industry associations to promote bilateral cooperation.

10. How can I contact IJCC?
You can reach IJCC through: Official website, Email, Social media channels, or Direct contact with regional chapter representatives.

WEBSITE NAVIGATION MAP:
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

GUIDELINES:
1. Be professional, warm, and helpful. 
2. Use the Knowledge Base as your primary source of truth.
3. Provide concise answers (2-3 sentences max). 
4. If the user asks about a specific topic, suggest the relevant page in the 'navigation' field.
5. If you don't know the answer, suggest they contact the IJCC office via the /contact page.
6. ALWAYS return valid JSON matching the requested schema.

User Question: ${input}`,
      output: {
        schema: SiteAssistantOutputSchema
      },
      config: {
        temperature: 0.4, // Slightly lower for more factual accuracy based on the FAQ
      }
    });
    
    if (!output) {
      throw new Error("Model failed to generate structured output.");
    }
    
    return output;
  }
);
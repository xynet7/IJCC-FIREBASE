'use server';
/**
 * @fileOverview AI-powered content recommendations for members.
 *
 * - recommendContent - A function that generates personalized content recommendations.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  memberInterests: z
    .string()
    .describe('A comma-separated list of the member\'s interests.'),
  memberIndustry: z.string().describe('The industry of the member.'),
  recentActivity: z
    .string()
    .describe(
      'A summary of the member\'s recent activity on the platform, such as events attended, articles read, and resources downloaded.'
    ),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  eventRecommendations: z.array(
    z.string().describe('Recommended events for the member.')
  ),
  articleRecommendations: z.array(
    z.string().describe('Recommended articles for the member.')
  ),
  resourceRecommendations: z.array(
    z.string().describe('Recommended resources for the member.')
  ),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(
  input: RecommendContentInput
): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are an AI assistant that provides personalized content recommendations for members of the Indo-Japan Chamber Hub.

  Based on the member's interests, industry, and recent activity, recommend relevant events, articles, and resources. Provide a detailed explanation on why each recommendation is made.

  Member Interests: {{{memberInterests}}}
  Member Industry: {{{memberIndustry}}}
  Recent Activity: {{{recentActivity}}}

  Recommendations:
  `,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

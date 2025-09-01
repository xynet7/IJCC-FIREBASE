"use client";

import { useState } from 'react';
import { getRecommendations } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Loader2, Wand2 } from 'lucide-react';
import type { RecommendContentOutput } from '@/ai/flows/personalized-content-recommendations';

export function RecommendationGenerator() {
  const [interests, setInterests] = useState('Technology, Automotive');
  const [industry, setIndustry] = useState('IT & Software');
  const [recommendations, setRecommendations] = useState<RecommendContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRecommendations(null);
    const result = await getRecommendations(interests, industry);
    setRecommendations(result);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Personalized Content Recommendations</CardTitle>
          <CardDescription>Enter your interests and industry to get AI-powered recommendations.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="interests">Your Interests</Label>
                <Input
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., Technology, Trade, Culture"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Your Industry</Label>
                <Input
                  id="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Manufacturing, Finance"
                  required
                />
              </div>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Get Recommendations
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center p-8">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground mt-2">Our AI is curating content for you...</p>
        </div>
      )}

      {recommendations && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue="events">
              <AccordionItem value="events">
                <AccordionTrigger>Event Recommendations</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {recommendations.eventRecommendations.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="articles">
                <AccordionTrigger>Article Recommendations</AccordionTrigger>
                <AccordionContent>
                   <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {recommendations.articleRecommendations.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="resources">
                <AccordionTrigger>Resource Recommendations</AccordionTrigger>
                <AccordionContent>
                   <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {recommendations.resourceRecommendations.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

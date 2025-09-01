"use client";

import { useState } from 'react';
import { getMeetingSummary } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';

export function SummaryGenerator() {
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSummary('');
    const result = await getMeetingSummary(transcript);
    if (result) {
      setSummary(result.summary);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Paste your full meeting transcript here..."
              className="min-h-[200px]"
              required
            />
            <Button type="submit" disabled={isLoading || !transcript} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Summarizing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Summary
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {(isLoading || summary) && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center p-8">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground mt-2">The AI is processing the transcript...</p>
              </div>
            ) : (
              <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

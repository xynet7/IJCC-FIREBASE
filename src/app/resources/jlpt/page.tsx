"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const jlptLevels = [
  { level: "N1", description: "The most advanced level, requiring a deep understanding of Japanese used in a broad range of circumstances." },
  { level: "N2", description: "The ability to understand Japanese used in everyday situations and in a variety of circumstances to a certain degree." },
  { level: "N3", description: "The ability to understand Japanese used in everyday situations to a certain degree." },
  { level: "N4", description: "The ability to understand basic Japanese." },
  { level: "N5", description: "The ability to understand some basic Japanese." },
];

export default function JlptPage() {
  const { toast } = useToast();

  const handleDownload = (level: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${level} question papers... (This is a demo)`,
    });
  };

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">JLPT Previous Year Question Papers</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Download past papers to prepare for the Japanese-Language Proficiency Test.
        </p>
      </div>

      <div className="space-y-8">
        {jlptLevels.map((item) => (
          <Card key={item.level}>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">{item.level}</CardTitle>
              <CardDescription className="text-lg">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This section contains sample question papers from previous years. Please note these are for practice purposes only.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleDownload(item.level)}>
                <Download className="mr-2 h-4 w-4" />
                Download {item.level} Papers
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}


"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const resources = [
    { 
      title: "Lets Learn Japanese - Vol 1 PDF", 
      description: "The downloadable PDF coursebook for the first volume of the 'Lets Learn Japanese' series.",
      file: "https://jumpshare.com/share/hl8x1mh8XIANZnyigTWA", 
      isExternal: true,
      buttonText: "Download PDF"
    },
    { 
      title: "Lets Learn Japanese - Vol 2 PDF", 
      description: "The downloadable PDF coursebook for the second volume of the 'Lets Learn Japanese' series.",
      file: "https://jumpshare.com/share/7oDaV9tFLionMvWA4b5t", 
      isExternal: true,
      buttonText: "Download PDF"
    },
    { 
      title: "Lets Learn Japanese - Vol 3 PDF", 
      description: "The downloadable PDF coursebook for the third volume of the 'Lets Learn Japanese' series.",
      file: "https://jumpshare.com/share/GpVBcssuUkIOo1n0jgLY", 
      isExternal: true,
      buttonText: "Download PDF"
    },
];

export default function LetsLearnJapanesePage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Lets Learn Japanese</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Free resources provided by The Japan Foundation to start your language journey.
        </p>
      </div>

      <div className="space-y-8">
        {resources.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              <CardDescription className="text-lg">{item.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild>
                    <Link href={item.file} target="_blank" rel="noopener noreferrer">
                        {item.buttonText === "Download PDF" ? <Download className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                        {item.buttonText}
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

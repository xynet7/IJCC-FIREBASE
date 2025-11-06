"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const resources: any[] = [
    // Future lesson links will be added here
];

export default function JapanFoundationLessonsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Japan Foundation Lessons</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Explore lessons and materials from The Japan Foundation.
        </p>
      </div>

        {resources.length > 0 ? (
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
                            {item.isExternal ? <ExternalLink className="mr-2 h-4 w-4" /> : <Download className="mr-2 h-4 w-4" />}
                            {item.buttonText || "Access Resource"}
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
            <div className="text-center py-16 border rounded-lg bg-secondary/50 mt-8">
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground mt-2">Lessons and resources will be added here shortly.</p>
            </div>
        )}
    </div>
  );
}

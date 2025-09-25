
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const marugotoBooks = [
  { level: "A1", title: "Marugoto A1 (Starter)", description: "For beginners starting their Japanese journey. Covers basic greetings, self-introduction, and simple daily conversations.", file: "https://drive.google.com/drive/folders/15g3FqaqVf0p-y1i5yJz-Uu-k-F2zD1kQ?usp=drive_link", isExternal: true },
  { level: "A2", title: "Marugoto A2 (Elementary)", description: "Builds on A1, focusing on comprehension and conversation for everyday situations.", file: "https://drive.google.com/drive/folders/1uHJAiS5n9tqX8vVb-u-4G-kYy1w-o5gG?usp=drive_link", isExternal: true },
  { level: "A2/B1", title: "Marugoto A2/B1 (Pre-Intermediate)", description: "Bridges the gap between elementary and intermediate levels, enhancing communication skills.", file: "https://drive.google.com/drive/folders/1w3q-s3X-e2S-p9y-Y3xO-gK-kY-p7qYx?usp=drive_link", isExternal: true },
  { level: "B1", title: "Marugoto B1 (Intermediate)", description: "Aims to develop the ability to communicate in a broader range of situations.", file: "https://drive.google.com/drive/folders/1D8E-n2S-p9q-v9z-u1S-j-X9-gJ-z9bB?usp=drive_link", isExternal: true },
];

export default function MarugotoBooksPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Marugoto Books</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Download the Marugoto series books for comprehensive Japanese language learning, aligned with the JF Standard for Japanese-Language Education.
        </p>
      </div>

      <div className="space-y-8">
        {marugotoBooks.map((item) => (
          <Card key={item.level}>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">{item.title}</CardTitle>
              <CardDescription className="text-lg">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Access the coursebook and workbook for the {item.level} level.</p>
            </CardContent>
            <CardFooter>
                {item.isExternal ? (
                  <Button asChild>
                    <Link href={item.file} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access {item.level} Books
                    </Link>
                  </Button>
                ) : (
                  <Button asChild>
                    <Link href={item.file} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download {item.level} Books
                    </Link>
                  </Button>
                )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

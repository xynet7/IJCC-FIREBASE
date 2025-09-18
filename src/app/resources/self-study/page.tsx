
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const selfStudyResources = [
  {
    title: "NHK News Web Easy",
    description: "Practice reading Japanese with simplified news articles from NHK. Articles include furigana and a dictionary.",
    href: "https://www3.nhk.or.jp/news/easy/",
    hint: "news website",
  },
  {
    title: "Tae Kim's Guide to Learning Japanese",
    description: "A comprehensive online grammar guide that explains Japanese in a logical, intuitive way.",
    href: "http://www.guidetojapanese.org/learn/grammar",
    hint: "grammar guide",
  },
  {
    title: "Jisho.org",
    description: "A powerful and user-friendly Japanese-English dictionary. Search by English, Japanese, or radicals.",
    href: "https://jisho.org/",
    hint: "online dictionary",
  },
  {
    title: "Erin's Challenge! I Can Speak Japanese",
    description: "A free website for learning Japanese from the Japan Foundation, featuring videos and skits.",
    href: "https://www.erin.jpf.go.jp/en/",
    hint: "language learning",
  },
];

export default function SelfStudyPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Self Study Resources</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          A curated list of external resources to help you learn Japanese at your own pace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selfStudyResources.map((resource) => (
          <Card key={resource.title}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild>
                    <Link href={resource.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}


import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const newsArticles = [
  {
    title: "Mela Mela Anime Japan returns with double the Japanese content in Delhi",
    date: "2025-09-02",
    description: "The popular Anime and Japanese cultural festival, 'Mela Mela Anime Japan,' is set to return to New Delhi, promising an even bigger and more immersive experience for fans.",
    imageUrl: "https://www.asiancommunitynews.com/wp-content/uploads/2024/05/1-Copy-1-716x430.jpg",
    hint: "anime festival",
    href: "https://www.asiancommunitynews.com/mela-mela-anime-japan-returns-with-double-the-japanese-content-in-delhi/",
  },
  {
    title: "Japanese autumn ‘Matsuri’ Utsav brings authentic Japanese experience in Gurugram on Oct 11",
    date: "2025-09-16",
    description: "Gurugram witnessed a slice of Japan as the AJU Japanese hotel, in association with the Indo-Japan Chamber of Commerce (IJCC) and other Japanese organizations, hosted the ‘Matsuri’ Utsav.",
    imageUrl: "https://www.asiancommunitynews.com/wp-content/uploads/2024/10/Matsuri-Utsav-Gurugram-750x430.jpg",
    hint: "japan festival",
    href: "https://www.asiancommunitynews.com/japanese-autumn-matsuri-utsav-brings-authentic-japanese-experience-in-gurugram-on-oct-11/",
  },
  {
    title: "IJCCI, AIMA Forge Strategic Partnership to Boost Indo-Japanese SME, Edn, and Biz Collaboration",
    date: "2025-06-12",
    description: "The Indo-Japan Chamber of Commerce and Industry (IJCCI) and the All India Management Association (AIMA) have signed an MoU to foster collaboration between Indian and Japanese SMEs, educational institutions, and businesses.",
    imageUrl: "https://www.asiancommunitynews.com/wp-content/uploads/2025/06/WhatsAppImage2025-06-11at20.09.40_ac1afede-750x430.jpg",
    hint: "business meeting",
    href: "https://www.asiancommunitynews.com/ijcci-aima-forge-strategic-partnership-to-boost-indo-japanese-sme-edn-and-biz-collaboration/",
  },
];

export default function NewsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Latest News</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Stay informed with the latest updates on Indo-Japan business and cultural relations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={750}
                  height={430}
                  className="rounded-t-lg object-cover"
                  data-ai-hint={article.hint}
                />
              </div>
              <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              <CardDescription className="pt-2">{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={article.href} target="_blank" rel="noopener noreferrer">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

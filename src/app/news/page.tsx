
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Trophy } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

const newsArticlesData = [
  {
    id: "spolto-jv",
    date: "2025-03-10",
    imageUrl: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000",
    hint: "sports coaching",
    href: "/news/ijcc-x-spolto",
    isSpecial: true,
  },
  {
    id: 1,
    date: "2025-09-02",
    imageUrl: "https://www.asiancommunitynews.com/wp-content/uploads/2024/05/1-Copy-1-716x430.jpg",
    hint: "anime festival",
    href: "https://www.asiancommunitynews.com/mela-mela-anime-japan-returns-with-double-the-japanese-content-in-delhi/",
  },
  {
    id: 2,
    date: "2025-09-16",
    imageUrl: "https://www.asiancommunitynews.com/wp-content/uploads/2025/09/AJUMATSURI-Copy-750x430.jpg",
    hint: "japan festival",
    href: "https://www.asiancommunitynews.com/japanese-autumn-matsuri-utsav-brings-authentic-japanese-experience-in-gurugram-on-oct-11/",
  },
];

export default function NewsPage() {
  const { t } = useTranslation();

  const newsArticles = newsArticlesData.map(article => ({
    ...article,
    title: t(`news_article_${article.id}_title`),
    description: t(`news_article_${article.id}_description`),
  }));

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">{t('news_title')}</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          {t('news_description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <Card key={article.id} className={cn("flex flex-col relative overflow-hidden", article.isSpecial && "border-primary ring-1 ring-primary/20")}>
            {article.isSpecial && (
              <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Trophy className="h-3 w-3" /> FEATURED
              </div>
            )}
            <CardHeader>
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={750}
                  height={430}
                  className="rounded-t-lg object-cover transition-transform duration-500 hover:scale-110"
                  data-ai-hint={article.hint}
                />
              </div>
              <CardTitle className="font-headline text-xl leading-tight hover:text-primary transition-colors">
                <Link href={article.href || "#"}>{article.title}</Link>
              </CardTitle>
               <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              <CardDescription className="pt-2 line-clamp-3">{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button asChild variant={article.isSpecial ? "default" : "outline"} className="w-full">
                <Link href={article.href} target={article.href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                  {t('news_readMoreButton')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

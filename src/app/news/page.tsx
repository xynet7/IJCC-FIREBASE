
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const newsArticles = [
  {
    title: "Japan Invites Indian Researchers for Scientific Research & Innovation",
    date: "2024-09-20",
    description: "The Japanese government has launched a new initiative to attract Indian researchers and scientists to collaborate on cutting-edge scientific and technological projects, strengthening bilateral ties in innovation.",
    imageUrl: "https://picsum.photos/400/250",
    hint: "science laboratory",
    href: "https://www.asiancommunitynews.com/japan-invites-indian-researchers-to-conduct-scientific-research-innovation/",
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
                  fill
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

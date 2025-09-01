
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const newsArticles = [
  {
    title: "New Trade Agreement to Boost Auto Parts Exports",
    date: "2024-09-15",
    description: "A landmark trade agreement signed this week is expected to significantly boost the export of automobile components from India to Japan.",
    imageUrl: "https://picsum.photos/400/250",
    hint: "automotive factory",
    href: "#",
  },
  {
    title: "IT Collaboration Forum in Kyoto a Major Success",
    date: "2024-09-12",
    description: "The annual Indo-Japan IT Collaboration Forum concluded in Kyoto, with several key partnerships and MoUs being signed.",
    imageUrl: "https://picsum.photos/400/251",
    hint: "tech conference",
    href: "#",
  },
  {
    title: "Cultural Festival Celebrates Deep Ties Between Nations",
    date: "2024-09-10",
    description: "A week-long cultural festival in Delhi showcased the rich heritage of both India and Japan, drawing large crowds and strengthening cultural bonds.",
    imageUrl: "https://picsum.photos/400/252",
    hint: "cultural festival",
    href: "#",
  },
   {
    title: "Pharmaceutical Joint Venture Announced",
    date: "2024-09-08",
    description: "A leading Indian pharmaceutical company has announced a joint venture with a Japanese firm to develop new drugs for tropical diseases.",
    imageUrl: "https://picsum.photos/400/253",
    hint: "science laboratory",
    href: "#",
  },
  {
    title: "Renewable Energy Projects Gain Momentum",
    date: "2024-09-05",
    description: "Japanese investment in Indian renewable energy projects has surged, with a focus on solar and wind power generation.",
    imageUrl: "https://picsum.photos/400/254",
    hint: "solar panels",
    href: "#",
  },
  {
    title: "Food Processing Sector Sees Increased Collaboration",
    date: "2024-09-02",
    description: "The food processing industries of both countries are exploring new collaborations to enhance food safety and supply chain efficiency.",
    imageUrl: "https://picsum.photos/400/255",
    hint: "food factory",
    href: "#",
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
                <Link href={article.href}>
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

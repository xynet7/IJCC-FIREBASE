"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, Presentation, BarChart } from "lucide-react";

const resources = [
  {
    title: "Guide to Doing Business in Japan",
    description: "A comprehensive guide covering legal, cultural, and business etiquette for entering the Japanese market.",
    type: "Document",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    title: "Previous year JLPT Question Papers",
    description: "All level JLPT Question Papers of last 10 years.",
    type: "Report",
    icon: <BarChart className="h-8 w-8 text-primary" />,
  },
  {
    title: "Cross-Cultural Communication Workshop",
    description: "Presentation slides from our recent workshop on effective cross-cultural communication.",
    type: "Presentation",
    icon: <Presentation className="h-8 w-8 text-primary" />,
  },
  {
    title: "Import/Export Checklist",
    description: "A practical checklist for members involved in trade between India and Japan.",
    type: "Document",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
];

export default function ResourcesPage() {
  const { toast } = useToast();

  const handleDownload = (resourceTitle: string) => {
    toast({
      title: "Download Started",
      description: `Downloading "${resourceTitle}"... (This is a demo)`,
    });
  };

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Resource Library</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Access our curated collection of valuable documents, reports, and presentations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.title} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
            <CardHeader>
              {resource.icon}
              <CardTitle className="font-headline mt-4">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => handleDownload(resource.title)}>
                <Download className="mr-2 h-4 w-4" />
                Download {resource.type}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

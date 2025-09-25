
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, Presentation, BarChart, ArrowRight, BookOpen, Sparkles, Lock } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useEffect, useState } from "react";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";

const allResources = [
  {
    title: "Guide to Doing Business in Japan",
    description: "A comprehensive guide covering legal, cultural, and business etiquette for entering the Japanese market.",
    type: "Document",
    icon: <FileText className="h-8 w-8 text-primary" />,
    isLink: true,
    href: "https://guide-to-japanese-business.tiiny.site",
    isProtected: true,
  },
  {
    title: "Previous year JLPT Question Papers",
    description: "All level JLPT Question Papers of last 10 years.",
    type: "Document",
    icon: <BarChart className="h-8 w-8 text-primary" />,
    isLink: true,
    href: "/resources/jlpt",
    isProtected: false,
  },
  {
    title: "Monthly Magazines",
    description: "Read our monthly magazines for the latest insights.",
    type: "Magazine",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    isLink: true,
    href: "/resources/magazines",
    isProtected: true,
  },
  {
    title: "Self Study Materials",
    description: "Curated materials for self-paced learning about Japanese language and culture.",
    type: "Self Study",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    isLink: true,
    href: "/resources/self-study",
    isProtected: false,
  },
  {
    title: "Marugoto Books",
    description: "Download Marugoto series books for different levels of Japanese language learning.",
    type: "Books",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    isLink: true,
    href: "/resources/marugoto-books",
    isProtected: true,
  },
  {
    title: "Cross-Cultural Communication Workshop",
    description: "Presentation slides from our recent workshop on effective cross-cultural communication.",
    type: "Presentation",
    icon: <Presentation className="h-8 w-8 text-primary" />,
    isLink: false,
    href: "#",
    isProtected: true,
  },
  {
    title: "Import/Export Checklist",
    description: "A practical checklist for members involved in trade between India and Japan.",
    type: "Document",
    icon: <FileText className="h-8 w-8 text-primary" />,
    isLink: false,
    href: "#",
    isProtected: true,
  },
];

export default function ResourcesPage() {
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<DocumentData | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setLoadingProfile(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoadingProfile(false);
      }
    };

    fetchProfile();
  }, [user, authLoading]);

  const hasMembership = profile?.membershipTier && profile.membershipTier !== "none";

  const handleDownload = (resourceTitle: string) => {
    toast({
      title: "Download Started",
      description: `Downloading "${resourceTitle}"... (This is a demo)`,
    });
  };

  const handleProtectedClick = () => {
      toast({
          variant: "destructive",
          title: "Access Denied",
          description: "This resource is for members only. Please log in and ensure you have an active membership.",
      });
  };

  const isLoading = authLoading || loadingProfile;

  const visibleResources = allResources.filter(resource => {
      if (!resource.isProtected) return true;
      return hasMembership;
  });

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Resource Library</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Access our curated collection of valuable documents, reports, and presentations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-3/4 mt-4" />
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-1/2 mt-1" />
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          : allResources.map((resource) => {
              const isAccessible = !resource.isProtected || hasMembership;
              return (
                <Card key={resource.title} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader>
                    {resource.icon}
                    <CardTitle className="font-headline mt-4">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" />
                  <CardFooter>
                    {isAccessible ? (
                      resource.isLink ? (
                         <Button asChild variant="outline" className="w-full rounded-full">
                          <Link href={resource.href!} target={resource.href?.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                            {resource.href?.startsWith('http') ? <Download className="mr-2 h-4 w-4" /> : <ArrowRight className="mr-2 h-4 w-4" />}
                            {resource.href?.startsWith('http') ? `Download ${resource.type}` : `Access ${resource.type}`}
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full rounded-full" onClick={() => handleDownload(resource.title)}>
                          <Download className="mr-2 h-4 w-4" />
                          Download {resource.type}
                        </Button>
                      )
                    ) : (
                        <Button variant="outline" className="w-full rounded-full" onClick={handleProtectedClick}>
                            <Lock className="mr-2 h-4 w-4" />
                            Members Only
                        </Button>
                    )}
                  </CardFooter>
                </Card>
              );
        })}
      </div>
    </div>
  );
}

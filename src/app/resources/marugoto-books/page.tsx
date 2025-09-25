
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useEffect, useState } from "react";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const marugotoBooks = [
  { level: "A1", title: "Marugoto A1 (Starter)", description: "For beginners starting their Japanese journey. Covers basic greetings, self-introduction, and simple daily conversations.", file: "https://drive.google.com/drive/folders/15g3FqaqVf0p-y1i5yJz-Uu-k-F2zD1kQ?usp=drive_link", isExternal: true },
  { level: "A2", title: "Marugoto A2 (Elementary)", description: "Builds on A1, focusing on comprehension and conversation for everyday situations.", file: "https://drive.google.com/drive/folders/1uHJAiS5n9tqX8vVb-u-4G-kYy1w-o5gG?usp=drive_link", isExternal: true },
  { level: "A2/B1", title: "Marugoto A2/B1 (Pre-Intermediate)", description: "Bridges the gap between elementary and intermediate levels, enhancing communication skills.", file: "https://drive.google.com/drive/folders/1w3q-s3X-e2S-p9y-Y3xO-gK-kY-p7qYx?usp=drive_link", isExternal: true },
  { level: "B1", title: "Marugoto B1 (Intermediate)", description: "Aims to develop the ability to communicate in a broader range of situations.", file: "https://drive.google.com/drive/folders/1D8E-n2S-p9q-v9z-u1S-j-X9-gJ-z9bB?usp=drive_link", isExternal: true },
];

export default function MarugotoBooksPage() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<DocumentData | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const { toast } = useToast();

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
  const isLoading = authLoading || loadingProfile;

  if (isLoading) {
    return (
      <div className="container py-12">
         <div className="space-y-4 mb-12 text-center">
          <Skeleton className="h-10 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="space-y-8">
            {[...Array(4)].map((_, i) => (
                <Card key={i}>
                    <CardHeader>
                        <Skeleton className="h-8 w-1/4" />
                        <Skeleton className="h-5 w-3/4 mt-2" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-full" />
                    </CardContent>
                    <CardFooter>
                        <Skeleton className="h-10 w-48" />
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    );
  }

  if (!hasMembership) {
    return (
      <div className="container py-12 text-center">
        <Lock className="h-16 w-16 mx-auto text-muted-foreground" />
        <h1 className="text-3xl font-headline mt-6">Access Denied</h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          This resource is exclusive to our members. Please log in and ensure you have an active membership to access the Marugoto books.
        </p>
        <Button asChild className="mt-8">
          <Link href={user ? "/pricing" : "/login"}>{user ? "Upgrade Membership" : "Login or Sign Up"}</Link>
        </Button>
      </div>
    );
  }
  
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

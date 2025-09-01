"use client";

import { RecommendationGenerator } from "@/components/recommendation-generator";
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="container py-12">
        <div className="space-y-4 mb-12 text-center">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
            <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Welcome, {user?.name}!</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Your personalized hub for curated content and recommendations.
        </p>
      </div>
      <RecommendationGenerator />
    </div>
  );
}
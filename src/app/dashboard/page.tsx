import { RecommendationGenerator } from "@/components/recommendation-generator";

export default function DashboardPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Member Dashboard</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Your personalized hub for curated content and recommendations.
        </p>
      </div>
      <RecommendationGenerator />
    </div>
  );
}

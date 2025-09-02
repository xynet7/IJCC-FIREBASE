
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Handshake, School, Plane, Library, Lightbulb, Briefcase, Users, Building, Target, Zap } from "lucide-react";

const indianServices = {
  title: "For Indian SMEs, MSMEs, Startups & Entrepreneurs",
  categories: [
    {
      title: "Business Matchmaking & Market Access",
      icon: <Handshake className="h-8 w-8 text-primary" />,
      points: [
        "Introduce Indian companies to potential Japanese partners, distributors, and investors.",
        "Facilitate joint ventures, technology transfer, and co-innovation projects.",
      ],
    },
    {
      title: "Capacity Building & Training",
      icon: <School className="h-8 w-8 text-primary" />,
      points: [
        "Workshops on Japanese management practices (Kaizen, Lean, TQM, Monozukuri).",
        "Training in Japanese language, culture, and business etiquette.",
        "Sector-specific programs (manufacturing, IT, healthcare, energy, food processing, etc.).",
      ],
    },
    {
      title: "Delegations & Exposure Visits",
      icon: <Plane className="h-8 w-8 text-primary" />,
      points: [
        "Organize business delegations to Japan for factory visits, B2B meetings, and trade fairs.",
        "Host Japanese delegations in India for local networking and site visits.",
      ],
    },
    {
      title: "Advisory & Consulting",
      icon: <Library className="h-8 w-8 text-primary" />,
      points: [
        "Guidance on entering the Japanese market (legal, compliance, certification, packaging standards).",
        "Assistance with exports/imports, IPR, and government schemes.",
      ],
    },
    {
      title: "Startup & Innovation Support",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      points: [
        "Access to Japanese startup ecosystems, incubators, and VCs.",
        "Joint hackathons, accelerator tie-ups, and pilot projects with Japanese firms.",
      ],
    },
  ],
};

const japaneseServices = {
  title: "For Japanese Companies",
  categories: [
    {
      title: "India Market Entry Support",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      points: [
        "Market research, sector analysis, and partner identification.",
        "Assistance in navigating Indian regulatory frameworks and government connect.",
      ],
    },
    {
      title: "Business Development & Localization",
      icon: <Users className="h-8 w-8 text-primary" />,
      points: [
        "Matchmaking with reliable Indian SMEs/MSMEs for suppliers, distributors, or JV partners.",
        "Cultural orientation and training for Japanese managers working in India.",
      ],
    },
    {
      title: "Delegations & B2B Engagement",
      icon: <Building className="h-8 w-8 text-primary" />,
      points: [
        "Organize inbound business delegations to India (factories, industrial clusters, government meetings).",
        "Curate one-to-one meetings with Indian entrepreneurs and startups.",
      ],
    },
    {
      title: "Talent & Skills Development",
      icon: <Target className="h-8 w-8 text-primary" />,
      points: [
        "Support in recruitment of skilled Indian talent for Japanese companies (including SSW/TITP programs).",
        "Facilitate internships, exchange programs, and training initiatives.",
      ],
    },
    {
      title: "Innovation & Technology Collaboration",
      icon: <Zap className="h-8 w-8 text-primary" />,
      points: [
        "Co-development of products/solutions with Indian startups.",
        "Partnerships in sectors like EVs, AI, robotics, agritech, healthcare, and clean energy.",
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          We offer a range of services to facilitate trade and investment between India and Japan.
        </p>
      </div>

      <div className="space-y-12">
        <Card className="p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">{indianServices.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue={indianServices.categories[0].title}>
              {indianServices.categories.map((category) => (
                <AccordionItem value={category.title} key={category.title}>
                  <AccordionTrigger className="text-xl font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                      {category.icon}
                      {category.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pl-12">
                    <ul className="list-disc space-y-2 text-muted-foreground">
                      {category.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">{japaneseServices.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue={japaneseServices.categories[0].title}>
              {japaneseServices.categories.map((category) => (
                <AccordionItem value={category.title} key={category.title}>
                  <AccordionTrigger className="text-xl font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                      {category.icon}
                      {category.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pl-12">
                    <ul className="list-disc space-y-2 text-muted-foreground">
                      {category.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

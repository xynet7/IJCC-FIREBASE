
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, DraftingCompass } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
    title: "Business Matching",
    description: "We connect Indian and Japanese companies, creating opportunities for partnerships, joint ventures, and trade. Our extensive network helps you find the right business partners to achieve your goals."
  },
  {
    icon: <Building className="h-10 w-10 text-primary mb-4" />,
    title: "Market Entry Support",
    description: "We provide comprehensive support for companies looking to enter the Indian or Japanese market, including market research, legal and regulatory guidance, and strategic planning."
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary mb-4" />,
    title: "Trade Missions",
    description: "Join our organized trade missions to explore new markets, meet potential partners, and gain firsthand insights into the business environments of both countries."
  },
];


export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          We offer a range of services to facilitate trade and investment between India and Japan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="text-center">
            <CardHeader>
              {service.icon}
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

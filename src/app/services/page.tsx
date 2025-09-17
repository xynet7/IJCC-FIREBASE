

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Handshake, School, Lightbulb, Briefcase, Building, Landmark, Globe, Zap, University } from "lucide-react";
import Link from "next/link";

const servicesList = [
    {
      title: "Indian Schools",
      id: "indian-schools",
      icon: <School className="h-10 w-10 text-primary" />,
      description: "Strengthening educational and cultural ties between India and Japan for K-12 students and educators."
    },
    {
      title: "Indian Universities & College Students",
      id: "indian-universities",
      icon: <University className="h-10 w-10 text-primary" />,
      description: "Building academic, cultural, and professional bridges for higher education students in India."
    },
    {
      title: "Indian Businesses",
      id: "indian-smes",
      icon: <Handshake className="h-10 w-10 text-primary" />,
      description: "Support for Indian SMEs, MSMEs, startups, and entrepreneurs to engage with the Japanese market."
    },
    {
      title: "Japanese Businesses",
      id: "japanese-smes",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      description: "Support for Japanese SMEs, MSMEs, and startups to enter and grow in the Indian market."
    },
    {
      title: "Company Registration: Japanese Companies in India",
      id: "company-registration-jp-in",
      icon: <Building className="h-10 w-10 text-primary" />,
      description: "End-to-end support for Japanese companies establishing a legal presence in India."
    },
    {
      title: "Company Registration: Indian Companies in Japan",
      id: "company-registration-in-jp",
      icon: <Landmark className="h-10 w-10 text-primary" />,
      description: "Comprehensive assistance for Indian companies looking to register and operate in Japan."
    },
    {
      title: "Website Development & Digital Marketing",
      id: "digital-services",
      icon: <Globe className="h-10 w-10 text-primary" />,
      description: "Bilingual web development, branding, and digital marketing to succeed across borders."
    },
    {
      title: "IJCC Startup Support Services",
      id: "startup-support",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      description: "Fostering innovation and entrepreneurship by connecting startups with investors and markets."
    },
    {
      title: "Japanese Management Training",
      id: "management-training",
      icon: <Zap className="h-10 w-10 text-primary" />,
      description: "Equipping Indian businesses with the proven principles of Japanese management."
    },
];


export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          We offer a comprehensive suite of services to facilitate trade, education, and investment between India and Japan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map(service => (
            <Link href={`/services/${service.id}`} key={service.id}>
                <Card className="h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                    <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                            {service.icon}
                            <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                </Card>
            </Link>
        ))}
      </div>
    </div>
  );
}

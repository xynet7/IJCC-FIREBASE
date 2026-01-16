
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Handshake, School, Plane, Library, Lightbulb, Briefcase, Users, Building, Target, Zap, Scale, FileSignature, Landmark, Building2, Wallet, Users2, ConciergeBell, Globe, Megaphone, Palette, Sparkles, Award, University, GraduationCap } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "@/hooks/use-translation";
import { ReactNode } from "react";

type ServiceCategory = {
    titleKey: string;
    icon: ReactNode;
    points: ({ mainKey: string; subKeys?: string[] } | string)[];
};

type Service = {
    id: string;
    titleKey: string;
    descriptionKey: string;
    categories: ServiceCategory[];
};

const allServicesData = [
  {
    id: "indian-schools",
    categories: [
      {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        points: [
          "servicedetail_indian-schools_cat1_point1",
          "servicedetail_indian-schools_cat1_point2",
          "servicedetail_indian-schools_cat1_point3",
        ],
      },
      {
        icon: <Plane className="h-8 w-8 text-primary" />,
        points: [
          "servicedetail_indian-schools_cat2_point1",
          "servicedetail_indian-schools_cat2_point2",
          "servicedetail_indian-schools_cat2_point3",
        ],
      },
      {
        icon: <Globe className="h-8 w-8 text-primary" />,
        points: [
          "servicedetail_indian-schools_cat3_point1",
          "servicedetail_indian-schools_cat3_point2",
          "servicedetail_indian-schools_cat3_point3",
        ],
      },
      {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        points: [
          "servicedetail_indian-schools_cat4_point1",
          "servicedetail_indian-schools_cat4_point2",
          "servicedetail_indian-schools_cat4_point3",
        ],
      },
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        points: [
          "servicedetail_indian-schools_cat5_point1",
          "servicedetail_indian-schools_cat5_point2",
        ],
      },
      {
        icon: <Building2 className="h-8 w-8 text-primary" />,
        points: [
          "servicedetail_indian-schools_cat6_point1",
          "servicedetail_indian-schools_cat6_point2",
        ],
      },
    ],
  },
  {
    id: "indian-universities",
    categories: [
        { icon: <University className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat1_point1", "servicedetail_indian-universities_cat1_point2", "servicedetail_indian-universities_cat1_point3"] },
        { icon: <Plane className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat2_point1", "servicedetail_indian-universities_cat2_point2", "servicedetail_indian-universities_cat2_point3"] },
        { icon: <Globe className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat3_point1", "servicedetail_indian-universities_cat3_point2", "servicedetail_indian-universities_cat3_point3"] },
        { icon: <Briefcase className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat4_point1", "servicedetail_indian-universities_cat4_point2", "servicedetail_indian-universities_cat4_point3"] },
        { icon: <Zap className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat5_point1", "servicedetail_indian-universities_cat5_point2", "servicedetail_indian-universities_cat5_point3"] },
        { icon: <Users2 className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat6_point1", "servicedetail_indian-universities_cat6_point2", "servicedetail_indian-universities_cat6_point3"] },
        { icon: <Handshake className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-universities_cat7_point1", "servicedetail_indian-universities_cat7_point2"] },
    ],
  },
  {
    id: "indian-smes",
    categories: [
      { icon: <Handshake className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-smes_cat1_point1", "servicedetail_indian-smes_cat1_point2"] },
      { icon: <School className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-smes_cat2_point1", "servicedetail_indian-smes_cat2_point2", "servicedetail_indian-smes_cat2_point3"] },
      { icon: <Plane className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-smes_cat3_point1", "servicedetail_indian-smes_cat3_point2"] },
      { icon: <Library className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-smes_cat4_point1", "servicedetail_indian-smes_cat4_point2"] },
      { icon: <Lightbulb className="h-8 w-8 text-primary" />, points: ["servicedetail_indian-smes_cat5_point1", "servicedetail_indian-smes_cat5_point2"] },
    ],
  },
  {
    id: "japanese-smes",
    categories: [
      { icon: <Briefcase className="h-8 w-8 text-primary" />, points: ["servicedetail_japanese-smes_cat1_point1", "servicedetail_japanese-smes_cat1_point2"] },
      { icon: <Users className="h-8 w-8 text-primary" />, points: ["servicedetail_japanese-smes_cat2_point1", "servicedetail_japanese-smes_cat2_point2"] },
      { icon: <Building className="h-8 w-8 text-primary" />, points: ["servicedetail_japanese-smes_cat3_point1", "servicedetail_japanese-smes_cat3_point2"] },
      { icon: <Target className="h-8 w-8 text-primary" />, points: ["servicedetail_japanese-smes_cat4_point1", "servicedetail_japanese-smes_cat4_point2"] },
      { icon: <Zap className="h-8 w-8 text-primary" />, points: ["servicedetail_japanese-smes_cat5_point1", "servicedetail_japanese-smes_cat5_point2"] },
    ],
  },
  {
    id: "company-registration-jp-in",
    categories: [
      { icon: <Scale className="h-8 w-8 text-primary" />, points: [{ mainKey: "servicedetail_company-registration-jp-in_cat1_point1_main", subKeys: ["servicedetail_company-registration-jp-in_cat1_point1_sub1", "servicedetail_company-registration-jp-in_cat1_point1_sub2", "servicedetail_company-registration-jp-in_cat1_point1_sub3"]}, "servicedetail_company-registration-jp-in_cat1_point2"] },
      { icon: <FileSignature className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-jp-in_cat2_point1", "servicedetail_company-registration-jp-in_cat2_point2", "servicedetail_company-registration-jp-in_cat2_point3", "servicedetail_company-registration-jp-in_cat2_point4"] },
      { icon: <Landmark className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-jp-in_cat3_point1", "servicedetail_company-registration-jp-in_cat3_point2", "servicedetail_company-registration-jp-in_cat3_point3", "servicedetail_company-registration-jp-in_cat3_point4"] },
      { icon: <Building2 className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-jp-in_cat4_point1", "servicedetail_company-registration-jp-in_cat4_point2"] },
      { icon: <Wallet className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-jp-in_cat5_point1", "servicedetail_company-registration-jp-in_cat5_point2", "servicedetail_company-registration-jp-in_cat5_point3"] },
      { icon: <Users2 className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-jp-in_cat6_point1", "servicedetail_company-registration-jp-in_cat6_point2", "servicedetail_company-registration-jp-in_cat6_point3"] },
      { icon: <ConciergeBell className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-jp-in_cat7_point1", "servicedetail_company-registration-jp-in_cat7_point2", "servicedetail_company-registration-jp-in_cat7_point3"] }
    ],
  },
  {
    id: "company-registration-in-jp",
    categories: [
      { icon: <Scale className="h-8 w-8 text-primary" />, points: [{ mainKey: "servicedetail_company-registration-in-jp_cat1_point1_main", subKeys: ["servicedetail_company-registration-in-jp_cat1_point1_sub1", "servicedetail_company-registration-in-jp_cat1_point1_sub2", "servicedetail_company-registration-in-jp_cat1_point1_sub3", "servicedetail_company-registration-in-jp_cat1_point1_sub4"] }, "servicedetail_company-registration-in-jp_cat1_point2", "servicedetail_company-registration-in-jp_cat1_point3"] },
      { icon: <FileSignature className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-in-jp_cat2_point1", "servicedetail_company-registration-in-jp_cat2_point2", "servicedetail_company-registration-in-jp_cat2_point3", "servicedetail_company-registration-in-jp_cat2_point4", "servicedetail_company-registration-in-jp_cat2_point5"] },
      { icon: <Landmark className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-in-jp_cat3_point1", "servicedetail_company-registration-in-jp_cat3_point2", "servicedetail_company-registration-in-jp_cat3_point3", "servicedetail_company-registration-in-jp_cat3_point4"] },
      { icon: <Handshake className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-in-jp_cat4_point1", "servicedetail_company-registration-in-jp_cat4_point2", "servicedetail_company-registration-in-jp_cat4_point3"] },
      { icon: <ConciergeBell className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-in-jp_cat5_point1", "servicedetail_company-registration-in-jp_cat5_point2", "servicedetail_company-registration-in-jp_cat5_point3"] },
      { icon: <Award className="h-8 w-8 text-primary" />, points: ["servicedetail_company-registration-in-jp_cat6_point1", "servicedetail_company-registration-in-jp_cat6_point2", "servicedetail_company-registration-in-jp_cat6_point3"] },
    ],
  },
  {
    id: "digital-services",
    categories: [
      { icon: <Plane className="h-8 w-8 text-primary" />, points: ["servicedetail_digital-services_cat1_point1", "servicedetail_digital-services_cat1_point2", "servicedetail_digital-services_cat1_point3", "servicedetail_digital-services_cat1_point4", "servicedetail_digital-services_cat1_point5"] },
      { icon: <FileSignature className="h-8 w-8 text-primary" />, points: ["servicedetail_digital-services_cat2_point1", "servicedetail_digital-services_cat2_point2", "servicedetail_digital-services_cat2_point3", "servicedetail_digital-services_cat2_point4", "servicedetail_digital-services_cat2_point5", "servicedetail_digital-services_cat2_point6"] },
      { icon: <Building2 className="h-8 w-8 text-primary" />, points: ["servicedetail_digital-services_cat3_point1", "servicedetail_digital-services_cat3_point2", "servicedetail_digital-services_cat3_point3", "servicedetail_digital-services_cat3_point4"] },
      { icon: <GraduationCap className="h-8 w-8 text-primary" />, points: ["servicedetail_digital-services_cat4_point1", "servicedetail_digital-services_cat4_point2", "servicedetail_digital-services_cat4_point3", "servicedetail_digital-services_cat4_point4"] },
      { icon: <Wallet className="h-8 w-8 text-primary" />, points: ["servicedetail_digital-services_cat5_point1", "servicedetail_digital-services_cat5_point2", "servicedetail_digital-services_cat5_point3", "servicedetail_digital-services_cat5_point4", "servicedetail_digital-services_cat5_point5"] },
      { icon: <Handshake className="h-8 w-8 text-primary" />, points: ["servicedetail_digital-services_cat6_point1", "servicedetail_digital-services_cat6_point2", "servicedetail_digital-services_cat6_point3", "servicedetail_digital-services_cat6_point4"] },
    ],
  },
  {
    id: "startup-support",
    categories: [
        { icon: <Lightbulb className="h-8 w-8 text-primary" />, points: ["servicedetail_startup-support_cat1_point1", "servicedetail_startup-support_cat1_point2", "servicedetail_startup-support_cat1_point3"] },
        { icon: <Wallet className="h-8 w-8 text-primary" />, points: ["servicedetail_startup-support_cat2_point1", "servicedetail_startup-support_cat2_point2", "servicedetail_startup-support_cat2_point3"] },
        { icon: <Briefcase className="h-8 w-8 text-primary" />, points: ["servicedetail_startup-support_cat3_point1", "servicedetail_startup-support_cat3_point2", "servicedetail_startup-support_cat3_point3"] },
        { icon: <Zap className="h-8 w-8 text-primary" />, points: ["servicedetail_startup-support_cat4_point1", "servicedetail_startup-support_cat4_point2", "servicedetail_startup-support_cat4_point3"] },
        { icon: <School className="h-8 w-8 text-primary" />, points: ["servicedetail_startup-support_cat5_point1", "servicedetail_startup-support_cat5_point2", "servicedetail_startup-support_cat5_point3"] },
        { icon: <Users className="h-8 w-8 text-primary" />, points: ["servicedetail_startup-support_cat6_point1", "servicedetail_startup-support_cat6_point2", "servicedetail_startup-support_cat6_point3"] },
    ],
  },
  {
    id: "management-training",
    categories: [
        { icon: <Award className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat1_point1", "servicedetail_management-training_cat1_point2", "servicedetail_management-training_cat1_point3"] },
        { icon: <Zap className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat2_point1", "servicedetail_management-training_cat2_point2", "servicedetail_management-training_cat2_point3"] },
        { icon: <Target className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat3_point1", "servicedetail_management-training_cat3_point2", "servicedetail_management-training_cat3_point3"] },
        { icon: <Building className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat4_point1", "servicedetail_management-training_cat4_point2", "servicedetail_management-training_cat4_point3"] },
        { icon: <Users className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat5_point1", "servicedetail_management-training_cat5_point2", "servicedetail_management-training_cat5_point3"] },
        { icon: <Lightbulb className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat6_point1", "servicedetail_management-training_cat6_point2", "servicedetail_management-training_cat6_point3"] },
        { icon: <Handshake className="h-8 w-8 text-primary" />, points: ["servicedetail_management-training_cat7_point1", "servicedetail_management-training_cat7_point2", "servicedetail_management-training_cat7_point3"] },
    ],
  }
].map(service => ({
  ...service,
  titleKey: `servicedetail_${service.id}_title`,
  descriptionKey: `servicedetail_${service.id}_description`,
  categories: service.categories.map((cat, index) => ({
    ...cat,
    titleKey: `servicedetail_${service.id}_cat${index + 1}_title`,
  }))
}));


const ServiceSection = ({ service }: { service: Service }) => {
    const { t } = useTranslation();
    return (
        <Card className="p-6">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">{t(service.titleKey)}</CardTitle>
                <CardDescription className="max-w-3xl mx-auto pt-2 text-base">
                    {t(service.descriptionKey)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full" defaultValue={t(service.categories[0].titleKey)}>
                    {service.categories.map((category: ServiceCategory) => (
                        <AccordionItem value={t(category.titleKey)} key={t(category.titleKey)}>
                            <AccordionTrigger className="text-xl font-headline hover:no-underline">
                                <div className="flex items-center gap-4">
                                    {category.icon}
                                    {t(category.titleKey)}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pl-12">
                                <ul className="list-disc space-y-2 text-muted-foreground">
                                    {category.points.map((point, index: number) => (
                                        <li key={index}>
                                            {typeof point === 'string' ? t(point) : t(point.mainKey)}
                                            {typeof point !== 'string' && point.subKeys && Array.isArray(point.subKeys) && (
                                                <ul className="list-disc pl-6 mt-1 space-y-1">
                                                    {point.subKeys.map((subPointKey: string, subIndex: number) => (
                                                        <li key={subIndex}>{t(subPointKey)}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
};

export default function ServiceDetailPage() {
    const params = useParams();
    const service = allServicesData.find(s => s.id === params.id);

    if (!service) {
        notFound();
    }

  return (
    <div className="container py-12">
      <div className="space-y-12">
        <ServiceSection service={service} />
      </div>
    </div>
  );
}

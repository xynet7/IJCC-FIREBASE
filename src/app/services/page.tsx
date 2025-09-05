

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Handshake, School, Plane, Library, Lightbulb, Briefcase, Users, Building, Target, Zap, Scale, FileSignature, Landmark, Building2, Wallet, Users2, ConciergeBell, Globe, Megaphone, Palette, Sparkles, Award } from "lucide-react";

const indianServices = {
  title: "For Indian SMEs, MSMEs, Startups & Entrepreneurs",
  id: "indian-smes",
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
  id: "japanese-companies",
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

const companyRegistrationServices = {
  title: "Company Registration: Japanese Companies",
  id: "company-registration-jp",
  categories: [
    {
      title: "Advisory on Entry Strategy",
      icon: <Scale className="h-8 w-8 text-primary" />,
      points: [
        { main: "Guidance on the best structure:", sub: [
            "Wholly Owned Subsidiary (Private Limited Company)",
            "Joint Venture with Indian Partner",
            "Liaison / Branch / Project Office (RBI approval route)",
        ]},
        { main: "Sector-specific compliance (FEMA, FDI policy, restricted sectors)." },
      ],
    },
    {
      title: "Company Incorporation Support",
      icon: <FileSignature className="h-8 w-8 text-primary" />,
      points: [
        { main: "Preparation & filing with MCA (Ministry of Corporate Affairs)." },
        { main: "Assistance with MoA & AoA drafting (aligned with Japanese parent company’s goals)." },
        { main: "Digital signatures & Director Identification Number (DIN) processing." },
        { main: "Obtaining Certificate of Incorporation." },
      ],
    },
    {
      title: "Regulatory & Legal Compliance",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      points: [
        { main: "RBI approvals (for Liaison/Branch/Project office)." },
        { main: "PAN, TAN & GST registration." },
        { main: "Import Export Code (IEC) for trading companies." },
        { main: "Compliance with FEMA, Companies Act, and local state laws." },
      ],
    },
    {
      title: "Office & Infrastructure Solutions",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      points: [
        { main: "Assistance in finding registered office address (temporary/virtual/long-term)." },
        { main: "Support for setting up physical offices, warehouses, or industrial space." },
      ],
    },
    {
        title: "Banking & Financial Setup",
        icon: <Wallet className="h-8 w-8 text-primary" />,
        points: [
            { main: "Facilitation of bank account opening for Japanese entities in India." },
            { main: "Guidance on foreign remittance and repatriation of profits." },
            { main: "Connections with Indian and Japanese banks operating in India." },
        ]
    },
    {
        title: "HR & Talent Support",
        icon: <Users2 className="h-8 w-8 text-primary" />,
        points: [
            { main: "Recruitment of skilled Indian workforce." },
            { main: "Access to SSW/TITP programs for blue-collar needs." },
            { main: "Cross-cultural training for Japanese managers working in India." },
        ]
    },
    {
        title: "Post-Incorporation Support",
        icon: <ConciergeBell className="h-8 w-8 text-primary" />,
        points: [
            { main: "Ongoing legal, tax, and compliance advisory." },
            { main: "Secretarial services (ROC filings, board meetings, annual reports)." },
            { main: "Advisory on expansion, mergers, acquisitions, or JV structuring." },
        ]
    }
  ],
};

const digitalServices = {
  title: "IJCC Website Development & Digital Marketing Services",
  id: "digital-services",
  categories: [
    {
      title: "Website Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      points: [
        "Corporate & Business Websites (bilingual support: English & Japanese).",
        "E-commerce Websites with secure payment gateways.",
        "Landing Pages for product launches, events, and exhibitions.",
        "Customization for Japanese companies entering India (localized design & compliance).",
        "Maintenance & Support for website security, updates, and hosting.",
      ],
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      points: [
        "Search Engine Optimization (SEO) – Improve visibility on Google Japan, Google India, Yahoo Japan, etc.",
        "Social Media Marketing (SMM) – Manage campaigns on LinkedIn, Instagram, Facebook, Twitter/X, LINE (popular in Japan).",
        "Content Marketing – Blog writing, press releases, and bilingual content creation (English–Japanese).",
        "Email Marketing – Automated campaigns for B2B and B2C reach.",
        "Pay-Per-Click (PPC) Advertising – Google Ads, Facebook Ads, and Japan-specific ad platforms.",
      ],
    },
    {
      title: "Branding & Communication",
      icon: <Palette className="h-8 w-8 text-primary" />,
      points: [
        "Logo & Brand Identity Design (India–Japan friendly branding).",
        "Corporate Presentations & Brochures (English/Japanese).",
        "Video Marketing & Corporate Films.",
        "Reputation Management (online reviews, LinkedIn positioning).",
      ],
    },
    {
      title: "Special Services for Japanese Companies",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      points: [
        "Website localization: Japanese → English & Indian context.",
        "Digital campaigns targeting Indian customers.",
        "Social media presence in India to build brand recognition.",
      ],
    },
  ],
};

const indianCompaniesInJapanServices = {
  title: "IJCC Services for Indian Companies Registering in Japan",
  id: "indian-companies-jp",
  categories: [
    {
      title: "Advisory & Consultation",
      icon: <Scale className="h-8 w-8 text-primary" />,
      points: [
        {
          main: "Guidance on the right entry structure in Japan:",
          sub: [
            "Kabushiki Kaisha (KK) – equivalent to Private Limited Company.",
            "Godo Kaisha (GK) – similar to LLP in India.",
            "Branch Office of Indian company.",
            "Representative Office (for market research, no commercial activity).",
          ],
        },
        { main: "Sector-wise advisory (manufacturing, IT, food processing, services, trading, etc.)." },
        { main: "Compliance overview: tax, labor laws, visa, and Japanese Commercial Code." },
      ],
    },
    {
      title: "Company Incorporation Support",
      icon: <FileSignature className="h-8 w-8 text-primary" />,
      points: [
        { main: "Drafting and filing documents (Articles of Incorporation, company seal, notarization)." },
        { main: "Assistance with office address (registered office, virtual office, co-working space)." },
        { main: "Support in opening Japanese bank accounts." },
        { main: "Registration with Legal Affairs Bureau in Japan." },
        { main: "Tax registration: National Tax Agency (NTA) for corporate tax, consumption tax, etc." },
      ],
    },
    {
      title: "Regulatory & Compliance Assistance",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      points: [
        { main: "Help with immigration/visa procedures for Indian founders or key employees." },
        { main: "Social insurance, payroll, and HR compliance setup." },
        { main: "Intellectual Property Rights (IPR) advisory – patents, trademarks in Japan." },
        { main: "Guidance on Japanese packaging, product quality, and safety standards." },
      ],
    },
    {
      title: "Business Development Support",
      icon: <Handshake className="h-8 w-8 text-primary" />,
      points: [
        { main: "Connecting with Japanese distributors, investors, and partners." },
        { main: "Access to Japanese startup ecosystems, accelerators, and VCs." },
        { main: "Facilitating participation in trade fairs, expos, and B2B meetings in Japan." },
      ],
    },
    {
      title: "Post-Incorporation Services",
      icon: <ConciergeBell className="h-8 w-8 text-primary" />,
      points: [
        { main: "Accounting, taxation, and annual filings in Japan." },
        { main: "Virtual CFO/Compliance support." },
        { main: "Translation, interpretation, and cultural orientation for smooth business operations." },
      ],
    },
    {
      title: "Additional IJCC Value-Add",
      icon: <Award className="h-8 w-8 text-primary" />,
      points: [
        { main: "Education & training for Indian founders on Japanese corporate culture and business etiquette." },
        { main: "Recruitment support for hiring Japanese/Indian bilingual staff." },
        { main: "Assistance with government incentives (JETRO programs, startup subsidies, SME grants)." },
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
        <Card className="p-6" id={indianServices.id}>
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

        <Card className="p-6" id={japaneseServices.id}>
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

        <Card className="p-6" id={companyRegistrationServices.id}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">{companyRegistrationServices.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue={companyRegistrationServices.categories[0].title}>
              {companyRegistrationServices.categories.map((category) => (
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
                        <li key={index}>
                          {point.main}
                          {point.sub && (
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              {point.sub.map((subPoint, subIndex) => (
                                <li key={subIndex}>{subPoint}</li>
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
        
        <Card className="p-6" id={digitalServices.id}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">{digitalServices.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue={digitalServices.categories[0].title}>
              {digitalServices.categories.map((category) => (
                <AccordionItem value={category.title} key={category.title}>
                  <AccordionTrigger className="text-xl font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                      {category.icon}
                      {category.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pl-12">
                    <ul className="list-disc space-y-2 text-muted-foreground">
                       {/* @ts-ignore */}
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

        <Card className="p-6" id={indianCompaniesInJapanServices.id}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">{indianCompaniesInJapanServices.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue={indianCompaniesInJapanServices.categories[0].title}>
              {indianCompaniesInJapanServices.categories.map((category) => (
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
                        <li key={index}>
                          {point.main}
                          {point.sub && (
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              {point.sub.map((subPoint, subIndex) => (
                                <li key={subIndex}>{subPoint}</li>
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

      </div>
    </div>
  );
}

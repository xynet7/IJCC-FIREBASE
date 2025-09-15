
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Handshake, School, Plane, Library, Lightbulb, Briefcase, Users, Building, Target, Zap, Scale, FileSignature, Landmark, Building2, Wallet, Users2, ConciergeBell, Globe, Megaphone, Palette, Sparkles, Award, University, GraduationCap } from "lucide-react";
import { notFound } from "next/navigation";

const indianSchoolsServices = {
  title: "For Indian Schools",
  id: "indian-schools",
  description: "The Indo-Japan Chamber of Commerce (IJCC) works to strengthen educational and cultural ties between India and Japan. For Indian schools, IJCC offers a wide range of programs and services designed to provide students and educators with international exposure, cultural understanding, and future career pathways.",
  categories: [
    {
      title: "School Partnerships & Exchange Programs",
      icon: <Handshake className="h-8 w-8 text-primary" />,
      points: [
        "Facilitation of partnerships with Japanese schools for collaborative projects.",
        "Online and offline student exchange programs to build global perspectives.",
        "Virtual cultural exchange sessions (language, traditions, festivals, and student-led presentations).",
      ],
    },
    {
      title: "Japan Education Tours",
      icon: <Plane className="h-8 w-8 text-primary" />,
      points: [
        "Curated study tours to Japan including school visits, university campus tours, and cultural immersion.",
        "Opportunities for students to experience Japanese classrooms, interact with peers, and understand Japan’s education system.",
        "Visits to leading institutions, industries, and cultural sites (e.g., Universal Studios, Bullet Train experience, Mt. Fuji).",
      ],
    },
    {
      title: "Japanese Language & Cultural Programs",
      icon: <Globe className="h-8 w-8 text-primary" />,
      points: [
        "Japanese language learning modules for school students.",
        "Workshops on Japanese art, calligraphy, origami, martial arts, and tea ceremony.",
        "Exposure to Japanese work culture and discipline through interactive sessions.",
      ],
    },
    {
      title: "Career Pathways & Higher Education",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      points: [
        "Guidance for students aspiring to pursue higher education in Japan.",
        "Seminars on scholarships, entrance requirements, and career opportunities in Japan.",
        "Linkages with Japanese universities and skill development programs.",
      ],
    },
    {
      title: "Teacher Development & Training",
      icon: <Users className="h-8 w-8 text-primary" />,
      points: [
        "Professional development workshops for teachers on global teaching methodologies.",
        "Exchange opportunities for educators to learn from Japanese counterparts.",
      ],
    },
    {
      title: "Community & Homestay Opportunities",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      points: [
        "Student homestay programs in Japan for immersive cultural learning (future initiative).",
        "Hosting Japanese students in Indian schools for reciprocal cultural sharing (future initiative).",
      ],
    },
  ],
};

const indianUniversitiesServices = {
    title: "For Indian Universities & College Students",
    id: "indian-universities",
    description: "The Indo-Japan Chamber of Commerce (IJCC) is committed to building strong academic, cultural, and professional bridges between India and Japan. For universities and colleges in India, IJCC offers a range of services designed to enhance student exposure, global competencies, and career pathways.",
    categories: [
        {
            title: "Academic Partnerships & Exchange Programs",
            icon: <University className="h-8 w-8 text-primary" />,
            points: [
                "Facilitation of MoUs between Indian and Japanese universities/colleges.",
                "Short-term and long-term student exchange programs.",
                "Collaborative research projects, joint seminars, and academic conferences.",
            ],
        },
        {
            title: "Japan Study & Industry Tours",
            icon: <Plane className="h-8 w-8 text-primary" />,
            points: [
                "Customized education tours to Japan including visits to universities, R&D centers, and industries.",
                "Exposure to Japan’s advanced technologies, innovation practices, and industry–academia collaboration.",
                "Cultural immersion experiences (temples, heritage sites, modern cities, and traditional arts).",
            ],
        },
        {
            title: "Japanese Language & Cultural Learning",
            icon: <Globe className="h-8 w-8 text-primary" />,
            points: [
                "Certificate and diploma programs in Japanese language.",
                "Training in cross-cultural communication and workplace readiness.",
                "Workshops on Japanese culture, etiquette, and business practices.",
            ],
        },
        {
            title: "Career Pathways & Employment Opportunities",
            icon: <Briefcase className="h-8 w-8 text-primary" />,
            points: [
                "Guidance on pursuing higher education and research opportunities in Japan.",
                "Career counseling for students aiming for international job markets.",
                "Placement support under Japan’s Specified Skilled Worker (SSW) program and internships in Japanese companies.",
            ],
        },
        {
            title: "Skill Development & Training",
            icon: <Zap className="h-8 w-8 text-primary" />,
            points: [
                "Industry-relevant workshops on innovation, entrepreneurship, and management inspired by Japanese models.",
                "Training modules on Kaizen, Lean Management, and Quality Circles.",
                "Soft skills and intercultural competency development.",
            ],
        },
        {
            title: "Faculty & Research Collaborations",
            icon: <Users2 className="h-8 w-8 text-primary" />,
            points: [
                "Exchange of faculty for lectures, workshops, and joint research.",
                "Co-hosting of academic conferences, symposiums, and innovation fairs.",
                "Access to Japanese academic networks and resources.",
            ],
        },
        {
            title: "Global Networking & Exposure",
            icon: <Handshake className="h-8 w-8 text-primary" />,
            points: [
                "Opportunities for students to connect with Japanese peers, professionals, and entrepreneurs.",
                "Participation in Indo-Japan youth summits, cultural festivals, and innovation challenges.",
            ],
        },
    ],
};

const indianSMEsServices = {
  title: "For Indian Businesses",
  id: "indian-smes",
  description: "The Indo-Japan Chamber of Commerce (IJCC) offers targeted support for Indian SMEs, MSMEs, startups, and entrepreneurs looking to engage with the Japanese market, fostering growth and global competitiveness.",
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

const japaneseSMEsServices = {
  title: "For Japanese Businesses",
  id: "japanese-smes",
  description: "The Indo-Japan Chamber of Commerce (IJCC) provides comprehensive support for Japanese SMEs, MSMEs, and startups aiming to enter and thrive in the Indian market, offering services from market research to talent acquisition.",
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

const companyRegistrationJPinINServices = {
  title: "Company Registration: Japanese Companies in India",
  id: "company-registration-jp-in",
  description: "IJCC provides end-to-end support for Japanese companies seeking to establish a legal presence in India, from strategic advisory on the best entry structure to post-incorporation compliance.",
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
        "Preparation & filing with MCA (Ministry of Corporate Affairs).",
        "Assistance with MoA & AoA drafting (aligned with Japanese parent company’s goals).",
        "Digital signatures & Director Identification Number (DIN) processing.",
        "Obtaining Certificate of Incorporation.",
      ],
    },
    {
      title: "Regulatory & Legal Compliance",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      points: [
        "RBI approvals (for Liaison/Branch/Project office).",
        "PAN, TAN & GST registration.",
        "Import Export Code (IEC) for trading companies.",
        "Compliance with FEMA, Companies Act, and local state laws.",
      ],
    },
    {
      title: "Office & Infrastructure Solutions",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      points: [
        "Assistance in finding registered office address (temporary/virtual/long-term).",
        "Support for setting up physical offices, warehouses, or industrial space.",
      ],
    },
    {
        title: "Banking & Financial Setup",
        icon: <Wallet className="h-8 w-8 text-primary" />,
        points: [
            "Facilitation of bank account opening for Japanese entities in India.",
            "Guidance on foreign remittance and repatriation of profits.",
            "Connections with Indian and Japanese banks operating in India.",
        ]
    },
    {
        title: "HR & Talent Support",
        icon: <Users2 className="h-8 w-8 text-primary" />,
        points: [
            "Recruitment of skilled Indian workforce.",
            "Access to SSW/TITP programs for blue-collar needs.",
            "Cross-cultural training for Japanese managers working in India.",
        ]
    },
    {
        title: "Post-Incorporation Support",
        icon: <ConciergeBell className="h-8 w-8 text-primary" />,
        points: [
            "Ongoing legal, tax, and compliance advisory.",
            "Secretarial services (ROC filings, board meetings, annual reports).",
            "Advisory on expansion, mergers, acquisitions, or JV structuring.",
        ]
    }
  ],
};

const companyRegistrationINinJPServices = {
  title: "Company Registration: Indian Companies in Japan",
  id: "company-registration-in-jp",
  description: "IJCC offers comprehensive assistance for Indian companies looking to register and operate in Japan, covering everything from legal structure advisory to post-incorporation support.",
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
        "Drafting and filing documents (Articles of Incorporation, company seal, notarization).",
        "Assistance with office address (registered office, virtual office, co-working space).",
        "Support in opening Japanese bank accounts.",
        "Registration with Legal Affairs Bureau in Japan.",
        "Tax registration: National Tax Agency (NTA) for corporate tax, consumption tax, etc.",
      ],
    },
    {
      title: "Regulatory & Compliance Assistance",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      points: [
        "Help with immigration/visa procedures for Indian founders or key employees.",
        "Social insurance, payroll, and HR compliance setup.",
        "Intellectual Property Rights (IPR) advisory – patents, trademarks in Japan.",
        "Guidance on Japanese packaging, product quality, and safety standards.",
      ],
    },
    {
      title: "Business Development Support",
      icon: <Handshake className="h-8 w-8 text-primary" />,
      points: [
        "Connecting with Japanese distributors, investors, and partners.",
        "Access to Japanese startup ecosystems, accelerators, and VCs.",
        "Facilitating participation in trade fairs, expos, and B2B meetings in Japan.",
      ],
    },
    {
      title: "Post-Incorporation Services",
      icon: <ConciergeBell className="h-8 w-8 text-primary" />,
      points: [
        "Accounting, taxation, and annual filings in Japan.",
        "Virtual CFO/Compliance support.",
        "Translation, interpretation, and cultural orientation for smooth business operations.",
      ],
    },
    {
      title: "Additional IJCC Value-Add",
      icon: <Award className="h-8 w-8 text-primary" />,
      points: [
        "Education & training for Indian founders on Japanese corporate culture and business etiquette.",
        "Recruitment support for hiring Japanese/Indian bilingual staff.",
        "Assistance with government incentives (JETRO programs, startup subsidies, SME grants).",
      ],
    },
  ],
};

const digitalServices = {
  title: "Website Development & Digital Marketing",
  id: "digital-services",
  description: "IJCC provides bilingual website development, branding, and digital marketing services to help businesses succeed across Indian and Japanese markets.",
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

const startupSupportServices = {
    title: "IJCC Startup Support Services",
    id: "startup-support",
    description: "The Indo-Japan Chamber of Commerce (IJCC) is committed to fostering innovation and entrepreneurship by connecting Indian startups with Japanese expertise, investors, and markets. Through its network of industry leaders, government bodies, and academic institutions, IJCC provides end-to-end support for startups to grow globally.",
    categories: [
        {
            title: "Incubation & Mentorship",
            icon: <Lightbulb className="h-8 w-8 text-primary" />,
            points: [
                "Access to experienced mentors from India and Japan in business strategy, technology, and global expansion.",
                "Structured incubation programs with guidance on product development, scaling, and market positioning.",
                "Knowledge sessions on Japanese business culture, negotiation practices, and corporate expectations.",
            ],
        },
        {
            title: "Funding & Investor Connect",
            icon: <Wallet className="h-8 w-8 text-primary" />,
            points: [
                "Facilitation of connections with Japanese venture capital firms, angel investors, and corporate funds.",
                "Assistance in preparing investor-ready business pitches and business plans.",
                "Hosting investor–startup networking events and demo days.",
            ],
        },
        {
            title: "Market Entry & Expansion Support",
            icon: <Briefcase className="h-8 w-8 text-primary" />,
            points: [
                "Support for Indian startups seeking entry into the Japanese market.",
                "Partner search and business matchmaking with Japanese companies.",
                "Assistance with regulatory compliance, legal frameworks, and business setup in Japan.",
            ],
        },
        {
            title: "Innovation & Collaboration Platforms",
            icon: <Zap className="h-8 w-8 text-primary" />,
            points: [
                "Joint India–Japan startup challenges, hackathons, and innovation competitions.",
                "Opportunities for collaboration with Japanese universities, R&D labs, and corporations.",
                "Access to government-supported innovation programs (e.g., JICA, JETRO, NEDO collaborations).",
            ],
        },
        {
            title: "Capacity Building & Training",
            icon: <School className="h-8 w-8 text-primary" />,
            points: [
                "Workshops on entrepreneurship, intellectual property rights, and global business practices.",
                "Training in Kaizen, Lean Startup methodology, and Japanese management systems.",
                "Exposure visits to Japan for learning from successful startups and incubators.",
            ],
        },
        {
            title: "Networking & Exposure",
            icon: <Users className="h-8 w-8 text-primary" />,
            points: [
                "Participation in Indo-Japan startup summits, exhibitions, and conferences.",
                "Opportunities to showcase products/services to Japanese businesses and investors.",
                "Access to IJCC’s cross-border network of industry professionals, academics, and policymakers.",
            ],
        },
    ],
};

const managementTrainingServices = {
    title: "Japanese Management Training",
    id: "management-training",
    description: "The Indo-Japan Chamber of Commerce (IJCC) offers specialized training programs designed to equip Indian SMEs, MSMEs, and entrepreneurs with the proven principles of Japanese management. These programs blend global best practices with local business needs, enabling enterprises to enhance productivity, quality, and competitiveness.",
    categories: [
        { title: "Kaizen & Continuous Improvement", icon: <Award className="h-8 w-8 text-primary" />, points: [
            "Practical training on Kaizen (continuous improvement) techniques.",
            "Focus on cost reduction, waste elimination, and efficiency enhancement.",
            "Case studies of successful Japanese companies.",
        ]},
        { title: "Lean Management & Productivity Enhancement", icon: <Zap className="h-8 w-8 text-primary" />, points: [
            "Principles of Lean Manufacturing and Lean Startup methodology.",
            "Tools for process optimization, time management, and value creation.",
            "Strategies to build scalable and sustainable business operations.",
        ]},
        { title: "Total Quality Management (TQM) & Quality Circles", icon: <Target className="h-8 w-8 text-primary" />, points: [
            "Training in TQM practices followed by global Japanese corporations.",
            "Establishment of quality circles within organizations.",
            "Customer satisfaction and defect-free production methods.",
        ]},
        { title: "5S Workplace Management System", icon: <Building className="h-8 w-8 text-primary" />, points: [
            "Hands-on learning of Seiri, Seiton, Seiso, Seiketsu, and Shitsuke (5S).",
            "Implementation of workplace discipline and efficiency culture.",
            "Creating safe, organized, and productive work environments.",
        ]},
        { title: "Human Resource & People-Centric Practices", icon: <Users className="h-8 w-8 text-primary" />, points: [
            "Japanese approaches to employee engagement and team spirit.",
            "Building loyalty, discipline, and responsibility in workforce management.",
            "Leadership and succession planning.",
        ]},
        { title: "Innovation & Business Strategy", icon: <Lightbulb className="h-8 w-8 text-primary" />, points: [
            "Insights on Japanese R&D and innovation-driven growth.",
            "Strategic planning for SMEs and entrepreneurs.",
            "Business diversification and global market entry strategies.",
        ]},
        { title: "Cross-Cultural & Global Business Etiquette", icon: <Handshake className="h-8 w-8 text-primary" />, points: [
            "Training in Japanese business communication, negotiation, and etiquette.",
            "Preparing Indian entrepreneurs for collaborations with Japanese companies.",
            "Bridging cultural differences in global partnerships.",
        ]},
    ],
};


const allServices = [
    indianSchoolsServices,
    indianUniversitiesServices,
    indianSMEsServices,
    japaneseSMEsServices,
    companyRegistrationJPinINServices,
    companyRegistrationINinJPServices,
    digitalServices,
    startupSupportServices,
    managementTrainingServices,
];

const ServiceSection = ({ service }: { service: any }) => (
    <Card className="p-6">
        <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">{service.title}</CardTitle>
            {service.description && (
                <CardDescription className="max-w-3xl mx-auto pt-2 text-base">
                    {service.description}
                </CardDescription>
            )}
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue={service.categories[0].title}>
                {service.categories.map((category: any) => (
                    <AccordionItem value={category.title} key={category.title}>
                        <AccordionTrigger className="text-xl font-headline hover:no-underline">
                            <div className="flex items-center gap-4">
                                {category.icon}
                                {category.title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pl-12">
                            <ul className="list-disc space-y-2 text-muted-foreground">
                                {category.points.map((point: any, index: number) => (
                                    <li key={index}>
                                        {typeof point === 'string' ? point : point.main}
                                        {point.sub && Array.isArray(point.sub) && (
                                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                                {point.sub.map((subPoint: string, subIndex: number) => (
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
);

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
    const service = allServices.find(s => s.id === params.id);

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

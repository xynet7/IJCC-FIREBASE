"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/hooks/use-translation";
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Globe, 
  CheckCircle2, 
  Zap, 
  Quote, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Star
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NihonEdutechMoUPage() {
  const { t } = useTranslation();

  const stats = [
    { label: "Technical Interns", value: "120+", icon: <Users className="h-6 w-6" /> },
    { label: "Japan Experience", value: "100+ Years", icon: <Star className="h-6 w-6" /> },
    { label: "TITP Partner", value: "CII", icon: <ShieldCheck className="h-6 w-6" /> },
    { label: "JLPT Coverage", value: "N5–N1", icon: <GraduationCap className="h-6 w-6" /> },
  ];

  const credentials = [
    { name: "Company Name", detail: "Nihon Edutech Private Limited", relevance: "MoU signed with IJCC" },
    { name: "CIN (Reg. No.)", detail: "U74993TN2020PTC135113", relevance: "Incorporated in Tamil Nadu, India" },
    { name: "Headquarters", detail: "Chennai, Tamil Nadu, India", relevance: "Offices in 4 Indian cities" },
    { name: "TITP Partner", detail: "CII – Confederation of Indian Industry", relevance: "India's apex trade body — official TITP co-implementer" },
    { name: "TITP Achievement", detail: "300+ interns sent to Japan", relevance: "Milestone reported by Asian Community News, Aug 2023" },
    { name: "Current Capacity", detail: "500–800 interns annually", relevance: "Confirmed by CII's GM, Skill Development" },
    { name: "Japan Experience", detail: "100+ years (cumulative team)", relevance: "Verified via LinkedIn & news sources" },
    { name: "Language Method", detail: "Marugoto (まるごと)", relevance: "Japan Foundation's official spoken-first curriculum" },
    { name: "JLPT Levels", detail: "N5, N4, N3, N2, N1", relevance: "Full certification ladder offered" },
    { name: "IT Platform", detail: "nihoncareers.com", relevance: "AI-driven portal: sourcing → learning → placement" },
  ];

  const services = [
    {
      id: "01",
      title: "Japanese Language Training",
      desc: "JLPT N5 to N1 using the Japan Foundation's Marugoto curriculum. Spoken-first methodology with native Japanese trainers.",
      icon: <GraduationCap className="h-6 w-6" />,
      highlights: ["Spoken-first Marugoto methodology", "Native Japanese faculty", "N5 to N1 coverage"]
    },
    {
      id: "02",
      title: "TITP — CII Certified",
      desc: "Technical Intern Training Program in consortium with CII. Hands-on training at leading Japanese firms in manufacturing and hospitality.",
      icon: <Users className="h-6 w-6" />,
      highlights: ["Official CII consortium", "300+ interns placed", "Compliance with JITCO guidelines"]
    },
    {
      id: "03",
      title: "Nihon Careers",
      desc: "Connecting Indian IT engineers directly with Japanese employers for Cloud, DevOps, Full-Stack, and Cyber Security roles.",
      icon: <Laptop className="h-6 w-6" />,
      highlights: ["AI-powered placement", "High-demand tech domains", "Remote & Onsite models"]
    },
    {
      id: "04",
      title: "Learn-Chain LXP",
      desc: "AI-Powered Learning Experience Platform aggregating internal and external content for Japan job roles.",
      icon: <Zap className="h-6 w-6" />,
      highlights: ["Career-path linked learning", "State-of-the-art LMS", "Integrated skilling portal"]
    }
  ];

  const trustSignals = [
    { title: "CII Partnership", desc: "Nihon Edutech is the official TITP co-implementing partner of India's apex trade body, CII." },
    { title: "Japan Foundation Curriculum", desc: "Training is delivered using Marugoto, developed by Japan's official cultural diplomacy institution." },
    { title: "Government MoC Backed", desc: "TITP operates under the official bilateral Memorandum of Cooperation between India and Japan." },
    { title: "Proven Track Record", desc: "300+ Indian interns successfully placed in Japan since 2018 (Verified by Asian Community News)." },
    { title: "100+ Years Japan Experience", desc: "Leadership team brings over a century of professional experience living and working in Japan." },
    { title: "Registered Indian Company", desc: "Nihon Edutech Private Limited is a fully compliant Indian entity (CIN: U74993TN2020PTC135113)." },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-white text-primary hover:bg-white/90 px-4 py-1 text-sm font-bold tracking-widest">
                STRATEGIC ALLIANCE
              </Badge>
              <Badge variant="outline" className="border-white text-white px-4 py-1 text-sm font-bold tracking-widest">
                IJCC × NIHON EDUTECH
              </Badge>
            </div>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              IJCC Signs MoU with Nihon Edutech — India's Leading Japan Career Enabler
            </h1>
            <p className="text-2xl font-headline italic text-accent max-w-2xl">
              Empowering members with Japan-ready language training, TITP internships, and IT career pathways.
            </p>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              The Indo-Japan Chamber of Commerce (IJCC) has signed an MoU with Nihon Edutech Private Limited, bringing world-class CII-certified training and Japan-focused placement directly to our entire network.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2 group">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold font-headline">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Partner */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline text-primary">About Our Training Partner</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nihon Edutech Private Limited is India's leading professional training and placement company with a singular focus on workforce creation for the Japanese market.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Headquartered in Chennai, with operations in Gurugram, Mumbai, and Tirunelveli, Nihon Edutech connects Indian professionals with career opportunities in Japan through high-quality upskilling and a vast corporate network.
            </p>
            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardContent className="pt-6 italic text-muted-foreground">
                "We enable professionals to unlock their potential by upskilling them through Japanese language training and connecting them with our diverse network in Japan. Our Team has over 100+ years of cumulative experience of working in Japan."
              </CardContent>
            </Card>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://i.ibb.co/JW9Htz3R/edutech.jpg" 
              alt="Nihon Edutech Training" 
              fill 
              className="object-cover"
              data-ai-hint="nihon edutech mou"
            />
          </div>
        </div>
      </section>

      {/* Credentials Table */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-headline text-primary mb-4">Verified Credentials</h2>
              <p className="text-muted-foreground">Hard verified proof of Nihon Edutech's institutional credibility and achievements.</p>
            </div>
            <Card className="overflow-hidden border-2">
              <Table>
                <TableHeader className="bg-primary">
                  <TableRow>
                    <TableHead className="text-white font-bold">Credential</TableHead>
                    <TableHead className="text-white font-bold">Verified Detail</TableHead>
                    <TableHead className="text-white font-bold">Relevance to Members</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {credentials.map((c, i) => (
                    <TableRow key={i} className="hover:bg-muted/50">
                      <TableCell className="font-bold text-primary">{c.name}</TableCell>
                      <TableCell>{c.detail}</TableCell>
                      <TableCell className="text-muted-foreground italic">{c.relevance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section className="container py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary">Services Available via Nihon Edutech</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive career and training pathways for professionals and corporations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Card key={s.id} className="group hover:shadow-xl transition-all border-primary/10">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.id}</span>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline">Why This Partnership is Credible</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">Backing our Japan-focused programmes with government-recognized excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustSignals.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <ShieldCheck className="h-8 w-8 text-accent" />
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quotes */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="relative p-8 border-none bg-muted/30 shadow-xl rotate-1">
            <Quote className="absolute top-4 right-8 h-12 w-12 text-primary/10" />
            <CardContent className="p-0 space-y-4">
              <p className="text-xl font-headline italic text-primary">
                "We are thrilled to celebrate this milestone of training and sending 300+ talented technical interns to Japan."
              </p>
              <div className="pt-4 border-t border-muted">
                <p className="font-bold">Krishnan Narayanan</p>
                <p className="text-sm text-muted-foreground">CEO, Nihon Edutech Private Limited</p>
              </div>
            </CardContent>
          </Card>
          <Card className="relative p-8 border-none bg-muted/30 shadow-xl -rotate-1">
            <Quote className="absolute top-4 right-8 h-12 w-12 text-primary/10" />
            <CardContent className="p-0 space-y-4">
              <p className="text-xl font-headline italic text-primary">
                "CII-Nihon Edutech have worked tirelessly to ensure the success of this endeavour... Japan looks more towards India for its talent needs."
              </p>
              <div className="pt-4 border-t border-muted">
                <p className="font-bold">Bhavna Srikrishna Chopra</p>
                <p className="text-sm text-muted-foreground">GM & Head, Skill Development, CII</p>
              </div>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-20">
        <Card className="bg-primary text-primary-foreground p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-headline">Ready to Start Your Japan Career?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Nihon Edutech Private Limited — CII TITP Partner · Marugoto Language Training · 300+ Japan Placements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 h-16 text-xl">
                <Link href="/membership-application">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white hover:bg-white/10 font-bold px-12 h-16 text-xl">
                <Link href="https://nihonedutech.com" target="_blank">Visit Nihon Edutech <ExternalLink className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="pt-8 grid sm:grid-cols-3 gap-8 border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <Globe className="h-5 w-5 text-accent" /> nihonedutech.com
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5 text-accent" /> info@ijcc.in
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5 text-accent" /> Chennai, India
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

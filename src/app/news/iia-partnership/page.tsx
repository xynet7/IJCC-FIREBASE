"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Building2, 
  MapPin, 
  Globe, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Briefcase, 
  Target, 
  ArrowRight,
  ExternalLink,
  Quote,
  Calendar,
  Landmark
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IIAPartnershipPage() {
  const stats = [
    { label: "Supporting MSMEs", value: "38+ Years", icon: <Calendar className="h-6 w-6" /> },
    { label: "MSME Member Units", value: "13,500+", icon: <Users className="h-6 w-6" /> },
    { label: "Chapters Across UP & NCR", value: "50+", icon: <MapPin className="h-6 w-6" /> },
    { label: "NABET/QCI Graded Body", value: "GOLD", icon: <Award className="h-6 w-6" /> },
  ];

  const credentials = [
    { name: "Organisation Name", detail: "Indian Industries Association (IIA)", relevance: "MoU signed with IJCC" },
    { name: "Type", detail: "Apex Representative Body of MSMEs", relevance: "India's foremost MSME federation in UP & NCR" },
    { name: "Established", detail: "1985 (as NAYE); renamed IIA in July 1992", relevance: "38+ years of MSME advocacy and support" },
    { name: "Headquarters", detail: "Lucknow, Uttar Pradesh, India", relevance: "Strong base in India's largest MSME state" },
    { name: "Membership Base", detail: "13,500+ Micro, Small & Medium Enterprises", relevance: "India's one of the largest MSME member networks" },
    { name: "Chapter Network", detail: "50+ Chapters across UP, Delhi, Uttarakhand", relevance: "Pan-regional outreach in industrial districts" },
    { name: "Accreditation", detail: "GOLD Grade — NABET, QCI (Quality Council India)", relevance: "Highest institutional quality certification" },
    { name: "Govt. Representation", detail: "Member of National Board for MSME (NBMSME)", relevance: "Permanent seat in Govt. of India's MSME body" },
    { name: "PMO Task Force", detail: "Member — High Level Task Force for MSME (PMO)", relevance: "Direct influence on national MSME policy" },
    { name: "Key Facilities", detail: "IEFC, IDFC, IGFC, IMDC, SES, Employment Svc.", relevance: "Full-spectrum support for IJCC MSME members" },
    { name: "Newsletter", detail: "IIA News — 20,000+ monthly readership", relevance: "Prominent MSME knowledge publication" },
    { name: "International MoUs", detail: "Uganda, Bangladesh (NASCIB), Nepal Cottage Ind.", relevance: "Prior experience in cross-border partnerships" },
    { name: "Website", detail: "iiaonline.in (12,000+ daily hits; 60+ countries)", relevance: "Verified official website with global reach" },
    { name: "Social Media", detail: "@iiaonline (Twitter/X), Facebook, Instagram", relevance: "Active digital presence for member outreach" },
  ];

  const services = [
    {
      id: "01",
      title: "IIA Export Facilitation Centre (IEFC)",
      desc: "Single-window facility that provides IJCC members and Indian MSMEs with comprehensive export-related support — from Certificate of Origin issuance to export documentation.",
      icon: <Globe className="h-6 w-6" />,
      highlights: ["Certificate of Origin issuance", "Export documentation guidance", "IEFC Member Directory", "Trade inquiry handling", "Dedicated support for India-Japan corridors"]
    },
    {
      id: "02",
      title: "IIA Defence Facilitation Centre (IDFC)",
      desc: "Supports MSMEs seeking to participate in India's defence manufacturing ecosystem for 'Atmanirbhar Bharat'.",
      icon: <ShieldCheck className="h-6 w-6" />,
      highlights: ["Dedicated facilitation for defence", "Directory of Indian Defence Industries", "DPP compliance guidance", "Linkages with OEMs & DPSUs"]
    },
    {
      id: "03",
      title: "IIA GeM Facilitation Centre (IGFC)",
      desc: "Assists MSMEs in registering on and effectively utilising the Government e-Marketplace (GeM).",
      icon: <Building2 className="h-6 w-6" />,
      highlights: ["GeM registration & listing", "Bid management guidance", "Navigation workshops", "Access to Govt procurement spend"]
    },
    {
      id: "04",
      title: "MSME Knowledge Bank (MKB)",
      desc: "A unique joint venture between IIA and SIDBI providing curated knowledge on financing, schemes, policies, and markets.",
      icon: <BookOpen className="h-6 w-6" />,
      highlights: ["Single-window info facility", "Joint venture with SIDBI", "FREE MSME Health Card", "Info on government schemes"]
    },
    {
      id: "05",
      title: "Employment & Senior Expert Services",
      desc: "Connect MSME enterprises with skilled manpower, while the SES platform enables experienced retired professionals to offer consulting.",
      icon: <Briefcase className="h-6 w-6" />,
      highlights: ["Job placement & sourcing", "Retired experts consulting", "Resume database access", "Capacity building workshops"]
    },
    {
      id: "06",
      title: "MSME Development Centres (IMDC)",
      desc: "Provide entrepreneurs with skills in technology, quality, legal compliance, and business management.",
      icon: <Target className="h-6 w-6" />,
      highlights: ["Technology & quality upgrading", "Trade Fairs & Exhibitions", "Seminars and Conferences", "IIA News monthly newsletter"]
    }
  ];

  const trustSignals = [
    { title: "GOLD Graded by NABET & QCI", desc: "Highest institutional quality rating awarded to industry associations in India. Strongest institutional validation available.", icon: <Award className="h-8 w-8" /> },
    { title: "National Board for MSME", desc: "Permanent member (Govt. of India), giving it a direct role in shaping national MSME policy.", icon: <Landmark className="h-8 w-8" /> },
    { title: "PMO's High Level Task Force", desc: "Reflecting its recognised authority as India's foremost MSME voice at the Prime Minister's Office.", icon: <ShieldCheck className="h-8 w-8" /> },
    { title: "38+ Years Proven Track Record", desc: "Since 1985, consistently supported 13,500+ MSME units making it an extensively trusted association.", icon: <Calendar className="h-8 w-8" /> },
    { title: "50+ Chapters", desc: "Pan-regional reach giving IJCC members access to India's single largest MSME-dense geography.", icon: <MapPin className="h-8 w-8" /> },
    { title: "Registered & Compliant", desc: "Duly registered apex association, fully transparent, accountable, and institutionally sound.", icon: <CheckCircle2 className="h-8 w-8" /> },
  ];

  const quotes = [
    { author: "Indian Industries Association", role: "Official Profile", text: "IIA acts as a close friend and protector of MSME entrepreneurs by taking up any kind of industry related problems and issues for solution at various levels. This personal attention and help is the need of MSME entrepreneurs as it saves lots of time, money and efforts." },
    { author: "IJCC-IIA Partnership", role: "Joint Statement", text: "The MoU between IJCC and IIA represents a landmark bridge between India's largest MSME network and the Indo-Japan business community. Through this alliance, IJCC members will gain direct access to IIA's institutional infrastructure, government connections, and 13,500-strong enterprise ecosystem." },
    { author: "Indian Industries Association", role: "iiaonline.in", text: "IIA aids in building an interface with foreign delegations for technical know-how, exports and imports. IIA identifies new business opportunities for its members through Trade Fairs, Exhibitions, Buyer-Seller Meets, Visits within and outside India, and Foreign tie-ups." }
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
                STRATEGIC PARTNERSHIP
              </Badge>
              <Badge variant="outline" className="border-white text-white px-4 py-1 text-sm font-bold tracking-widest">
                IJCC × IIA
              </Badge>
            </div>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              IJCC Signs MoU with IIA — India's Leading Apex Body for MSMEs
            </h1>
            <p className="text-2xl font-headline italic text-accent max-w-2xl">
              "Empowering IJCC members with MSME facilitation, industrial networking, export support, and government advocacy"
            </p>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              The Indo-Japan Chamber of Commerce (IJCC) has signed a Memorandum of Understanding (MoU) with the Indian Industries Association (IIA). This strategic alliance brings IIA's extensive MSME facilitation infrastructure directly to IJCC's entire membership network, opening powerful new pathways for India-Japan industrial collaboration.
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
            <h2 className="text-4xl font-headline text-primary">About Indian Industries Association (IIA)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Indian Industries Association (IIA) is an apex representative body of Micro, Small and Medium Enterprises (MSMEs), headquartered in Lucknow, Uttar Pradesh. Founded in 1985 and formally constituted as IIA in July 1992, IIA has spent 38+ years creating an enabling environment for MSME development across India's most industrialised states.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a membership base of 13,500+ MSME units and an extensive network of 50+ chapters spread across Uttar Pradesh, Delhi, and Uttarakhand, IIA has earned the GOLD Grade accreditation from NABET, Quality Council of India.
            </p>
            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardContent className="pt-6 italic text-muted-foreground">
                "Indian Industries Association (IIA) is an apex representative body of Micro, Small and Medium Enterprises (MSME) with a strong membership base of about 13500 MSMEs. IIA is a member of National Board of MSME as well as an accredited association from NABET, QCI with GOLD GRADE. IIA's motto is to create an enabling environment for the development of MSMEs in today's ever changing and extremely competitive industrial scenario."
              </CardContent>
            </Card>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-muted/40 flex items-center justify-center">
             <Image 
              src="https://placehold.co/800x600/f3f4f6/4b5563?text=IIA+Partnership" 
              alt="IIA Partnership" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Credentials Table */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-headline text-primary mb-4">IIA — Verified Credentials</h2>
              <p className="text-muted-foreground">The following credentials are verified and publicly listed. IJCC, as an MoU partner, is authorised to display these to establish shared credibility.</p>
            </div>
            <Card className="overflow-hidden border-2">
               <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-primary">
                    <TableRow className="hover:bg-primary">
                      <TableHead className="text-white font-bold w-1/4">Credential</TableHead>
                      <TableHead className="text-white font-bold w-2/4">Verified Detail</TableHead>
                      <TableHead className="text-white font-bold w-1/4">Relevance to Members</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {credentials.map((c, i) => (
                      <TableRow key={i} className="hover:bg-muted/50">
                        <TableCell className="font-bold text-primary">{c.name}</TableCell>
                        <TableCell>{c.detail}</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">{c.relevance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section className="container py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary">Services Available to IJCC Members via IIA</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Access extensive MSME facilitation infrastructure directly through your IJCC membership.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card key={s.id} className="group hover:shadow-xl transition-all border-primary/10 flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex shrink-0 items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.id}</span>
                  <CardTitle className="text-xl leading-tight">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                <ul className="space-y-2 mt-4 inline-block">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> <span>{h}</span>
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
            <h2 className="text-4xl font-headline">Why IJCC's MSME Programmes Are Credible</h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg pt-2">
              Our programmes are delivered in partnership with IIA, India's foremost MSME apex body with a proven 38+ year track record.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {trustSignals.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors">
                <div className="text-accent mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl leading-tight">{item.title}</h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies & Testimonials */}
      <section className="container py-20">
        <h2 className="text-4xl font-headline text-center mb-16 text-primary">Leadership Voices</h2>
        <div className="grid md:grid-cols-3 gap-8">
           {quotes.map((quote, i) => (
            <Card key={i} className="p-8 border-none bg-muted/30 shadow-lg space-y-6 flex flex-col justify-between">
              <div>
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-lg font-medium text-foreground leading-relaxed italic">
                  "{quote.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10">
                <p className="font-bold text-primary">{quote.author}</p>
                <p className="text-sm text-muted-foreground">{quote.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-20">
        <Card className="bg-primary text-primary-foreground p-8 md:p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-headline">MSME & Industrial Partner: IIA</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Apex Body for MSMEs · GOLD Graded (NABET/QCI) · 13,500+ Members · 50+ Chapters
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 h-16 text-xl">
                <Link href="/membership-application">IJCC Membership <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white hover:bg-white/10 font-bold px-12 h-16 text-xl">
                <Link href="https://iiaonline.in" target="_blank">Visit IIA Online <ExternalLink className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="pt-8 grid sm:grid-cols-2 gap-4 border-t border-white/10 max-w-2xl mx-auto text-sm">
              <div className="flex items-center gap-2 justify-center bg-white/5 py-2 px-4 rounded-full font-medium">
                IJCC: info@ijcc.in | +91-92679 19281
              </div>
              <div className="flex items-center gap-2 justify-center bg-white/5 py-2 px-4 rounded-full font-medium">
                IIA: @iiaonline | iiaonline.in
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

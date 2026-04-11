"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/hooks/use-translation";
import { 
  ShieldCheck, 
  Calendar, 
  Users, 
  Settings, 
  CheckCircle2, 
  Zap, 
  Quote, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Laptop,
  ArrowRight,
  Monitor,
  Briefcase,
  Trophy,
  Activity,
  Award
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SEMEventsMoUPage() {
  const { t } = useTranslation();

  const stats = [
    { label: "Conference Organiser", value: "PCO", icon: <Settings className="h-6 w-6" /> },
    { label: "Managed Categories", value: "10+", icon: <Users className="h-6 w-6" /> },
    { label: "Experience", value: "10+ Years", icon: <Calendar className="h-6 w-6" /> },
    { label: "Crisis Delivery", value: "30 Days", icon: <Zap className="h-6 w-6" /> },
  ];

  const credentials = [
    { name: "Company Name", detail: "SEM Events & Meetings OPC Pvt. Ltd.", relevance: "Official event management partner of IJCC" },
    { name: "Headquarters", detail: "Noida, Uttar Pradesh, India", relevance: "Delhi-NCR based — well-placed for IJCC events" },
    { name: "Founded", detail: "Est. 2014 (10+ years)", relevance: "Decade of professional event management" },
    { name: "PCO Capability", detail: "Full Professional Conference Organiser", relevance: "End-to-end conference & event management" },
    { name: "Virtual Events", detail: "Robust multi-hall platform", relevance: "Enables hybrid IJCC events with Japan" },
    { name: "Case Study 1", detail: "ENT Update Workshop — Live Surgery", relevance: "Flawless execution of high-stakes live events" },
    { name: "Case Study 2", detail: "World Neuroscience Conclave — Rescue", relevance: "Crisis management & reliability under pressure (30-day delivery)" },
    { name: "Website", detail: "semmeetings.com", relevance: "Verified official company website" },
  ];

  const services = [
    {
      id: "01",
      title: "Association Meetings & Conferences",
      desc: "Seasoned PCO with structured teams for secretariat, registration, abstracts, and onsite production.",
      icon: <Users className="h-6 w-6" />,
      highlights: ["Secretariat management", "Abstract management", "Registration management"]
    },
    {
      id: "02",
      title: "Corporate Meetings & Events",
      desc: "Speed-matched decision making with competitive rates, curated menus, and VIP transport.",
      icon: <Briefcase className="h-6 w-6" />,
      highlights: ["Competitive hotel rates", "High-end AV equipment", "Social program planning"]
    },
    {
      id: "03",
      title: "Product Launches",
      desc: "Concept to execution rollouts combining creative staging and high-impact production.",
      icon: <Zap className="h-6 w-6" />,
      highlights: ["Creative stage design", "Media coordination", "Streaming support"]
    },
    {
      id: "04",
      title: "Exhibitions & Trade Shows",
      desc: "Full-scale stall management and visitor engagement for bilateral trade showcases.",
      icon: <Award className="h-6 w-6" />,
      highlights: ["Floor planning", "Exhibitor coordination", "Sponsorship branding"]
    },
    {
      id: "05",
      title: "Incentive Programmes",
      desc: "High-octane rewards with luxury hospitality, gala evenings, and motivational speakers.",
      icon: <Trophy className="h-6 w-6" />,
      highlights: ["Best-in-class venues", "VIP transport", "Themed gala evenings"]
    },
    {
      id: "06",
      title: "Virtual & Hybrid Events",
      desc: "Seamless digital access for Japan-based participants with multi-hall breakout platforms.",
      icon: <Monitor className="h-6 w-6" />,
      highlights: ["Multi-hall platforms", "Hybrid inauguration relay", "Virtual exhibitions"]
    }
  ];

  const trustSignals = [
    { title: "Decade of Experience", desc: "Established in 2014, SEM Events brings over 10 years of hands-on experience managing conferences and conclaves." },
    { title: "Crisis Management", desc: "Successfully delivered the World Neuroscience Conclave in just 30 days after a last-minute organizer change." },
    { title: "Flawless Execution", desc: "Proven track record with zero-disruption live surgery transmissions and high-stakes international summits." },
    { title: "Virtual & Hybrid", desc: "Robust platforms designed specifically for international bilateral events requiring remote Japan participation." },
    { title: "Structured Team", desc: "Dedicated heads for secretariat, AV, logistics, and transport reporting to a central operations lead." },
    { title: "National Reach", desc: "Strong network of production and hospitality partners ensuring consistent quality across India and abroad." },
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
                IJCC × SEM EVENTS
              </Badge>
            </div>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              IJCC's Events are Professionally Managed by SEM Events & Meetings
            </h1>
            <p className="text-2xl font-headline italic text-accent max-w-2xl">
              "Every IJCC delegation, summit, and bilateral event is executed to the highest professional standard."
            </p>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              The Indo-Japan Chamber of Commerce has partnered with SEM Events & Meetings OPC Pvt. Ltd. to deliver world-class conferences, exhibitions, and summits for our membership network.
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
            <h2 className="text-4xl font-headline text-primary">About Our Event Management Partner</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SEM Events & Meetings OPC Pvt. Ltd. is a leading Professional Conference Organiser (PCO) in India, setting benchmarks in the management of large-scale specialties.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Headquartered in Noida, SEM brings precision, speed, and creativity to every dimensión of event execution — from secretariat management to AV production and transport logistics.
            </p>
            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardContent className="pt-6 italic text-muted-foreground">
                "SEM Events aims to become the largest and most reliable event management company in India, setting benchmarks in specialties like conferences, exhibitions, stage shows, and corporate product launches."
              </CardContent>
            </Card>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://i.ibb.co/LDHJH91K/ijcc-sem.jpg" 
              alt="SEM Events Management" 
              fill 
              className="object-cover"
              data-ai-hint="professional event"
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
              <p className="text-muted-foreground">Proof of SEM's professional institutional standing and operational reliability.</p>
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
          <h2 className="text-4xl font-headline text-primary">SEM Event Management Services for IJCC</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Precision-engineered event solutions for every IJCC requirement.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-4xl font-headline">Why Our Events Are Reliable</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">Backed by professional infrastructure and proven crisis management.</p>
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

      {/* Case Studies & Testimonials */}
      <section className="container py-20">
        <h2 className="text-4xl font-headline text-center mb-16 text-primary">Case Studies & Social Proof</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 border-none bg-muted/30 shadow-xl space-y-6">
            <Quote className="h-12 w-12 text-primary/10" />
            <p className="text-xl font-headline italic text-primary leading-relaxed">
              "This was the most flawless and professionally executed live surgery we've ever been part of. The SEM Events team ensured zero disruptions and made complex knowledge accessible in real time."
            </p>
            <div className="pt-4 border-t border-muted">
              <p className="font-bold">Dr. Bhushan Patil</p>
              <p className="text-sm text-muted-foreground">Organising Secretary, ENT Association of Gurugram</p>
            </div>
          </Card>
          <div className="space-y-6">
            <Card className="p-6 border-2">
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <Activity className="h-5 w-5" /> Case Study: Conclave Rescue
              </div>
              <h4 className="text-xl font-bold mb-2">World Neuroscience Conclave</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Challenge: Last-minute organiser change requiring full event rescue and re-execution within 30 days.
              </p>
              <div className="text-sm font-bold text-primary">Result: Successfully delivered in 30 days — Exceptional crisis management.</div>
            </Card>
            <Card className="p-6 border-2">
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <Monitor className="h-5 w-5" /> Case Study: Flawless Live Transmission
              </div>
              <h4 className="text-xl font-bold mb-2">Gurugram ENT Update Workshop</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Challenge: High-stakes live surgery transmission from Palm Club, Gurugram.
              </p>
              <div className="text-sm font-bold text-primary">Result: Zero disruptions — Complex medical knowledge relayed in real-time.</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-20">
        <Card className="bg-primary text-primary-foreground p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-headline">Planning an IJCC Event or Delegation?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Professionally Managed by SEM Events & Meetings OPC Pvt. Ltd. · 10+ Years Experience · PCO Certified.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 h-16 text-xl">
                <Link href="/contact">Inquire for Events <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white hover:bg-white/10 font-bold px-12 h-16 text-xl">
                <Link href="https://semmeetings.com" target="_blank">Visit SEM Events <ExternalLink className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="pt-8 grid sm:grid-cols-3 gap-8 border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5 text-accent" /> info@semmeetings.com
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="h-5 w-5 text-accent" /> +91 120 354 6679
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5 text-accent" /> Noida, India
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

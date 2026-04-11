
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/hooks/use-translation";
import { 
  Trophy, 
  Users, 
  Clock, 
  Target, 
  ArrowRight, 
  Handshake,
  Globe,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Zap,
  Quote,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Laptop
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SpoltoJVPage() {
  const { t } = useTranslation();

  const stats = [
    { label: "People Impacted", value: "100K+", icon: <Users className="h-6 w-6" /> },
    { label: "Coaches & Academies", value: "1,200+", icon: <Trophy className="h-6 w-6" /> },
    { label: "Coaching Hours", value: "20,000+", icon: <Clock className="h-6 w-6" /> },
    { label: "Sports Covered", value: "12", icon: <Activity className="h-6 w-6" /> },
    { label: "Happy Customers", value: "500+", icon: <Target className="h-6 w-6" /> },
  ];

  const credentials = [
    { name: "Company Name", detail: "Spolto (spolto.com)", relevance: "Official JV Execution Partner of IJCC" },
    { name: "Founded", detail: "2021", relevance: "3+ years of operational sports platform experience" },
    { name: "Headquarters", detail: "Kalyani Nagar, Pune, India", relevance: "India-based, urban sports focus" },
    { name: "Website", detail: "spolto.com", relevance: "Verified official company website" },
    { name: "People Impacted", detail: "100,000+", relevance: "Proven mass-market reach" },
    { name: "Coach Selection", detail: "Top 10%", relevance: "Vetted coaches for high-stakes exchanges" },
    { name: "Tech Platform", detail: "Spolto app + Playpad", relevance: "Digital infrastructure for logistics" },
  ];

  const programmes = [
    { id: "01", title: "Youth Sports Camps", icon: <Users className="h-6 w-6" />, desc: "Multi-day residential and day camps bringing Indian and Japanese youth together." },
    { id: "02", title: "Bilateral Tournaments", icon: <Trophy className="h-6 w-6" />, desc: "Annual tournaments fostering sporting excellence and mutual respect." },
    { id: "03", title: "Japanese Coaching Clinics", icon: <Zap className="h-6 w-6" />, desc: "Bringing specialist Japanese coaches to India for elite training." },
    { id: "04", title: "India Sports Export", icon: <Globe className="h-6 w-6" />, desc: "Deploying certified Indian coaches to Japan for Cricket, Yoga, and Chess." },
    { id: "05", title: "Corporate Sports Days", icon: <Briefcase className="h-6 w-6" />, desc: "Professionally managed team building for IJCC member companies." },
    { id: "06", title: "Friendship Sports League", icon: <Handshake className="h-6 w-6" />, desc: "Flagship multi-sport seasonal competition between the two nations." },
    { id: "07", title: "Virtual & Hybrid Challenges", icon: <Laptop className="h-6 w-6" />, desc: "Connecting athletes through timed fitness events and online coaching." },
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
                JOINT VENTURE LAUNCH
              </Badge>
              <Badge variant="outline" className="border-white text-white px-4 py-1 text-sm font-bold tracking-widest">
                IJCC × SPOLTO
              </Badge>
            </div>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              IJCC & Spolto Launch India–Japan Sports Exchange Joint Venture
            </h1>
            <p className="text-2xl font-headline italic text-accent max-w-2xl">
              "Sport Is the Language We Share — India Meets Japan Through IJCC × Spolto"
            </p>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              The Indo-Japan Chamber of Commerce and Spolto — India's leading SportsTech platform — are joining forces to create the first institutionalised India-Japan bilateral sports exchange programme.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

      {/* Section 2: About Spolto */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline text-primary">About Our Execution Partner — Spolto</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spolto is India's trusted platform for sports coaching — a SportsTech company founded in 2021 and headquartered in Kalyani Nagar, Pune. Their mission is bold: to help one million people fall in love with sports.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In just a few years, Spolto has built a network of 1,200+ coaches covering 12 sports, delivering over 20,000 coaching hours through their proprietary "Playpad" venue infrastructure.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Official Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  "To help +1 Million People to Fall in Love with Sports by making it easier to discover, connect, and play."
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-accent" /> Official Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  "To connect people in sports and build a thriving community that goes beyond the game."
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://i.ibb.co/Fk9GvcTn/ijcc-spolto.jpg" 
              alt="Spolto Coaching" 
              fill 
              className="object-cover"
              data-ai-hint="sports coaching"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Credentials Table */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-headline text-primary mb-4">Verified Credentials</h2>
              <p className="text-muted-foreground">Sourced from Spolto's official public records to establish shared credibility.</p>
            </div>
            <Card className="overflow-hidden border-2">
              <Table>
                <TableHeader className="bg-primary">
                  <TableRow>
                    <TableHead className="text-white font-bold">Credential</TableHead>
                    <TableHead className="text-white font-bold">Verified Detail</TableHead>
                    <TableHead className="text-white font-bold">Relevance to JV</TableHead>
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

      {/* Section 4: Programmes */}
      <section className="container py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary">India-Japan Sports Exchange Programmes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A full annual calendar of bilateral activities delivering elite coaching and cultural integration.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((p) => (
            <Card key={p.id} className="group hover:shadow-xl transition-all border-primary/10">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{p.id}</span>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 5: Framework */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline">The Partnership Framework</h2>
              <p className="text-primary-foreground/80 text-lg">Assigning clear roles based on core strengths to form a complete, end-to-end infrastructure.</p>
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Handshake className="h-10 w-10 text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">IJCC Brings</h4>
                    <ul className="text-sm text-primary-foreground/70 space-y-2">
                      <li>• 50+ years of bilateral authority</li>
                      <li>• Relationships with JETRO, JICA, & Embassies</li>
                      <li>• Programme governance & bilateral branding</li>
                      <li>• Visa facilitation for coach exchanges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:mt-24">
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <Zap className="h-10 w-10 text-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2">Spolto Brings</h4>
                  <ul className="text-sm text-primary-foreground/70 space-y-2">
                    <li>• 1,200+ certified coaches across 12 sports</li>
                    <li>• Playpad vetted venue network across India</li>
                    <li>• SportsTech platform for registration & scoring</li>
                    <li>• 20,000+ hours of delivery experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Trust Signals */}
      <section className="container py-20">
        <h2 className="text-4xl font-headline text-center mb-16 text-primary">Why Trust the IJCC × Spolto Sports Programme</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { t: "Operationally Proven", d: "Spolto is a real-world SportsTech leader, not just a concept." },
            { t: "100K+ People Impacted", d: "Launching with a tested, engaged ecosystem from day one." },
            { t: "Elite Vetting (Top 10%)", d: "Every coach passes a rigorous vetting process for quality assurance." },
            { t: "Proven Social Impact", d: "Partnerships like Slum Soccer demonstrate high bilateral CSR values." },
            { t: "Corporate Pedigree", d: "Already delivered for major clients like Tata Trent." },
            { t: "50+ Years Authority", d: "IJCC's institutional credibility guarantees genuine Japan participation." },
            { t: "The Coach Promise", d: "Every session is expert-led, structured, and personalized." },
            { t: "Technology Backed", d: "Digital platform manages the entire lifecycle reliably." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-4 hover:bg-muted/50 rounded-xl transition-colors">
              <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-primary">{item.t}</h4>
                <p className="text-muted-foreground">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Quotes */}
      <section className="bg-muted/30 py-20 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="relative p-8 border-none bg-white shadow-xl rotate-1">
              <Quote className="absolute top-4 right-8 h-12 w-12 text-primary/10" />
              <CardContent className="p-0 space-y-4">
                <p className="text-xl font-headline italic text-primary">
                  "At Spolto, we believe everyone deserves to experience the joy of sports. We make it easy, accessible, and fun."
                </p>
                <div className="pt-4 border-t border-muted">
                  <p className="font-bold">Safa Soltani</p>
                  <p className="text-sm text-muted-foreground">Co-Founder, Spolto</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative p-8 border-none bg-white shadow-xl -rotate-1">
              <Quote className="absolute top-4 right-8 h-12 w-12 text-primary/10" />
              <CardContent className="p-0 space-y-4">
                <p className="text-xl font-headline italic text-primary">
                  "Spolto brings structure to my sessions and flexibility to my schedule. Their systems make it easy to focus on quality training."
                </p>
                <div className="pt-4 border-t border-muted">
                  <p className="font-bold">Coach Ananya</p>
                  <p className="text-sm text-muted-foreground">Certified Youth Expert</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8: Footer/Contact */}
      <section className="container py-20">
        <Card className="bg-primary text-primary-foreground p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-headline">Ready to Join the Movement?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Execution Partner for IJCC India–Japan Sports Exchange Programme. 1,200+ Coaches · 100K+ Impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 h-16 text-xl">
                <Link href="/contact">Inquire Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white hover:bg-white/10 font-bold px-12 h-16 text-xl">
                <Link href="https://spolto.com" target="_blank">Visit Spolto <ExternalLink className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="pt-8 grid sm:grid-cols-3 gap-8 border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5 text-accent" /> info@ijcc.in
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="h-5 w-5 text-accent" /> +91-92679 19281
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5 text-accent" /> Pune, India
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

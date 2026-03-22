
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Activity
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

  return (
    <div className="min-h-screen bg-background">
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

      {/* Content Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-xl max-w-none text-foreground">
              <h2 className="text-4xl font-headline text-primary">Purpose of This Partnership</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                IJCC and Spolto are entering a Joint Venture to conduct structured bilateral sports activities between India and Japan. This collaboration connects two nations through the universal love of sport, from cricket coaching clinics in Tokyo to Judo masterclasses in Delhi.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <Card className="border-l-4 border-l-primary shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" /> Execution Partner
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-bold text-xl">Spolto</p>
                    <p className="text-muted-foreground">Providing its certified coach network, SportsTech platform, Playpad venue infrastructure, and grassroots delivery expertise.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Handshake className="h-5 w-5 text-accent" /> Institutional Partner
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-bold text-xl">IJCC</p>
                    <p className="text-muted-foreground">Provides the bilateral institutional authority, India-Japan networks, and comprehensive programme governance.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-headline text-primary border-b-2 border-primary/10 pb-4">Core Focus Areas</h3>
              <div className="grid gap-6">
                {[
                  { title: "Bilateral Sports Exchange", desc: "Structured programmes for athletes and students to train in both India and Japan.", icon: <Globe className="h-6 w-6" /> },
                  { title: "Certified Coach Network", desc: "Access to 1,200+ elite coaches and academies for professional development.", icon: <Trophy className="h-6 w-6" /> },
                  { title: "Grassroots Delivery", desc: "Expertise in implementing high-quality sports training at the community level.", icon: <Users className="h-6 w-6" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-border hover:shadow-xl transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-28 space-y-8">
              <Card className="bg-primary text-primary-foreground overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-headline">Get Involved</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <p className="text-primary-foreground/80">Are you interested in participating in the India-Japan sports exchange programmes?</p>
                  <Button asChild variant="secondary" className="w-full font-bold">
                    <Link href="/contact">Inquire Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="p-8 rounded-3xl border-2 border-dashed border-muted-foreground/20 space-y-6">
                <h4 className="font-headline text-xl text-center">Spolto Credentials</h4>
                <ul className="space-y-4">
                  {[
                    "1,200+ Certified Coaches",
                    "20,000+ Coaching Hours",
                    "12 Major Sports Covered",
                    "Playpad Infrastructure",
                    "Publicly Verified Reach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-muted py-20">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-headline max-w-2xl mx-auto">Empowering the next generation of Indo-Japan sports leaders.</h2>
          <div className="flex justify-center gap-4">
            <Image src="https://i.postimg.cc/mkDLyKfN/JPG-LOGO-removebg-preview.png" alt="IJCC" width={100} height={100} className="h-16 w-auto object-contain" />
            <div className="w-px h-16 bg-border mx-4" />
            <div className="h-16 flex items-center font-bold text-2xl tracking-tighter text-muted-foreground uppercase">Spolto</div>
          </div>
        </div>
      </section>
    </div>
  );
}

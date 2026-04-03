
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
  Star,
  Award,
  BookOpen,
  Building2,
  Trophy
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AIMAMoUPage() {
  const { t } = useTranslation();

  const stats = [
    { label: t('aima_stat_years_label'), value: "75+", icon: <History className="h-6 w-6" /> },
    { label: t('aima_stat_trained_label'), value: "4 Lakh+", icon: <Users className="h-6 w-6" /> },
    { label: t('aima_stat_members_label'), value: "3,000+", icon: <Building2 className="h-6 w-6" /> },
    { label: t('aima_stat_tieups_label'), value: "30+", icon: <Globe className="h-6 w-6" /> },
  ];

  const credentials = [
    { name: t('aima_cred_name_label'), detail: "All India Management Association (AIMA)", relevance: t('aima_cred_name_rel') },
    { name: t('aima_cred_type_label'), detail: "National Apex Body for Management", relevance: t('aima_cred_type_rel') },
    { name: t('aima_cred_founded_label'), detail: "1957", relevance: t('aima_cred_founded_rel') },
    { name: t('aima_cred_hq_label'), detail: "New Delhi, India", relevance: t('aima_cred_hq_rel') },
    { name: t('aima_cred_affiliated_label'), detail: "3,000+ Organisations", relevance: t('aima_cred_affiliated_rel') },
    { name: t('aima_cred_trained_label'), detail: "4 Lakh+ Professionals", relevance: t('aima_cred_trained_rel') },
    { name: t('aima_cred_mat_label'), detail: "MAT® — 600+ B-schools", relevance: t('aima_cred_mat_rel') },
    { name: t('aima_cred_govt_label'), detail: "Ministry of Education, Govt. of India", relevance: t('aima_cred_govt_rel') },
  ];

  const services = [
    {
      id: "mdp",
      title: t('aima_service_mdp_title'),
      desc: t('aima_service_mdp_desc'),
      icon: <Briefcase className="h-6 w-6" />,
      highlights: [t('aima_service_mdp_h1'), t('aima_service_mdp_h2'), t('aima_service_mdp_h3')]
    },
    {
      id: "mat",
      title: t('aima_service_mat_title'),
      desc: t('aima_service_mat_desc'),
      icon: <GraduationCap className="h-6 w-6" />,
      highlights: [t('aima_service_mat_h1'), t('aima_service_mat_h2'), t('aima_service_mat_h3')]
    },
    {
      id: "dl",
      title: t('aima_service_dl_title'),
      desc: t('aima_service_dl_desc'),
      icon: <BookOpen className="h-6 w-6" />,
      highlights: [t('aima_service_dl_h1'), t('aima_service_dl_h2'), t('aima_service_dl_h3')]
    },
    {
      id: "forums",
      title: t('aima_service_forums_title'),
      desc: t('aima_service_forums_desc'),
      icon: <Award className="h-6 w-6" />,
      highlights: [t('aima_service_forums_h1'), t('aima_service_forums_h2'), t('aima_service_forums_h3')]
    }
  ];

  const trustSignals = [
    { title: t('aima_trust_1_title'), desc: t('aima_trust_1_desc') },
    { title: t('aima_trust_2_title'), desc: t('aima_trust_2_desc') },
    { title: t('aima_trust_3_title'), desc: t('aima_trust_3_desc') },
    { title: t('aima_trust_4_title'), desc: t('aima_trust_4_desc') },
    { title: t('aima_trust_5_title'), desc: t('aima_trust_5_desc') },
    { title: t('aima_trust_6_title'), desc: t('aima_trust_6_desc') },
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
                STRATEGIC MoU
              </Badge>
              <Badge variant="outline" className="border-white text-white px-4 py-1 text-sm font-bold tracking-widest">
                IJCC × AIMA
              </Badge>
            </div>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              {t('aima_hero_title')}
            </h1>
            <p className="text-2xl font-headline italic text-accent max-w-2xl">
              {t('aima_hero_tagline')}
            </p>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
              {t('aima_hero_desc')}
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
            <h2 className="text-4xl font-headline text-primary">{t('aima_about_title')}</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>{t('aima_about_p1')}</p>
              <p>{t('aima_about_p2')}</p>
            </div>
            <Card className="bg-primary/5 border-l-4 border-primary">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-2" />
                <p className="italic text-muted-foreground">
                  {t('aima_mission_quote')}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-2">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" 
              alt="AIMA Management Training" 
              fill 
              className="object-cover"
              data-ai-hint="professional meeting"
            />
          </div>
        </div>
      </section>

      {/* Credentials Table */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-headline text-primary mb-4">{t('aima_cred_title')}</h2>
              <p className="text-muted-foreground">{t('aima_cred_subtitle')}</p>
            </div>
            <Card className="overflow-hidden border-2">
              <Table>
                <TableHeader className="bg-primary">
                  <TableRow>
                    <TableHead className="text-white font-bold">{t('aima_table_h1')}</TableHead>
                    <TableHead className="text-white font-bold">{t('aima_table_h2')}</TableHead>
                    <TableHead className="text-white font-bold">{t('aima_table_h3')}</TableHead>
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
          <h2 className="text-4xl font-headline text-primary">{t('aima_services_title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('aima_services_subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Card key={s.id} className="group hover:shadow-xl transition-all border-primary/10">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <div>
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
            <h2 className="text-4xl font-headline">{t('aima_trust_title')}</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">{t('aima_trust_subtitle')}</p>
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
                {t('aima_quote_1')}
              </p>
              <div className="pt-4 border-t border-muted">
                <p className="font-bold">AIMA Leadership</p>
                <p className="text-sm text-muted-foreground">All India Management Association</p>
              </div>
            </CardContent>
          </Card>
          <Card className="relative p-8 border-none bg-muted/30 shadow-xl -rotate-1">
            <Quote className="absolute top-4 right-8 h-12 w-12 text-primary/10" />
            <CardContent className="p-0 space-y-4">
              <p className="text-xl font-headline italic text-primary">
                {t('aima_quote_2')}
              </p>
              <div className="pt-4 border-t border-muted">
                <p className="font-bold">IJCC Strategic Desk</p>
                <p className="text-sm text-muted-foreground">Partnership Secretariat</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-20">
        <Card className="bg-primary text-primary-foreground p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-headline">{t('aima_cta_title')}</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              {t('aima_cta_desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 h-16 text-xl">
                <Link href="/membership-application">{t('aima_cta_button_1')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white hover:bg-white/10 font-bold px-12 h-16 text-xl">
                <Link href="https://aima.in" target="_blank">{t('aima_cta_button_2')} <ExternalLink className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="pt-8 grid sm:grid-cols-3 gap-8 border-t border-white/10 max-w-3xl mx-auto text-sm">
              <div className="flex items-center gap-2 justify-center">
                <Globe className="h-5 w-5 text-accent" /> aima.in
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5 text-accent" /> info@ijcc.in
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5 text-accent" /> New Delhi, India
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

function History(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

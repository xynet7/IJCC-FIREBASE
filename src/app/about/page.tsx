
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  GraduationCap, 
  Globe, 
  Zap, 
  Scale, 
  Building2, 
  Target, 
  Users, 
  Briefcase, 
  Lightbulb, 
  Building, 
  Landmark, 
  Users2, 
  University, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  Database, 
  SearchCode,
  ArrowRight,
  Sparkles,
  Sprout,
  Cpu,
  Trophy,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const leadershipData = [
  { id: "rahulMishra", imageUrl: "https://i.postimg.cc/3JdfvHM7/rahulsir1.jpg" },
  { id: "gajendraBadgujar", imageUrl: "https://i.postimg.cc/25KMJ8NH/gajendra1.jpg" },
  { id: "prakashYadav", imageUrl: "https://i.postimg.cc/9QnxQ442/prakash2.jpg" },
  { id: "neelamRamaiah", imageUrl: "https://i.postimg.cc/L5nGMJBJ/neelam-removebg-preview.png" },
  { id: "surajitKalita", imageUrl: "https://i.ibb.co/xcg7tmW/sujit.jpg" },
  { id: "nidhi", imageUrl: "https://i.postimg.cc/d3dvvrdY/Nidhi.jpg" },
  { id: "mukeshRanjan", imageUrl: "https://i.postimg.cc/HnrRBVXS/mukesh-removebg.png" },
  { id: "yokoTorii", imageUrl: "https://i.ibb.co/99zx9ZGn/yoko-torii.jpg" },
  { id: "dhruvHans", imageUrl: "https://i.ibb.co/8D7x8kKq/Mr-Dhruv-Hans-Dhruv.jpg" },
  { id: "muazAhmed", imageUrl: "https://i.ibb.co/fYjdtSwp/Mr-Muaz-Ahmed.jpg" },
  { id: "sushilKumarChauhan", imageUrl: "https://i.ibb.co/tMVw5jbc/mr-sushil-kumar.png" },
  { id: "parijatTiwari", imageUrl: "https://i.ibb.co/Rp71ncwh/mr-parijat-tiwari.png" },
  { id: "krishnanNarayanan", imageUrl: "https://i.ibb.co/WNJvF1YB/mr-krishnan-narayanan.jpg" },
];

const advisoryBoard = [
  { id: "tomoyuki", name: "Mr. Tomoyuki Iwama", imageUrl: "https://i.postimg.cc/025b7P5b/iwama-removebg-preview.png" },
  { id: "naveen", name: "Mr. Naveen Verma", imageUrl: "https://i.postimg.cc/CK70VjSM/Naveen-Verma-2.jpg" },
  { id: "randeep", name: "Dr. Randeep Rakwal", imageUrl: "https://i.postimg.cc/Gh6Kf8sB/randeep-removebg-preview.png" },
  { id: "kenichiro", name: "Mr. Kenichiro Iwahori", imageUrl: "https://i.ibb.co/VcG0s7QJ/iwahori-removebg-preview.png" },
  { id: "supratic", name: "Dr. Supratic Gupta", imageUrl: "https://i.postimg.cc/7LmS9f7R/supratic1.jpg" },
  { id: "markus", name: "Mr. Markus", imageUrl: "https://i.postimg.cc/brHtYXS7/Markus-removebg-preview.png" },
  { id: "anil", name: "Mr. Anil K. Khandelwal", imageUrl: "https://i.postimg.cc/Qxz8QsHq/anil1.jpg" },
  { id: "jatinder", name: "Dr. Jatinder Khanna", imageUrl: "https://i.postimg.cc/CKgMZKnZ/jatinder.jpg" },
  { id: "maushumi", name: "Dr. Maushumi Barooah", imageUrl: "https://i.postimg.cc/h4TXtN53/mausimi1.jpg" },
  { id: "rajesh", name: "Mr. Rajesh Mehta", imageUrl: "https://i.postimg.cc/Vsb5G5Qh/rajesh-removebg-preview.png" },
  { id: "vinod", name: "Dr. Vinod K. Yadavendu", imageUrl: "https://i.postimg.cc/fbKbhgFG/vinod-removebg.png" },
  { id: "pdsharma", name: "Mr. P.D. Sharma", imageUrl: "https://i.postimg.cc/RVBWhvf3/pd-sharma.jpg" },
  { id: "anjali", name: "Ms. Anjali Sharma", imageUrl: "https://i.postimg.cc/kX4zvbb0/anjali1.jpg" },
];

const verticals = [
  { id: "01", icon: <Handshake className="h-6 w-6" />, titleKey: "vertical_01_title", descKey: "vertical_01_desc", points: ["vertical_01_p1", "vertical_01_p2", "vertical_01_p3", "vertical_01_p4", "vertical_01_p5", "vertical_01_p6"] },
  { id: "02", icon: <University className="h-6 w-6" />, titleKey: "vertical_02_title", descKey: "vertical_02_desc", points: ["vertical_02_p1", "vertical_02_p2", "vertical_02_p3", "vertical_02_p4", "vertical_02_p5"] },
  { id: "03", icon: <Users2 className="h-6 w-6" />, titleKey: "vertical_03_title", descKey: "vertical_03_desc", points: ["vertical_03_p1", "vertical_03_p2", "vertical_03_p3", "vertical_03_p4", "vertical_03_p5"] },
  { id: "04", icon: <Lightbulb className="h-6 w-6" />, titleKey: "vertical_04_title", descKey: "vertical_04_desc", points: ["vertical_04_p1", "vertical_04_p2", "vertical_04_p3", "vertical_04_p4", "vertical_04_p5"] },
  { id: "05", icon: <Zap className="h-6 w-6" />, titleKey: "vertical_05_title", descKey: "vertical_05_desc", points: ["vertical_05_p1", "vertical_05_p2", "vertical_05_p3", "vertical_05_p4"] },
  { id: "06", icon: <Scale className="h-6 w-6" />, titleKey: "vertical_06_title", descKey: "vertical_06_desc", points: ["vertical_06_p1", "vertical_06_p2", "vertical_06_p3", "vertical_06_p4"] },
  { id: "07", icon: <Building2 className="h-6 w-6" />, titleKey: "vertical_07_title", descKey: "vertical_07_desc", points: ["vertical_07_p1", "vertical_07_p2", "vertical_07_p3", "vertical_07_p4", "vertical_07_p5"] },
  { id: "08", icon: <Sprout className="h-6 w-6" />, titleKey: "vertical_08_title", descKey: "vertical_08_desc", points: ["vertical_08_p1", "vertical_08_p2", "vertical_08_p3", "vertical_08_p4", "vertical_08_p5"] },
  { id: "09", icon: <Target className="h-6 w-6" />, titleKey: "vertical_09_title", descKey: "vertical_09_desc", points: ["vertical_09_p1", "vertical_09_p2", "vertical_09_p3", "vertical_09_p4", "vertical_09_p5"] },
  { id: "10", icon: <Database className="h-6 w-6" />, titleKey: "vertical_10_title", descKey: "vertical_10_desc", points: ["vertical_10_p1", "vertical_10_p2", "vertical_10_p3", "vertical_10_p4", "vertical_10_p5"] },
  { id: "11", icon: <Cpu className="h-6 w-6" />, titleKey: "vertical_11_title", descKey: "vertical_11_desc", points: ["vertical_11_p1", "vertical_11_p2", "vertical_11_p3", "vertical_11_p4", "vertical_11_p5"] },
  { id: "12", icon: <SearchCode className="h-6 w-6" />, titleKey: "vertical_12_title", descKey: "vertical_12_desc", points: ["vertical_12_p1", "vertical_12_p2", "vertical_12_p3", "vertical_12_p4", "vertical_12_p5"] }
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold tracking-widest uppercase mb-4">
              {t('about_hero_badge')}
            </Badge>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              {t('about_hero_title')}
            </h1>
            <p className="text-2xl font-headline italic text-accent">
              "{t('about_hero_tagline')}"
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/80 font-medium">
              <span>{t('vertical_01_title')}</span> • <span>{t('vertical_02_title')}</span> • <span>{t('vertical_03_title')}</span> • <span>{t('vertical_04_title')}</span> • <span>{t('vertical_05_title')}</span> • <span>{t('vertical_06_title')}</span> • <span>{t('vertical_07_title')}</span> • <span>{t('vertical_08_title')}</span> • <span>{t('vertical_09_title')}</span> • <span>{t('vertical_10_title')}</span> • <span>{t('vertical_11_title')}</span> • <span>{t('vertical_12_title')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-headline text-primary border-b-4 border-accent/30 pb-2 inline-block">
              {t('about_intro_title')}
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
              <p>{t('about_intro_p1')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('about_intro_p2') }} />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <Card className="bg-primary/5 border-none shadow-none text-left">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-primary uppercase tracking-wider">
                    <Target className="h-5 w-5" /> {t('about_mission_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  {t('about_mission_desc')}
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-none shadow-none text-left">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-accent uppercase tracking-wider">
                    <Globe className="h-5 w-5" /> {t('about_vision_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  {t('about_vision_desc')}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl space-y-8">
            <h3 className="text-2xl font-headline text-primary">{t('about_facts_title')}</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: t('about_facts_est'), value: "2025", icon: <Calendar className="text-primary h-5 w-5" /> },
                { label: t('about_facts_verts'), value: "12", icon: <Layers className="text-primary h-5 w-5" /> },
                { label: t('about_facts_mous'), value: "5", icon: <Handshake className="text-primary h-5 w-5" /> },
                { label: t('about_facts_members'), value: "100+", icon: <Users className="text-primary h-5 w-5" /> },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    {stat.icon} {stat.label}
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-muted-foreground/20 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('about_facts_type_label')}:</span>
                <span className="font-bold">{t('about_facts_type_val')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('about_facts_hq_label')}:</span>
                <span className="font-bold">{t('about_facts_hq_val')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('about_facts_web_label')}:</span>
                <span className="font-bold">www.ijcc.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline text-primary">{t('about_objectives_title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic">{t('about_objectives_subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", icon: <Briefcase className="h-6 w-6 text-primary" />, title: t('obj_01_title'), desc: t('obj_01_desc') },
              { id: "02", icon: <GraduationCap className="h-6 w-6 text-primary" />, title: t('obj_02_title'), desc: t('obj_02_desc') },
              { id: "03", icon: <Users2 className="h-6 w-6 text-primary" />, title: t('obj_03_title'), desc: t('obj_03_desc') },
              { id: "04", icon: <Zap className="h-6 w-6 text-primary" />, title: t('obj_04_title'), desc: t('obj_04_desc') },
              { id: "05", icon: <Sparkles className="h-6 w-6 text-primary" />, title: t('obj_05_title'), desc: t('obj_05_desc') },
              { id: "06", icon: <Scale className="h-6 w-6 text-primary" />, title: t('obj_06_title'), desc: t('obj_06_desc') },
              { id: "07", icon: <Building2 className="h-6 w-6 text-primary" />, title: t('obj_07_title'), desc: t('obj_07_desc') },
              { id: "08", icon: <Sprout className="h-6 w-6 text-primary" />, title: t('obj_08_title'), desc: t('obj_08_desc') },
              { id: "09", icon: <Target className="h-6 w-6 text-primary" />, title: t('obj_09_title'), desc: t('obj_09_desc') },
              { id: "10", icon: <Database className="h-6 w-6 text-primary" />, title: t('obj_10_title'), desc: t('obj_10_desc') },
              { id: "11", icon: <Cpu className="h-6 w-6 text-primary" />, title: t('obj_11_title'), desc: t('obj_11_desc') },
              { id: "12", icon: <SearchCode className="h-6 w-6 text-primary" />, title: t('obj_12_title'), desc: t('obj_12_desc') },
            ].map((obj) => (
              <Card key={obj.id} className="group border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="text-primary/20 text-3xl font-bold group-hover:text-primary/40 transition-colors">{obj.id}</div>
                  <div className="bg-primary/5 p-2 rounded-lg">{obj.icon}</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle className="text-lg">{obj.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organisation Verticals */}
      <section className="container py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">{t('about_verts_title')}</h2>
            <p className="text-muted-foreground">{t('about_verts_subtitle')}</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {verticals.map((v) => (
              <AccordionItem key={v.id} value={v.id} className="border rounded-2xl px-6 bg-white overflow-hidden shadow-sm">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-primary text-white font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      {v.id}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-primary shrink-0">{v.icon}</div>
                      <span className="text-xl font-headline">{t(v.titleKey)}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2 pl-12">
                  <div className="space-y-4">
                    <p className="text-primary font-semibold">{t(v.descKey)}</p>
                    <ul className="flex flex-col gap-y-3">
                      {v.points.map((pointKey, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{t(pointKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline uppercase tracking-tight">{t('about_leadership_title')}</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto italic">
              {t('about_leadership_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipData.map((member) => (
              <Dialog key={member.id}>
                <DialogTrigger asChild>
                  <Card className="bg-white/5 border-white/10 text-center space-y-4 group hover:bg-white/10 transition-all cursor-pointer transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 bg-white/10 flex items-center justify-center">
                        {member.imageUrl ? (
                          <Image src={member.imageUrl} alt={t(`team_${member.id}_name`)} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <Users2 className="h-12 w-12 text-white/50" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <h4 className="text-xl font-bold text-white">{t(`team_${member.id}_name`)}</h4>
                      <div className="text-accent font-medium text-sm">{t(`team_${member.id}_title`)}</div>
                      <p className="text-xs text-primary-foreground/60 line-clamp-2 pt-2">{t(`team_${member.id}_bio`).substring(0, 100)}...</p>
                      <div className="pt-4 text-accent text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                        {t('view_bio')} <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 bg-primary/5 flex items-center justify-center">
                      {member.imageUrl ? (
                        <Image src={member.imageUrl} alt={t(`team_${member.id}_name`)} fill className="object-cover" />
                      ) : (
                        <Users2 className="h-12 w-12 text-primary/30" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <DialogTitle className="text-3xl font-headline text-primary">{t(`team_${member.id}_name`)}</DialogTitle>
                      <div className="text-accent font-bold uppercase tracking-tighter">{t(`team_${member.id}_title`)}</div>
                    </div>
                  </DialogHeader>
                  <div className="mt-6 border-t pt-6 max-h-[50vh] overflow-y-auto pr-4 text-justify whitespace-pre-wrap">
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`team_${member.id}_bio`)}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="container py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">{t('about_advisory_title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('about_advisory_subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryBoard.map((advisor) => (
            <Card key={advisor.id} className="flex flex-row items-center gap-4 p-4 rounded-2xl bg-muted/30 border-none hover:bg-muted transition-colors shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border-2 border-accent overflow-hidden">
                <Image src={advisor.imageUrl} alt={advisor.name} width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div>
                <div className="font-bold text-lg text-primary">{advisor.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest leading-tight">{t(`advisor_${advisor.id}_role`)}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">{t('about_benefits_title')}</h2>
            <p className="text-muted-foreground">{t('about_benefits_subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", icon: <Globe className="h-8 w-8 text-primary" />, points: ["ben_01_p1", "ben_01_p2", "ben_01_p3", "ben_01_p4"] },
              { id: "02", icon: <GraduationCap className="h-8 w-8 text-primary" />, points: ["ben_02_p1", "ben_02_p2", "ben_02_p3", "ben_02_p4"] },
              { id: "03", icon: <Scale className="h-8 w-8 text-primary" />, points: ["ben_03_p1", "ben_03_p2", "ben_03_p3", "ben_03_p4"] },
              { id: "04", icon: <Sparkles className="h-8 w-8 text-primary" />, points: ["ben_04_p1", "ben_04_p2", "ben_04_p3", "ben_04_p4"] },
            ].map((benefit) => (
              <Card key={benefit.id} className="border-none shadow-xl hover:-translate-y-2 transition-transform">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg uppercase tracking-tight">{t(`ben_${benefit.id}_title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.points.map((pKey, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0" /> {t(pKey)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MoU Partners */}
      <section className="container py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">{t('about_mou_title')}</h2>
          <p className="text-muted-foreground">{t('about_mou_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: "spolto", name: "Spolto" },
            { id: "nihon", name: "Nihon Edutech" },
            { id: "iia", name: "Indian Industries Association (IIA)" },
            { id: "wadhwani", name: "Wadhwani Foundation" },
            { id: "sem", name: "SEM — Smart Education Method" },
            { id: "alliances", name: "JETRO | FICCI | CII | AIMA" },
          ].map((partner) => (
            <Card key={partner.id} className="bg-primary/5 border-none text-center p-6 group hover:bg-primary transition-colors">
              <CardTitle className="text-xl font-headline mb-4 group-hover:text-white">{partner.name}</CardTitle>
              <CardDescription className="text-sm group-hover:text-white/80">{t(`mou_${partner.id}_desc`)}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact & Connect Footer */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-headline text-primary">{t('about_footer_title')}</h3>
              <p className="text-muted-foreground">{t('about_footer_subtitle')}</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-8">
              {[
                { label: "Website", icon: <Globe className="h-6 w-6" />, href: "/" },
                { label: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/company/indo-japan-chamber-of-commerce/" },
                { label: "Instagram", icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/ijccindia?igsh=YW41MzJzNDY2M25y" },
                { label: "Facebook", icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/61573931145126/" },
              ].map((link, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{link.label}</div>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-full bg-white shadow-sm text-primary hover:bg-primary hover:text-white transition-all duration-300 border-2 border-primary/5 hover:scale-110"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

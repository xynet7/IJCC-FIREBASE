"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/use-translation";
import { Calendar, Users, Star, GraduationCap, MapPin, Mail, Phone, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function JapanImmersiveProgramPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-sakura-pink/5">
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Poster and Quick Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-white">
              <Image
                src="https://i.ibb.co/vrs15qb/event.jpg"
                alt="Japan Immersive Program Poster"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <Card className="border-2 border-primary/10 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader className="bg-primary/5 rounded-t-lg">
                <CardTitle className="text-xl font-headline text-primary">{t('immersive_program_schedule_title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">{t('event_8_displayDate')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Japan (Multiple Cities)</span>
                </div>
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 shadow-md">
                  <Link href="/contact">
                    {t('immersive_program_booking_button')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader className="bg-primary/5 rounded-t-lg">
                <CardTitle className="text-xl font-headline text-primary">{t('immersive_program_contact_title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm pt-6">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-sakura-pink/10">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+91 95993 01261</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-sakura-pink/10">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+91 86383 38422</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-sakura-pink/10">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">info@ijcc.in</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-sakura-pink/10">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-medium">www.ijcc.in</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Detailed Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary bg-primary/5 px-4 py-1 text-sm font-bold uppercase tracking-wider">
                {t('immersive_program_org')}
              </Badge>
              <h1 className="text-5xl font-headline tracking-tight text-primary lg:text-6xl">{t('immersive_program_title')}</h1>
              <p className="text-3xl text-accent font-headline italic border-l-4 border-accent pl-4">{t('immersive_program_tagline')}</p>
            </div>

            <section className="space-y-6 relative overflow-hidden p-8 rounded-2xl bg-white border-2 border-primary/5 shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sakura-pink/10 rounded-full -mr-16 -mt-16" />
              <h2 className="text-3xl font-headline text-primary border-b-2 border-primary/10 pb-2">{t('immersive_program_about_title')}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>{t('immersive_program_about_p1')}</p>
                <p>{t('immersive_program_about_p2')}</p>
                <p>{t('immersive_program_about_p3')}</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-headline text-primary border-b-2 border-primary/10 pb-2">{t('immersive_program_who_title')}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-white border-2 border-primary/5 shadow-md">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" /> {t('immersive_program_who_title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {["Undergraduate students", "Postgraduate students", "Management & Engineering", "Arts, Design & Technology", "Faculty members"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-primary/5 shadow-md">
                  <CardHeader className="bg-accent/5">
                    <CardTitle className="text-lg flex items-center gap-2 text-accent">
                      <Star className="h-5 w-5" /> {t('immersive_program_aspiring_title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {["Global careers", "Higher education abroad", "International exposure", "Cross-cultural understanding"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-headline text-primary border-b-2 border-primary/10 pb-2">{t('immersive_program_highlights_title')}</h2>
              <div className="grid gap-4">
                {[
                  { title: t('immersive_program_highlight_academic_title'), content: t('immersive_program_highlight_academic_content'), icon: <GraduationCap className="h-8 w-8" />, color: "bg-primary/10" },
                  { title: t('immersive_program_highlight_cultural_title'), content: t('immersive_program_highlight_cultural_content'), icon: <Star className="h-8 w-8" />, color: "bg-sakura-pink/20" },
                  { title: t('immersive_program_highlight_industry_title'), content: t('immersive_program_highlight_industry_content'), icon: <CheckCircle2 className="h-8 w-8" />, color: "bg-primary/10" },
                  { title: t('immersive_program_highlight_interaction_title'), content: t('immersive_program_highlight_interaction_content'), icon: <Users className="h-8 w-8" />, color: "bg-sakura-pink/20" },
                  { title: t('immersive_program_highlight_exploration_title'), content: t('immersive_program_highlight_exploration_content'), icon: <MapPin className="h-8 w-8" />, color: "bg-primary/10" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm group">
                    <div className={`flex-shrink-0 flex items-center justify-center p-4 rounded-xl ${item.color} text-primary group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-primary p-10 rounded-3xl border-4 border-accent/30 space-y-8 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10">
                <h2 className="text-4xl font-headline text-white mb-4">{t('immersive_program_why_title')}</h2>
                <p className="text-primary-foreground/90 text-xl max-w-2xl mx-auto mb-8 font-medium">
                  {t('immersive_program_why_content')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 h-14 text-lg shadow-xl uppercase tracking-widest">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 h-14 text-lg">
                    <Link href="/contact">Request Brochure</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

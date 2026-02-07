
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
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Poster and Quick Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-2xl border">
            <Image
              src="https://i.ibb.co/vrs15qb/event.jpg"
              alt="Japan Immersive Program Poster"
              fill
              className="object-contain bg-secondary"
              priority
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline">{t('immersive_program_schedule_title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{t('event_8_displayDate')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Japan (Multiple Cities)</span>
              </div>
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">
                  {t('immersive_program_booking_button')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline">{t('immersive_program_contact_title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 95993 01261</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 86383 38422</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ijcc.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-primary" />
                <span>www.ijcc.in</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Detailed Content */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary">
              {t('immersive_program_org')}
            </Badge>
            <h1 className="text-5xl font-headline tracking-tight">{t('immersive_program_title')}</h1>
            <p className="text-2xl text-muted-foreground italic font-headline">{t('immersive_program_tagline')}</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline border-b pb-2">{t('immersive_program_about_title')}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p>{t('immersive_program_about_p1')}</p>
              <p>{t('immersive_program_about_p2')}</p>
              <p>{t('immersive_program_about_p3')}</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline border-b pb-2">{t('immersive_program_who_title')}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" /> {t('immersive_program_who_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Undergraduate students</li>
                    <li>Postgraduate students</li>
                    <li>Management & Engineering</li>
                    <li>Arts, Design & Technology</li>
                    <li>Faculty members</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" /> {t('immersive_program_aspiring_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Global careers</li>
                    <li>Higher education abroad</li>
                    <li>International exposure</li>
                    <li>Cross-cultural understanding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline border-b pb-2">{t('immersive_program_highlights_title')}</h2>
            <div className="space-y-4">
              {[
                { title: t('immersive_program_highlight_academic_title'), content: t('immersive_program_highlight_academic_content'), icon: <GraduationCap className="h-6 w-6" /> },
                { title: t('immersive_program_highlight_cultural_title'), content: t('immersive_program_highlight_cultural_content'), icon: <Star className="h-6 w-6" /> },
                { title: t('immersive_program_highlight_industry_title'), content: t('immersive_program_highlight_industry_content'), icon: <CheckCircle2 className="h-6 w-6" /> },
                { title: t('immersive_program_highlight_interaction_title'), content: t('immersive_program_highlight_interaction_content'), icon: <Users className="h-6 w-6" /> },
                { title: t('immersive_program_highlight_exploration_title'), content: t('immersive_program_highlight_exploration_content'), icon: <MapPin className="h-6 w-6" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex-shrink-0 text-primary">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20 space-y-6 text-center">
            <h2 className="text-3xl font-headline">{t('immersive_program_why_title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('immersive_program_why_content')}</p>
            <Button size="lg" asChild className="rounded-full">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}

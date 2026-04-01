"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  GraduationCap, 
  Globe, 
  Zap, 
  Leaf, 
  Scale, 
  Building2, 
  Sprout, 
  Rocket, 
  Database, 
  Cpu, 
  FlaskConical,
  CheckCircle2,
  Calendar,
  Layers,
  Users,
  Target,
  ArrowRight,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const leadershipData = [
  { id: "rahulMishra", name: "Mr. Rahul Mishra", title: "Chairman, IJCC", subTitle: "Overall Leadership", imageUrl: "https://i.postimg.cc/3JdfvHM7/rahulsir1.jpg" },
  { id: "gajendraBadgujar", name: "Mr. Gajendra Badgujar", title: "Vice-Chairman (Strategy)", subTitle: "Ex. Director, FICCI", imageUrl: "https://i.postimg.cc/25KMJ8NH/gajendra1.jpg" },
  { id: "prakashYadav", name: "Mr. Prakash Yadav", title: "Vice-Chairman (Corporate)", subTitle: "MD, AJU Hotels", imageUrl: "https://i.postimg.cc/9QnxQ442/prakash2.jpg" },
  { id: "neelamRamaiah", name: "Dr. Neelam Ramaiah", title: "Vice-Chairman (Education)", subTitle: "Ex. Dir., Univ. of Tokyo", imageUrl: "https://i.postimg.cc/L5nGMJBJ/neelam-removebg-preview.png" },
  { id: "surajitKalita", name: "Mr. Surajit Kalita", title: "Vice-Chairman (Operations)", subTitle: "Operations & Planning", imageUrl: "https://i.ibb.co/xcg7tmW/sujit.jpg" },
  { id: "nidhi", name: "Ms. Nidhi", title: "Corporate Tax & Transfer Pricing Lead", imageUrl: "https://i.postimg.cc/d3dvvrdY/Nidhi.jpg" },
  { id: "mukeshRanjan", name: "Mr. Mukesh Ranjan", title: "Director — HR & Strategy", imageUrl: "https://i.postimg.cc/HnrRBVXS/mukesh-removebg.png" },
  { id: "yokoTorii", name: "Ms. Yoko Torii", title: "International Programme Coord.", imageUrl: "https://i.ibb.co/99zx9ZGn/yoko-torii.jpg" },
  { id: "dhruvHans", name: "Mr. Dhruv (Hans Dhruv)", title: "Programme Coordinator", imageUrl: "https://i.ibb.co/8D7x8kKq/Mr-Dhruv-Hans-Dhruv.jpg" },
  { id: "muazAhmed", name: "Mr. Muaz Ahmed", title: "Regional Coordinator", imageUrl: "https://i.ibb.co/fYjdtSwp/Mr-Muaz-Ahmed.jpg" },
];

const advisoryBoard = [
  { name: "Mr. Tomoyuki Iwama", role: "Director, Yakult India" },
  { name: "Mr. Naveen Verma", role: "Chairman, RERA Bihar (Retd. IAS)" },
  { name: "Dr. Randeep Rakwal", role: "Professor, Tsukuba University, Japan" },
  { name: "Mr. Kenichiro Iwahori", role: "Advisor, Sasakawa Foundation, Japan" },
  { name: "Dr. Supratic Gupta", role: "Professor, IIT Delhi" },
  { name: "Mr. Markus", role: "MD, Asahi Travels Japan" },
  { name: "Mr. Anil K. Khandelwal", role: "Ex. General Manager, East Central Railway" },
  { name: "Dr. Jatinder Khanna", role: "Policy Maker, Education & Culture" },
  { name: "Dr. Maushumi Barooah", role: "Ex. Director, Assam Technical Education Board" },
  { name: "Mr. Rajesh Mehta", role: "Editor, Sunday Guardian" },
  { name: "Dr. Vinod K. Yadavendu", role: "Ex Member, Bihar Legislative Assembly" },
  { name: "Mr. P.D. Sharma", role: "Sr. Advocate (AOR), Supreme Court of India" },
  { name: "Ms. Anjali Sharma", role: "Advocate, Supreme Court of India" },
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
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              {t('aboutTitle')}
            </h1>
            <p className="text-2xl font-headline italic text-accent">
              "{t('aboutSubtitle')}"
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-headline text-primary">About The Organisation</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
            <p>{t('aboutPara1')}</p>
            <p>{t('aboutPara2')}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <Card className="bg-primary/5 border-none shadow-none text-left">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-primary">
                  <Target className="h-5 w-5" /> OUR MISSION
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {t('aboutMission')}
              </CardContent>
            </Card>
            <Card className="bg-accent/5 border-none shadow-none text-left">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-accent">
                  <Globe className="h-5 w-5" /> OUR VISION
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                A future where India and Japan are seamlessly integrated partners collaborating across business and culture.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-4xl font-headline text-center mb-16 text-primary">{t('aboutObjectivesTitle')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", t: t('aboutObjective1') },
              { id: "02", t: t('aboutObjective2') },
              { id: "03", t: t('aboutObjective3') },
              { id: "04", t: t('aboutObjective4') },
              { id: "05", t: t('aboutObjective5') },
              { id: "06", t: "Advance joint R&D and innovation." },
            ].map((obj) => (
              <div key={obj.id} className="group p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
                <div className="text-primary/20 text-4xl font-bold mb-4 group-hover:text-primary/40 transition-colors">{obj.id}</div>
                <h4 className="text-lg font-bold">{obj.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline">{t('leadershipTitle')}</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              {t('leadershipDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipData.map((member) => (
              <Card key={member.id} className="bg-white/5 border-white/10 text-center space-y-4 group hover:bg-white/10 transition-colors border">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                    <Image src={member.imageUrl} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{t(`team_${member.id}_name`)}</h4>
                  <div className="text-accent font-medium text-sm">{t(`team_${member.id}_title`)}</div>
                  {member.subTitle && <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-1">{member.subTitle}</div>}
                  <p className="text-xs text-primary-foreground/60 line-clamp-3 pt-2">{t(`team_${member.id}_bio`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="container py-24">
        <h2 className="text-4xl font-headline text-center mb-16 text-primary">{t('advisorsTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {advisoryBoard.map((advisor, i) => (
            <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-muted/50 transition-colors border-l-4 border-accent">
              <div>
                <div className="font-bold text-lg">{advisor.name}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{advisor.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline text-primary">Membership Benefits</h2>
            <p className="text-muted-foreground">IJCC membership is open to corporations, SMEs, startups, academic institutions and professionals.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Trade & Business Access", i: <Globe className="h-8 w-8 text-primary" />, p: ["Bilateral trade reports", "Priority delegation access", "B2B matchmaking", "Japan entry advisory"] },
              { t: "Knowledge & Resources", i: <GraduationCap className="h-8 w-8 text-primary" />, p: ["Resource library (JLPT)", "Exclusive seminars", "Directory listing", "Policy updates"] },
              { t: "Legal & Policy Support", i: <Scale className="h-8 w-8 text-primary" />, p: ["Legal panel advisory", "FEMA & RBI guidance", "Policy advocacy", "Dispute resolution"] },
              { t: "Cultural & Community", i: <Globe className="h-8 w-8 text-primary" />, p: ["Event invitations", "Awareness programs", "Diaspora networking", "Cultural workshops"] },
            ].map((benefit, i) => (
              <Card key={i} className="border-none shadow-xl">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{benefit.i}</div>
                  <CardTitle className="text-lg">{benefit.t}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.p.map((point, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-green-500" /> {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

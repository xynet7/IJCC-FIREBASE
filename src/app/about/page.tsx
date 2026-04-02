
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
  UserCircle2,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const leadershipData = [
  { id: "rahulMishra", name: "Mr. Rahul Mishra", title: "Chairman, IJCC", subTitle: "Overall Leadership", imageUrl: "https://i.postimg.cc/3JdfvHM7/rahulsir1.jpg" },
  { id: "gajendraBadgujar", name: "Mr. Gajendra Badgujar", title: "Vice-Chairman (Strategy)", subTitle: "Ex. Director, FICCI", imageUrl: "https://i.postimg.cc/25KMJ8NH/gajendra1.jpg" },
  { id: "prakashYadav", name: "Mr. Prakash Yadav", title: "Vice-Chairman (Corporate)", subTitle: "MD, AJU Hotels", imageUrl: "https://i.postimg.cc/9QnxQ442/prakash2.jpg" },
  { id: "neelamRamaiah", name: "Dr. Neelam Ramaiah", title: "Vice-Chairman (Education)", subTitle: "Ex. Dir., Univ. of Tokyo", imageUrl: "https://i.postimg.cc/L5nGMJBJ/neelam-removebg-preview.png" },
  { id: "surajitKalita", name: "Mr. Surajeet Kalita", title: "Co-Founder & Vice Chairman", subTitle: "Operations & Planning", imageUrl: "https://i.ibb.co/xcg7tmW/sujit.jpg" },
  { id: "nidhi", name: "Ms. Nidhi", title: "Corporate Tax & Transfer Pricing Lead", subTitle: "International Tax Expert", imageUrl: "https://i.postimg.cc/d3dvvrdY/Nidhi.jpg" },
  { id: "mukeshRanjan", name: "Mr. Mukesh Ranjan", title: "Director — HR & Strategy", imageUrl: "https://i.postimg.cc/HnrRBVXS/mukesh-removebg.png" },
  { id: "yokoTorii", name: "Ms. Yoko Torii", title: "International Programme Coord.", imageUrl: "https://i.ibb.co/99zx9ZGn/yoko-torii.jpg" },
  { id: "dhruvHans", name: "Mr. Dhruv (Hans Dhruv)", title: "Programme Coordinator", imageUrl: "https://i.ibb.co/8D7x8kKq/Mr-Dhruv-Hans-Dhruv.jpg" },
  { id: "muazAhmed", name: "Mr. Muaz Ahmed", title: "Regional Coordinator", imageUrl: "https://i.ibb.co/fYjdtSwp/Mr-Muaz-Ahmed.jpg" },
];

const advisoryBoard = [
  { name: "Mr. Tomoyuki Iwama", role: "Director, Yakult India", imageUrl: "https://i.postimg.cc/025b7P5b/iwama-removebg-preview.png" },
  { name: "Mr. Naveen Verma", role: "Chairman, RERA Bihar (Retd. IAS)", imageUrl: "https://i.postimg.cc/CK70VjSM/Naveen-Verma-2.jpg" },
  { name: "Dr. Randeep Rakwal", role: "Professor, Tsukuba University, Japan", imageUrl: "https://i.postimg.cc/Gh6Kf8sB/randeep-removebg-preview.png" },
  { name: "Mr. Kenichiro Iwahori", role: "Advisor, Sasakawa Foundation, Japan", imageUrl: "https://i.ibb.co/VcG0s7QJ/iwahori-removebg-preview.png" },
  { name: "Dr. Supratic Gupta", role: "Professor, IIT Delhi", imageUrl: "https://i.postimg.cc/7LmS9f7R/supratic1.jpg" },
  { name: "Mr. Markus", role: "MD, Asahi Travels Japan", imageUrl: "https://i.postimg.cc/brHtYXS7/Markus-removebg-preview.png" },
  { name: "Mr. Anil K. Khandelwal", role: "Ex. General Manager, East Central Railway", imageUrl: "https://i.postimg.cc/Qxz8QsHq/anil1.jpg" },
  { name: "Dr. Jatinder Khanna", role: "Policy Maker, Education & Culture", imageUrl: "https://i.postimg.cc/CKgMZKnZ/jatinder.jpg" },
  { name: "Dr. Maushumi Barooah", role: "Ex. Director, Assam Technical Education Board", imageUrl: "https://i.postimg.cc/h4TXtN53/mausimi1.jpg" },
  { name: "Mr. Rajesh Mehta", role: "Editor, Sunday Guardian", imageUrl: "https://i.postimg.cc/Vsb5G5Qh/rajesh-removebg-preview.png" },
  { name: "Dr. Vinod K. Yadavendu", role: "Ex Member, Bihar Legislative Assembly", imageUrl: "https://i.postimg.cc/fbKbhgFG/vinod-removebg.png" },
  { name: "Mr. P.D. Sharma", role: "Sr. Advocate (AOR), Supreme Court of India", imageUrl: "https://i.postimg.cc/RVBWhvf3/pd-sharma.jpg" },
  { name: "Ms. Anjali Sharma", role: "Advocate, Supreme Court of India", imageUrl: "https://i.postimg.cc/kX4zvbb0/anjali1.jpg" },
  { name: "Mr. Raj", role: "Advisory Member", imageUrl: "https://i.postimg.cc/RV5W1scJ/raj.jpg" },
];

const verticals = [
  { 
    id: "01", 
    icon: <Handshake className="h-6 w-6" />, 
    titleKey: "vertical_01_title", 
    descKey: "vertical_01_desc",
    points: [
      "Trade facilitation, market access advisory & B2B matchmaking",
      "Trade delegation coordination — India ↔ Japan",
      "Export-import advisory, regulatory guidance & FDI promotion",
      "Market intelligence reports and industry sector analyses",
      "SME and startup support for Japan market entry",
      "Liaison with JETRO, CII, FICCI and other trade bodies"
    ]
  },
  { 
    id: "02", 
    icon: <University className="h-6 w-6" />, 
    titleKey: "vertical_02_title", 
    descKey: "vertical_02_desc",
    points: [
      "University partnerships, MoU facilitation & exchange programs",
      "Student and faculty exchange between India and Japan",
      "Japanese language education and JLPT preparation support",
      "Joint research, scholarships and fellowship promotion",
      "Collaboration with IITs, IIMs and Japanese universities"
    ]
  },
  { 
    id: "03", 
    icon: <Users2 className="h-6 w-6" />, 
    titleKey: "vertical_03_title", 
    descKey: "vertical_03_desc",
    points: [
      "Cultural exchange events and Japan Habba exhibitions",
      "Japanese arts, crafts and cuisine promotion in India",
      "Indian cultural heritage promotion in Japan",
      "Tourism facilitation and travel promotion programs",
      "Diaspora community engagement and networking"
    ]
  },
  { 
    id: "04", 
    icon: <Lightbulb className="h-6 w-6" />, 
    titleKey: "vertical_04_title", 
    descKey: "vertical_04_desc",
    points: [
      "Technology transfer facilitation between India and Japan",
      "Startup ecosystem collaboration and incubation support",
      "Joint R&D — IIT Delhi and Tsukuba University partnerships",
      "IP Rights Cell — education, filing and protection support",
      "AI, robotics, automation and smart city exchange"
    ]
  },
  { 
    id: "05", 
    icon: <Zap className="h-6 w-6" />, 
    titleKey: "vertical_05_title", 
    descKey: "vertical_05_desc",
    points: [
      "Clean energy collaboration — solar, wind and hydrogen",
      "Renewable energy project facilitation and policy advocacy",
      "ESG advisory support and sustainability reporting",
      "Green infrastructure and sustainable urban development"
    ]
  },
  { 
    id: "06", 
    icon: <Scale className="h-6 w-6" />, 
    titleKey: "vertical_06_title", 
    descKey: "vertical_06_desc",
    points: [
      "Legal advisory on India-Japan business and trade law",
      "FEMA and RBI regulatory guidance for members",
      "Policy representation with Indian government bodies",
      "Dispute resolution and mediation facilitation"
    ]
  },
  { 
    id: "07", 
    icon: <Building2 className="h-6 w-6" />, 
    titleKey: "vertical_07_title", 
    descKey: "vertical_07_desc",
    points: [
      "Smart city, urban infrastructure and mobility projects",
      "Roads, ports, logistics and industrial corridor development",
      "Japanese infrastructure financing & technology tie-ups",
      "Government liaison for bilateral infrastructure MoUs",
      "Housing, townships and affordable urban development"
    ]
  },
  { 
    id: "08", 
    icon: <Sprout className="h-6 w-6" />, 
    titleKey: "vertical_08_title", 
    descKey: "vertical_08_desc",
    points: [
      "Agri-technology exchange and precision farming collaboration",
      "Food processing, cold chain and supply chain modernisation",
      "Organic farming, sustainable agriculture best practices",
      "Japan-India agri-trade and market linkage facilitation",
      "Rural development partnerships and farmer outreach programs"
    ]
  },
  { 
    id: "09", 
    icon: <Target className="h-6 w-6" />, 
    titleKey: "vertical_09_title", 
    descKey: "vertical_09_desc",
    points: [
      "SME/MSME onboarding, profiling and Japan market readiness",
      "Bilateral B2B matchmaking for small business owners",
      "Access to Japanese technology and investment for Indian MSMEs",
      "Mentorship, capacity building and export orientation programs",
      "Government scheme linkage — MUDRA, SIDBI, NSIC and more"
    ]
  },
  { 
    id: "10", 
    icon: <Database className="h-6 w-6" />, 
    titleKey: "vertical_10_title", 
    descKey: "vertical_10_desc",
    points: [
      "IT sector collaboration — software, SaaS and digital services",
      "Data governance, privacy law and cross-border data flow advisory",
      "Cloud computing, cybersecurity and digital infrastructure exchange",
      "Bilateral e-commerce, fintech and digital payments facilitation",
      "AI & machine learning joint projects and research"
    ]
  },
  { 
    id: "11", 
    icon: <Cpu className="h-6 w-6" />, 
    titleKey: "vertical_11_title", 
    descKey: "vertical_11_desc",
    points: [
      "Quantum computing research and bilateral lab partnerships",
      "Space technology, satellite and aerospace collaboration",
      "Semiconductor, chip design and advanced materials exchange",
      "Biotechnology, genomics and life sciences tie-ups",
      "Robotics, automation and Industry 4.0 implementation"
    ]
  },
  { 
    id: "12", 
    icon: <SearchCode className="h-6 w-6" />, 
    titleKey: "vertical_12_title", 
    descKey: "vertical_12_desc",
    points: [
      "Joint research programs — IIT Delhi, Tsukuba University and more",
      "IP creation, patent filing and commercialisation support",
      "Industry-academia collaboration and innovation grants",
      "Bilateral R&D funding facilitation and government scheme linkage",
      "Technology incubation and deep-tech startup support"
    ]
  }
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
              Registered Trust · Established 2025
            </Badge>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              Indo-Japan Chamber of Commerce
            </h1>
            <p className="text-2xl font-headline italic text-accent">
              "Connecting India & Japan for Mutual Prosperity"
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/80 font-medium">
              <span>Trade</span> • <span>Education</span> • <span>Culture</span> • <span>Technology</span> • <span>Energy</span> • <span>Legal</span> • <span>Infrastructure</span> • <span>Agriculture</span> • <span>SME/MSME</span> • <span>Data & IT</span> • <span>NextGen Tech</span> • <span>R&D</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-headline text-primary border-b-4 border-accent/30 pb-2 inline-block">
              About The Organisation
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
              <p>
                Founded in 2025, the Indo-Japan Chamber of Commerce (IJCC) is a registered trust building a powerful bilateral bridge between India and Japan — Asia's two most dynamic and complementary economies.
              </p>
              <p>
                The IJCC has rapidly established institutional credibility — signing formal MoUs with <strong>Spolto</strong> (Sports Technology), <strong>Nihon Edutech</strong> (Japan-India Skills & Placements), <strong>IIA</strong> — Indian Industries Association (Apex MSME Body), <strong>Wadhwani Foundation</strong> (AI-powered Skilling) and <strong>SEM</strong> (Full-service Event Partner). These partnerships validate IJCC's cross-sectoral reach across sports, education, industry, technology and skilling.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <Card className="bg-primary/5 border-none shadow-none text-left">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-primary uppercase tracking-wider">
                    <Target className="h-5 w-5" /> Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  To serve as the foremost catalyst for India-Japan bilateral growth — facilitating trade, fostering innovation, deepening cultural ties, and creating an interconnected ecosystem where both nations thrive together.
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-none shadow-none text-left">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-accent uppercase tracking-wider">
                    <Globe className="h-5 w-5" /> Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  A future where India and Japan are seamlessly integrated partners — collaborating across business, education, technology, infrastructure and culture to drive shared prosperity for generations to come.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl space-y-8">
            <h3 className="text-2xl font-headline text-primary">Key Facts</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Year Established", value: "2025", icon: <Calendar className="text-primary h-5 w-5" /> },
                { label: "Strategic Verticals", value: "12", icon: <Layers className="text-primary h-5 w-5" /> },
                { label: "MoU Partners", value: "5", icon: <Handshake className="text-primary h-5 w-5" /> },
                { label: "Member Network", value: "100+", icon: <Users className="text-primary h-5 w-5" /> },
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
                <span className="text-muted-foreground">Type:</span>
                <span className="font-bold">Registered Trust</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">HQ:</span>
                <span className="font-bold">New Delhi, India</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Website:</span>
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
            <h2 className="text-4xl font-headline text-primary">Core Objectives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic">Fostering institutional linkages across the Indo-Japan corridor.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", title: "Trade & Commerce", icon: <Briefcase className="h-6 w-6 text-primary" />, desc: "Promote and protect bilateral trade, commerce and industry between India and Japan." },
              { id: "02", title: "Education & Academic Exchange", icon: <GraduationCap className="h-6 w-6 text-primary" />, desc: "Facilitate technical cooperation, university partnerships and knowledge exchange." },
              { id: "03", title: "Culture & People Connect", icon: <Users2 className="h-6 w-6 text-primary" />, desc: "Foster cultural understanding and strengthen bonds of friendship between both nations." },
              { id: "04", title: "Technology & Innovation", icon: <Zap className="h-6 w-6 text-primary" />, desc: "Support joint R&D, startup ecosystems and technology transfer between India and Japan." },
              { id: "05", title: "Energy & Sustainability", icon: <Sparkles className="h-6 w-6 text-primary" />, desc: "Promote clean energy collaboration, ESG practices and sustainable development." },
              { id: "06", title: "Legal, Policy & Advocacy", icon: <Scale className="h-6 w-6 text-primary" />, desc: "Represent member interests in bilateral trade policy, law and regulatory matters." },
              { id: "07", title: "Infrastructure", icon: <Building2 className="h-6 w-6 text-primary" />, desc: "Facilitate bilateral infrastructure investment, smart city and industrial corridor projects." },
              { id: "08", title: "Agriculture & Food Security", icon: <Sprout className="h-6 w-6 text-primary" />, desc: "Connect Agri-tech ecosystems and promote food processing and rural development." },
              { id: "09", title: "SME & MSME Development", icon: <Target className="h-6 w-6 text-primary" />, desc: "Empower small businesses with bilateral partnerships, mentorship and Japan market access." },
              { id: "10", title: "Data, IT & Digital Economy", icon: <Database className="h-6 w-6 text-primary" />, desc: "Build digital bridges across cloud, AI, cybersecurity and data governance." },
              { id: "11", title: "Next Generation Technology", icon: <Cpu className="h-6 w-6 text-primary" />, desc: "Drive frontier innovation in quantum, space, semiconductors and biotech." },
              { id: "12", title: "Research & Development", icon: <SearchCode className="h-6 w-6 text-primary" />, desc: "Advance joint R&D, IP creation and industry-academia collaboration across sectors." },
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
            <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">Organisation Verticals</h2>
            <p className="text-muted-foreground">IJCC operates through 12 strategic verticals, each led by dedicated experts.</p>
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
                      {v.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{point}</span>
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
            <h2 className="text-4xl font-headline uppercase tracking-tight">Leadership & Governance</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto italic">
              Guided by a distinguished board with expertise spanning trade, academia, diplomacy, hospitality and law.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipData.map((member) => (
              <Dialog key={member.id}>
                <DialogTrigger asChild>
                  <Card className="bg-white/5 border-white/10 text-center space-y-4 group hover:bg-white/10 transition-all cursor-pointer transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                        <Image src={member.imageUrl} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <h4 className="text-xl font-bold text-white">{t(`team_${member.id}_name`)}</h4>
                      <div className="text-accent font-medium text-sm">{t(`team_${member.id}_title`)}</div>
                      {member.subTitle && <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-1">{member.subTitle}</div>}
                      <p className="text-xs text-primary-foreground/60 line-clamp-2 pt-2">{t(`team_${member.id}_bio`)}</p>
                      <div className="pt-4 text-accent text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                        View Full Bio <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10">
                      <Image src={member.imageUrl} alt={member.name} fill className="object-cover" />
                    </div>
                    <div className="space-y-1">
                      <DialogTitle className="text-3xl font-headline text-primary">{t(`team_${member.id}_name`)}</DialogTitle>
                      <div className="text-accent font-bold uppercase tracking-tighter">{t(`team_${member.id}_title`)}</div>
                      {member.subTitle && <div className="text-sm text-muted-foreground italic">{member.subTitle}</div>}
                    </div>
                  </DialogHeader>
                  <div className="mt-6 border-t pt-6">
                    <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-wrap">
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
          <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">Advisory Board</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Providing strategic guidance and industry expertise across bilateral corridors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryBoard.map((advisor, i) => (
            <Card key={i} className="flex flex-row items-center gap-4 p-4 rounded-2xl bg-muted/30 border-none hover:bg-muted transition-colors shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border-2 border-accent overflow-hidden">
                {advisor.imageUrl ? (
                  <Image src={advisor.imageUrl} alt={advisor.name} width={64} height={64} className="object-cover w-full h-full" />
                ) : (
                  <UserCircle2 className="h-10 w-10 text-primary" />
                )}
              </div>
              <div>
                <div className="font-bold text-lg text-primary">{advisor.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest leading-tight">{advisor.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">Membership Benefits</h2>
            <p className="text-muted-foreground">IJCC membership is open to corporations, SMEs, startups, academic institutions and individual professionals.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Trade & Business Access", i: <Globe className="h-8 w-8 text-primary" />, p: ["Bilateral trade intelligence reports", "Business delegation priority access", "B2B matchmaking sessions", "Japan market entry advisory"] },
              { t: "Knowledge & Resources", i: <GraduationCap className="h-8 w-8 text-primary" />, p: ["Resource library (JLPT)", "Exclusive seminars & workshops", "Membership directory listing", "Policy and regulatory updates"] },
              { t: "Legal & Policy Support", i: <Scale className="h-8 w-8 text-primary" />, p: ["Legal panel advisory", "FEMA and RBI guidance", "Policy advocacy & government liaison", "Dispute resolution facilitation"] },
              { t: "Cultural & Community", i: <Sparkles className="h-8 w-8 text-primary" />, p: ["Cultural exchange invitations", "Japan-awareness programs", "Diaspora and networking", "Cross-cultural workshops"] },
            ].map((benefit, i) => (
              <Card key={i} className="border-none shadow-xl hover:-translate-y-2 transition-transform">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{benefit.i}</div>
                  <CardTitle className="text-lg uppercase tracking-tight">{benefit.t}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.p.map((point, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0" /> {point}
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
          <h2 className="text-4xl font-headline text-primary uppercase tracking-tight">MoU Partners & Strategic Alliances</h2>
          <p className="text-muted-foreground">Reflecting our commitment to education, skilling, sports, and enterprise development.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Spolto", desc: "Sports technology platform · $2M+ funded · 1,200+ coaches & academies across India" },
            { name: "Nihon Edutech", desc: "Japan-India skills & placements · 100+ years cumulative Japan expertise · CII partner" },
            { name: "Indian Industries Association (IIA)", desc: "Apex MSME body since 1985 · 9,900+ members · 40+ chapters across India" },
            { name: "Wadhwani Foundation", desc: "AI-powered skilling · MoU with Govt. of AP · Millions trained across India" },
            { name: "SEM — Smart Education Method", desc: "ISO 9001:2015 certified · Govt. of India incorporated · Digital & skill education network" },
            { name: "JETRO | FICCI | CII | AIMA", desc: "Institutional trade body alliances for bilateral facilitation" },
          ].map((partner, i) => (
            <Card key={i} className="bg-primary/5 border-none text-center p-6 group hover:bg-primary transition-colors">
              <CardTitle className="text-xl font-headline mb-4 group-hover:text-white">{partner.name}</CardTitle>
              <CardDescription className="text-sm group-hover:text-white/80">{partner.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact & Connect Footer */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-headline text-primary">Fostering Prosperity Between India and Japan</h3>
              <p className="text-muted-foreground">Established 2025 · Registered Trust · New Delhi, India</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {[
                { label: "Website", val: "www.ijcc.in", href: "/" },
                { label: "LinkedIn", val: "company/indo-japan-chamber-of-commerce", href: "https://www.linkedin.com/company/indo-japan-chamber-of-commerce/" },
                { label: "Instagram", val: "@ijccindia", href: "https://www.instagram.com/ijccindia" },
                { label: "Facebook", val: "IJCC", href: "https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/61573931145126/" },
              ].map((link, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{link.label}</div>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
                    {link.val}
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

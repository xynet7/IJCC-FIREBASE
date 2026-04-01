
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

const verticals = [
  { 
    id: "01", 
    title: "Trade & Commerce", 
    desc: "Bilateral trade facilitation, investment promotion and B2B matchmaking.",
    icon: <Handshake className="h-6 w-6" />,
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
    title: "Education & Academic Exchange", 
    desc: "Bridging India and Japan's knowledge ecosystems.",
    icon: <GraduationCap className="h-6 w-6" />,
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
    title: "Culture & People Connect", 
    desc: "Deepening artistic, historical and cultural bonds through community-driven initiatives.",
    icon: <Globe className="h-6 w-6" />,
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
    title: "Technology & Innovation", 
    desc: "Connecting Indian and Japanese innovation ecosystems for joint R&D.",
    icon: <Zap className="h-6 w-6" />,
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
    title: "Energy & Sustainability", 
    desc: "A dedicated Energy Cell connecting organisations in clean, renewable energy.",
    icon: <Leaf className="h-6 w-6" />,
    points: [
      "Clean energy collaboration — solar, wind and hydrogen",
      "Renewable energy project facilitation and policy advocacy",
      "ESG advisory support and sustainability reporting",
      "Green infrastructure and sustainable urban development"
    ]
  },
  { 
    id: "06", 
    title: "Legal, Policy & Advocacy", 
    desc: "Expert legal counsel and regulatory advocacy for members navigating bilateral frameworks.",
    icon: <Scale className="h-6 w-6" />,
    points: [
      "Legal advisory on India-Japan business and trade law",
      "FEMA and RBI regulatory guidance for members",
      "Policy representation with Indian government bodies",
      "Dispute resolution and mediation facilitation"
    ]
  },
  { 
    id: "07", 
    title: "Infrastructure", 
    desc: "Facilitating bilateral collaboration in infrastructure planning, development and investment.",
    icon: <Building2 className="h-6 w-6" />,
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
    title: "Agriculture & Food Security", 
    desc: "Connecting agri-tech and food processing ecosystems of India and Japan.",
    icon: <Sprout className="h-6 w-6" />,
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
    title: "SME & MSME Development", 
    desc: "Empowering small businesses with bilateral partnerships, mentorship and Japan market access.",
    icon: <Rocket className="h-6 w-6" />,
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
    title: "Data, IT & Digital Economy", 
    desc: "Building India-Japan digital bridges across cloud, AI, cybersecurity and data governance.",
    icon: <Database className="h-6 w-6" />,
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
    title: "Next Generation Technology", 
    desc: "Focusing on frontier technologies that will define the next decade.",
    icon: <Cpu className="h-6 w-6" />,
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
    title: "Research & Development", 
    desc: "Driving innovation through structured R&D collaboration across sectors.",
    icon: <FlaskConical className="h-6 w-6" />,
    points: [
      "Joint research programs — IIT Delhi, Tsukuba University and more",
      "IP creation, patent filing and commercialisation support",
      "Industry-academia collaboration and innovation grants",
      "Bilateral R&D funding facilitation and government scheme linkage",
      "Technology incubation and deep-tech startup support"
    ]
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-white text-primary hover:bg-white/90 px-4 py-1 text-sm font-bold tracking-widest">
                ESTABLISHED 2025
              </Badge>
              <Badge variant="outline" className="border-white text-white px-4 py-1 text-sm font-bold tracking-widest">
                REGISTERED TRUST
              </Badge>
            </div>
            <h1 className="text-5xl font-headline tracking-tight lg:text-7xl leading-tight">
              Indo-Japan Chamber of Commerce
            </h1>
            <p className="text-2xl font-headline italic text-accent max-w-2xl">
              "Connecting India & Japan for Mutual Prosperity"
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl leading-relaxed">
              Trade · Education · Culture · Technology · Energy · Legal · Infrastructure · Agriculture · SME/MSME · Data & IT · NextGen Tech · R&D
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-headline text-primary mb-6">About The Organisation</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
                <p>
                  Founded in 2025, the Indo-Japan Chamber of Commerce (IJCC) is a registered trust building a powerful bilateral bridge between India and Japan — Asia's two most dynamic and complementary economies.
                </p>
                <p>
                  IJCC has rapidly established institutional credibility — signing formal MoUs with <strong>Spolto</strong> (Sports Technology), <strong>Nihon Edutech</strong> (Japan-India Skills & Placements), <strong>IIA</strong> (Indian Industries Association), <strong>Wadhwani Foundation</strong> (AI-powered Skilling), and <strong>SEM</strong> (full-service event partner). These partnerships validate IJCC's cross-sectoral reach.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <Card className="bg-primary/5 border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-primary">
                    <Target className="h-5 w-5" /> OUR MISSION
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  To serve as the foremost catalyst for India-Japan bilateral growth — facilitating trade, fostering innovation, deepening cultural ties, and creating an interconnected ecosystem where both nations thrive together.
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-accent">
                    <Globe className="h-5 w-5" /> OUR VISION
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  A future where India and Japan are seamlessly integrated partners — collaborating across business, education, technology, infrastructure and culture to drive shared prosperity.
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="border-2 border-primary/10">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-lg font-headline">KEY FACTS</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <tbody className="divide-y">
                    {[
                      { l: "Type", v: "Registered Trust" },
                      { l: "Founded", v: "2025" },
                      { l: "HQ", v: "New Delhi, India" },
                      { l: "Verticals", v: "12 Strategic Verticals" },
                      { l: "Partnerships", v: "5 Major MoUs" },
                      { l: "Network", v: "100+ Member Entities" },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="p-4 font-bold bg-muted/30">{row.l}</td>
                        <td className="p-4 text-muted-foreground">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-[10px] uppercase font-bold text-muted-foreground">Established</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-[10px] uppercase font-bold text-muted-foreground">Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <h2 className="text-4xl font-headline text-center mb-16 text-primary">Core Objectives</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", t: "Trade & Commerce", d: "Promote and protect bilateral trade, commerce and industry between India and Japan." },
              { id: "02", t: "Education & Exchange", d: "Facilitate technical cooperation, university partnerships and knowledge exchange." },
              { id: "03", t: "Culture & Connect", d: "Foster cultural understanding and strengthen bonds of friendship between both nations." },
              { id: "04", t: "Tech & Innovation", d: "Support joint R&D, startup ecosystems and technology transfer between India and Japan." },
              { id: "05", t: "Energy & Sustainability", d: "Promote clean energy collaboration, ESG practices and sustainable development." },
              { id: "06", t: "Legal & Policy", d: "Represent member interests in bilateral trade policy, law and regulatory matters." },
            ].map((obj) => (
              <div key={row.id} className="group p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
                <div className="text-primary/20 text-4xl font-bold mb-4 group-hover:text-primary/40 transition-colors">{obj.id}</div>
                <h4 className="text-xl font-bold mb-2">{obj.t}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{obj.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Verticals */}
      <section className="container py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary">Organisation Verticals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IJCC operates through 12 strategic verticals, each led by dedicated experts and aligned to a core pillar of India-Japan bilateral relations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {verticals.map((v) => (
            <Card key={v.id} className="overflow-hidden border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="bg-muted/30 flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {v.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Vertical {v.id}</div>
                  <CardTitle className="text-xl">{v.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm font-medium text-primary leading-snug">{v.desc}</p>
                <ul className="space-y-2">
                  {v.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline">Leadership & Governance</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              IJCC is guided by a distinguished board with expertise spanning trade, academia, diplomacy, hospitality and law.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipData.map((member) => (
              <div key={member.id} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-4 group hover:bg-white/10 transition-colors">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                  <Image src={member.imageUrl} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <div className="text-accent font-medium text-sm">{member.title}</div>
                  {member.subTitle && <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-1">{member.subTitle}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="container py-24">
        <h2 className="text-4xl font-headline text-center mb-16 text-primary">Advisory Board</h2>
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

      {/* MoU Partners */}
      <section className="container py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline text-primary">MoU Partners & Strategic Alliances</h2>
          <p className="text-muted-foreground">Reflecting our cross-sectoral commitment to education, skilling, sports, and industry.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { n: "Spolto", d: "Sports technology platform · $2M+ funded · 1,200+ coaches across India" },
            { n: "Nihon Edutech", d: "Japan-India skills & placements · 100+ years Japan expertise · CII partner" },
            { n: "Indian Industries Association (IIA)", d: "Apex MSME body since 1985 · 9,900+ members · 40+ chapters" },
            { n: "Wadhwani Foundation", d: "AI-powered skilling · MoU with Govt. of AP · Millions trained" },
            { n: "SEM — Smart Education Method", d: "ISO 9001:2015 certified · Govt. of India incorporated · Digital network" },
            { n: "JETRO | FICCI | CII | AIMA", d: "Institutional trade body alliances for bilateral facilitation" },
          ].map((partner, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-muted/10 hover:bg-muted/30 transition-colors text-center space-y-3">
              <h4 className="text-xl font-bold text-primary">{partner.n}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{partner.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-headline">Ready to Join the Movement?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Fostering Prosperity Between India and Japan. Established 2025 · Registered Trust · New Delhi, India
          </p>
          <div className="flex justify-center gap-6">
            <Card className="bg-white/10 border-none p-8 max-w-md">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Handshake className="h-5 w-5 text-accent" />
                  <span>Membership Enquiries: <strong>www.ijcc.in/contact</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-accent" />
                  <span>Official Website: <strong>www.ijcc.in</strong></span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

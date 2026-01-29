
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslation } from "@/hooks/use-translation";

const leadershipData = [
  { id: "rahulMishra", imageUrl: "https://i.postimg.cc/3JdfvHM7/rahulsir1.jpg", hint: "man face" },
  { id: "gajendraBadgujar", imageUrl: "https://i.postimg.cc/25KMJ8NH/gajendra1.jpg", hint: "man face" },
  { id: "prakashYadav", imageUrl: "https://i.postimg.cc/9QnxQ442/prakash2.jpg", hint: "man face" },
  { id: "neelamRamaiah", imageUrl: "https://i.postimg.cc/L5nGMJBJ/neelam-removebg-preview.png", hint: "woman face" },
  { id: "surajitKalita", imageUrl: "https://i.ibb.co/xcg7tmW/sujit.jpg", hint: "man face" },
  { id: "mukeshRanjan", imageUrl: "https://i.postimg.cc/HnrRBVXS/mukesh-removebg.png", hint: "man face" },
  { id: "muazAhmed", imageUrl: "https://i.ibb.co/fYjdtSwp/Mr-Muaz-Ahmed.jpg", hint: "man face" },
  { id: "dhruvHans", imageUrl: "https://i.ibb.co/8D7x8kKq/Mr-Dhruv-Hans-Dhruv.jpg", hint: "man face" },
  { id: "yokoTorii", imageUrl: "https://i.ibb.co/99zx9ZGn/yoko-torii.jpg", hint: "woman face" },
];

const advisorsData = [
  { id: "tomoyukiIwama", imageUrl: "https://i.postimg.cc/025b7P5b/iwama-removebg-preview.png", hint: "man face" },
  { id: "naveenVerma", imageUrl: "https://i.postimg.cc/CK70VjSM/Naveen-Verma-2.jpg", hint: "man face" },
  { id: "anilKumarKhandelwal", imageUrl: "https://i.postimg.cc/Qxz8QsHq/anil1.jpg", hint: "man face" },
  { id: "randeepRakwal", imageUrl: "https://i.postimg.cc/Gh6Kf8sB/randeep-removebg-preview.png", hint: "man face" },
  { id: "kenichiroIwahori", imageUrl: "https://i.ibb.co/VcG0s7QJ/iwahori-removebg-preview.png", hint: "man face" },
  { id: "markus", imageUrl: "https://i.postimg.cc/brHtYXS7/Markus-removebg-preview.png", hint: "man face" },
  { id: "supraticGupta", imageUrl: "https://i.postimg.cc/7LmS9f7R/supratic1.jpg", hint: "man face" },
  { id: "maushumiBarooah", imageUrl: "https://i.postimg.cc/h4TXtN53/mausimi1.jpg", hint: "woman face" },
  { id: "rajeshMehta", imageUrl: "https://i.postimg.cc/Vsb5G5Qh/rajesh-removebg-preview.png", hint: "man face" },
  { id: "jatinderKhanna", imageUrl: "https://i.postimg.cc/CKgMZKnZ/jatinder.jpg", hint: "man face" },
  { id: "vinodKumarYadavendu", imageUrl: "https://i.postimg.cc/fbKbhgFG/vinod-removebg.png", hint: "man face" },
];

const legalTeamData = [
  { id: "pdSharma", imageUrl: "https://i.postimg.cc/RVBWhvf3/pd-sharma.jpg", hint: "man face" },
  { id: "anjaliSharma", imageUrl: "https://i.postimg.cc/kX4zvbb0/anjali1.jpg", hint: "woman face" },
];

const regionalChaptersData = [
  { id: "rajSingh", imageUrl: "https://i.postimg.cc/RV5W1scJ/raj.jpg", hint: "man face" },
  { id: "lokendraRana", imageUrl: "https://aamidainfotech.com/wp-content/uploads/2021/01/lokendra-rana.jpg", hint: "man face" },
];

const TeamMemberCard = ({ member, name, title, bio }: { member: { imageUrl: string, hint: string }, name: string, title: string, bio: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className="text-center transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
        <CardContent className="pt-6">
          <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20 mx-auto">
            <AvatarImage src={member.imageUrl} alt={name} data-ai-hint={member.hint} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-headline text-2xl">{name}</h3>
          <p className="text-primary font-semibold">{title}</p>
        </CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] rounded-2xl">
      <DialogHeader>
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-24 h-24 border-4 border-primary/20">
            <AvatarImage src={member.imageUrl} alt={name} data-ai-hint={member.hint} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <DialogTitle className="font-headline text-2xl">{name}</DialogTitle>
            <p className="text-primary font-semibold">{title}</p>
          </div>
        </div>
        <DialogDescription className="text-left text-foreground whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
          {bio}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const TeamSection = ({ title, members, description, t }: { title: string, members: any[], description: string, t: (key: string) => string }) => (
  <div className="max-w-6xl mx-auto mt-20">
    <div className="space-y-4 mb-12 text-center">
        <h2 className="text-3xl font-headline sm:text-4xl">{title}</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            {description}
        </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
            <TeamMemberCard 
                key={member.id} 
                member={member} 
                name={t(`team_${member.id}_name`)}
                title={t(`team_${member.id}_title`)}
                bio={t(`team_${member.id}_bio`)}
            />
        ))}
    </div>
  </div>
);

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">{t('aboutTitle')}</h1>
        <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
            {t('aboutSubtitle')}
        </p>
      </div>
      
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12 shadow-xl">
        <Image 
            src="https://i.postimg.cc/pThL0dX0/about-us-page-image.jpg" 
            alt="About IJCC" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="people meeting"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="prose lg:prose-xl max-w-none text-foreground">
            <p>{t('aboutPara1')}</p>
            
            <p>{t('aboutPara2')}</p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                {t('aboutMission')}
            </blockquote>
            
            <h2 className="text-3xl font-headline mt-12">{t('aboutObjectivesTitle')}</h2>
            <ul className="space-y-2">
                <li>{t('aboutObjective1')}</li>
                <li>{t('aboutObjective2')}</li>
                <li>{t('aboutObjective3')}</li>
                <li>{t('aboutObjective4')}</li>
                <li>{t('aboutObjective5')}</li>
            </ul>
        </div>
      </div>
      
      <TeamSection 
        title={t('leadershipTitle')}
        members={leadershipData}
        description={t('leadershipDescription')}
        t={t}
      />

      <TeamSection
        title={t('advisorsTitle')}
        members={advisorsData}
        description={t('advisorsDescription')}
        t={t}
      />
      
      <TeamSection
        title={t('legalTeamTitle')}
        members={legalTeamData}
        description={t('legalTeamDescription')}
        t={t}
      />

      <TeamSection
        title={t('regionalChaptersTitle')}
        members={regionalChaptersData}
        description={t('regionalChaptersDescription')}
        t={t}
      />

    </div>
  );
}

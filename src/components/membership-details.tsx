
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Rocket, Building, Landmark, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

const membershipTiers = [
  {
    icon: <User className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_individual_title",
    eligibilityKey: "membershipTier_individual_eligibility",
    benefitsKeys: [
      "membershipTier_individual_benefit1",
      "membershipTier_individual_benefit2",
      "membershipTier_individual_benefit3",
      "membershipTier_individual_benefit4",
      "membershipTier_individual_benefit5",
    ],
    priceId: "individual",
    price: "₹5,000",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_startup_title",
    eligibilityKey: "membershipTier_startup_eligibility",
    benefitsKeys: [
      "membershipTier_startup_benefit1",
      "membershipTier_startup_benefit2",
      "membershipTier_startup_benefit3",
      "membershipTier_startup_benefit4",
      "membershipTier_startup_benefit5",
    ],
    priceId: "startup",
    price: "₹10,000",
  },
   {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_association_title",
    eligibilityKey: "membershipTier_association_eligibility",
    benefitsKeys: [
      "membershipTier_association_benefit1",
      "membershipTier_association_benefit2",
      "membershipTier_association_benefit3",
      "membershipTier_association_benefit4",
      "membershipTier_association_benefit5",
    ],
    priceId: "association",
    price: "₹15,000",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_corporate_title",
    eligibilityKey: "membershipTier_corporate_eligibility",
    benefitsKeys: [
      "membershipTier_corporate_benefit1",
      "membershipTier_corporate_benefit2",
      "membershipTier_corporate_benefit3",
      "membershipTier_corporate_benefit4",
      "membershipTier_corporate_benefit5",
    ],
    priceId: "corporate",
    price: "₹25,000",
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_largeCorporate_title",
    eligibilityKey: "membershipTier_largeCorporate_eligibility",
    benefitsKeys: [
      "membershipTier_largeCorporate_benefit1",
      "membershipTier_largeCorporate_benefit2",
      "membershipTier_largeCorporate_benefit3",
      "membershipTier_largeCorporate_benefit4",
      "membershipTier_largeCorporate_benefit5",
    ],
    priceId: "large-corporate",
    price: "₹50,000",
  },
];

const TierCard = ({ tier }: { tier: (typeof membershipTiers)[0] }) => {
    const { user, loading } = useAuth();
    const { toast } = useToast();
    const router = useRouter();
    const { t } = useTranslation();

    const handleGetStarted = () => {
        if (!user) {
            toast({
                title: "Login Required",
                description: "Please login to apply for membership.",
                variant: "destructive",
            });
            router.push('/login');
        } else {
            router.push(`/membership-application?tier=${tier.priceId}`);
        }
    };

    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow border-2 border-primary/5">
            <CardHeader>
              <div className="flex items-start gap-4 mb-2">
                <div className="bg-primary/5 p-3 rounded-2xl">{tier.icon}</div>
                <div className="flex-1">
                    <CardTitle className="font-headline text-2xl text-primary">{t(tier.titleKey)}</CardTitle>
                    <div className="flex items-baseline gap-2 pt-2">
                        <span className="text-3xl font-bold text-logo-blue">{tier.price}</span>
                    </div>
                </div>
              </div>
              <CardDescription className="font-medium text-muted-foreground">{t(tier.eligibilityKey)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 pt-4 border-t border-primary/10">
                {tier.benefitsKeys.map((benefitKey) => (
                  <li key={benefitKey} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{t(benefitKey)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
                <Button onClick={handleGetStarted} className="w-full h-12 rounded-xl text-base font-bold shadow-md hover:shadow-xl transition-all" disabled={loading}>
                    Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export function MembershipDetails() {
  const { t } = useTranslation();
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {membershipTiers.map((tier) => (
          <TierCard key={tier.titleKey} tier={tier} />
        ))}
         <Card className="lg:col-span-2 border-2 border-primary/20 bg-primary/5 shadow-xl">
            <CardHeader className="text-center sm:text-left">
                <CardTitle className="font-headline text-3xl text-primary">{t('membershipDetails_paymentTitle')}</CardTitle>
                <CardDescription className="text-base font-medium">Please use the details below for direct bank settlement.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-12 pb-10">
                <div className="space-y-4 text-muted-foreground flex-1 text-center sm:text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-sm">
                        <span className="font-bold text-foreground">{t('membershipDetails_accountNameLabel')}:</span>
                        <span className="font-medium">INDO JAPAN CHAMBER OF COMMERCE</span>
                        
                        <span className="font-bold text-foreground">{t('membershipDetails_bankNameLabel')}:</span>
                        <span className="font-medium">IDFC First Bank</span>
                        
                        <span className="font-bold text-foreground">{t('membershipDetails_accountNoLabel')}:</span>
                        <span className="font-bold text-logo-blue text-lg">10226043148</span>
                        
                        <span className="font-bold text-foreground">{t('membershipDetails_branchLabel')}:</span>
                        <span className="font-medium">Crossing Republic-Ghaziabad</span>
                        
                        <span className="font-bold text-foreground">{t('membershipDetails_ifscCodeLabel')}:</span>
                        <span className="font-bold tracking-wider text-logo-blue">IDFB0021413</span>
                        
                        <span className="font-bold text-foreground">{t('membershipDetails_micrCodeLabel')}:</span>
                        <span className="font-medium">110751034</span>
                        
                        <span className="font-bold text-foreground">{t('membershipDetails_branchCodeLabel')}:</span>
                        <span className="font-medium">21413</span>
                    </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center gap-4 group">
                    <div className="bg-white p-4 rounded-3xl border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        <Image 
                            src="https://i.postimg.cc/hGRkss7h/qr-ijcc.jpg"
                            alt="Payment QR Code"
                            width={200}
                            height={200}
                            className="rounded-xl"
                            data-ai-hint="qr code"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] uppercase font-black text-primary tracking-[0.2em]">Scan to Pay</span>
                        <span className="text-[9px] text-muted-foreground font-bold italic">Support: +91-92679 19281</span>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <Card className="border-none bg-muted/30 shadow-inner">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{t('membershipDetails_enrollmentTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed font-medium">{t('membershipDetails_enrollmentDescription')}</p>
            </CardContent>
        </Card>
        
        <Card className="text-center border-none bg-primary text-primary-foreground shadow-xl flex flex-col justify-center">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('membershipDetails_contactTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-8">
                 <div className="flex flex-col items-center gap-2 group">
                    <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                        <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-sm font-bold">info@ijcc.in</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 group">
                    <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                        <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-sm font-bold">+91-92679 19281</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 group">
                    <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                        <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-sm font-bold">www.ijcc.in</span>
                 </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

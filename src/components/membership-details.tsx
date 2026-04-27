
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Rocket, Building, Landmark, Mail, Phone, Globe, ArrowRight, GraduationCap, Briefcase, Building2, Crown, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { MEMBERSHIP_PRICING_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

const membershipTiers = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_student_title",
    eligibilityKey: "membershipTier_student_eligibility",
    benefitsKeys: [
      "membershipTier_student_benefit1",
      "membershipTier_student_benefit2",
      "membershipTier_student_benefit3",
    ],
    priceId: "student",
    price: "₹5,000",
  },
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
      "membershipTier_individual_benefit6",
      "membershipTier_individual_benefit7",
    ],
    priceId: "individual",
    price: "₹11,000",
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
      "membershipTier_startup_benefit6",
      "membershipTier_startup_benefit7",
    ],
    priceId: "startup",
    price: "₹15,000",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_smeStandard_title",
    eligibilityKey: "membershipTier_smeStandard_eligibility",
    benefitsKeys: [
      "membershipTier_smeStandard_benefit1",
      "membershipTier_smeStandard_benefit2",
      "membershipTier_smeStandard_benefit3",
      "membershipTier_smeStandard_benefit4",
      "membershipTier_smeStandard_benefit5",
      "membershipTier_smeStandard_benefit6",
      "membershipTier_smeStandard_benefit7",
      "membershipTier_smeStandard_benefit8",
    ],
    priceId: "sme-standard",
    price: "₹35,000",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_smePlus_title",
    eligibilityKey: "membershipTier_smePlus_eligibility",
    benefitsKeys: [
      "membershipTier_smePlus_benefit1",
      "membershipTier_smePlus_benefit2",
      "membershipTier_smePlus_benefit3",
      "membershipTier_smePlus_benefit4",
      "membershipTier_smePlus_benefit5",
      "membershipTier_smePlus_benefit6",
      "membershipTier_smePlus_benefit7",
    ],
    priceId: "sme-plus",
    price: "₹75,000",
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_corporateStandard_title",
    eligibilityKey: "membershipTier_corporateStandard_eligibility",
    benefitsKeys: [
      "membershipTier_corporateStandard_benefit1",
      "membershipTier_corporateStandard_benefit2",
      "membershipTier_corporateStandard_benefit3",
      "membershipTier_corporateStandard_benefit4",
      "membershipTier_corporateStandard_benefit5",
      "membershipTier_corporateStandard_benefit6",
      "membershipTier_corporateStandard_benefit7",
      "membershipTier_corporateStandard_benefit8",
    ],
    priceId: "corporate-standard",
    price: "₹1,00,000",
  },
  {
    icon: <Crown className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_corporatePremium_title",
    eligibilityKey: "membershipTier_corporatePremium_eligibility",
    benefitsKeys: [
      "membershipTier_corporatePremium_benefit1",
      "membershipTier_corporatePremium_benefit2",
      "membershipTier_corporatePremium_benefit3",
      "membershipTier_corporatePremium_benefit4",
      "membershipTier_corporatePremium_benefit5",
      "membershipTier_corporatePremium_benefit6",
      "membershipTier_corporatePremium_benefit7",
      "membershipTier_corporatePremium_benefit8",
    ],
    priceId: "corporate-premium",
    price: "₹2,50,000",
  },
  {
    icon: <Crown className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_patron_title",
    eligibilityKey: "membershipTier_patron_eligibility",
    benefitsKeys: [
      "membershipTier_patron_benefit1",
      "membershipTier_patron_benefit2",
      "membershipTier_patron_benefit3",
      "membershipTier_patron_benefit4",
      "membershipTier_patron_benefit5",
      "membershipTier_patron_benefit6",
      "membershipTier_patron_benefit7",
      "membershipTier_patron_benefit8",
      "membershipTier_patron_benefit9",
      "membershipTier_patron_benefit10",
      "membershipTier_patron_benefit11",
    ],
    priceId: "patron",
    price: "₹5,00,000",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    titleKey: "membershipTier_strategicPlatinum_title",
    eligibilityKey: "membershipTier_strategicPlatinum_eligibility",
    benefitsKeys: [
      "membershipTier_strategicPlatinum_benefit1",
      "membershipTier_strategicPlatinum_benefit2",
      "membershipTier_strategicPlatinum_benefit3",
      "membershipTier_strategicPlatinum_benefit4",
      "membershipTier_strategicPlatinum_benefit5",
      "membershipTier_strategicPlatinum_benefit6",
      "membershipTier_strategicPlatinum_benefit7",
      "membershipTier_strategicPlatinum_benefit8",
      "membershipTier_strategicPlatinum_benefit9",
    ],
    priceId: "strategic-platinum",
    price: "₹10,00,000+",
  },
];

const TierCard = ({ tier }: { tier: any }) => {
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
                {tier.customBenefits ? (
                  tier.customBenefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-snug">{benefit}</span>
                    </li>
                  ))
                ) : (
                  tier.benefitsKeys.map((benefitKey: string) => (
                    <li key={benefitKey} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-snug">{t(benefitKey)}</span>
                    </li>
                  ))
                )}
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
  const [pricingData, setPricingData] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [pData, sData] = await Promise.all([
          client.fetch(MEMBERSHIP_PRICING_QUERY),
          client.fetch(SITE_SETTINGS_QUERY)
        ]);
        if (pData && pData.length > 0) setPricingData(pData);
        if (sData) setSettings(sData);
      } catch (error) {
        console.error('Failed to fetch from Sanity', error);
      }
    }
    fetchData();
  }, []);

  const mergedTiers = membershipTiers.map(tier => {
    const sanityTier = pricingData.find(p => {
      if (!p.tierName) return false;
      const sanityName = p.tierName.toLowerCase();
      const localId = tier.priceId.toLowerCase();

      // Exact or partial matches
      if (sanityName === localId) return true;
      if (localId === 'strategic-platinum' && sanityName.includes('strategic')) return true;
      if (localId === 'patron' && sanityName.includes('patron')) return true;
      if (localId === 'corporate-premium' && sanityName.includes('premium')) return true;
      if (localId === 'corporate-standard' && sanityName.includes('corporate') && !sanityName.includes('premium') && !sanityName.includes('large')) return true;
      if (localId === 'sme-plus' && sanityName.includes('sme') && sanityName.includes('plus')) return true;
      if (localId === 'sme-standard' && sanityName.includes('sme') && !sanityName.includes('plus')) return true;
      if (localId === 'startup' && sanityName.includes('startup')) return true;
      if (localId === 'individual' && sanityName.includes('individual')) return true;
      if (localId === 'student' && sanityName.includes('student')) return true;

      return false;
    });

    if (sanityTier) {
      const symbol = sanityTier.currency === 'INR' ? '₹' : sanityTier.currency === 'USD' ? '$' : '¥';
      const formattedPrice = sanityTier.price.toLocaleString('en-IN');
      const suffix = localId === 'strategic-platinum' ? '+' : '';
      
      return {
        ...tier,
        price: `${symbol}${formattedPrice}${suffix}`,
        customBenefits: sanityTier.benefits && sanityTier.benefits.length > 0 ? sanityTier.benefits : undefined
      };
    }
    return tier;
  });

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mergedTiers.map((tier) => (
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
                <div className="w-full mt-6 px-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed border-l-4 border-primary/40 pl-3 py-1 bg-primary/5 rounded-r-lg">
                        <span className="font-bold text-foreground">Note —</span> All IJCC membership fees paid for a financial year are non-transferable and non-refundable. Applicants are requested to carefully review their application form prior to making the final payment.
                    </p>
                </div>
            </CardContent>
        </Card>
      </div>

      {/* Membership Rules */}
      <Card className="border-2 border-primary/10 shadow-lg mt-8 mb-16">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">{t('membershipRules_title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{t('membershipRules_rule1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{t('membershipRules_rule2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{t('membershipRules_rule3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{t('membershipRules_rule4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{t('membershipRules_rule5')}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

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
                    <span className="text-sm font-bold">{settings?.contactEmail || "info@ijcc.in"}</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 group">
                    <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                        <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-sm font-bold">{settings?.phoneNumber || "+91-92679 19281"}</span>
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

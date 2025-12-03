
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Rocket, Building, Landmark, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
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
                title: t('membershipDetails_authRequiredTitle'),
                description: t('membershipDetails_authRequiredDescription'),
                variant: "destructive",
            });
            router.push('/login');
        } else {
            router.push(`/membership-application?tier=${tier.priceId}`);
        }
    };

    return (
        <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-start gap-4 mb-2">
                {tier.icon}
                <div className="flex-1">
                    <CardTitle className="font-headline text-2xl">{t(tier.titleKey)}</CardTitle>
                    <div className="flex items-baseline gap-2 pt-2">
                        <span className="text-3xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">{t('membershipDetails_perYear')}</span>
                    </div>
                </div>
              </div>
              <CardDescription>{t(tier.eligibilityKey)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-3">{t('membershipDetails_benefitsTitle')}:</h4>
              <ul className="space-y-2">
                {tier.benefitsKeys.map((benefitKey) => (
                  <li key={benefitKey} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t(benefitKey)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
                <Button onClick={handleGetStarted} className="w-full" disabled={loading}>
                    {t('membershipDetails_getStartedButton')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export function MembershipDetails() {
  const { t } = useTranslation();
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {membershipTiers.map((tier) => (
          <TierCard key={tier.titleKey} tier={tier} />
        ))}
         <Card>
            <CardHeader>
                <CardTitle className="font-headline">{t('membershipDetails_paymentTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-6">
                <div className="space-y-2 text-muted-foreground flex-1">
                    <p><strong>{t('membershipDetails_accountNameLabel')}:</strong> INDO JAPAN CHAMBER OF COMMERCE</p>
                    <p><strong>{t('membershipDetails_bankNameLabel')}:</strong> IDFC Bank</p>
                    <p><strong>{t('membershipDetails_accountNoLabel')}:</strong> 10226043148</p>
                    <p><strong>{t('membershipDetails_branchLabel')}:</strong> Crossing Republic-Ghaziabad</p>
                    <p><strong>{t('membershipDetails_ifscCodeLabel')}:</strong> IDFB0021413</p>
                    <p><strong>{t('membershipDetails_micrCodeLabel')}:</strong> 110751034</p>
                    <p><strong>{t('membershipDetails_branchCodeLabel')}:</strong> 21413</p>
                </div>
                <div className="flex-shrink-0">
                    <Image 
                        src="https://i.postimg.cc/hGRkss7h/qr-ijcc.jpg"
                        alt="Payment QR Code"
                        width={150}
                        height={150}
                        className="rounded-lg shadow-md"
                        data-ai-hint="qr code"
                    />
                </div>
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 items-start">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">{t('membershipDetails_enrollmentTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{t('membershipDetails_enrollmentDescription')}</p>
            </CardContent>
        </Card>
      </div>

       <Card className="text-center">
        <CardHeader>
            <CardTitle className="font-headline">{t('membershipDetails_contactTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-6 text-muted-foreground">
             <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@ijcc.in</span>
             </div>
             <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91-9599301261</span>
             </div>
             <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>www.ijcc.in</span>
             </div>
        </CardContent>
       </Card>

    </div>
  );
}

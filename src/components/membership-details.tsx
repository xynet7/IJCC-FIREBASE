
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Rocket, Building, Landmark, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const membershipTiers = [
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Individual Professionals / Freelancers",
    eligibility: "Freelancers, consultants, independent professionals across domains interested in Indo-Japan collaboration.",
    benefits: [
      "Invites to Indo-Japan networking events & webinars",
      "Access to cultural exchange and educational programs",
      "Digital certificate of IJCC Membership",
      "Discounts on training, tours & workshops",
      "Eligibility for mentorship and project collaboration",
    ],
    priceId: "individual"
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Startups / SMEs",
    eligibility: "Early-stage startups, growing SMEs, bootstrapped or VC-backed Indian ventures.",
    benefits: [
      "Business exposure via Indo-Japan platforms",
      "Support in market linkages and B2B matchmaking",
      "Invitations to pitch events and startup delegations",
      "Networking with Japanese incubators & VCs",
      "Visibility on IJCC's startup showcases & newsletters",
    ],
    priceId: "startup"
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Corporates / MSMEs",
    eligibility: "Registered MSMEs, joint ventures, established private limited companies with a Japan interest.",
    benefits: [
      "Listing on IJCC website & business directories",
      "Priority participation in Indo-Japan trade missions",
      "Assistance with Japanese business introductions",
      "Access to advisory panels on trade & legal matters",
      "Leads for Indo-Japan collaboration & procurement",
    ],
    priceId: "corporate"
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Large Corporates / Institutions",
    eligibility: "MNCs, large Indian corporates, institutions, and think tanks engaged in Indo-Japan programs.",
    benefits: [
      "Co-hosting opportunities for major events & summits",
      "Direct access to senior officials, embassies & policy bodies",
      "Representation in Indo-Japan working groups",
      "Brand visibility across IJCC platforms & delegations",
      "Joint whitepapers, reports, and knowledge partnerships",
    ],
    priceId: "large-corporate"
  },
];

const TierCard = ({ tier }: { tier: (typeof membershipTiers)[0] }) => {
    const { user, loading } = useAuth();
    const { toast } = useToast();
    const router = useRouter();

    const handleGetStarted = () => {
        if (!user) {
            toast({
                title: "Authentication Required",
                description: "Please log in or create an account to apply for membership.",
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
              <div className="flex items-center gap-4 mb-2">
                {tier.icon}
                <CardTitle className="font-headline text-2xl">{tier.title}</CardTitle>
              </div>
              <CardDescription>{tier.eligibility}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
                <Button onClick={handleGetStarted} className="w-full" disabled={loading}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export function MembershipDetails() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {membershipTiers.map((tier) => (
          <TierCard key={tier.title} tier={tier} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Enrollment Procedure</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Submit your profile and application form. Upon approval, a welcome letter and membership certificate will be issued. You will then be prompted for payment.</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
                <p><strong>Account Name:</strong> INDO JAPAN CHAMBER OF COMMERCE</p>
                <p><strong>Bank Name:</strong> IDFC Bank</p>
                <p><strong>A/c No.:</strong> 10226043148</p>
                <p><strong>Branch:</strong> Crossing Republic-Ghaziabad</p>
                <p><strong>IFSC Code:</strong> IDFB0021413</p>
                <p><strong>MICR Code:</strong> 110751034</p>
                <p><strong>Branch Code:</strong> 21413</p>
            </CardContent>
        </Card>
      </div>

       <Card className="text-center">
        <CardHeader>
            <CardTitle className="font-headline">Contact for More Information</CardTitle>
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


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { cn } from "@/lib/utils";


const pricingTiers = [
    {
        id: "individual",
        title: "Individual Professionals / Freelancers",
        price: "₹5,000",
        period: "/ year",
        description: "For freelancers and consultants.",
        features: [
            "Invites to networking events & webinars",
            "Access to cultural programs",
            "Digital membership certificate",
            "Discounts on training & workshops",
        ],
    },
    {
        id: "startup",
        title: "Startups / SMEs",
        price: "₹15,000",
        period: "/ year",
        description: "For growing SMEs and startups.",
        features: [
            "All Individual benefits, plus:",
            "Business exposure on IJCC platforms",
            "B2B matchmaking support",
            "Invitations to pitch events",
            "Networking with Japanese VCs",
        ],
        featured: true,
    },
    {
        id: "corporate",
        title: "Corporates / MSMEs",
        price: "₹50,000",
        period: "/ year",
        description: "For established private companies.",
        features: [
            "All Startup/SME benefits, plus:",
            "Priority in trade missions",
            "Access to advisory panels",
            "Leads for Indo-Japan collaboration",
        ],
    },
    {
        id: "large-corporate",
        title: "Large Corporates / Institutions",
        price: "₹1,00,000",
        period: "/ year",
        description: "For MNCs and large institutions.",
        features: [
            "All Corporate benefits, plus:",
            "Co-hosting opportunities for summits",
            "Direct access to senior officials",
            "Representation in working groups",
            "Joint knowledge partnerships",
        ],
    },
];


export default function PricingPage() {
    const { toast } = useToast();
    const { user } = useAuth();
    const router = useRouter();
    const [updatingTier, setUpdatingTier] = useState<string | null>(null);

    const handlePayment = async (tier: typeof pricingTiers[0]) => {
        if (!user) {
            toast({
                variant: "destructive",
                title: "Not Logged In",
                description: "Please log in or create an account to choose a membership plan.",
            });
            router.push('/login');
            return;
        }

        setUpdatingTier(tier.id);
        
        try {
            const userDocRef = doc(db, 'users', user.uid);
            await updateDoc(userDocRef, {
                membershipTier: tier.id,
            });
            
            toast({
                title: "Membership Updated!",
                description: `Your plan has been updated to ${tier.title}.`,
            });
            router.push('/profile');

        } catch (error: any) {
            console.error("Failed to update membership:", error);
            toast({
                variant: "destructive",
                title: "Update Failed",
                description: "Could not update your membership plan. Please try again.",
            });
        } finally {
            setUpdatingTier(null);
        }
    };
    
    return (
        <div className="container py-12">
            <div className="space-y-4 mb-12 text-center">
                <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Membership Pricing</h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                    Choose the plan that's right for you and join our mission to foster Indo-Japan collaboration.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {pricingTiers.map((tier) => (
                    <Card 
                        key={tier.id} 
                        id={tier.id} 
                        className={cn('flex flex-col h-full transition-shadow', 
                            tier.featured && !updatingTier && 'border-primary border-2 shadow-lg',
                            updatingTier === tier.id && 'animate-glow border-destructive border-2 shadow-lg'
                        )}
                    >
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{tier.title}</CardTitle>
                            <CardDescription>{tier.description}</CardDescription>
                             <div className="flex items-baseline gap-2 pt-4">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <ul className="space-y-3">
                                {tier.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-green-500" />
                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                           <Button 
                             onClick={() => handlePayment(tier)} 
                             className="w-full"
                             variant={tier.featured ? "default" : "outline"}
                             disabled={!!updatingTier}
                            >
                             {updatingTier === tier.id ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    <span>Processing...</span>
                                </>
                             ) : (
                                "Choose Plan"
                             )}
                           </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

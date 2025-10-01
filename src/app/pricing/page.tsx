
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { createRazorpayOrder, verifyRazorpayPayment } from "@/lib/actions";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

const pricingTiers = [
    {
        id: "individual",
        title: "Individual Professionals / Freelancers",
        price: 5000,
        displayPrice: "₹5,000",
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
        price: 10000,
        displayPrice: "₹10,000",
        period: "/ year",
        description: "For growing SMEs and startups.",
        features: [
            "All Individual benefits, plus:",
            "Business exposure on IJCC platforms",
            "B2B matchmaking support",
            "Invitations to pitch events",
            "Networking with Japanese VCs",
        ],
    },
    {
        id: "corporate",
        title: "Corporates / MSMEs",
        price: 25000,
        displayPrice: "₹25,000",
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
        price: 50000,
        displayPrice: "₹50,000",
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
    const [loadingTier, setLoadingTier] = useState<string | null>(null);

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

        setLoadingTier(tier.id);

        try {
            const order = await createRazorpayOrder({
                amount: tier.price * 100, // Amount in paise
                currency: 'INR',
                receipt: `receipt_${user.uid}_${tier.id}_${Date.now()}`,
            });

            if (!order || !order.id) {
                throw new Error("Order creation failed.");
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
                amount: order.amount,
                currency: order.currency,
                name: "Indo-Japan Chamber of Commerce",
                description: `Membership - ${tier.title}`,
                order_id: order.id,
                handler: async function (response: any) {
                    const verificationResult = await verifyRazorpayPayment({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });

                    if (verificationResult.success) {
                        const userDocRef = doc(db, 'users', user.uid);
                        await updateDoc(userDocRef, {
                            membershipTier: tier.id,
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                        });
                        
                        toast({
                            title: "Payment Successful!",
                            description: `Your membership has been upgraded to ${tier.title}.`,
                        });
                        router.push('/profile');
                    } else {
                        toast({
                            variant: "destructive",
                            title: "Payment Verification Failed",
                            description: "Your payment could not be verified. Please contact support.",
                        });
                    }
                },
                prefill: {
                    name: user.displayName || undefined,
                    email: user.email || undefined,
                },
                theme: {
                    color: "#D40000"
                }
            };
            
            const rzp = new (window as any).Razorpay(options);
            rzp.open();

        } catch (error: any) {
            console.error("Payment initiation failed:", error);
            toast({
                variant: "destructive",
                title: "Payment Failed",
                description: "Could not initiate payment. Please try again.",
            });
        } finally {
            setLoadingTier(null);
        }
    };
    
    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
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
                            className={cn(
                                'flex flex-col h-full transition-all duration-300 hover:ring-2 hover:ring-destructive hover:ring-offset-2 hover:ring-offset-background',
                                loadingTier === tier.id && 'ring-2 ring-primary ring-offset-2 ring-offset-background animate-pulse'
                            )}
                        >
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl min-h-[64px]">{tier.title}</CardTitle>
                                <CardDescription className="min-h-[40px]">{tier.description}</CardDescription>
                                 <div className="flex items-baseline gap-2 pt-4">
                                    <span className="text-4xl font-bold">{tier.displayPrice}</span>
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
                                 variant={"outline"}
                                 disabled={!!loadingTier}
                                >
                                 {loadingTier === tier.id ? (
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
        </>
    );
}

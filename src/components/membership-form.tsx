
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { submitMembershipForm } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Submit Application
    </Button>
  );
}

function MembershipFormComponent() {
  const initialState = { message: "", errors: {}, success: false };
  const [state, dispatch] = useFormState(submitMembershipForm, initialState);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTier, setSelectedTier] = useState(searchParams.get('tier') || 'individual');

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Application Submitted!",
        description: state.message,
      });
      // Redirect to pricing page to complete payment
      router.push(`/pricing#${selectedTier}`);
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, router, toast, selectedTier]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Part A: Company & Primary Contact Information</CardTitle>
        <CardDescription>All fields are required unless marked optional.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-6">
          
          <div className="space-y-2">
            <Label htmlFor="membershipTier">Membership Tier</Label>
            <Select name="membershipTier" value={selectedTier} onValueChange={setSelectedTier}>
              <SelectTrigger id="membershipTier">
                <SelectValue placeholder="Select a membership tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual Professionals / Freelancers (₹5,000)</SelectItem>
                <SelectItem value="startup">Startups / SMEs (₹10,000)</SelectItem>
                <SelectItem value="corporate">Corporates / MSMEs (₹25,000)</SelectItem>
                <SelectItem value="large-corporate">Large Corporates / Institutions (₹50,000)</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.membershipTier && <p className="text-sm font-medium text-destructive">{state.errors.membershipTier[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name / Company Name</Label>
            <Input id="name" name="name" placeholder="Sakura Tanaka or Tanaka Corp." />
            {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" />
              {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" />
              {state.errors?.phone && <p className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Company Website (Optional)</Label>
            <Input id="website" name="website" placeholder="https://tanakacorp.com" />
            {state.errors?.website && <p className="text-sm font-medium text-destructive">{state.errors.website[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Full Address</Label>
            <Textarea id="address" name="address" placeholder="1-1-1, Marunouchi, Chiyoda-ku, Tokyo" />
            {state.errors?.address && <p className="text-sm font-medium text-destructive">{state.errors.address[0]}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" placeholder="Tokyo" />
              {state.errors?.city && <p className="text-sm font-medium text-destructive">{state.errors.city[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode / Zip Code</Label>
              <Input id="pincode" name="pincode" placeholder="100-0005" />
              {state.errors?.pincode && <p className="text-sm font-medium text-destructive">{state.errors.pincode[0]}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" placeholder="Japan" />
            {state.errors?.country && <p className="text-sm font-medium text-destructive">{state.errors.country[0]}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest">Reason for Joining (Optional)</Label>
            <Textarea id="interest" name="interest" placeholder="Tell us why you're interested in joining the IJCC." />
            {state.errors?.interest && <p className="text-sm font-medium text-destructive">{state.errors.interest[0]}</p>}
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}

export function MembershipForm() {
    return (
        <Suspense fallback={<Loader2 className="mx-auto h-12 w-12 animate-spin" />}>
            <MembershipFormComponent />
        </Suspense>
    )
}

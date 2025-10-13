
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitMembershipForm } from "@/lib/actions";
import { MembershipFormSchema, type MembershipFormState } from "@/lib/definitions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { z } from "zod";


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
  
  const form = useForm<z.infer<typeof MembershipFormSchema>>({
    resolver: zodResolver(MembershipFormSchema),
    defaultValues: {
      membershipTier: selectedTier as "individual" | "startup" | "corporate" | "large-corporate",
      legalCompanyName: "",
      entityType: undefined,
      msmeRegistration: "",
      registeredAddress: "",
      city: "",
      state: "",
      website: "",
      directors: "",
      primaryContactPerson: "",
      mobileNumber: "",
      emailAddress: "",
    },
  });

  useEffect(() => {
    form.setValue('membershipTier', selectedTier as "individual" | "startup" | "corporate" | "large-corporate");
  }, [selectedTier, form]);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Application Submitted!",
        description: state.message,
      });
      router.push(`/pricing#${selectedTier}`);
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: "Error Submitting Form",
        description: state.message,
      });
    }
  }, [state, router, toast, selectedTier]);

  function onSubmit(values: z.infer<typeof MembershipFormSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
        if (value instanceof Date) {
            formData.append(key, value.toISOString());
        } else if (value != null) {
            formData.append(key, String(value));
        }
    });
    dispatch(formData);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Part A: Company & Primary Contact Information</CardTitle>
        <CardDescription>All fields are required unless marked optional.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
                <FormField
                  control={form.control}
                  name="membershipTier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Membership Tier</FormLabel>
                      <Select onValueChange={(value) => { field.onChange(value); setSelectedTier(value); }} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a membership tier" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="individual">Individual Professionals / Freelancers (₹5,000)</SelectItem>
                            <SelectItem value="startup">Startups / SMEs (₹10,000)</SelectItem>
                            <SelectItem value="corporate">Corporates / MSMEs (₹25,000)</SelectItem>
                            <SelectItem value="large-corporate">Large Corporates / Institutions (₹50,000)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="legalCompanyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1. Legal Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Tanaka Corporation Pvt. Ltd." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="entityType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>2. Type of Entity</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="private-ltd" /></FormControl>
                            <FormLabel className="font-normal">Private Ltd</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="public-ltd" /></FormControl>
                            <FormLabel className="font-normal">Public Ltd</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="llp" /></FormControl>
                            <FormLabel className="font-normal">LLP</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="partnership" /></FormControl>
                            <FormLabel className="font-normal">Partnership</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="proprietorship" /></FormControl>
                            <FormLabel className="font-normal">Proprietorship</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfIncorporation"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>3. Date of Incorporation</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="msmeRegistration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>4. MSME or Udyam Registration No. (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. UDYAM-XX-00-0000000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="registeredAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>5. Official Registered Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your full registered address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>6. City</FormLabel>
                        <FormControl><Input placeholder="e.g. Gurugram" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>7. State</FormLabel>
                        <FormControl><Input placeholder="e.g. Haryana" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>8. Website (Optional)</FormLabel>
                      <FormControl><Input placeholder="https://example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="directors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>9. Name of Directors</FormLabel>
                      <FormControl><Textarea placeholder="e.g. Mr. Kenji Tanaka, Mrs. Yui Suzuki" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="primaryContactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>10. Primary Contact Person</FormLabel>
                      <FormControl><Input placeholder="e.g. Mr. Akira Sato" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>11. Mobile No.</FormLabel>
                        <FormControl><Input type="tel" placeholder="+91 98765 43210" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>12. Email Address</FormLabel>
                        <FormControl><Input type="email" placeholder="contact@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full">Submit Part A</Button>
            </form>
        </Form>
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

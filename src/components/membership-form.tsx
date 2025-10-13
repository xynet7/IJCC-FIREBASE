
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitMembershipForm } from "@/lib/actions";
import { MembershipFormSchema, type MembershipFormState } from "@/lib/definitions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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

const japanInterestItems = [
    { id: "jv-partner", label: "Finding a Japanese Joint Venture (JV) Partner" },
    { id: "tech-transfer", label: "Securing Technology Transfer / Licensing" },
    { id: "investment", label: "Raising Investment / Funding from Japan" },
    { id: "export", label: "Exporting our Products/Services to the Japanese Market" },
    { id: "sourcing", label: "Sourcing Components/Raw Materials from Japan" },
    { id: "culture", label: "Understanding Japanese Business Culture & Practices" },
    { id: "other", label: "Other (Please specify)" },
]

function MembershipFormComponent() {
  const initialState: MembershipFormState = { message: "", errors: {}, success: false };
  const [state, dispatch] = useFormState(submitMembershipForm, initialState);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTier, setSelectedTier] = useState(searchParams.get('tier') || 'individual');
  const formRef = useRef<HTMLFormElement>(null);
  
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
      pincode: "",
      website: "",
      directors: "",
      primaryContactPerson: "",
      mobileNumber: "",
      emailAddress: "",
      coreBusinessActivity: undefined,
      otherBusinessActivity: "",
      annualTurnover: undefined,
      japanInterest: [],
      otherJapanInterest: "",
      companyDescription: "",
      marketObjectives: "",
      declaration: undefined,
      applicantName: "",
      applicantDesignation: "",
      applicantDate: new Date(),
      applicantSignature: undefined,
    },
  });

  useEffect(() => {
    form.setValue('membershipTier', selectedTier as "individual" | "startup" | "corporate" | "large-corporate");
  }, [selectedTier, form]);
  
  useEffect(() => {
      if(state.success) {
          toast({
              title: "Application Submitted!",
              description: state.message,
          });
          form.reset();
          router.push(`/pricing?tier=${selectedTier}#${selectedTier}`);
      } else if (state.message && state.errors) {
          toast({
              variant: "destructive",
              title: "Error Submitting Form",
              description: state.message,
          });
          // Manually set form errors for server-side validation issues
          for (const [key, value] of Object.entries(state.errors)) {
              form.setError(key as keyof z.infer<typeof MembershipFormSchema>, {
                  type: 'server',
                  message: Array.isArray(value) ? value.join(', ') : String(value),
              });
          }
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onFormSubmit = (data: z.infer<typeof MembershipFormSchema>) => {
    const formData = new FormData();
    for (const key in data) {
        const value = data[key as keyof typeof data];
        if (value instanceof Date) {
            formData.append(key, value.toISOString());
        } else if (value instanceof File) {
            formData.append(key, value);
        } else if (Array.isArray(value)) {
            value.forEach(item => formData.append(key, item));
        } else if (value !== undefined && value !== null) {
            formData.append(key, String(value));
        }
    }
    dispatch(formData);
  };
  
  const watchingCoreBusiness = form.watch("coreBusinessActivity");
  const watchingJapanInterest = form.watch("japanInterest");


  return (
    <Card>
        <Form {...form}>
            <form 
              ref={formRef} 
              action={(formData) => dispatch(formData)}
              onSubmit={form.handleSubmit(onFormSubmit)}
              className="space-y-8"
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Part A: Company &amp; Primary Contact Information</CardTitle>
                <CardDescription>All fields are required unless marked optional.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
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
                          className="flex flex-wrap gap-4"
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>8. Pincode</FormLabel>
                        <FormControl><Input placeholder="e.g. 122001" {...field} /></FormControl>
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
                      <FormLabel>9. Website (Optional)</FormLabel>
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
                      <FormLabel>10. Name of Directors</FormLabel>
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
                      <FormLabel>11. Primary Contact Person</FormLabel>
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
                        <FormLabel>12. Mobile No.</FormLabel>
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
                        <FormLabel>13. Email Address</FormLabel>
                        <FormControl><Input type="email" placeholder="contact@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>

              <CardHeader>
                <CardTitle className="font-headline text-2xl">Part B: Japan Collaboration Intent &amp; Business Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <FormField
                  control={form.control}
                  name="coreBusinessActivity"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>14. Core Business Activity</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-x-6 gap-y-3"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="accounting-finance" /></FormControl><FormLabel className="font-normal">Accounting &amp; Finance</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="manufacturing" /></FormControl><FormLabel className="font-normal">Manufacturing</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="it-ites" /></FormControl><FormLabel className="font-normal">IT / ITES / Software Services</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="engineering-automotive" /></FormControl><FormLabel className="font-normal">Engineering &amp; Automotive</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="healthcare-pharma" /></FormControl><FormLabel className="font-normal">Healthcare &amp; Pharmaceuticals</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="agri-food" /></FormControl><FormLabel className="font-normal">Agriculture &amp; Food Processing</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="textiles-apparel" /></FormControl><FormLabel className="font-normal">Textiles &amp; Apparel</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="cleantech-energy" /></FormControl><FormLabel className="font-normal">Clean-Tech / Renewable Energy</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="consulting-services" /></FormControl><FormLabel className="font-normal">Consulting &amp; Professional Services</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="other" /></FormControl><FormLabel className="font-normal">Other</FormLabel></FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {watchingCoreBusiness === 'other' && (
                    <FormField
                      control={form.control}
                      name="otherBusinessActivity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please Specify Other Activity</FormLabel>
                          <FormControl><Input placeholder="e.g. Media and Entertainment" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                )}

                <FormField
                  control={form.control}
                  name="annualTurnover"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>15. Current Annual Turnover (INR)</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-x-6 gap-y-3">
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="less-than-5cr" /></FormControl><FormLabel className="font-normal">Less than 5 Crore</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="5-25cr" /></FormControl><FormLabel className="font-normal">5 Crore - 25 Crore</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="25-100cr" /></FormControl><FormLabel className="font-normal">25 Crore - 100 Crore</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="above-100cr" /></FormControl><FormLabel className="font-normal">Above 100 Crore</FormLabel></FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="japanInterest"
                  render={() => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base">16. Your Japan Interest</FormLabel>
                            <FormDescription>Please tick all that apply.</FormDescription>
                        </div>
                        {japanInterestItems.map((item) => (
                            <FormField
                            key={item.id}
                            control={form.control}
                            name="japanInterest"
                            render={({ field }) => {
                                return (
                                <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...(field.value || []), item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value) => value !== item.id
                                                )
                                            )
                                        }}
                                    />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                        <FormMessage />
                    </FormItem>
                  )}
                />

                {watchingJapanInterest?.includes('other') && (
                    <FormField
                      control={form.control}
                      name="otherJapanInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please Specify Other Interest</FormLabel>
                          <FormControl><Input placeholder="Your specific interest" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                )}

                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>17. Company Description (50-150 words)</FormLabel>
                      <FormControl><Textarea placeholder="Provide a brief description of your company's products/services. This helps us understand your unique value proposition." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="marketObjectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>18. Specific Objectives for the Japanese Market</FormLabel>
                      <FormControl><Textarea placeholder='e.g., "We want to partner with a Japanese auto-component manufacturer for technical collaboration," or "We are seeking a distributor in Osaka for our specialty teas."' {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

               <CardHeader>
                <CardTitle className="font-headline text-2xl">Part C: Declaration &amp; Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <FormField
                  control={form.control}
                  name="declaration"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I/We have read and understood the membership criteria and agree to abide by the rules and regulations of the India Japan Chamber of Commerce (IJCC). The information provided in this application is true and correct to the best of my knowledge.
                        </FormLabel>
                      </div>
                       <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                    control={form.control}
                    name="applicantSignature"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                            <FormLabel>Applicant&apos;s Signature</FormLabel>
                            <FormControl>
                                <Input 
                                    type="file" 
                                    accept="image/png, image/jpeg, image/webp" 
                                    onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
                                    {...rest}
                                />
                            </FormControl>
                            <FormDescription>
                                Please upload an image of your signature (PNG, JPG, or WEBP). Size: 10KB to 50KB.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <FormField
                      control={form.control}
                      name="applicantName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl><Input placeholder="Your Full Name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="applicantDesignation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Designation</FormLabel>
                          <FormControl><Input placeholder="e.g. Director" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                 <FormField
                  control={form.control}
                  name="applicantDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date</FormLabel>
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
                 <Card className="bg-muted/50 mt-8">
                  <CardHeader>
                    <CardTitle className="text-base">For Office Use Only</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Application No.: ______________ Date Received: ______________</p>
                    <p>Status: [ ] Approved [ ] Under Review [ ] Additional Info Requested</p>
                    <p>Membership Tier Allotted: ______________ / ______________ / ______________</p>
                  </CardContent>
                </Card>
              </CardContent>

              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
        </Form>
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

    
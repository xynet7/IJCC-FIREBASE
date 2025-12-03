
"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitMembershipForm } from "@/lib/actions";
import { MembershipFormSchema } from "@/lib/definitions";
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
import { useTranslation } from "@/hooks/use-translation";

function MembershipFormComponent() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  
  const form = useForm<z.infer<typeof MembershipFormSchema>>({
    resolver: zodResolver(MembershipFormSchema),
    defaultValues: {
      membershipTier: (searchParams.get('tier') as "individual" | "startup" | "association" | "corporate" | "large-corporate") || 'individual',
      legalCompanyName: "",
      entityType: undefined,
      dateOfIncorporation: "",
      msmeRegistration: "",
      registeredAddress: "",
      city: "",
      state: "",
      pincode: "",
      website: "",
      directors: "",
      primaryContactPerson: "",
      primaryContactDesignation: "",
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
      applicantDate: new Date().toLocaleDateString('en-GB').split('/').join('/'),
    },
  });

  const onFormSubmit = async (values: z.infer<typeof MembershipFormSchema>) => {
    setIsSubmitting(true);
    console.log("Form values being submitted:", values);
    
    const result = await submitMembershipForm(values);

    if (result.success) {
      toast({
        title: t('membershipForm_toastSuccessTitle'),
        description: result.message,
      });
      form.reset();
      router.push(`/pricing?tier=${values.membershipTier}#${values.membershipTier}`);
    } else {
      toast({
        variant: "destructive",
        title: t('membershipForm_toastErrorTitle'),
        description: result.message,
      });
       if (result.errors) {
        for (const [key, value] of Object.entries(result.errors)) {
          form.setError(key as keyof z.infer<typeof MembershipFormSchema>, {
            type: 'server',
            message: Array.isArray(value) ? value.join(', ') : String(value),
          });
        }
      }
    }
    setIsSubmitting(false);
  };
  
  const watchingCoreBusiness = form.watch("coreBusinessActivity");
  const watchingJapanInterest = form.watch("japanInterest");


  return (
    <Card>
        <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onFormSubmit)}
              className="space-y-8"
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('membershipForm_partA_title')}</CardTitle>
                <CardDescription>{t('membershipForm_partA_description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <FormField
                  control={form.control}
                  name="membershipTier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('membershipForm_tier_label')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('membershipForm_tier_placeholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="individual">{t('membershipForm_tier_individual')}</SelectItem>
                            <SelectItem value="startup">{t('membershipForm_tier_startup')}</SelectItem>
                            <SelectItem value="association">{t('membershipForm_tier_association')}</SelectItem>
                            <SelectItem value="corporate">{t('membershipForm_tier_corporate')}</SelectItem>
                            <SelectItem value="large-corporate">{t('membershipForm_tier_largeCorporate')}</SelectItem>
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
                      <FormLabel>{t('membershipForm_legalName_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('membershipForm_legalName_placeholder')} {...field} />
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
                      <FormLabel>{t('membershipForm_entityType_label')}</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="private-ltd" /></FormControl>
                            <FormLabel className="font-normal">{t('membershipForm_entityType_privateLtd')}</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="public-ltd" /></FormControl>
                            <FormLabel className="font-normal">{t('membershipForm_entityType_publicLtd')}</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="llp" /></FormControl>
                            <FormLabel className="font-normal">{t('membershipForm_entityType_llp')}</FormLabel>
                          </FormItem>
                           <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="partnership" /></FormControl>
                            <FormLabel className="font-normal">{t('membershipForm_entityType_partnership')}</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="proprietorship" /></FormControl>
                            <FormLabel className="font-normal">{t('membershipForm_entityType_proprietorship')}</FormLabel>
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
                    <FormItem>
                      <FormLabel>{t('membershipForm_incorporationDate_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('membershipForm_incorporationDate_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="msmeRegistration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('membershipForm_msme_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('membershipForm_msme_placeholder')} {...field} />
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
                      <FormLabel>{t('membershipForm_address_label')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('membershipForm_address_placeholder')} {...field} />
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
                        <FormLabel>{t('membershipForm_city_label')}</FormLabel>
                        <FormControl><Input placeholder={t('membershipForm_city_placeholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('membershipForm_state_label')}</FormLabel>
                        <FormControl><Input placeholder={t('membershipForm_state_placeholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('membershipForm_pincode_label')}</FormLabel>
                        <FormControl><Input placeholder={t('membershipForm_pincode_placeholder')} {...field} /></FormControl>
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
                      <FormLabel>{t('membershipForm_website_label')}</FormLabel>
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
                      <FormLabel>{t('membershipForm_directors_label')}</FormLabel>
                      <FormControl><Textarea placeholder={t('membershipForm_directors_placeholder')} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="primaryContactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('membershipForm_primaryContact_label')}</FormLabel>
                        <FormControl><Input placeholder={t('membershipForm_primaryContact_placeholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="primaryContactDesignation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('membershipForm_designation_label')}</FormLabel>
                        <FormControl><Input placeholder={t('membershipForm_designation_placeholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('membershipForm_mobile_label')}</FormLabel>
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
                        <FormLabel>{t('membershipForm_email_label')}</FormLabel>
                        <FormControl><Input type="email" placeholder="contact@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>

              <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('membershipForm_partB_title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <FormField
                  control={form.control}
                  name="coreBusinessActivity"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>{t('membershipForm_coreBusiness_label')}</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-x-6 gap-y-3"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="accounting-finance" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_accounting')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="manufacturing" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_manufacturing')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="it-ites" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_it')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="engineering-automotive" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_engineering')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="healthcare-pharma" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_healthcare')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="agri-food" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_agri')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="textiles-apparel" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_textiles')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="cleantech-energy" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_cleantech')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="consulting-services" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_consulting')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="other" /></FormControl><FormLabel className="font-normal">{t('membershipForm_coreBusiness_other')}</FormLabel></FormItem>
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
                          <FormLabel>{t('membershipForm_otherActivity_label')}</FormLabel>
                          <FormControl><Input placeholder={t('membershipForm_otherActivity_placeholder')} {...field} /></FormControl>
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
                      <FormLabel>{t('membershipForm_turnover_label')}</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-x-6 gap-y-3">
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="less-than-5cr" /></FormControl><FormLabel className="font-normal">{t('membershipForm_turnover_lessThan5')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="5-25cr" /></FormControl><FormLabel className="font-normal">{t('membershipForm_turnover_5to25')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="25-100cr" /></FormControl><FormLabel className="font-normal">{t('membershipForm_turnover_25to100')}</FormLabel></FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="above-100cr" /></FormControl><FormLabel className="font-normal">{t('membershipForm_turnover_above100')}</FormLabel></FormItem>
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
                            <FormLabel className="text-base">{t('membershipForm_japanInterest_label')}</FormLabel>
                            <FormDescription>{t('membershipForm_japanInterest_description')}</FormDescription>
                        </div>
                        {[
                            { id: "jv-partner", label: t('membershipForm_japanInterest_jv') },
                            { id: "tech-transfer", label: t('membershipForm_japanInterest_tech') },
                            { id: "investment", label: t('membershipForm_japanInterest_investment') },
                            { id: "export", label: t('membershipForm_japanInterest_export') },
                            { id: "sourcing", label: t('membershipForm_japanInterest_sourcing') },
                            { id: "culture", label: t('membershipForm_japanInterest_culture') },
                            { id: "other", label: t('membershipForm_japanInterest_other') },
                        ].map((item) => (
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
                          <FormLabel>{t('membershipForm_otherInterest_label')}</FormLabel>
                          <FormControl><Input placeholder={t('membershipForm_otherInterest_placeholder')} {...field} /></FormControl>
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
                      <FormLabel>{t('membershipForm_companyDescription_label')}</FormLabel>
                      <FormControl><Textarea placeholder={t('membershipForm_companyDescription_placeholder')} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="marketObjectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('membershipForm_marketObjectives_label')}</FormLabel>
                      <FormControl><Textarea placeholder={t('membershipForm_marketObjectives_placeholder')} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

               <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('membershipForm_partC_title')}</CardTitle>
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
                          {t('membershipForm_declaration_label')}
                        </FormLabel>
                      </div>
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
                          <FormLabel>{t('membershipForm_applicantName_label')}</FormLabel>
                          <FormControl><Input placeholder={t('membershipForm_applicantName_placeholder')} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="applicantDesignation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('membershipForm_applicantDesignation_label')}</FormLabel>
                          <FormControl><Input placeholder={t('membershipForm_applicantDesignation_placeholder')} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                 <FormField
                  control={form.control}
                  name="applicantDate"
                  render={({ field }) => (
                     <FormItem>
                      <FormLabel>{t('membershipForm_applicantDate_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('membershipForm_applicantDate_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <Card className="bg-muted/50 mt-8">
                  <CardHeader>
                    <CardTitle className="text-base">{t('membershipForm_officeUse_title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>{t('membershipForm_officeUse_appNo')}: ______________ {t('membershipForm_officeUse_dateReceived')}: ______________</p>
                    <p>{t('membershipForm_officeUse_status')}: [ ] {t('membershipForm_officeUse_approved')} [ ] {t('membershipForm_officeUse_underReview')} [ ] {t('membershipForm_officeUse_infoRequested')}</p>
                    <p>{t('membershipForm_officeUse_tierAllotted')}: ______________ / ______________ / ______________</p>
                  </CardContent>
                </Card>
              </CardContent>

              <CardFooter>
                 <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t('membershipForm_submitButton')}
                </Button>
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

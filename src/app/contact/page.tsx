
"use client";

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export default function ContactPage() {
  const { t } = useTranslation();

  const faqData = [
    { q: t('contact_faq_q1'), a: t('contact_faq_a1') },
    { q: t('contact_faq_q2'), a: t('contact_faq_a2') },
    { q: t('contact_faq_q3'), a: t('contact_faq_a3') },
    { q: t('contact_faq_q4'), a: t('contact_faq_a4') },
    { q: t('contact_faq_q5'), a: t('contact_faq_a5') },
    { q: t('contact_faq_q6'), a: t('contact_faq_a6') },
    { q: t('contact_faq_q7'), a: t('contact_faq_a7') },
    { q: t('contact_faq_q8'), a: t('contact_faq_a8') },
    { q: t('contact_faq_q9'), a: t('contact_faq_a9') },
    { q: t('contact_faq_q10'), a: t('contact_faq_a10') },
  ];

  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const sData = await client.fetch(SITE_SETTINGS_QUERY);
        if (sData) setSettings(sData);
      } catch (error) {
        console.error('Failed to fetch from Sanity', error);
      }
    }
    fetchSettings();
  }, []);

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">{t('contact_title')}</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          {t('contact_subtitle')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-8">
            <h2 className="text-2xl font-headline">{t('contact_officesTitle')}</h2>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">{t('contact_corporateOfficeTitle')}</h3>
                        <p className="text-muted-foreground whitespace-pre-wrap">{settings?.address || t('contact_corporateOfficeAddress')}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">{t('contact_branchOfficeTitle')}</h3>
                        <p className="text-muted-foreground">{t('contact_branchOfficeAddress')}</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">{t('contact_japanOfficeTitle')}</h3>
                        <p className="text-muted-foreground">{t('contact_japanOfficeAddress')}</p>
                    </div>
                </div>
            </div>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{settings?.contactEmail || "info@ijcc.in"}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{settings?.phoneNumber || t('contact_phone_india')}</p>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{t('contact_phone_branch')}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{t('contact_phone_japan')}</p>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-headline text-center mb-12">{t('contact_faq_title')}</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed whitespace-pre-wrap pt-2">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

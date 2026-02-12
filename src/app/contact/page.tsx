
"use client";

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function ContactPage() {
  const { t } = useTranslation();

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
                        <p className="text-muted-foreground">{t('contact_corporateOfficeAddress')}</p>
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
                    <p className="text-muted-foreground">info@ijcc.in</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">+91-92679 19281 (India)</p>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">+91-98717458400 (Branch)</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">+81-80-9055-1930 (Japan)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

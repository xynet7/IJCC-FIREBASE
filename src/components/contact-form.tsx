
"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function ContactForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a0c760cd-dbc5-4ead-942e-7dde4f1a2d6b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: t('contactForm_toastSuccessTitle'),
          description: t('contactForm_toastSuccessDescription'),
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          variant: "destructive",
          title: t('contactForm_toastErrorTitle'),
          description: data.message || t('contactForm_toastErrorGeneric'),
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: t('contactForm_toastErrorTitle'),
        description: t('contactForm_toastErrorGeneric'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{t('contactForm_title')}</CardTitle>
        <CardDescription>{t('contactForm_description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contactForm_nameLabel')}</Label>
              <Input id="name" name="name" placeholder={t('contactForm_namePlaceholder')} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contactForm_emailLabel')}</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t('contactForm_phoneLabel')}</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiryType">{t('contactForm_inquiryTypeLabel')}</Label>
            <Select name="inquiryType" defaultValue="general">
              <SelectTrigger id="inquiryType">
                <SelectValue placeholder={t('contactForm_inquiryTypePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">{t('contactForm_inquiryType_general')}</SelectItem>
                <SelectItem value="membership">{t('contactForm_inquiryType_membership')}</SelectItem>
                <SelectItem value="events">{t('contactForm_inquiryType_events')}</SelectItem>
                <SelectItem value="indian-schools">{t('service_indian-schools_title')}</SelectItem>
                <SelectItem value="indian-universities">{t('service_indian-universities_title')}</SelectItem>
                <SelectItem value="indian-smes">{t('service_indian-smes_title')}</SelectItem>
                <SelectItem value="japanese-smes">{t('service_japanese-smes_title')}</SelectItem>
                <SelectItem value="company-registration-jp-in">{t('service_company-registration-jp-in_title')}</SelectItem>
                <SelectItem value="company-registration-in-jp">{t('service_company-registration-in-jp_title')}</SelectItem>
                <SelectItem value="digital-services">{t('service_digital-services_title')}</SelectItem>
                <SelectItem value="startup-support">{t('service_startup-support_title')}</SelectItem>
                <SelectItem value="management-training">{t('service_management-training_title')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('contactForm_messageLabel')}</Label>
            <Textarea id="message" name="message" placeholder={t('contactForm_messagePlaceholder')} className="min-h-[120px]" required />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('contactForm_submitButton')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

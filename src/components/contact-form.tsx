
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {t('contactForm_submitButton')}
    </Button>
  );
}

export function ContactForm() {
  const { t } = useTranslation();
  const initialState = { message: "", errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast({
        title: t('contactForm_toastSuccessTitle'),
        description: t(state.message),
      });
    } else if (state.message) {
       toast({
        variant: "destructive",
        title: t('contactForm_toastErrorTitle'),
        description: t(state.message),
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, toast, t]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{t('contactForm_title')}</CardTitle>
        <CardDescription>{t('contactForm_description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contactForm_nameLabel')}</Label>
              <Input id="name" name="name" placeholder={t('contactForm_namePlaceholder')} />
              {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contactForm_emailLabel')}</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" />
              {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
          </div>
           <div className="space-y-2">
              <Label htmlFor="phone">{t('contactForm_phoneLabel')}</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" />
              {state.errors?.phone && <p className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}
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
            {state.errors?.inquiryType && <p className="text-sm font-medium text-destructive">{state.errors.inquiryType[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('contactForm_messageLabel')}</Label>
            <Textarea id="message" name="message" placeholder={t('contactForm_messagePlaceholder')} className="min-h-[120px]" />
            {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}

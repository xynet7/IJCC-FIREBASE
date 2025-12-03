
"use client";

import { MembershipForm } from "@/components/membership-form";
import { Suspense } from "react";
import { useTranslation } from "@/hooks/use-translation";

function MembershipApplication() {
  const { t } = useTranslation();
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">{t('membershipApplication_title')}</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          {t('membershipApplication_description')}
        </p>
      </div>
      <div className="mx-auto max-w-4xl">
        <MembershipForm />
      </div>
    </div>
  );
}

export default function MembershipApplicationPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div></div>}>
            <MembershipApplication />
        </Suspense>
    )
}

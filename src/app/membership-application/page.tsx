
import { MembershipForm } from "@/components/membership-form";
import { Suspense } from "react";

function MembershipApplication() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Membership Application</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Please fill out the form below to apply for membership. We're excited to have you join us.
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <MembershipForm />
      </div>
    </div>
  );
}

export default function MembershipApplicationPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MembershipApplication />
        </Suspense>
    )
}

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Join Us</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          We're here to help. Reach out to us with any questions or inquiries.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-8">
            <h2 className="text-2xl font-headline">Our Offices</h2>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Tokyo Head Office</h3>
                        <p className="text-muted-foreground">1-1 Chiyoda, Chiyoda City, Tokyo 100-8111, Japan</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Mumbai Office</h3>
                        <p className="text-muted-foreground">Nariman Point, Mumbai, Maharashtra 400021, India</p>
                    </div>
                </div>
            </div>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">contact@indojapanhub.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">+81 3-1234-5678 (Tokyo)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

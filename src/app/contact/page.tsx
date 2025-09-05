
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
                        <h3 className="font-semibold">Corporate Office</h3>
                        <p className="text-muted-foreground">218-219, T3, Golden I, Techzone 4 Greater Noida West, Greater Noida, Uttar Pradesh, PIN Code: 201318</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Branch Office</h3>
                        <p className="text-muted-foreground">Indo-Japan Chamber of Commerce, C/o. Aju Japanese Hotel, Behind Star Mall, Shilokhara Road, Vijay Vihar, Sec-30, Gurgaon, Haryana, India</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Japan Office</h3>
                        <p className="text-muted-foreground">Shinagawa-ku, Kita Shinagawa 3-3-6-704, Tokyo 140-0001, Japan</p>
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
                    <p className="text-muted-foreground">+91-9599301261 (India)</p>
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

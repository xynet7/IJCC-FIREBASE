
import { MembershipDetails } from "@/components/membership-details";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const members = [
    { name: "All India Management Association", href: "https://www.aima.in", logoUrl: "https://www.aima.in/img/logo.png", hint: "company logo" },
    { name: "Aranca", href: "https://www.aranca.com", logoUrl: "https://www.aranca.com/assets/images/icons/aranca-logo-0203.png", hint: "company logo" },
    { name: "AJU Hotels", href: "https://www.ajujapanesehotels.com/english/", logoUrl: "https://www.ajujapanesehotels.com/images/logo.png", hint: "company logo" },
    { name: "Veena Solar", href: "https://veenapower.com", logoUrl: "https://veenapower.com/wp-content/uploads/2021/04/log-top2.jpg", hint: "company logo" },
    { name: "Ahuja Residences", href: "https://ahujaresidences.com", logoUrl: "https://ahujaresidences.com/wp-content/uploads/2024/08/Ahuja-Logo_cropped.webp", hint: "company logo" },
    { name: "The Japan Foundation", href: "https://nd.jpf.go.jp/", logoUrl: "https://nd.jpf.go.jp/wp-content/uploads/2022/07/JFND_logo_bgtransparent-1.png", hint: "organization logo" },
    { name: "JETRO", href: "https://www.jetro.go.jp/en/", logoUrl: "https://pbs.twimg.com/profile_images/1138406890595971073/o01XWG4J_400x400.png", hint: "organization logo" },
    { name: "JICA", href: "https://www.jica.go.jp/english/overseas/india/index.html", logoUrl: "https://www.jica.go.jp/english/assets/img/logo-en.png", hint: "organization logo" },
    { name: "All Nippon Airways", href: "https://www.ana.co.jp/en/in/", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/All_Nippon_Airways_Logo.svg/2560px-All_Nippon_Airways_Logo.svg.png", hint: "airline logo" },
    { name: "Indian Council for Cultural Relations", href: "https://iccr.gov.in/home", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYuDws_3GHEcMoqAZ6w9ufbUWnwZcoKyTKg&s", hint: "organization logo" },
    { name: "Embassy of India, Tokyo", href: "https://www.indembassy-tokyo.gov.in/", logoUrl: "https://www.indembassy-tokyo.gov.in/public_files/assets/images/common_images/logo_english_2021.png", hint: "embassy logo" },
    { name: "Consulate General of India, Osaka-Kobe", href: "https://www.indconosaka.gov.in/", logoUrl: "https://www.indconosaka.gov.in/adminpart/logo_image/large/74404LogoHC.jpg", hint: "embassy logo" },
    { name: "Government of Haryana", href: "https://www.haryana.gov.in/", logoUrl: "https://images.seeklogo.com/logo-png/44/1/haryana-sarkar-logo-png_seeklogo-447946.png", hint: "government logo" },
    { name: "Government of Uttar Pradesh", href: "https://up.gov.in/en", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/1024px-Seal_of_Uttar_Pradesh.svg.png", hint: "government logo" },
    { name: "Japan Chamber of Commerce and Industry in India", href: "https://jccii.in/english", logoUrl: "https://jccii.in/wp-content/uploads/2020/02/logo.png", hint: "organization logo" },
    { name: "Osaka Chamber of Commerce and Industry", href: "https://www.osaka.cci.or.jp/e/", logoUrl: "https://www.osaka.cci.or.jp/e/common/img/logo_sitename.png", hint: "organization logo" },
    { name: "North Eastern Council", href: "https://necouncil.gov.in/", logoUrl: "https://necouncil.gov.in/sites/default/files/inline-images/NEC-logo.png", hint: "organization logo" },
];


export default function MembersPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Membership</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Join us to foster Indo-Japan collaboration across trade, education, technology, and cultural exchanges.
        </p>
      </div>

      <MembershipDetails />

       <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" /> Become a Member
            </Link>
          </Button>
      </div>

      <div className="space-y-4 my-20 text-center pt-12 border-t">
        <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl">Membership Directory</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Explore our network of esteemed members and businesses.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {members.map((member) => (
            <Link href={member.href} key={member.name} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="flex items-center justify-center p-6 h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                <CardContent className="p-0">
                    <Image src={member.logoUrl} alt={member.name} width={200} height={100} className="object-contain" data-ai-hint={member.hint} />
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}

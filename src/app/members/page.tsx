
import { MembersList } from "@/components/members-list";
import { MembershipDetails } from "@/components/membership-details";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

const members = [
    { name: "All India Management Association", company: "Management Association", description: "AIMA is the national apex body of the management profession in India.", imageUrl: "https://www.aima.in/img/logo.png", hint: "company logo" },
    { name: "Aranca", company: "Research and Analytics", description: "Provides financial, business, and intellectual property research.", imageUrl: "https://www.aranca.com/assets/images/icons/aranca-logo-0203.png", hint: "company logo" },
    { name: "AJU Hotels", company: "Hospitality", description: "Japanese-style hotels in India.", imageUrl: "https://www.ajujapanesehotels.com/images/logo.png", hint: "company logo" },
    { name: "Veena Solar", company: "Renewable Energy", description: "Leading solar energy solutions provider.", imageUrl: "https://veenapower.com/wp-content/uploads/2021/04/log-top2.jpg", hint: "company logo" },
    { name: "Ahuja Residences", company: "Real Estate", description: "Provides residential and commercial properties.", imageUrl: "https://ahujaresidences.com/wp-content/uploads/2024/08/Ahuja-Logo_cropped.webp", hint: "company logo" },
    { name: "The Japan Foundation", company: "Cultural Exchange", description: "Promotes Japanese culture and language.", imageUrl: "https://nd.jpf.go.jp/wp-content/uploads/2022/07/JFND_logo_bgtransparent-1.png", hint: "organization logo" },
    { name: "JETRO", company: "Trade and Investment", description: "Japan External Trade Organization.", imageUrl: "https://pbs.twimg.com/profile_images/1138406890595971073/o01XWG4J_400x400.png", hint: "organization logo" },
    { name: "JICA", company: "International Cooperation", description: "Japan International Cooperation Agency.", imageUrl: "https://www.jica.go.jp/english/assets/img/logo-en.png", hint: "organization logo" },
    { name: "All Nippon Airways", company: "Airline", description: "One of Japan's largest airlines.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/All_Nippon_Airways_Logo.svg/2560px-All_Nippon_Airways_Logo.svg.png", hint: "airline logo" },
    { name: "Indian Council for Cultural Relations", company: "Cultural Exchange", description: "Promotes Indian culture abroad.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYuDws_3GHEcMoqAZ6w9ufbUWnwZcoKyTKg&s", hint: "organization logo" },
    { name: "Embassy of India, Tokyo", company: "Government", description: "The Embassy of India in Japan.", imageUrl: "https://www.indembassy-tokyo.gov.in/public_files/assets/images/common_images/logo_english_2021.png", hint: "embassy logo" },
    { name: "Consulate General of India, Osaka-Kobe", company: "Government", description: "The Consulate General of India in Osaka-Kobe, Japan.", imageUrl: "https://www.indconosaka.gov.in/adminpart/logo_image/large/74404LogoHC.jpg", hint: "embassy logo" },
    { name: "Government of Haryana", company: "Government", description: "The state government of Haryana, India.", imageUrl: "https://images.seeklogo.com/logo-png/44/1/haryana-sarkar-logo-png_seeklogo-447946.png", hint: "government logo" },
    { name: "Government of Uttar Pradesh", company: "Government", description: "The state government of Uttar Pradesh, India.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/1024px-Seal_of_Uttar_Pradesh.svg.png", hint: "government logo" },
    { name: "Japan Chamber of Commerce and Industry in India", company: "Chamber of Commerce", description: "Promotes economic relations between Japan and India.", imageUrl: "https://jccii.in/wp-content/uploads/2020/02/logo.png", hint: "organization logo" },
    { name: "Osaka Chamber of Commerce and Industry", company: "Chamber of Commerce", description: "A leading business organization in Osaka.", imageUrl: "https://www.osaka.cci.or.jp/e/common/img/logo_sitename.png", hint: "organization logo" },
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

      <div className="space-y-4 my-12 text-center pt-12 border-t">
        <h2 className="text-3xl font-headline tracking-tighter sm:text-4xl">Membership Directory</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Explore our network of esteemed members and businesses.
        </p>
      </div>
      <MembersList members={members} />
    </div>
  );
}

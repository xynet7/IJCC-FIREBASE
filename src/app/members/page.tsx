
import { MembersList } from "@/components/members-list";
import { MembershipDetails } from "@/components/membership-details";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

const members = [
  { name: "Sakura Tanaka", company: "Tech Innovate Japan", description: "Pioneering AI solutions for manufacturing.", imageUrl: "https://picsum.photos/id/1/200/200", hint: "woman face" },
  { name: "Rohan Gupta", company: "Delhi Dynamics", description: "Leading exporters of fine textiles and handicrafts.", imageUrl: "https://picsum.photos/id/2/200/200", hint: "man face" },
  { name: "Kenji Yamamoto", company: "Kyoto Robotics", description: "Automating the future with advanced robotics.", imageUrl: "https://picsum.photos/id/3/200/200", hint: "man face" },
  { name: "Priya Sharma", company: "Bangalore Bio-Tech", description: "Innovations in sustainable agriculture and biotechnology.", imageUrl: "https://picsum.photos/id/4/200/200", hint: "woman face" },
  { name: "Haruto Sato", company: "Osaka Trading Co.", description: "Global logistics and supply chain management.", imageUrl: "https://picsum.photos/id/5/200/200", hint: "man face" },
  { name: "Anjali Mehta", company: "Mumbai Creative Studios", description: "Digital marketing and creative content production.", imageUrl: "https://picsum.photos/id/6/200/200", hint: "woman face" },
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

import { MembersList } from "@/components/members-list";

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
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Membership Directory</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Explore our network of esteemed members and businesses.
        </p>
      </div>
      <MembersList members={members} />
    </div>
  );
}

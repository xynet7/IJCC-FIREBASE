
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Mr. Rahul Mishra", title: "Chairman, IJCC", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-08%20at%2012.04.51.jpeg", hint: "man face" },
  { name: "Mr. Gajendra Badgujar", title: "Vice-Chairman (Strategy), Ex. Director FICCI", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.35.42.jpeg", hint: "man face" },
  { name: "Mr. Prakash Yadav", title: "Vice-Chairman (Corporate Affairs), MD, AJU Hotels", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.36.11.jpeg", hint: "man face" },
  { name: "Mr. Surajit Kalita", title: "Vice-Chairman(Operation & Planning), IJCC", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.34.24.jpeg", hint: "man face" },
  { name: "Dr. Neelam Ramaiah", title: "Vice-Chairman (Education), Ex. Director, University of Tokyo", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-24%20at%2012.26.54%20(1).jpeg", hint: "man face" },
  { name: "Mr.Markus", title: "MD Asahi Travels Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-23%20at%2003.34.36%20(1).jpeg", hint: "man face" },
  { name: "Ms. Yoko Torii", title: "IJCC Travel Partner, Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-05-09%20at%2017.40.09.jpeg", hint: "woman face" },
  { name: "Mr. Kenichiro Iwahori", title: "Advisor, Sasakawa Foundation, Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp_Image_2025-04-26_at_12.32.28-removebg-preview.png", hint: "man face" },
  { name: "Mr. Tomoyuki Iwama", title: "Director Yakult India", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-23%20at%2003.34.36.jpeg", hint: "man face" },
  { name: "Dr. Randeep Rakwal", title: "Professor, Tsukuba University, Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-25%20at%2012.28.47.jpeg", hint: "man face" },
  { name: "Mr. Naveen Verma", title: "Chairman, RERA Bihar", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-25%20at%2012.28.47%20(2).jpeg", hint: "man face" },
  { name: "Mr. Anil Kumar Khandelwal", title: "Ex. General Manager, East Central Railway", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-05-30%20at%2012.46.46.jpeg", hint: "man face" },
  { name: "Dr. Supratic Gupta", title: "Professor, IIT Delhi", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.34.59.jpeg", hint: "man face" },
  { name: "Dr. Maushumi Barooah", title: "Ex. Director, Assam Technical Education Board", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-25%20at%2012.28.46.jpeg", hint: "woman face" },
  { name: "Mr.Rajesh Mehta", title: "Editor Sunday Guardian", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-08%20at%2012.00.26.jpeg", hint: "man face" },
  { name: "Dr. Jatinder Khanna", title: "Policy Maker, Education & Culture", imageUrl: "https://picsum.photos/seed/jatinder/200/200", hint: "man face" },
  { name: "Mrs. Anjali Mishra", title: "Advocate, Supreme Court of India", imageUrl: "https://picsum.photos/seed/anjali-m/200/200", hint: "woman face" },
  { name: "Mr. Raj Singh", title: "Founding Member, Director Sunlite Consulting", imageUrl: "https://picsum.photos/seed/raj/200/200", hint: "man face" },
  { name: "Mr. M Nazir", title: "Founding Member, Director ICAE India", imageUrl: "https://picsum.photos/seed/nazir/200/200", hint: "man face" },
];


export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">About The Indo-Japan Chamber of Commerce</h1>
        <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
            Forging powerful partnerships and fostering economic growth between India and Japan for over five decades.
        </p>
      </div>
      
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12 shadow-xl">
        <Image 
            src="https://www.ijcc.in/images/slider/DSC_0029.JPG" 
            alt="IJCC Event" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="people event"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="prose lg:prose-xl max-w-none text-foreground">
            <p>The Indo-Japan Chamber of Commerce (IJCC) was formed with a view to promoting closer economic relations between India and Japan. The Chamber has facilitated several business interactions, forged partnerships, and promoted bilateral trade over the years. We work to enhance trade relations, attract investment, and create platforms for business success in both countries.</p>
            
            <p>Our journey began over 50 years ago, driven by a vision to create a robust platform for Indo-Japanese economic cooperation. Today, we stand as a testament to the enduring friendship and burgeoning business ties between the two nations. We serve a diverse membership base, from multinational corporations to dynamic startups, all of whom contribute to the rich tapestry of our shared economic landscape.</p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                Our mission is to be the leading catalyst for economic growth and cultural exchange between India and Japan, creating a prosperous and interconnected business ecosystem.
            </blockquote>
            
            <h2 className="text-3xl font-headline mt-12">Our Core Objectives</h2>
            <ul className="space-y-2">
                <li>To promote and protect the trade, commerce, and industries of India and Japan.</li>
                <li>To encourage and facilitate technical and economic collaboration between the two countries.</li>
                <li>To provide a platform for networking and knowledge sharing among members.</li>
                <li>To act as a representative body for the business community in matters of policy and trade.</li>
                <li>To foster cultural understanding and strengthen the bonds of friendship between the people of India and Japan.</li>
            </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20">
        <div className="space-y-4 mb-12 text-center">
            <h2 className="text-3xl font-headline sm:text-4xl">Meet Our Team</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                The dedicated professionals leading the Indo-Japan Chamber of Commerce.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center transform transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="items-center">
                  <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                    <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold">{member.title}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

    </div>
  );
}

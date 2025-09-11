
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";


const teamMembers = [
  { name: "Mr. Rahul Mishra", title: "Chairman, IJCC", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-08%20at%2012.04.51.jpeg", hint: "man face", bio: "Mr. Rahul Mishra is a visionary leader with over two decades of experience in fostering international trade relations. As the Chairman of IJCC, he has been instrumental in strengthening the economic ties between India and Japan, focusing on strategic partnerships and sustainable growth." },
  { name: "Mr. Kenichiro Iwahori", title: "Advisor, Sasakawa Foundation, Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp_Image_2025-04-26_at_12.32.28-removebg-preview.png", hint: "man face", bio: "Mr. Kenichiro Iwahori brings a wealth of knowledge in international policy and cultural exchange. His work with the Sasakawa Foundation has been pivotal in creating numerous programs that promote mutual understanding and collaboration between the people of Japan and India." },
  { name: "Mr. Tomoyuki Iwama", title: "Director Yakult India", imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHmF3AjT9Ismw/profile-displayphoto-scale_400_400/B56Zj1rFjhG0Ak-/0/1756468372006?e=1759968000&v=beta&t=T9tJEcm6a-fBgvXN6IZFuWLK55PEzjOjKHyQKe6gF80", hint: "man face", bio: "As the Director of Yakult India, Mr. Tomoyuki Iwama has successfully led the company's expansion in the Indian market. His expertise in cross-border business operations and consumer health has made Yakult a household name in India." },
  { name: "Mr.Markus", title: "MD Asahi Travels Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-23%20at%2003.34.36%20(1).jpeg", hint: "man face", bio: "Mr. Markus is a veteran in the travel and tourism industry. As the Managing Director of Asahi Travels Japan, he has been a key partner in promoting tourism and cultural travel between India and Japan, creating unique and memorable experiences for travelers." },
  { name: "Ms. Yoko Torii", title: "IJCC Travel Partner, Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-05-09%20at%2017.40.09.jpeg", hint: "woman face", bio: "Ms. Yoko Torii is a dedicated travel professional who specializes in curating bespoke travel itineraries. Her partnership with IJCC has enabled countless cultural and business exchanges, helping to bridge the distance between the two nations through tourism." },
  { name: "Dr. Randeep Rakwal", title: "Professor, Tsukuba University, Japan", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-25%20at%2012.28.47.jpeg", hint: "man face", bio: "Dr. Randeep Rakwal is a distinguished academic and researcher at Tsukuba University. His work in biotechnology has led to significant advancements and collaborative projects between Indian and Japanese research institutions, fostering a new generation of scientists." },
  { name: "Mr. Gajendra Badgujar", title: "Vice-Chairman (Strategy), Ex. Director FICCI", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.35.42.jpeg", hint: "man face", bio: "With a strong background in policy and strategy from his time at FICCI, Mr. Gajendra Badgujar provides invaluable guidance to the IJCC. He focuses on long-term strategic initiatives that enhance bilateral trade and investment opportunities." },
  { name: "Mr. Prakash Yadav", title: "Vice-Chairman (Corporate Affairs), MD, AJU Hotels", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.36.11.jpeg", hint: "man face", bio: "Mr. Prakash Yadav combines his expertise in corporate affairs and the hospitality industry to support IJCC's mission. As MD of AJU Hotels, he has been a cornerstone in providing world-class hospitality to Japanese visitors and businesses in India." },
  { name: "Mr. Surajit Kalita", title: "Vice-Chairman(Operation & Planning), IJCC", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.34.24.jpeg", hint: "man face", bio: "Mr. Surajit Kalita is a master of logistics and planning. His role as Vice-Chairman of Operations & Planning ensures the smooth execution of all IJCC events, delegations, and initiatives, making every interaction seamless and effective." },
  { name: "Dr. Neelam Ramaiah", title: "Vice-Chairman (Education), Ex. Director, University of Tokyo", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-24%20at%2012.26.54%20(1).jpeg", hint: "man face", bio: "Dr. Neelam Ramaiah's extensive experience in academia, including his tenure at the University of Tokyo, drives the educational initiatives of the IJCC. He is passionate about creating academic partnerships and student exchange programs." },
  { name: "Mr. Naveen Verma", title: "Chairman, RERA Bihar", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-25%20at%2012.28.47%20(2).jpeg", hint: "man face", bio: "Mr. Naveen Verma brings his regulatory expertise as the Chairman of RERA Bihar to the chamber. His insights are crucial for navigating the complexities of the real estate and infrastructure sectors for Japanese investors in India." },
  { name: "Mr. Anil Kumar Khandelwal", title: "Ex. General Manager, East Central Railway", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-05-30%20at%2012.46.46.jpeg", hint: "man face", bio: "With a long and distinguished career in the Indian Railways, Mr. Anil Kumar Khandelwal provides strategic advice on infrastructure and transportation projects. His experience is vital for large-scale collaborations between India and Japan." },
  { name: "Dr. Supratic Gupta", title: "Professor, IIT Delhi", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.34.59.jpeg", hint: "man face", bio: "Dr. Supratic Gupta is a leading professor at IIT Delhi, specializing in materials science. He facilitates technical collaboration and R&D partnerships between top Indian and Japanese engineering institutions and companies." },
  { name: "Dr. Maushumi Barooah", title: "Ex. Director, Assam Technical Education Board", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-25%20at%2012.28.46.jpeg", hint: "woman face", bio: "Dr. Maushumi Barooah has dedicated her career to advancing technical education. Her expertise helps the IJCC in developing skill-building programs and vocational training initiatives to meet the demands of Japanese industries." },
  { name: "Mr.Rajesh Mehta", title: "Editor Sunday Guardian", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-08-08%20at%2012.00.26.jpeg", hint: "man face", bio: "Mr. Rajesh Mehta, as the Editor of the Sunday Guardian, plays a key role in shaping the narrative of Indo-Japanese relations in the media. His work helps to highlight the successes and opportunities in the bilateral relationship." },
  { name: "Dr. Jatinder Khanna", title: "Policy Maker, Education & Culture", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2_11.37.21.jpeg", hint: "man face", bio: "Dr. Jatinder Khanna is an influential policy maker with a focus on education and culture. He helps guide the IJCC in its mission to foster deeper cultural ties and educational exchanges between India and Japan." },
  { name: "Mrs. Anjali Mishra", title: "Advocate, Supreme Court of India", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.39.40.jpeg", hint: "woman face", bio: "As an advocate in the Supreme Court of India, Mrs. Anjali Mishra provides critical legal counsel to the chamber. Her expertise in international law is essential for members navigating cross-border business transactions." },
  { name: "Mr. Raj Singh", title: "Founding Member, Director Sunlite Consulting", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2011.38.58.jpeg", hint: "man face", bio: "A founding member of the IJCC, Mr. Raj Singh has been a guiding force since its inception. Through Sunlite Consulting, he continues to provide strategic business advice to companies looking to enter the Indo-Japan corridor." },
  { name: "Mr. M Nazir", title: "Founding Member, Director ICAE India", imageUrl: "https://www.ijcc.in/images/WhatsApp%20Image%202025-03-21%20at%2012.03.34.jpeg", hint: "man face", bio: "Mr. M Nazir, another founding member, has been a pillar of the IJCC. As Director of ICAE India, he has championed numerous initiatives focused on adult education and vocational training, aligning Indian talent with Japanese industry needs." },
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
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <Card className="text-center transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
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
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-24 h-24 border-4 border-primary/20">
                        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <DialogTitle className="font-headline text-2xl">{member.name}</DialogTitle>
                        <p className="text-primary font-semibold">{member.title}</p>
                      </div>
                    </div>
                    <DialogDescription className="text-left text-foreground">
                      {member.bio}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
        </div>
      </div>

    </div>
  );
}

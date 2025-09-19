
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


const leadership = [
  { name: "Mr. Rahul Mishra", title: "Chairman, IJCC", imageUrl: "https://i.postimg.cc/3JdfvHM7/rahulsir1.jpg", hint: "man face", bio: "Rahul Mishra is the Chairman of the Indo-Japan Chamber of Commerce (IJCC), Vice President of SEWA Foundation, and Managing Director of Aamida Infotech. With over 18 years of experience in international business development, operations, and consulting, he has played a pivotal role in fostering business, cultural, and educational collaborations between India and Japan.\n\nHe founded Aamida Consulting Services (ACS) in 2011, successfully expanding its operations across India while building sustainable and long-term partnerships. Prior to his entrepreneurial journey, Rahul held leadership roles in leading IT organizations including Oracle, IBM, SAP Labs, McAfee, MothersonSumi Infotech, Four Soft, and Nucleus Software, where he gained extensive expertise in global technology and operations.\n\nAn MBA in International Marketing from ICFAI, Hyderabad, Rahul is deeply passionate about the education sector, aamidainfotech, and information technologies. He is also associated with the Japan Foundation, and strongly believes in creating authentic, mutually beneficial, and long-lasting relationships. Through his leadership across business, non-profit, and cross-border platforms, Rahul Mishra continues to strengthen India’s global presence, especially in Indo-Japan relations." },
  { name: "Mr. Gajendra Badgujar", title: "Vice-Chairman (Strategy), Ex. Director FICCI", imageUrl: "https://i.postimg.cc/25KMJ8NH/gajendra1.jpg", hint: "man face", bio: "With a strong background in policy and strategy from his time at FICCI, Mr. Gajendra Badgujar provides invaluable guidance to the IJCC. He focuses on long-term strategic initiatives that enhance bilateral trade and investment opportunities." },
  { name: "Mr. Prakash Yadav", title: "Vice-Chairman (Corporate Affairs), MD, AJU Hotels", imageUrl: "https://i.postimg.cc/9QnxQ442/prakash2.jpg", hint: "man face", bio: "Mr. Prakash Yadav combines his expertise in corporate affairs and the hospitality industry to support IJCC's mission. As MD of AJU Hotels, he has been a cornerstone in providing world-class hospitality to Japanese visitors and businesses in India." },
  { name: "Dr. Neelam Ramaiah", title: "Vice-Chairman (Education), Ex. Director, University of Tokyo", imageUrl: "https://i.postimg.cc/VLzHx5D4/neelam.png", hint: "woman face", bio: "Dr. Neelam Ramaiah is a distinguished academic and researcher in Aquatic Biosciences with dual PhDs from the University of Tokyo (2001) and the University of Bombay (1990). She has a long-standing research association with the CSIR–National Institute of Oceanography (NIO), Goa and Mumbai, where she served in various roles from Junior Research Fellow to Research Associate.\n\nShe began her academic career as a Lecturer in Mumbai before moving to Japan as a MEXT Scholar at the University of Tokyo, where she later held positions as Visiting Associate Professor, Lecturer, and Associate Professor (2001–2017) at the Graduate School of Agricultural & Life Sciences (GSALS). From 2019–2020, she also served as Director of The University of Tokyo India Office, New Delhi, fostering academic and research collaborations between India and Japan.\n\nDr. Ramaiah has authored 26 research papers, presented at 13 international symposia, and contributed to 12 technical reports. She also co-translated and edited the Japanese book “Introduction to Fisheries and Aquatic Biology” (2011). Proficient in Japanese (JLPT N1), she continues to contribute to cross-cultural academic exchange and marine sciences research." },
  { name: "Mr. Surajit Kalita", title: "Vice-Chairman(Operation & Planning), IJCC", imageUrl: "https://i.postimg.cc/4x39GSf0/surajit-removebg-preview.png", hint: "man face", bio: "Mr. Surajit Kalita is a master of logistics and planning. His role as Vice-Chairman of Operations & Planning ensures the smooth execution of all IJCC events, delegations, and initiatives, making every interaction seamless and effective." },
  { name: "Mr. Mukesh Ranjan", title: "HR Director", imageUrl: "https://i.postimg.cc/HnrRBVXS/mukesh-removebg.png", hint: "man face", bio: "Mukesh Ranjan is a seasoned professional in HR, IT, and educational development. He has served as Deputy Director (General Affairs) at the National Industries Development Council Committee and as General Manager for the Digital India initiatives of the Krishna Sudarshan Charitable Trust.\n\Passionate about bridging education and employment, he has led campus recruitment drives with Purnia University and represented Royal Metropolitan University, Kyrgyzstan, to guide Indian students toward medical education. Recognised with honors such as Best HR & IT Professional of the Year 2021 and the International Education Pride Award 2021, he is also an environmental activist and an invited speaker at international education and skills summits." },
];

const advisors = [
  { name: "Mr. Tomoyuki Iwama", title: "Director Yakult India", imageUrl: "https://i.postimg.cc/025b7P5b/iwama-removebg-preview.png", hint: "man face", bio: "Mr. Tomoyuki Iwama is a seasoned international business and operations leader with over 30 years of global experience across Europe, Southeast Asia, and India. A graduate in Biology from the University of Tsukuba (1989), he has built a distinguished career with Yakult Honsha Co., Ltd., Japan, where he currently serves as General Manager for International Business Development and Global Operations Support.\n\nSince 2007, he has also been Director of Yakult Danone India Pvt. Ltd., playing a key role in expanding Yakult’s presence in the Indian market. His prior international assignments include serving as Advisor at PT Yakult Indonesia Persada (2004–2007), Director at Yakult Malaysia (2003–2004), and Quality Control Manager at Yakult Europe and Yakult Netherlands (1994–2001), where he specialized in production management and establishing overseas manufacturing plants.\n\nIn addition to his corporate career, Mr. Iwama contributes to academia as an International Cooperation Advisor (India) at the University of Tsukuba’s Bureau of Global Initiatives (since 2025). Fluent in Japanese and English, with conversational proficiency in Indonesian and Malay, he is widely recognized for his cross-cultural leadership, strategic planning, and operational excellence in global business." },
  { name: "Mr. Naveen Verma", title: "Chairman, RERA Bihar (Retd. IAS)", imageUrl: "https://i.postimg.cc/CK70VjSM/Naveen-Verma-2.jpg", hint: "man face", bio: "Mr. Naveen Verma brings his regulatory expertise as the Chairman of RERA Bihar to the chamber. His insights are crucial for navigating the complexities of the real estate and infrastructure sectors for Japanese investors in India." },
  { name: "Mr. Anil Kumar Khandelwal", title: "Ex. General Manager, East Central Railway", imageUrl: "https://i.postimg.cc/Qxz8QsHq/anil1.jpg", hint: "man face", bio: "With a long and distinguished career in the Indian Railways, Mr. Anil Kumar Khandelwal provides strategic advice on infrastructure and transportation projects. His experience is vital for large-scale collaborations between India and Japan." },
  { name: "Dr. Randeep Rakwal", title: "Professor, Tsukuba University, Japan", imageUrl: "https://i.postimg.cc/Gh6Kf8sB/randeep-removebg-preview.png", hint: "man face", bio: "Dr. Randeep Rakwal is a distinguished academic and researcher at Tsukuba University. His work in biotechnology has led to significant advancements and collaborative projects between Indian and Japanese research institutions, fostering a new generation of scientists." },
  { name: "Mr. Kenichiro Iwahori", title: "Advisor, Sasakawa Foundation, Japan", imageUrl: "https://i.ibb.co/VcG0s7QJ/iwahori-removebg-preview.png", hint: "man face", bio: "Mr. Kenichiro Iwahori brings a wealth of knowledge in international policy and cultural exchange. His work with the Sasakawa Foundation has been pivotal in creating numerous programs that promote mutual understanding and collaboration between the people of Japan and India." },
  { name: "Mr.Markus", title: "MD Asahi Travels Japan", imageUrl: "https://i.postimg.cc/brHtYXS7/Markus-removebg-preview.png", hint: "man face", bio: "Mr. Markus, born on 22 July 1954 in Delhi, is a distinguished cultural ambassador and professional who has dedicated his career to strengthening ties between India and Japan. A graduate of the University of Delhi (1975), he developed an early passion for Japanese culture, beginning Japanese language studies in 1974 and achieving the top position in India in 1976. In 1977, he was invited to Japan by the Japan Foundation, marking the beginning of a lifelong connection with the country where he has resided for more than two decades.\n\nAs Managing Director of Asahi Travel Service, Mr. Markus has traveled extensively across India, particularly to the Buddhist circuit (over 300 visits), accompanying eminent Japanese scholars and Buddhist priests. His contribution to tourism was recognized in 1996, when Asahi Travel Service received a National Tourism Award from the then Prime Minister, Shri Atal Bihari Vajpayee.\n\nBeyond tourism, Mr. Markus is also deeply engaged in the cultural and academic spheres. A disciple of the renowned Rakugoka (traditional Japanese comedian) Tatekawa Danshi, he was honored with the stage name Tatekawa Danderi and has performed on stage alongside his mentor. In 2008, he authored the Japanese-language book “INDO RYU” (Indian Style), exploring Indian culture, and has since delivered over 150 lectures on Indian philosophy, culture, and business in Japan. His insights have been widely featured in Japanese newspapers, magazines, television programs, and radio broadcasts.\n\nThrough his multifaceted work, Mr. Markus has emerged as a bridge between India and Japan, promoting not only tourism but also cultural exchange, business collaboration, and human relationships.\n\nHe also holds various distinguished positions, including:\n\nGovernor\n\nVice President\n\nAdvisor\n\nVisiting Lecturer\n\nLecturer" },
  { name: "Dr. Supratic Gupta", title: "Professor, IIT Delhi", imageUrl: "https://i.postimg.cc/7LmS9f7R/supratic1.jpg", hint: "man face", bio: "Dr. Supratic Gupta is a leading professor at IIT Delhi, specializing in materials science. He facilitates technical collaboration and R&D partnerships between top Indian and Japanese engineering institutions and companies." },
  { name: "Dr. Maushumi Barooah", title: "Ex. Director, Assam Technical Education Board", imageUrl: "https://i.postimg.cc/h4TXtN53/mausimi1.jpg", hint: "woman face", bio: "Dr. Maushumi Barooah has dedicated her career to advancing technical education. Her expertise helps the IJCC in developing skill-building programs and vocational training initiatives to meet the demands of Japanese industries." },
  { name: "Mr.Rajesh Mehta", title: "Editor Sunday Guardian", imageUrl: "https://i.postimg.cc/Vsb5G5Qh/rajesh-removebg-preview.png", hint: "man face", bio: "Rajesh Mehta is a leading business consultant, entrepreneur, and public policy expert with over 20 years of cross-functional experience. He has worked with global corporations, SMEs, and technology-enabled startups, specializing in market entry for international companies, innovation consulting, and advocacy for Fortune 500 firms, business chambers, and public affairs organizations.\n\nA prolific writer, he has contributed to leading publications such as Financial Express, First Post, The Daily Guardian, American Bazaar, The Diplomatist, and The Fair Observer, and authored reports on women entrepreneurship, innovation, water, and skill development.\n\nRajesh serves on the Executive Committee of the Centre for Trade, Promotion & Industry and was previously Adviser to the World Association of Small & Medium Enterprises (WASME). He has advised global organizations including Tekes, Finnode, Finpro (Finland), Indo-Scandic Organization (Sweden), and the European Business Technology Center, and has played a key role in helping international firms establish operations in India while enabling Indian companies to expand globally.\n\nHe has been actively engaged in US–India public policy through advisory roles with APCO Worldwide, SJ Consulting, and Red Fort Strategies, and also supports outsourcing and manufacturing initiatives in India. Alongside his business work, Rajesh is associated with several non-profits such as Jaipur Foot, End Poverty, and FAEA, and currently serves as a National Advisory Board Member of the Sewa Foundation." },
  { name: "Dr. Jatinder Khanna", title: "Policy Maker, Education & Culture", imageUrl: "https://i.postimg.cc/CKgMZKnZ/jatinder.jpg", hint: "man face", bio: "Dr. Jatinder Khanna is an influential policy maker with a focus on education and culture. He helps guide the IJCC in its mission to foster deeper cultural ties and educational exchanges between India and Japan." },
  { name: "Dr. Vinod Kumar Yadavendu", title: "Ex Member, Bihar Legislative Assembly", imageUrl: "https://i.postimg.cc/fbKbhgFG/vinod-removebg.png", hint: "man face", bio: "Ex Member of Bihar Legislative Assembly, Patna.\n\nLife Member-Commonwealth ParliamentarianAssociation, London, (Bihar Branch)\n\nLife Member-Indian History Congress, New Delhi\n\nPresident - Gaya Nagari Pracharini Sabha\n\nFormer Head, PG Deptt. of Ancient Indian and Asian Studies, Magadh University, Bodhgaya\n\nEx member- Advisory Committee, Ministry of Education, Govt. of Bihar\n\nEx Member- Dr. K.P. Jaiswal Research Institute, Patna." },
];

const legalTeam = [
  { name: "P.D Sharma", title: "Senior Advocate", imageUrl: "https://i.postimg.cc/RVBWhvf3/pd-sharma.jpg", hint: "man face", bio: "Biography will be updated soon." },
  { name: "Mrs. Anjali Sharma", title: "Advocate, Supreme Court of India", imageUrl: "https://i.postimg.cc/kX4zvbb0/anjali1.jpg", hint: "woman face", bio: "As an advocate in the Supreme Court of India, Mrs. Anjali Sharma provides critical legal counsel to the chamber. Her expertise in international law is essential for members navigating cross-border business transactions." },
];

const foundingMembers = [
  { name: "Mr. Raj Singh", title: "Founding Member, Director Sunlite Consulting", imageUrl: "https://i.postimg.cc/RV5W1scJ/raj.jpg", hint: "man face", bio: "A founding member of the IJCC, Mr. Raj Singh has been a guiding force since its inception. Through Sunlite Consulting, he continues to provide strategic business advice to companies looking to enter the Indo-Japan corridor." },
  { name: "Mr. M Nazir", title: "Founding Member, Director ICAE India", imageUrl: "https://i.postimg.cc/Jz7NkNHX/nazir1.jpg", hint: "man face", bio: "Mr. M Nazir, another founding member, has been a pillar of the IJCC. As Director of ICAE India, he has championed numerous initiatives focused on adult education and vocational training, aligning Indian talent with Japanese industry needs." },
  { name: "Mr. Lokendra Rana", title: "Founding Member, Executive Director", imageUrl: "https://aamidainfotech.com/wp-content/uploads/2021/01/lokendra-rana.jpg", hint: "man face", bio: "Lokendra Rana the Executive Director (International Sales and Marketing) of the company, graduated and post-graduated, Bachelor of Arts in English, Economics, and Sociology and completed his masters in English Literature.\n\nAdditional to the academic degrees, he has done Japanese Language and obtained the JLPT certification Level-3 in the year 2005 from the Japan Foundation and Japan Educational Exchanges and Services. He did his Post Graduate Diploma in International Business and did his MBA in Marketing, He also did a certificate course in C, C++, Linux, Unix, and also a part of the core team to get implement SAP S4/HANA implementation in his company at Ethiopia Plant.\n\nHe also served in Bangladesh as Head Operations (CEO) and the last assignment was in Ethiopia, Africa in the capacity of General Manager. He has won the Best Team Performance award from Raymond’s in 2013 and has vast work experience Internationally & Nationally in various companies.\n\nHe also specialized skill of traditional North Indian farming and has over two decades of experience. He has a good knowledge of the Indian share market and cryptocurrency trade. He did inceptions of two plants in his career from the Greenfield project to commissioning. Mr. Rana has joined ACS as Executive Director of Aamida Infotech." },
];

const TeamMemberCard = ({ member }: { member: typeof leadership[0] }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className="text-center transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
        <CardContent className="pt-6">
          <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20 mx-auto">
            <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.hint} />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-headline text-2xl">{member.name}</h3>
          <p className="text-primary font-semibold">{member.title}</p>
        </CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] rounded-2xl">
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
        <DialogDescription className="text-left text-foreground whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
          {member.bio}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const TeamSection = ({ title, members, description }: { title: string, members: typeof leadership, description: string }) => (
  <div className="max-w-6xl mx-auto mt-20">
    <div className="space-y-4 mb-12 text-center">
        <h2 className="text-3xl font-headline sm:text-4xl">{title}</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            {description}
        </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
        ))}
    </div>
  </div>
);


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
            src="https://i.postimg.cc/pThL0dX0/about-us-page-image.jpg" 
            alt="About IJCC" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="people meeting"
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
      
      <TeamSection 
        title="Our Leadership"
        members={leadership}
        description="The dedicated professionals leading the Indo-Japan Chamber of Commerce."
      />

      <TeamSection
        title="Advisors"
        members={advisors}
        description="Our esteemed advisors who provide strategic guidance and industry expertise."
      />
      
      <TeamSection
        title="Legal Team"
        members={legalTeam}
        description="Our expert legal counsel, providing critical guidance on national and international law."
      />

      <TeamSection
        title="Founding Members"
        members={foundingMembers}
        description="The visionary founders who laid the groundwork for our chamber's success."
      />

    </div>
  );
}
    
    

    

    

    

    

    

import Image from "next/image";

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
    </div>
  );
}

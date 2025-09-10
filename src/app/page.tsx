
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Calendar, Users, BookOpen, Mail, GalleryHorizontal } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";


const features = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Dynamic Event Calendar",
    description: "Stay updated with our interactive calendar of upcoming events, seminars, and workshops.",
    href: "/events",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Membership Directory",
    description: "Connect with fellow members through our comprehensive and searchable directory.",
    href: "/members",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Resource Library",
    description: "Acess a rich repository of documents, previous year JLPT and presntations.",
    href: "/resources",
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Join Us",
    description: "Get in touch with us for any inquiries or support.",
    href: "/contact",
  },
];

const partners = [
    { name: "All India Management Association", href: "https://www.aima.in", logoUrl: "https://www.aima.in/img/logo.png", hint: "company logo" },
    { name: "Aranca", href: "https://www.aranca.com", logoUrl: "https://www.aranca.com/assets/images/icons/aranca-logo-0203.png", hint: "company logo" },
    { name: "AJU Hotels", href: "https://www.ajujapanesehotels.com/english/", logoUrl: "https://www.ajujapanesehotels.com/images/logo.png", hint: "company logo" },
];

const members = [
    { name: "Veena Solar", href: "https://veenapower.com", logoUrl: "https://veenapower.com/wp-content/uploads/2021/04/log-top2.jpg", hint: "company logo" },
    { name: "Ahuja Residences", href: "https://ahujaresidences.com", logoUrl: "https://ahujaresidences.com/wp-content/uploads/2024/08/Ahuja-Logo_cropped.webp", hint: "company logo" },
];

const heroItems = [
  {
    type: 'image',
    src: "https://imgcp.aacdn.jp/img-a/1440/auto/global-aaj-front/article/2015/12/565f05f621364_565f018e5feb3_1467636135.jpg",
    alt: "Indo-Japan collaboration with Mount Fuji",
    hint: "mount fuji"
  },
  {
    type: 'image',
    src: "https://static.investindia.gov.in/s3fs-public/2021-06/shutterstock_1057997963.jpg",
    alt: "India and Japan flags",
    hint: "flags india japan"
  },
  {
    type: 'video',
    src: "https://www.youtube.com/embed/WLIv7HnZ_fE?autoplay=1&mute=1&controls=0&loop=1&playlist=WLIv7HnZ_fE",
    alt: "Indo-Japan collaboration video",
  }
]


export default function Home() {
  return (
    <>
      <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Carousel
          className="absolute inset-0 w-full h-full"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {heroItems.map((item, index) => (
              <CarouselItem key={index} className="h-full">
                {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover brightness-[0.6]"
                      data-ai-hint={item.hint}
                    />
                ) : (
                   <div className="absolute inset-0 w-full h-full overflow-hidden brightness-[0.6]">
                    <iframe
                        src={item.src}
                        title={item.alt}
                        className="pointer-events-none absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" />
           <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" />
        </Carousel>

        <div className="relative z-10 container px-4 md:px-6">
           <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Connecting <span className="text-accent">India</span> & <span className="text-accent">Japan</span> for Mutual Prosperity
              </h1>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    JOIN US <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <span className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary" className="rounded-full">
                    <Link href="/events">
                      Upcoming Events
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="rounded-full">
                    <Link href="/gallery">
                      Gallery
                    </Link>
                  </Button>
                </span>
              </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-xl">
            <Image
              src="https://i.postimg.cc/BQBDNXjS/IMG-20250910-WA0124-1.jpg"
              alt="About IJCC"
              layout="fill"
              objectFit="cover"
              data-ai-hint="india japan handshake"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
              <h2 className="text-3xl font-headline sm:text-4xl">Fostering Bilateral Trade for Decades</h2>
            </div>
            <p className="text-muted-foreground md:text-lg">
              The Indo-Japan Chamber of Commerce (IJCC) was formed with a view to promoting closer economic relations between India and Japan. The Chamber has facilitated several business interactions, forged partnerships, and promoted bilateral trade over the years. We work to enhance trade relations, attract investment, and create platforms for business success in both countries.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-headline sm:text-5xl">Why Join Us?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the tools and resources we offer to help your business thrive and expand its horizons across borders.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
            {features.map((feature) => (
               <Link href={feature.href} key={feature.title}>
                <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-headline sm:text-5xl">Our Partners & Members</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We are proud to collaborate with a diverse network of partners and members.
                    </p>
                </div>
            </div>

            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-headline text-center mb-8">Associate Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                        {partners.map((partner) => (
                            <Link href={partner.href} key={partner.name} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                                <Image src={partner.logoUrl} alt={partner.name} width={200} height={100} className="object-contain" data-ai-hint={partner.hint} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-headline text-center mb-8">IJCC Members</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                         {members.map((member) => (
                            <Link href={member.href} key={member.name} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                                <Image src={member.logoUrl} alt={member.name} width={200} height={100} className="object-contain" data-ai-hint={member.hint} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section className="py-20 md:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline tracking-tighter md:text-4xl/tight">
              Ready to Foster Stronger Business Ties?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Become a part of our growing network. Get in touch with us to learn more about membership benefits.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full rounded-full">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" /> Join Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

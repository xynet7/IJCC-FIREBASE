
"use client";

import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const events = [
  {
    title: "Matsuri - Japan Festival",
    date: "2025-10-11",
    displayDate: "October 11, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Star Mall Outer Plaza & AJU Nagomi Family Dining. Contact: 98711 59420 (WhatsApp)",
    description: "Experience the vibrant culture of Japan in India! Organized by AJU Japanese Hotel.",
    imageUrl: "https://i.postimg.cc/3xCPnydB/Matsuri-Bigposter.png",
    hint: "japan festival",
    isFeatured: true,
  },
  {
    title: "INDIA - JAPAN: SHAPING THE FUTURE IN RAPIDLY EVOLVING BUSINESS ECOSYSTEM",
    date: "2025-11-07",
    displayDate: "November 7, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "AJU Hinode",
    description: "A business seminar featuring presentations from 4 states, a Q&A session, and discussions on BIS, Solar Power, IPR & Data Privacy.",
    imageUrl: "https://i.postimg.cc/VvZSTtBC/7-NOV-EVENT.jpg",
    hint: "business seminar",
    isVertical: true,
    href: "https://www.instagram.com/p/DOc9zoOkUkh/?igsh=OGpzMDRhbXA2anBt",
  },
  {
    title: "INDIA MEETS JAPAN",
    date: "2025-12-13",
    displayDate: "December 13 & 14, 2025",
    time: "11:00 AM - 09:00 PM",
    location: "Saket District Centre, Sector 6, Pushp Vihar, New Delhi - 110017",
    description: "A Day of Culture, Business and Friendship",
    imageUrl: "https://i.postimg.cc/L4JmBGgX/india-meets-japan.jpg",
    hint: "cultural event",
    href: "https://www.instagram.com/p/DOc7xSuEfHe/?utm_source=ig_web_copy_link",
  },
  {
    title: "Tech Innovation Summit",
    date: "2026-01-20",
    displayDate: "Coming Soon",
    time: "00:00 AM - 00:00 PM",
    location: "Online / Virtual",
    description: "Coming Soon",
    imageUrl: "https://picsum.photos/seed/tech-summit/800/400",
    hint: "tech conference",
  },
];

const eventDates = events.map(event => new Date(event.date + 'T00:00:00'));

const modifiers = {
  event: eventDates,
};

const modifiersStyles = {
  event: {
    backgroundColor: 'hsl(var(--sakura-pink))',
    color: 'hsl(var(--primary))',
  },
};


export default function EventsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Upcoming Events</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Join our events to network, learn, and grow your business connections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {events.map((event, index) => (
            <Card key={index} className={cn("flex flex-col overflow-hidden", !event.isFeatured && "md:flex-row")}>
              {event.imageUrl && (
                 <div className={cn("relative flex-shrink-0", 
                    event.isFeatured ? "w-full aspect-[1/1.4]" :
                    event.isVertical ? 'w-full md:w-1/3' : 'w-full h-64 md:h-auto md:w-1/2'
                 )}>
                  {event.href ? (
                    <Link href={event.href} target="_blank" rel="noopener noreferrer">
                      <Image 
                          src={event.imageUrl} 
                          alt={event.title} 
                          layout="fill" 
                          objectFit={event.isFeatured ? "contain" : "cover"}
                          data-ai-hint={event.hint}
                          className={cn(!event.isFeatured && "transition-transform duration-300 hover:scale-105")}
                      />
                    </Link>
                  ) : (
                    <Image 
                        src={event.imageUrl} 
                        alt={event.title} 
                        layout="fill" 
                        objectFit={event.isFeatured ? "contain" : "cover"}
                        data-ai-hint={event.hint}
                    />
                  )}
                </div>
              )}
              <div className="flex flex-col justify-between p-6">
                <div>
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                    <CardDescription className="pt-2">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4 text-sm p-0 pt-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span>{event.displayDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center col-span-2 gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Event Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              {isClient ? (
                <Calendar
                  mode="single"
                  disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                  className="rounded-md border p-0"
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                />
              ) : (
                <div className="rounded-md border p-0 h-[300px] w-[320px] animate-pulse bg-muted" />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

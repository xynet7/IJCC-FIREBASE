"use client";

import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";

const events = [
  {
    title: "INDIA - JAPAN: SHAPING THE FUTURE IN RAPIDLY EVOLVING BUSINESS ECOSYSTEM",
    date: "2025-11-07",
    displayDate: "November 7, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "AJU Hinode",
    description: "A business seminar featuring presentations from 4 states, a Q&A session, and discussions on BIS, Solar Power, IPR & Data Privacy.",
    imageUrl: "https://www.asiancommunitynews.com/wp-content/uploads/2024/05/Business-Seminar-India-Japan-shaping-the-future-in-rapidly-evolving-business-ecosystem.jpg",
    hint: "business seminar",
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
            <Card key={index}>
              {event.imageUrl && (
                <div className="relative w-full h-[250px] rounded-t-lg overflow-hidden">
                  <Image 
                      src={event.imageUrl} 
                      alt={event.title} 
                      layout="fill" 
                      objectFit="cover"
                      data-ai-hint={event.hint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  <span>{event.displayDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
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

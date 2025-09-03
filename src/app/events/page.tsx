
"use client";

import { Calendar as CalendarIcon, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import Image from "next/image";

const events = [
  {
    title: "Business Seminar",
    date: "2025-11-07",
    time: "05:00 pM - 06:00 PM",
    location: "Aju Hindone",
    description: "Presentation from four states representation(Haryana + other 3 states.",
    imageUrl: "https://images.unsplash.com/photo-1519185939676-2605343f3d4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhJTIwamFwYW58ZW58MHx8MHx8fDA%3D",
    hint: "business seminar",
  },
  {
    title: "Cultural Exchange Evening",
    date: "2025-11-15",
    time: "06:00 PM - 09:00 PM",
    location: "The Taj Mahal Palace, Mumbai",
    description: "An evening of cultural performances, traditional cuisine, and networking.",
    imageUrl: "https://picsum.photos/seed/cultural-exchange/800/400",
    hint: "cultural event",
  },
  {
    title: "Tech Innovation Summit",
    date: "2025-12-05",
    time: "10:00 AM - 04:00 PM",
    location: "Online / Virtual",
    description: "Discover the latest technological advancements and partnership prospects in the IT sectors of both nations.",
    imageUrl: "https://picsum.photos/seed/tech-summit/800/400",
    hint: "tech conference",
  },
];

export default function EventsPage() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const handleRegister = (eventName: string) => {
    toast({
      title: "Registration Submitted",
      description: `Thank you for registering for ${eventName}! (This is a demo)`,
    });
  };
  
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
                  <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
              <CardFooter>
                <Button onClick={() => handleRegister(event.title)}>
                  <Ticket className="mr-2 h-4 w-4" />
                  Register Now
                </Button>
              </CardFooter>
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

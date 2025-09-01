"use client";

import { Calendar as CalendarIcon, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    title: "Indo-Japan Business Forum 2024",
    date: "2024-10-26",
    time: "09:00 AM - 05:00 PM",
    location: "Tokyo International Forum, Tokyo",
    description: "A premier event for business leaders to explore collaboration opportunities between India and Japan.",
  },
  {
    title: "Cultural Exchange Evening",
    date: "2024-11-15",
    time: "06:00 PM - 09:00 PM",
    location: "The Taj Mahal Palace, Mumbai",
    description: "An evening of cultural performances, traditional cuisine, and networking.",
  },
  {
    title: "Tech Innovation Summit",
    date: "2024-12-05",
    time: "10:00 AM - 04:00 PM",
    location: "Online / Virtual",
    description: "Discover the latest technological advancements and partnership prospects in the IT sectors of both nations.",
  },
];

export default function EventsPage() {
  const { toast } = useToast();

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
              <Calendar
                mode="single"
                disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                className="rounded-md border p-0"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

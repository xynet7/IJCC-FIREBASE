"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://postimg.cc/pyPsCJjv", alt: "Gallery image 1", hint: "event" },
    { src: "https://postimg.cc/grSkk4qP", alt: "Gallery image 2", hint: "event" },
    { src: "https://postimg.cc/Pp6hJrZT", alt: "Gallery image 3", hint: "event" },
    { src: "https://postimg.cc/LJdSnWqf", alt: "Gallery image 4", hint: "event" },
    { src: "https://postimg.cc/N29h08Bb", alt: "Gallery image 5", hint: "event" },
    { src: "https://postimg.cc/WhLYrc7W", alt: "Gallery image 6", hint: "event" },
    { src: "https://postimg.cc/bGB3w7JW", alt: "Gallery image 7", hint: "event" },
    { src: "https://postimg.cc/wt7QZwVj", alt: "Gallery image 8", hint: "event" },
    { src: "https://postimg.cc/QHmgM2Yb", alt: "Gallery image 9", hint: "event" },
    { src: "https://postimg.cc/SYq8Sd6b", alt: "Gallery image 10", hint: "event" },
    { src: "https://postimg.cc/MXxdKmKp", alt: "Gallery image 11", hint: "event" },
    { src: "https://postimg.cc/Q9qgWvNY", alt: "Gallery image 12", hint: "event" },
    { src: "https://postimg.cc/njnBZTKK", alt: "Gallery image 13", hint: "event" },
    { src: "https://postimg.cc/PLj8zK75", alt: "Gallery image 14", hint: "event" },
    { src: "https://postimg.cc/kVqBtGV7", alt: "Gallery image 15", hint: "event" },
    { src: "https://postimg.cc/BPKqzfL3", alt: "Gallery image 16", hint: "event" },
    { src: "https://postimg.cc/kBP95ZRB", alt: "Gallery image 17", hint: "event" },
    { src: "https://postimg.cc/7JgF7HJC", alt: "Gallery image 18", hint: "event" },
];

export default function GalleryPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Event Gallery</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          A glimpse into our vibrant events, meetings, and cultural exchanges.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="break-inside-avoid cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                  data-ai-hint={image.hint}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-transparent border-none">
                <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

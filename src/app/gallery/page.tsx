"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://postimg.cc/pyPsCJjv", alt: "Gallery image 1", hint: "event" },
    { src: "https://postimg.cc/pyPsCJjv", alt: "Gallery image 2", hint: "event" },
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

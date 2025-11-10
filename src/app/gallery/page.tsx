
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://i.postimg.cc/V6Qf8G0x/py-Ps-CJjv.jpg", alt: "Gallery image 1", hint: "event" },
    { src: "https://i.postimg.cc/tJ0G9G40/gr-Skk4q-P.jpg", alt: "Gallery image 2", hint: "event" },
    { src: "https://i.postimg.cc/GpdN5s2j/Pp6h-Jr-ZT.jpg", alt: "Gallery image 3", hint: "event" },
    { src: "https://i.postimg.cc/xT3x7VPs/LJd-Sn-Wqf.jpg", alt: "Gallery image 4", hint: "event" },
    { src: "https://i.postimg.cc/3JmNym3S/N29h08-Bb.jpg", alt: "Gallery image 5", hint: "event" },
    { src: "https://i.postimg.cc/9Q2f4m8T/Wh-LYrc7-W.jpg", alt: "Gallery image 6", hint: "event" },
    { src: "https://i.postimg.cc/Y9D9XTYH/b-GB3w7-JW.jpg", alt: "Gallery image 7", hint: "event" },
    { src: "https://i.postimg.cc/9F7pY7Zp/wt7-QZw-Vj.jpg", alt: "Gallery image 8", hint: "event" },
    { src: "https://i.postimg.cc/tTPtTqj4/QHmg-M2-Yb.jpg", alt: "Gallery image 9", hint: "event" },
    { src: "https://i.postimg.cc/x8xLqmrG/SYq8-Sd6b.jpg", alt: "Gallery image 10", hint: "event" },
    { src: "https://i.postimg.cc/nLpGQRnK/MXxd-Km-Kp.jpg", alt: "Gallery image 11", hint: "event" },
    { src: "https://i.postimg.cc/k47j0mGw/Q9qg-Wv-NY.jpg", alt: "Gallery image 12", hint: "event" },
    { src: "https://i.postimg.cc/zX04FMNx/njn-BZTKK.jpg", alt: "Gallery image 13", hint: "event" },
    { src: "https://i.postimg.cc/L8gCQMwj/PLj8z-K75.jpg", alt: "Gallery image 14", hint: "event" },
    { src: "https://i.postimg.cc/PqYg4w4k/kVq-Bt-GV7.jpg", alt: "Gallery image 15", hint: "event" },
    { src: "https://i.postimg.cc/7hrz4F9R/BPKqzf-L3.jpg", alt: "Gallery image 16", hint: "event" },
    { src: "https://i.postimg.cc/c4bSfvTB/k-BP95-ZRB.jpg", alt: "Gallery image 17", hint: "event" },
    { src: "https://i.postimg.cc/J4yqXyVv/7-Jg-F7-HJC.jpg", alt: "Gallery image 18", hint: "event" },
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

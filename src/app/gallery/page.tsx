
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://i.postimg.cc/pyPsCJjv/image.jpg", alt: "Gallery image 1", hint: "event" },
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
    { src: "https://i.postimg.cc/k4STd41m/Q9qgWvNY.jpg", alt: "Gallery image 12", hint: "event" },
    { src: "https://i.postimg.cc/KY3B0s4M/njnBZTKK.jpg", alt: "Gallery image 13", hint: "event" },
    { src: "https://i.postimg.cc/DZ56v3hB/PLj8zK75.jpg", alt: "Gallery image 14", hint: "event" },
    { src: "https://i.postimg.cc/2SSp3Xw7/kVqBtGV7.jpg", alt: "Gallery image 15", hint: "event" },
    { src: "https://i.postimg.cc/wMN3Rgrz/BPKqzfL3.jpg", alt: "Gallery image 16", hint: "event" },
    { src: "https://i.postimg.cc/XvL4Y7kG/kBP95ZRB.jpg", alt: "Gallery image 17", hint: "event" },
    { src: "https://i.postimg.cc/wMhXCTg3/7-JgF7-HJC.jpg", alt: "Gallery image 18", hint: "event" },
    { src: "https://i.postimg.cc/V6Qf8G0x/py-Ps-CJjv.jpg", alt: "Gallery image 19", hint: "event" },
    { src: "https://i.postimg.cc/tJ0G9G40/gr-Skk4q-P.jpg", alt: "Gallery image 20", hint: "event" },
    { src: "https://i.postimg.cc/GpdN5s2j/Pp6h-Jr-ZT.jpg", alt: "Gallery image 21", hint: "event" },
    { src: "https://i.postimg.cc/xT3x7VPs/LJd-Sn-Wqf.jpg", alt: "Gallery image 22", hint: "event" },
    { src: "https://i.postimg.cc/3JmNym3S/N29h08-Bb.jpg", alt: "Gallery image 23", hint: "event" },
    { src: "https://i.postimg.cc/9Q2f4m8T/Wh-LYrc7-W.jpg", alt: "Gallery image 24", hint: "event" },
    { src: "https://i.postimg.cc/Y9D9XTYH/b-GB3w7-JW.jpg", alt: "Gallery image 25", hint: "event" },
    { src: "https://i.postimg.cc/9F7pY7Zp/wt7-QZw-Vj.jpg", alt: "Gallery image 26", hint: "event" },
    { src: "https://i.postimg.cc/tTPtTqj4/QHmg-M2-Yb.jpg", alt: "Gallery image 27", hint: "event" },
    { src: "https://i.postimg.cc/x8xLqmrG/SYq8-Sd6b.jpg", alt: "Gallery image 28", hint: "event" },
    { src: "https://i.postimg.cc/nLpGQRnK/MXxd-Km-Kp.jpg", alt: "Gallery image 29", hint: "event" },
    { src: "https://i.postimg.cc/k4STd41m/Q9qgWvNY.jpg", alt: "Gallery image 30", hint: "event" },
    { src: "https://i.postimg.cc/KY3B0s4M/njnBZTKK.jpg", alt: "Gallery image 31", hint: "event" },
    { src: "https://i.postimg.cc/DZ56v3hB/PLj8zK75.jpg", alt: "Gallery image 32", hint: "event" },
    { src: "https://i.postimg.cc/2SSp3Xw7/kVqBtGV7.jpg", alt: "Gallery image 33", hint: "event" },
    { src: "https://i.postimg.cc/wMN3Rgrz/BPKqzfL3.jpg", alt: "Gallery image 34", hint: "event" },
    { src: "https://i.postimg.cc/XvL4Y7kG/kBP95ZRB.jpg", alt: "Gallery image 35", hint: "event" },
    { src: "https://i.postimg.cc/wMhXCTg3/7-JgF7-HJC.jpg", alt: "Gallery image 36", hint: "event" },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="container py-12">
            <div className="space-y-4 mb-12 text-center">
                <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl">Gallery</h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                    A glimpse into our vibrant community, events, and collaborations.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    data-ai-hint={image.hint}
                                />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl p-0">
                            <div className="relative aspect-video">
                                <Image src={image.src} alt={image.alt} fill className="object-contain" />
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}

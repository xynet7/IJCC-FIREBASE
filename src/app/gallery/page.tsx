"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://i.postimg.cc/kMbLnjX2/Whats-App-Image-2025-11-10-at-15-12-06-7063a541.jpg", alt: "Gallery image 1", hint: "event" },
    { src: "https://i.postimg.cc/gkdwsTxr/Whats-App-Image-2025-11-10-at-15-12-07-7047afa4.jpg", alt: "Gallery image 2", hint: "event" },
    { src: "https://i.postimg.cc/GtRpM4m8/Whats-App-Image-2025-11-10-at-15-12-07-d3078ee3.jpg", alt: "Gallery image 3", hint: "event" },
    { src: "https://i.postimg.cc/XYqYDS42/Whats-App-Image-2025-11-10-at-15-12-08-3295a754.jpg", alt: "Gallery image 4", hint: "event" },
    { src: "https://i.postimg.cc/FzGhDGqt/Whats-App-Image-2025-11-10-at-15-12-08-a8d58feb.jpg", alt: "Gallery image 5", hint: "event" },
    { src: "https://i.postimg.cc/QM5sRjPq/Whats-App-Image-2025-11-10-at-15-12-08-c51675a9.jpg", alt: "Gallery image 6", hint: "event" },
    { src: "https://i.postimg.cc/sD1kkVGr/Whats-App-Image-2025-11-10-at-15-12-09-02c945e1.jpg", alt: "Gallery image 7", hint: "event" },
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

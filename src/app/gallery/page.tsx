
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
    { src: "https://i.ibb.co/SDXqkPqj/5.jpg", alt: "Gallery image 26", hint: "event" },
    { src: "https://i.ibb.co/TBnDzCSf/4.jpg", alt: "Gallery image 25", hint: "event" },
    { src: "https://i.ibb.co/rG9Rzj08/Whats-App-Image-2025-12-02-at-12-50-55-870b5c9e.jpg", alt: "Gallery image 24", hint: "event" },
    { src: "https://i.ibb.co/qhxVm3D/2.jpg", alt: "Gallery image 23", hint: "event" },
    { src: "https://i.ibb.co/Ng78w5Dh/1.jpg", alt: "Gallery image 22", hint: "event" },
    { src: "https://i.postimg.cc/kMbLnjX2/Whats-App-Image-2025-11-10-at-15-12-06-7063a541.jpg", alt: "Gallery image 1", hint: "event" },
    { src: "https://i.postimg.cc/gkdwsTxr/Whats-App-Image-2025-11-10-at-15-12-07-7047afa4.jpg", alt: "Gallery image 2", hint: "event" },
    { src: "https://i.postimg.cc/GtRpM4m8/Whats-App-Image-2025-11-10-at-15-12-07-d3078ee3.jpg", alt: "Gallery image 3", hint: "event" },
    { src: "https://i.postimg.cc/XYqYDS42/Whats-App-Image-2025-11-10-at-15-12-08-3295a754.jpg", alt: "Gallery image 4", hint: "event" },
    { src: "https://i.postimg.cc/FzGhDGqt/Whats-App-Image-2025-11-10-at-15-12-08-a8d58feb.jpg", alt: "Gallery image 5", hint: "event" },
    { src: "https://i.postimg.cc/QM5sRjPq/Whats-App-Image-2025-11-10-at-15-12-08-c51675a9.jpg", alt: "Gallery image 6", hint: "event" },
    { src: "https://i.postimg.cc/sD1kkVGr/Whats-App-Image-2025-11-10-at-15-12-09-02c945e1.jpg", alt: "Gallery image 7", hint: "event" },
    { src: "https://i.postimg.cc/qRkYj0dJ/Whats-App-Image-2025-11-10-at-15-12-09-8475aeb6.jpg", alt: "Gallery image 8", hint: "event" },
    { src: "https://i.postimg.cc/MGY3c4fV/Whats-App-Image-2025-11-10-at-15-12-09-b6ecaeea.jpg", alt: "Gallery image 9", hint: "event" },
    { src: "https://i.postimg.cc/nhb33Zv6/Whats-App-Image-2025-11-10-at-15-12-10-1e22324a.jpg", alt: "Gallery image 10", hint: "event" },
    { src: "https://i.postimg.cc/D04ccYm0/Whats-App-Image-2025-11-10-at-15-12-10-593aa5a6.jpg", alt: "Gallery image 11", hint: "event" },
    { src: "https://i.postimg.cc/ryRbjfBx/Whats-App-Image-2025-11-10-at-15-12-10-9870c773.jpg", alt: "Gallery image 12", hint: "event" },
    { src: "https://i.postimg.cc/852ZxV2G/Whats-App-Image-2025-11-10-at-15-12-11-8f9f7b1a.jpg", alt: "Gallery image 13", hint: "event" },
    { src: "https://i.postimg.cc/cHnmRbrz/Whats-App-Image-2025-11-10-at-15-12-11-129de71f.jpg", alt: "Gallery image 14", hint: "event" },
    { src: "https://i.postimg.cc/FKfgvBg3/Whats-App-Image-2025-11-10-at-15-12-11-e66bdc6d.jpg", alt: "Gallery image 15", hint: "event" },
    { src: "https://i.postimg.cc/XvyFmy4B/Whats-App-Image-2025-11-10-at-15-12-11-f9af1a8d.jpg", alt: "Gallery image 16", hint: "event" },
    { src: "https://i.postimg.cc/wMW77691/Whats-App-Image-2025-11-10-at-15-12-12-1cbd9178.jpg", alt: "Gallery image 17", hint: "event" },
    { src: "https://i.postimg.cc/ncCL3fHY/Whats-App-Image-2_024-06-10-at-15-12-12-b2f89e44.jpg", alt: "Gallery image 18", hint: "event" },
    { src: "https://i.postimg.cc/yx5sMWVT/Whats-App-Image-2025-11-10-at-15-12-12-f3a111fd.jpg", alt: "Gallery image 19", hint: "event" },
    { src: "https://i.postimg.cc/0y06Bd7y/GALLERY-1.jpg", alt: "Gallery image 20", hint: "event" },
    { src: "https://i.postimg.cc/QdqK3VCd/gallery2.jpg", alt: "Gallery image 21", hint: "event" },
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

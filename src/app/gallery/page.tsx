
import Image from 'next/image';

const galleryImages = [
    { src: "https://www.ijcc.in/images/Gallery/WhatsApp%20Image%202025-05-30%20at%2014.10.14.jpeg", alt: "Gallery image 1", hint: "event business" },
    { src: "https://www.ijcc.in/images/Gallery/WhatsApp%20Image%202025-05-30%20at%2014.10.15%20(1).jpeg", alt: "Gallery image 2", hint: "people meeting" },
    { src: "https://picsum.photos/seed/gallery3/800/600", alt: "Gallery image 3", hint: "conference presentation" },
    { src: "https://picsum.photos/seed/gallery4/800/600", alt: "Gallery image 4", hint: "networking event" },
    { src: "https://picsum.photos/seed/gallery5/600/800", alt: "Gallery image 5", hint: "podium speaker" },
    { src: "https://picsum.photos/seed/gallery6/800/600", alt: "Gallery image 6", hint: "group photo" },
    { src: "https://picsum.photos/seed/gallery7/800/600", alt: "Gallery image 7", hint: "business award" },
    { src: "https://picsum.photos/seed/gallery8/600/800", alt: "Gallery image 8", hint: "cultural exchange" },
    { src: "https://picsum.photos/seed/gallery9/800/600", alt: "Gallery image 9", hint: "formal dinner" },
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
          <div key={index} className="break-inside-avoid">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              data-ai-hint={image.hint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

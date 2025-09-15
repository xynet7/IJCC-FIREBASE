
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const logoUrl = "https://i.postimg.cc/mkDLyKfN/JPG-LOGO-removebg-preview.png";

export function AppFooter() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src={logoUrl} alt="Indo-Japan Chamber of Commerce Logo" width={24} height={24} className="h-6 w-auto" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {isClient ? new Date().getFullYear() : ''} Indo-Japan Chamber of Commerce. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors text-sm text-muted-foreground">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors text-sm text-muted-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function FloatingSocials() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 p-2 bg-background/50 backdrop-blur-sm rounded-r-lg">
      <Button asChild variant="ghost" size="icon">
        <Link href="https://www.instagram.com/ijccindia?igsh=YW41MzJzNDY2M25y" target="_blank" rel="noopener noreferrer" title="Instagram">
          <Instagram className="h-5 w-5" />
           <span className="sr-only">Instagram</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <Link href="https://www.linkedin.com/company/indo-japan-chamber-of-commerce/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <Link href="https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/61573931145126/?mibextid=wwXIfr&rdid=2a8GpUrXi4bfPr4H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BqB9qNGPw%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
      </Button>
    </div>
  );
}

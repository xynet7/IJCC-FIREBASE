
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Landmark, Menu, Instagram, Linkedin, Facebook, ChevronDown, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/members", label: "Members" },
  { href: "/news", label: "News" },
  { 
    href: "/services", 
    label: "Services",
    submenu: [
        { href: "/services#indian-smes", label: "For Indian Companies" },
        { href: "/services#japanese-companies", label: "For Japanese Companies" },
        { href: "/services#company-registration-jp", label: "Company Registration (JP in IN)" },
        { href: "/services#indian-companies-jp", label: "Company Registration (IN in JP)" },
        { href: "/services#digital-services", label: "Digital Marketing" },
    ]
  },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Join Us" },
];

const logoUrl = "https://media.licdn.com/dms/image/v2/D560BAQFkTSGkq7dPjA/company-logo_200_200/B56ZhfeYLOG4AU-/0/1753948456785/indo_japan_chamber_of_commerce_logo?e=1759968000&v=beta&t=X5yFoGbl1G4_ved4w0axUirMSl5unkk162Zh0toYgrk";

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <Image src={logoUrl} alt="Indo-Japan Chamber of Commerce Logo" width={80} height={80} className="h-20 w-auto" />
              <div className="hidden sm:flex flex-col">
                <span className="font-headline font-bold text-lg leading-tight">Indo-Japan Chamber</span>
                <span className="font-headline font-bold text-lg leading-tight">of Commerce</span>
              </div>
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            link.submenu ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={cn(
                      "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap px-2 py-1 hover:bg-transparent",
                      pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                    )}>
                    {link.label}
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                     <Link href="/services">All Services</Link>
                  </DropdownMenuItem>
                  {link.submenu.map((sublink) => (
                    <DropdownMenuItem key={sublink.href} asChild>
                      <Link href={sublink.href}>{sublink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        
        <div className="flex items-center justify-end gap-2">
           <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.instagram.com/ijccindia?igsh=YW41MzJzNDY2M25y" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                   <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.linkedin.com/company/indo-japan-chamber-of-commerce/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/100069527786438/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>

            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Button asChild variant="ghost" size="sm">
                    <Link href="/sign-in">Sign In</Link>
                </Button>
            </SignedOut>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center gap-4 mb-6">
                <Image src={logoUrl} alt="Indo-Japan Chamber of Commerce Logo" width={80} height={80} className="h-20 w-auto" />
                <div className="flex flex-col">
                    <span className="font-headline font-bold text-base leading-tight">Indo-Japan Chamber</span>
                    <span className="font-headline font-bold text-base leading-tight">of Commerce</span>
                </div>
              </Link>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.submenu ? (
                     <DropdownMenu key={link.href}>
                      <DropdownMenuTrigger asChild>
                         <Button variant="ghost" className={cn(
                            "justify-start font-medium transition-colors hover:text-primary whitespace-nowrap p-0 h-auto hover:bg-transparent",
                            pathname.startsWith(link.href) ? "text-primary font-semibold" : "text-muted-foreground"
                          )}>
                          {link.label}
                           <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                           <Link href="/services">All Services</Link>
                        </DropdownMenuItem>
                        {link.submenu.map((sublink) => (
                          <DropdownMenuItem key={sublink.href} asChild>
                            <Link href={sublink.href}>{sublink.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                  ) 
                ))}
                  <hr className="my-2"/>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="ghost">
                      <Link href="https://www.instagram.com/ijccindia?igsh=YW41MzJzNDY2M25y" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2"/> Instagram
                      </Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link href="https://www.linkedin.com/company/indo-japan-chamber-of-commerce/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2"/> LinkedIn
                      </Link>
                    </Button>
                     <Button asChild variant="ghost">
                      <Link href="https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/100069527786438/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2"/> Facebook
                      </Link>
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

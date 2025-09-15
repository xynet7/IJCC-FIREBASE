
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Landmark, Menu, Instagram, Linkedin, Facebook, ChevronDown, Mail, Handshake, Briefcase, FileSignature, Globe, Building } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";

const servicesSubmenu = [
    { title: "For Indian Companies", href: "/services#indian-smes", icon: <Handshake className="text-primary" />, description: "Market access, capacity building, and advisory for Indian businesses looking to engage with Japan." },
    { title: "For Japanese Companies", href: "/services#japanese-companies", icon: <Briefcase className="text-primary" />, description: "Market entry, business development, and talent support for Japanese firms entering India." },
    { title: "Company Registration (JP in IN)", href: "/services#company-registration-jp", icon: <Building className="text-primary" />, description: "Comprehensive support for Japanese companies to establish their legal presence in India." },
    { title: "Company Registration (IN in JP)", href: "/services#indian-companies-jp", icon: <Landmark className="text-primary" />, description: "End-to-end assistance for Indian companies looking to register and operate in Japan." },
    { title: "Digital Marketing", href: "/services#digital-services", icon: <Globe className="text-primary" />, description: "Bilingual website development, SEO, and social media marketing for cross-border success." },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { 
    href: "/services", 
    label: "Services",
    submenu: servicesSubmenu
  },
  { href: "/members", label: "Members" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const logoUrl = "https://i.postimg.cc/mkDLyKfN/JPG-LOGO-removebg-preview.png";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-x-2">
            {icon && <div className="mt-1">{icon}</div>}
            <div className="flex-1">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Image src={logoUrl} alt="Indo-Japan Chamber of Commerce Logo" width={140} height={140} className="h-20 w-auto" />
            </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                        {link.submenu ? (
                            <>
                                <NavigationMenuTrigger className={cn(
                                  navigationMenuTriggerStyle(),
                                  "bg-transparent",
                                  pathname.startsWith(link.href) && "text-primary"
                                )}>
                                    {link.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                                      {link.submenu.map((item) => (
                                        <ListItem
                                          key={item.title}
                                          title={item.title}
                                          href={item.href}
                                          icon={item.icon}
                                        >
                                          {item.description}
                                        </ListItem>
                                      ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <Link href={link.href} legacyBehavior passHref>
                                <NavigationMenuLink className={cn(
                                    navigationMenuTriggerStyle(),
                                    "bg-transparent",
                                    pathname === link.href && "text-primary"
                                )}>
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center justify-end gap-2">
            <div className="hidden md:flex items-center gap-1">
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
                <Link href="https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/61573931145126/?mibextid=wwXIfr&rdid=2a8GpUrXi4bfPr4H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BqB9qNGPw%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center gap-4 mb-6">
                <Image src={logoUrl} alt="Indo-Japan Chamber of Commerce Logo" width={80} height={80} className="h-16 w-auto" />
              </Link>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
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
                      <Link href="https://www.facebook.com/people/Indo-Japan-Chamber-of-Commerce/61573931145126/" target="_blank" rel="noopener noreferrer">
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

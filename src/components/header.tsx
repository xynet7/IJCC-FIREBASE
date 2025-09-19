
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Landmark, Menu, Instagram, Linkedin, Facebook, ChevronDown, Mail, Handshake, Briefcase, FileSignature, Globe, Building, School, University, Lightbulb, Zap, LogOut, User } from "lucide-react";
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
import { useAuth } from "@/context/auth-context";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


const servicesSubmenu = [
    { title: "Indian Schools", href: "/services/indian-schools", icon: <School className="text-primary" />, description: "Cultural exchange, language programs, and partnerships for K-12 institutions." },
    { title: "Indian Universities", href: "/services/indian-universities", icon: <University className="text-primary" />, description: "Academic collaboration, internships, and career guidance for higher education." },
    { title: "Indian Businesses", href: "/services/indian-smes", icon: <Handshake className="text-primary" />, description: "Market access, capacity building, and advisory for Indian SMEs & startups." },
    { title: "Japanese Businesses", href: "/services/japanese-smes", icon: <Briefcase className="text-primary" />, description: "Market entry, B2B matchmaking, and talent support for Japanese firms in India." },
    { title: "Company Registration (JP in IN)", href: "/services/company-registration-jp-in", icon: <Building className="text-primary" />, description: "End-to-end legal and compliance support for Japanese companies establishing in India." },
    { title: "Company Registration (IN in JP)", href: "/services/company-registration-in-jp", icon: <Landmark className="text-primary" />, description: "Comprehensive assistance for Indian companies registering their business in Japan." },
    { title: "Digital & Marketing", href: "/services/digital-services", icon: <Globe className="text-primary" />, description: "Bilingual web development, SEO, and SMM for cross-border success." },
    { title: "Startup Support", href: "/services/startup-support", icon: <Lightbulb className="text-primary" />, description: "Incubation, mentorship, and investor connections for Indo-Japan startups." },
    { title: "Management Training", href: "/services/management-training", icon: <Zap className="text-primary" />, description: "Specialized training in Kaizen, Lean, TQM, and other Japanese management practices." },
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
  const { user, loading } = useAuth();
  const [currentLang, setCurrentLang] = React.useState('en');

  const getCookie = (name: string) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  }

  React.useEffect(() => {
    // A bit of a hack to get the current language from the Google Translate cookie
    const langCookie = getCookie('googtrans');
    if (langCookie) {
      const lang = langCookie.split('/')[2];
      if (['en', 'ja'].includes(lang)) {
        setCurrentLang(lang);
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // You can add a toast notification here if you want
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const getInitials = (email: string | null | undefined) => {
    if (!email) return 'U';
    return email.charAt(0).toUpperCase();
  };
  
  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    const googleTranslateElement = document.getElementById('google_translate_element');
    if (googleTranslateElement) {
        const select = googleTranslateElement.querySelector('select');
        if (select) {
            select.value = lang;

            const triggerChange = () => {
                const event = new Event('change', { bubbles: true });
                select.dispatchEvent(event);
            };

            // Check if the translation has already been applied
            if (document.body.classList.contains('translated-ltr') || document.body.classList.contains('translated-rtl')) {
                triggerChange();
            } else {
                // If not, wait for the widget to initialize by observing the body class
                const observer = new MutationObserver((mutations) => {
                    for (const mutation of mutations) {
                        if (mutation.attributeName === 'class' && (document.body.classList.contains('translated-ltr') || document.body.classList.contains('translated-rtl'))) {
                            triggerChange();
                            observer.disconnect();
                            break;
                        }
                    }
                });

                observer.observe(document.body, { attributes: true });

                // Failsafe: if the widget is slow, trigger after a timeout
                setTimeout(() => {
                    triggerChange();
                    observer.disconnect();
                }, 1000);
            }
        }
    }
  };


  const handleMobileLangChange = (lang: 'en' | 'ja') => {
    changeLanguage(lang);
  };


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
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:grid-cols-3 lg:w-[750px]">
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Translate</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={currentLang} onValueChange={changeLanguage}>
                  <DropdownMenuRadioItem value="en">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="ja">
                    日本語
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {!loading && (
              <div className="hidden md:flex items-center gap-2">
                {user ? (
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{getInitials(user.email)}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">My Account</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                         <Link href="/profile">
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                          </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Button asChild variant="ghost">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            )}

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
                  <button onClick={() => handleMobileLangChange('en')} className="text-left text-muted-foreground hover:text-primary">English</button>
                  <button onClick={() => handleMobileLangChange('ja')} className="text-left text-muted-foreground hover:text-primary">日本語</button>
                  <hr className="my-2"/>
                   {!loading && (
                    <div className="flex flex-col gap-2">
                        {user ? (
                            <>
                                <Link href="/profile" className="text-muted-foreground hover:text-primary">Profile</Link>
                                <button onClick={handleLogout} className="text-left text-muted-foreground hover:text-primary">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-muted-foreground hover:text-primary">Login</Link>
                                <Link href="/signup" className="text-muted-foreground hover:text-primary">Sign Up</Link>
                            </>
                        )}
                    </div>
                   )}
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

    
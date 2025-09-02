
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Landmark, Menu, LogOut, UserCircle, Shield } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/members", label: "Members" },
  { href: "/news", label: "News" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function AppHeader() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="https://www.ijcc.in/images/JPG_LOGO-removebg-preview.png" alt="Indo-Japan Chamber of Commerce Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="font-bold font-headline hidden sm:inline-block">Indo-Japan Chamber of Commerce</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
           {user && (
             <Link
              href="/dashboard"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === '/dashboard' ? "text-primary" : "text-muted-foreground"
              )}
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
           {user ? (
             <>
              <Button asChild variant="ghost">
                <Link href="/dashboard"><UserCircle className="mr-2"/>{user.name}</Link>
              </Button>
              <Button onClick={logout} variant="outline">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
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
              <Link href="/" className="mr-6 flex items-center gap-2 mb-6">
                <Image src="https://www.ijcc.in/images/JPG_LOGO-removebg-preview.png" alt="Indo-Japan Chamber of Commerce Logo" width={40} height={40} className="h-10 w-auto" />
                <span className="font-bold font-headline">Indo-Japan Chamber of Commerce</span>
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
                 {user && (
                    <Link
                      href="/dashboard"
                      className={cn(
                        "transition-colors hover:text-primary",
                        pathname === "/dashboard" ? "text-primary font-semibold" : "text-muted-foreground"
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                  <hr className="my-2"/>
                  {user ? (
                     <>
                      <p className="text-muted-foreground px-1">{user.email}</p>
                      <Button onClick={logout} variant="outline" className="justify-start">
                        <LogOut className="mr-2 h-4 w-4" /> Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="default">
                        <Link href="/login"><UserCircle className="mr-2"/>Login</Link>
                      </Button>
                      <Button asChild variant="secondary">
                        <Link href="/register"><Shield className="mr-2"/>Register</Link>
                      </Button>
                    </>
                  )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

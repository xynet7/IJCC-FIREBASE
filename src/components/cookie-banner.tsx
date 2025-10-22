
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // We run this in useEffect to ensure it only runs on the client
    // where localStorage is available.
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out",
        showBanner ? "translate-y-0" : "translate-y-full"
      )}
    >
        {showBanner && (
             <div className="bg-secondary/95 backdrop-blur-sm border-t p-4 md:p-6">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
                            <Link href="/privacy-policy" className="font-semibold underline hover:text-primary">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                    <Button onClick={handleAccept} size="sm" className="flex-shrink-0">
                        Accept
                    </Button>
                </div>
            </div>
        )}
    </div>
  );
}

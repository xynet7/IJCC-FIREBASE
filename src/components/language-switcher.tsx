
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/context/language-context';

declare global {
  interface Window {
    google: any;
  }
}

const languages = [
  { code: 'en', name: 'English', flag: 'https://i.ibb.co/VvzYcRk/flag-uk.png' },
  { code: 'ja', name: 'Japanese', flag: 'https://i.ibb.co/3s6x1P5/flag-jp.png' },
];

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isMounted, setIsMounted] = useState(false);
  const { setLanguage } = useLanguage();

  const getCookie = (name: string): string | undefined => {
    if (typeof document === 'undefined') return undefined;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return undefined;
  };
  
  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const googtrans = getCookie('googtrans');
      if (googtrans) {
        const langCode = googtrans.split('/')[2];
        const currentLang = languages.find(l => l.code === langCode);
        if (currentLang && currentLang.code !== selectedLanguage.code) {
          setSelectedLanguage(currentLang);
          setLanguage(currentLang.code);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [selectedLanguage.code, setLanguage]);


  const changeLanguage = (langCode: string) => {
    if (window.google && window.google.translate) {
      const currentLang = languages.find(l => l.code === langCode);
      if (currentLang) {
        setSelectedLanguage(currentLang);
        setLanguage(currentLang.code);

        const translateElement = document.getElementById('google_translate_element');
        if (translateElement) {
          const langSelect = translateElement.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (langSelect) {
            langSelect.value = langCode;
            langSelect.dispatchEvent(new Event('change'));
          }
        }
      }
    }
  };

  if (!isMounted) {
    return <div className="h-10 w-10 animate-pulse rounded-full bg-muted"></div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Image 
            src={selectedLanguage.flag} 
            alt={selectedLanguage.name} 
            width={24} 
            height={24} 
            className="rounded-full h-6 w-6 object-cover" 
          />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn("flex items-center gap-2", selectedLanguage.code === lang.code && "bg-accent")}
          >
            <Image 
              src={lang.flag} 
              alt={lang.name} 
              width={20} 
              height={20} 
              className="rounded-full h-5 w-5 object-cover" 
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const JAPANESE_FLAG_URL = "https://i.postimg.cc/PqYp5Tcr/japan-flag-icon.png";

export function LanguageSwitcher() {
  const [isJapanese, setIsJapanese] = useState(false);

  useEffect(() => {
    // Function to check for the cookie Google Translate sets
    const checkLanguage = () => {
      const gtransCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('googtrans='));
      if (gtransCookie && gtransCookie.includes('/ja')) {
        setIsJapanese(true);
      } else {
        setIsJapanese(false);
      }
    };
    
    checkLanguage();
    
    // Periodically check because Google Translate can be slow to update the cookie
    const interval = setInterval(checkLanguage, 500);

    return () => clearInterval(interval);
  }, []);

  const switchLanguage = (lang: 'en' | 'ja') => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = lang;
      const event = new Event('change');
      select.dispatchEvent(event);
      // Manually update state for faster UI feedback
      setIsJapanese(lang === 'ja');
    } else {
        console.error("Google Translate dropdown not found.");
    }
  };

  const handleToggle = () => {
    if (isJapanese) {
      switchLanguage('en');
    } else {
      switchLanguage('ja');
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleToggle} title={isJapanese ? "Switch to English" : "Switch to Japanese"}>
      <Image
        src={JAPANESE_FLAG_URL}
        alt="Japanese Flag"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <span className="sr-only">Switch Language</span>
    </Button>
  );
}
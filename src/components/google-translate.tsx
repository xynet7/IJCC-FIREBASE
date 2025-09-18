"use client";

import { useEffect } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
    }
}

export function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ja',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };
  }, []);

  return null;
}

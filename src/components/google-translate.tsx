"use client";

import { useEffect } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
    }
}

export function GoogleTranslate() {
  useEffect(() => {
    // A cookie is used to remember the selected language
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    googleTranslateScript.async = true;
    document.body.appendChild(googleTranslateScript);
    
    window.googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ja',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
      }, 'google_translate_element');
    };

    return () => {
        const scripts = document.getElementsByTagName('script');
        for (let i = scripts.length - 1; i >= 0; i--) {
            if (scripts[i].src.includes('translate.google.com')) {
                scripts[i].remove();
            }
        }
        const a:any = document.querySelector("#google_translate_element")
        if (a) {
          a.innerHTML = ""
        }
    }
  }, []);

  return null;
}

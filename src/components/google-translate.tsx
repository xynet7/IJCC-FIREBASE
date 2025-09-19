"use client";

import { useEffect } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
    }
}

export function GoogleTranslate() {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ja', // English and Japanese
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
      }, 'google_translate_element');
    };

    return () => {
      // Clean up script and element on component unmount
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        const script = scripts[i];
        if (script.src.includes('translate.google.com')) {
          script.remove();
        }
      }
      const gtElement = document.getElementById('google_translate_element');
      if (gtElement) {
        gtElement.innerHTML = '';
      }
      
      const googTopFrame = document.querySelector('.goog-te-gadget-simple');
      if (googTopFrame) {
        googTopFrame.remove();
      }
      const googWrapper = document.querySelector('.skiptranslate');
        if(googWrapper){
            googWrapper.remove();
        }
    };
  }, []);

  return null;
}

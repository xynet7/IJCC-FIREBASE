"use client";

import { useEffect } from 'react';

export function GoogleTranslateWidget() {
  useEffect(() => {
    // Check if the script already exists
    if (document.getElementById('google-translate-script')) {
      return;
    }

    const addScript = document.createElement('script');
    addScript.id = 'google-translate-script';
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ja',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };
    
  }, []);

  return (
    <>
      <style jsx global>{`
        .goog-te-gadget-simple {
            background-color: transparent !important;
            border: none !important;
            font-size: 1rem !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span {
            color: hsl(var(--foreground)) !important;
            font-weight: 500;
        }
        .goog-te-gadget-simple .goog-te-menu-value span:hover {
            color: hsl(var(--primary)) !important;
        }
        .goog-te-gadget-icon {
            display: none !important;
        }
        body {
            top: 0px !important;
        }
      `}</style>
      <div id="google_translate_element"></div>
    </>
  );
}

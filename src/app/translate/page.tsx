
"use client";

import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from 'lucide-react';

export default function TranslatePage() {
  useEffect(() => {
    const scriptId = 'google-translate-script';
    if (document.getElementById(scriptId)) {
        // If script is already there, just re-initialize the widget.
        if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ja',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: true
            }, 'google_translate_element');
        }
      return;
    }

    const addScript = document.createElement('script');
    addScript.id = scriptId;
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ja',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true
      }, 'google_translate_element');
    };
    
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
            top: 0px !important;
        }
        .goog-te-gadget {
            display: inline-block;
        }
        .goog-te-gadget-simple {
            background-color: hsl(var(--card)) !important;
            border: 1px solid hsl(var(--border)) !important;
            border-radius: var(--radius) !important;
            padding: 0.5rem !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span {
            color: hsl(var(--foreground)) !important;
        }
        .goog-te-gadget-icon {
            display: none !important;
        }
        iframe.goog-te-banner-frame {
          display: none !important;
        }
      `}</style>
      <div className="container flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Globe className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">Translate Website</CardTitle>
                <CardDescription>Please use the dropdown below to select your desired language. The website will be translated automatically.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <div id="google_translate_element"></div>
            </CardContent>
        </Card>
      </div>
    </>
  );
}

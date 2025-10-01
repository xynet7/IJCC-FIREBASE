
import type { Metadata } from 'next';
import './globals.css';
import { AppHeader } from '@/components/header';
import { AppFooter } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieBanner } from '@/components/cookie-banner';
import { AuthProvider } from '@/context/auth-context';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Indo-Japan Chamber of Commerce',
  description: 'Fostering business and cultural ties between India and Japan.',
  icons: {
    icon: 'https://i.postimg.cc/HkT5K8PD/IJCC-LOGO.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider>
          <div id="google_translate_element" style={{ display: 'none' }}></div>
          <div className="flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-grow animate-fade-in">{children}</main>
            <AppFooter />
          </div>
          <Toaster />
          <CookieBanner />
          
          <Script
            id="google-translate-script"
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
          <Script id="google-translate-init" strategy="afterInteractive">
            {`
              function googleTranslateElementInit() {
                try {
                  new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,ja',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                  }, 'google_translate_element');
                } catch (e) {
                  console.error('Error initializing Google Translate:', e);
                }
              }

              function changeLanguage(lang) {
                var a = document.querySelector("#google_translate_element select");
                if (a) {
                  a.value = lang;
                  var evt = new Event("change");
                  a.dispatchEvent(evt);
                } else {
                  console.error("Google Translate select element not found.");
                }
              }
            `}
          </Script>
        </AuthProvider>
      </body>
    </html>
  );
}
    
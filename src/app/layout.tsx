
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
    icon: 'https://i.postimg.cc/mkDLyKfN/JPG-LOGO-removebg-preview.png',
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
          <div id="google_translate_element"></div>
          <div className="flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-grow animate-fade-in">{children}</main>
            <AppFooter />
          </div>
          <Toaster />
          <CookieBanner />
          
          <Script
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
                var iframe = document.getElementsByClassName('goog-te-menu-frame')[0];
                if (!iframe) return;

                var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                var langElements = innerDoc.getElementsByClassName('goog-te-menu2-item');
                
                for (var i = 0; i < langElements.length; i++) {
                  var el = langElements[i];
                  if (el.getAttribute('value') === lang) {
                    el.click();
                    return;
                  }
                }
              }
            `}
          </Script>
        </AuthProvider>
      </body>
    </html>
  );
}

    

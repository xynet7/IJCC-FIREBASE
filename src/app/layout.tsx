import type { Metadata } from 'next';
import './globals.css';
import { AppHeader } from '@/components/header';
import { AppFooter } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/components/auth-provider';

export const metadata: Metadata = {
  title: 'Indo-Japan Chamber of Commerce',
  description: 'Fostering business and cultural ties between India and Japan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-grow animate-fade-in">{children}</main>
            <AppFooter />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
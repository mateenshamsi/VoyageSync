import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'VoyageSync - Intelligent Travel Planning',
  description: 'Plan trips, sync calendars, and split expenses in one dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js" async></script>
      </head>
      <body className={`${inter.variable} font-sans selection:bg-white/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
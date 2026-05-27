import type { Metadata } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';

// next/font handles Google Fonts at build time — zero CLS, no FOUT, no network call from the browser
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Happy Frog ATM — Free Cannabis-Compliant ATM Placement for Licensed Dispensaries',
  description:
    'Free EMV-ready ATM placement for licensed cannabis dispensaries. We supply, install, stock, and manage the machine — and pay your store a monthly commission on every transaction.',
  metadataBase: new URL('https://happyfrogatm.com'),
  openGraph: {
    title: 'Happy Frog ATM — Free Cannabis-Compliant ATM Placement',
    description:
      'Free EMV-ready ATM placement for licensed cannabis dispensaries. Nationwide coverage, compliant banking, monthly commissions.',
    url: 'https://happyfrogatm.com',
    siteName: 'Happy Frog ATM',
    images: [
      {
        url: '/assets/logo.png',
        width: 500,
        height: 146,
        alt: 'Happy Frog ATM',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Frog ATM — Free Cannabis-Compliant ATM Placement',
    description:
      'Free EMV-ready ATM placement for licensed cannabis dispensaries. Nationwide coverage, compliant banking, monthly commissions.',
    images: ['/assets/logo.png'],
  },
  icons: {
    icon: 'https://ideafueled.in/happyfrog/wp-content/uploads/2026/04/image-1.png',
    shortcut: 'https://ideafueled.in/happyfrog/wp-content/uploads/2026/04/image-1.png',
    apple: 'https://ideafueled.in/happyfrog/wp-content/uploads/2026/04/image-1.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}

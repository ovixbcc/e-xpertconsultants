import localFont from 'next/font/local';
import './globals.css';

const outfit = localFont({
  src: [
    { path: './fonts/outfit-latin-200-normal.woff2', weight: '200' },
    { path: './fonts/outfit-latin-300-normal.woff2', weight: '300' },
    { path: './fonts/outfit-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/outfit-latin-500-normal.woff2', weight: '500' },
  ],
  variable: '--font-outfit',
  display: 'swap',
});

const figtree = localFont({
  src: [
    { path: './fonts/figtree-latin-300-normal.woff2', weight: '300' },
    { path: './fonts/figtree-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/figtree-latin-500-normal.woff2', weight: '500' },
  ],
  variable: '--font-figtree',
  display: 'swap',
});

const description =
  'e-Xpert Consultants Limited helps businesses grow through market research, product development, branding, marketing and process automation. Based in Mirpur DOHS, Dhaka.';

export const metadata = {
  metadataBase: new URL('https://e-xpertconsultants.com'),
  title: 'e-Xpert Consultants | Business & Process Automation',
  description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://e-xpertconsultants.com/',
    title: 'e-Xpert Consultants | Business & Process Automation',
    description,
    images: ['/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1584F7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import localFont from 'next/font/local';
import Script from 'next/script';
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
      <body>
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MLDH6DMB');`}</Script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLDH6DMB" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <Script id="gtm-tm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KH439SHL');`}</Script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KH439SHL" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}

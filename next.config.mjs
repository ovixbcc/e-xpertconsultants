/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML site to the `out/` folder,
  // which can be hosted anywhere (Vercel, Netlify, GitHub Pages, Hostinger).
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // The animations run their own DOM loops; strict mode would start them twice in development.
  reactStrictMode: false,
};

export default nextConfig;

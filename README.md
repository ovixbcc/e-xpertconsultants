# e-Xpert Consultants website

Company website for **E-Xpert Consultants Limited** (e-xpertconsultants.com), built with [Next.js](https://nextjs.org) 14 (App Router).

## Run it locally

You need [Node.js](https://nodejs.org) 18.17 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
```

The site is exported as plain static files to the `out/` folder (`output: 'export'` in `next.config.mjs`), so it can be hosted anywhere.

## Deploy

- **Vercel (free, recommended):** import this GitHub repo at vercel.com/new. Every push to `main` redeploys. Add `e-xpertconsultants.com` under Project → Settings → Domains and set the DNS records Vercel shows in Hostinger.
- **Netlify:** build command `npm run build`, publish directory `out`.
- **Hostinger or any web host:** run `npm run build` and upload the contents of `out/` to `public_html`.

## Project structure

```
app/
  layout.jsx        Page metadata, favicons, fonts
  page.jsx          Puts the sections together
  globals.css       All styles and brand colours (see :root tokens)
  fonts/            Outfit and Figtree, self-hosted
components/
  Header.jsx        Logo and navigation
  Hero.jsx          Headline and the TrustBee escrow animation
  Stats.jsx         Key numbers
  About.jsx         Who we are, with the Analyze → Solve → Automate → Grow loop
  Fields.jsx        Major fields with process animations
  Services.jsx      Growth chart and the six service cards
  Products.jsx      TrustBee, Chaatro.com and DoctorsBook
  Leadership.jsx    Leadership team
  Contact.jsx       Contact details and enquiry form
  Footer.jsx        Footer
  Logo.jsx          e-Xpert logo (SVG)
public/
  images/           Product logos and team photos
  favicon.ico, og-image.png, ...
```

## Editing content

- Text lives in the component for each section, for example the numbers in `components/Stats.jsx`.
- Brand colours are CSS variables at the top of `app/globals.css` (`--blue: #1584F7`).
- The enquiry form opens the visitor's email app with a message to care@e-xpertconsultants.com. To receive submissions directly, connect it to a form service such as Formspree.

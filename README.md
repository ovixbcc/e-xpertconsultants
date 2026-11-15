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

## Writing a blog post

Blog articles live in `content/blog/` as Markdown files. To publish a new one:

1. Create a file such as `content/blog/my-new-article.md`. The file name becomes the web address: `/blog/my-new-article/`.
2. Start it with this header, then write the article in Markdown below it:

```markdown
---
title: "Your article title"
excerpt: "One or two sentences shown on the blog list."
date: 2026-12-01
category: "Automation"
author: "e-Xpert Team"
---

Your article text here. Use ## for section headings and - for bullet lists.
```

To prepare an article without showing it yet, add `draft: true` under the date. Remove that line (or set it to `false`) to publish it.

3. Commit the file to GitHub. If the site is on Vercel it updates automatically; otherwise run `npm run build` and upload `out/` again.

The newest three articles also appear on the homepage, in the "From the blog" section.

## Project structure

```
app/
  blog/             Blog list page and article pages
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
  LatestPosts.jsx   "From the blog" strip on the homepage
  Contact.jsx       Contact details and enquiry form
  Footer.jsx        Footer
  Logo.jsx          e-Xpert logo (SVG)
content/blog/      Blog articles (Markdown)
lib/posts.js       Reads the blog articles
public/
  images/           Product logos and team photos
  favicon.ico, og-image.png, ...
```

## Editing content

- Text lives in the component for each section, for example the numbers in `components/Stats.jsx`.
- Brand colours are CSS variables at the top of `app/globals.css` (`--blue: #1584F7`).
- The enquiry form opens the visitor's email app with a message to care@e-xpertconsultants.com. To receive submissions directly, connect it to a form service such as Formspree.

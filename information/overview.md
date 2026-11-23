# Portfolio Website Overview

Live site: [https://lcdamy.netlify.app](https://lcdamy.netlify.app)

## Main navigation

Defined in `config/routes.ts`:

1. **Skills** — `/skills`
2. **Experience** — `/experience`
3. **Career** — `/career`
4. **Contact** — `/contact`

The logo/name in the header links back to the home page (`/`).

## Pages

### Home — `/`

- **Introduction**: photo, full name, role ("Full Stack Developer"), short bio, GitHub and Contact buttons.
- **Skills preview**: the first 6 skills from `config/skills.ts`, with a link to all skills.
- **Experience preview**: the first 3 projects from `config/experience.ts`, with a link to all experience.

### Skills — `/skills`

All skills from `config/skills.ts`, each with an icon, short description and rating.

### Experience — `/experience` and `/experience/[expId]`

Project cards (company, category, tech stack, dates). Each card opens a detail page with paragraphs, bullet points and screenshot galleries (`pagesInfoArr`). Images live in `public/experience/<id>/`.

### Career — `/career` and `/career/[careerId]`

Timeline of positions from `config/career.ts`, with a detail page per role. Logos live in `public/career/`.

### Contact — `/contact`

- **Contact form**: name, email, message and an optional social link. Submissions go to `app/api/contact/route.ts`, which forwards them to a Google Form (configured through the `GOOGLE_FORM_*` env vars).
- **Contact card**: email, phone and GitHub link.

### Resume — `/resume`

Redirects to `NEXT_PUBLIC_RESUME_LINK`.

## Additional features

- **Themes**: light, dark and several extra color themes (`next-themes`).
- **Animations**: page and section transitions with `framer-motion`.
- **SEO**: per-page metadata, Person structured data, `sitemap.ts`, `manifest.ts`, `robots.txt`.
- **Analytics**: Google Analytics (`NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`) and Vercel Analytics.
- **Responsive design**: separate desktop and mobile navigation.

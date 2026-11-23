# lcdamy — Developer Portfolio

Personal portfolio of Pierre Damien Murindangabo Cyuzuzo, full stack developer.
Live at [lcdamy.netlify.app](https://lcdamy.netlify.app).

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui (Radix) and framer-motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | Google Analytics ID (optional — analytics is skipped when unset) |
| `GOOGLE_FORM_LINK` | Base URL of the Google Form that receives contact submissions |
| `GOOGLE_FORM_FIELD_ID_NAME` / `_EMAIL` / `_MESSAGE` / `_SOCIAL` | `entry.XXXX` field IDs of that form |
| `NEXT_PUBLIC_RESUME_LINK` | Where `/resume` redirects |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Optional Google Search Console verification token |

## Editing content

Almost everything on the site comes from `config/`:

| File | Controls |
| --- | --- |
| `config/site.ts` | Site name, description, URL, SEO keywords, icons |
| `config/pages.ts` | Page titles and descriptions |
| `config/routes.ts` | Main navigation links |
| `config/skills.ts` | Skills list (first 6 are featured on the home page) |
| `config/experience.ts` | Projects (first 3 are featured on the home page) |
| `config/career.ts` | Career timeline |
| `config/socials.ts` | Social links |
| `config/constants.ts` | Allowed skill, category and experience-type values |

Images go in `public/experience/<id>/` and `public/career/`.

## Project structure

```
app/
  (root)/            # site pages: home, skills, experience, career, contact, resume
  api/contact/       # contact form handler (forwards to Google Form)
  layout.tsx         # root layout, metadata, themes, analytics
  manifest.ts, sitemap.ts
components/          # common/, experience/, career/, skills/, contact/, forms/, ui/
config/              # site content (see above)
hooks/, lib/, providers/
public/              # images, icons, robots.txt
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## License

MIT — see [LICENSE](LICENSE).

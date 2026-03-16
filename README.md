# alexkurata.com — Personal Resume Site

A professional single-page resume site for Alex Kurata, built with React 19, React Router v7, Tailwind CSS v4, HeroUI, and an ambient particle background (space theme).

**Live:** [alexkurata.com](https://alexkurata.com)

---

## Stack

| Layer         | Technology                                      |
| ------------- | ----------------------------------------------- |
| Framework     | React 19 + React Router v7 (SPA mode)           |
| Styling       | Tailwind CSS v4 + HeroUI component library      |
| Particles     | tsParticles (slim bundle)                        |
| Icons         | Iconify + Devicons CDN                           |
| Build         | Vite 7                                           |
| Hosting       | Cloudflare Pages                                 |
| Type Safety   | TypeScript 5.9                                   |

## Project Structure

```
resume-website-v2/
├── app/
│   ├── components/         # UI components
│   │   ├── HeroSection.tsx         # Name, title, contact, CTA
│   │   ├── ExperienceSection.tsx   # Timeline of roles
│   │   ├── SkillsSection.tsx       # Categorized tech skills
│   │   ├── EducationSection.tsx    # Academic credentials
│   │   ├── Navigation.tsx          # Floating scroll-aware nav
│   │   ├── ParticleBackground.tsx  # Ambient star field
│   │   └── Footer.tsx              # Copyright
│   ├── content/            # Data files (no JSX)
│   │   ├── experiences.ts          # Work history
│   │   ├── skills.ts               # Technical skills by category
│   │   └── education.ts            # Education
│   ├── routes/
│   │   └── _index.tsx              # Main (and only) page
│   ├── root.tsx            # App shell, SEO, JSON-LD
│   └── app.css             # Global styles
├── public/
│   ├── AlexKurataResume.pdf        # Downloadable resume
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _headers                    # Cloudflare Pages headers
│   └── _redirects                  # Cloudflare Pages redirects
├── wrangler.toml           # Cloudflare Pages config
├── vite.config.ts
├── react-router.config.ts  # SPA mode, prerender config
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Type check
npm run typecheck
```

## Build Output

The production build outputs to `./build/client/` — this is the directory configured in `wrangler.toml` as the Cloudflare Pages build output.

## SEO

- Full Open Graph and Twitter Card meta tags
- JSON-LD structured data (`Person` schema)
- Canonical URL
- `robots.txt` with sitemap reference
- `sitemap.xml`
- Semantic HTML with proper heading hierarchy
- Accessible navigation with skip links and ARIA labels

## Design Philosophy

- **Space theme, professional tone:** A subtle particle star field creates visual interest without competing with content. Dark background with carefully tuned text opacity creates depth.
- **Content-first:** Experiences are presented as concise, impact-focused bullet points. No fluff.
- **Responsive:** Full mobile support with stacked layouts at small breakpoints.
- **Performance:** SPA mode with prerendering, immutable asset caching, and lazy particle loading.

## License

Private — Alex Kurata

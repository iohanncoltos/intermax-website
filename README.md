# InterMax Website

A modern, trilingual (RO/EN/FR) website for InterMax, showcasing three industry verticals: Construction, Defense Engineering, and Agricultural Services.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Internationalization**: next-intl
- **Forms**: react-hook-form + zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically redirect to `/ro` (Romanian - default language).

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
intermax-website/
├── app/
│   ├── [locale]/               # Locale-based routing
│   │   ├── layout.tsx         # Main layout with header/footer
│   │   ├── page.tsx           # Home page
│   │   ├── constructii/       # Construction vertical
│   │   ├── defense-engineering/ # Defense vertical
│   │   ├── agricultura/       # Agriculture vertical
│   │   ├── portofoliu/        # Portfolio page
│   │   ├── despre/            # About page
│   │   └── contact/           # Contact page
│   └── globals.css            # Global styles + theming
├── components/
│   ├── layout/                # Header, Footer, VerticalSwitch
│   ├── sections/              # Reusable page sections
│   ├── ui/                    # shadcn/ui components
│   └── contact-form.tsx       # Contact form component
├── messages/                   # Translation files
│   ├── ro.json               # Romanian
│   ├── en.json               # English
│   └── fr.json               # French
├── lib/
│   └── utils.ts              # Utility functions
├── i18n.ts                   # i18n configuration
├── middleware.ts             # Locale detection/routing
└── next.config.ts            # Next.js configuration
```

## Routing Structure

The website uses Next.js App Router with locale-based routing:

- `/` → redirects to `/ro`
- `/{locale}` → Home page
- `/{locale}/constructii` → Construction vertical
- `/{locale}/defense-engineering` → Defense vertical
- `/{locale}/agricultura` → Agriculture vertical
- `/{locale}/portofoliu` → Portfolio
- `/{locale}/despre` → About
- `/{locale}/contact` → Contact

Supported locales: `ro` (default), `en`, `fr`

## Translations

### How to Add/Edit Translations

1. Navigate to the `messages/` directory
2. Edit the appropriate locale file (`ro.json`, `en.json`, or `fr.json`)
3. Translations are organized by page and section:

```json
{
  "nav": {
    "home": "Home",
    "industries": "Industries",
    ...
  },
  "home": {
    "hero": {
      "title": "...",
      "subtitle": "..."
    }
  }
}
```

4. Use the translations in components:

```tsx
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("home.hero");
  return <h1>{t("title")}</h1>;
}
```

### Adding a New Language

1. Add the locale to `i18n.ts`:
```typescript
export const locales = ["ro", "en", "fr", "de"] as const;
```

2. Create `messages/de.json` with all translations
3. Update the language switcher in `components/layout/site-header.tsx`

## Vertical Theming

Each vertical has subtle theme variations controlled by CSS variables:

- **Construction**: Blue/slate accent (`.vertical-construction`)
- **Defense**: Dark graphite with red accent (`.vertical-defense`)
- **Agriculture**: Green accent (`.vertical-agriculture`)

Theme classes are applied at the page level and override the primary color. See `app/globals.css` for theme definitions.

## Adding Case Studies

Case studies are currently placeholders. To add real case studies:

1. Create a data file or CMS integration for case studies
2. Update the placeholder cards in:
   - `app/[locale]/page.tsx` (home page)
   - `app/[locale]/constructii/page.tsx`
   - `app/[locale]/defense-engineering/page.tsx`
   - `app/[locale]/agricultura/page.tsx`

Example structure:

```typescript
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  vertical: "construction" | "defense" | "agriculture";
  locale: "ro" | "en" | "fr";
}
```

3. Create a new page or modal for case study details
4. Link case study cards to detail pages

## Contact Form

The contact form uses client-side validation with react-hook-form and zod. Currently, form submissions:

1. Display in browser console
2. Show success toast notification
3. Reset the form

### To integrate with a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update `components/contact-form.tsx` to POST to the API
3. Add email service integration (e.g., SendGrid, Resend, Nodemailer)

## Components

### Reusable Sections

- **Hero**: Large hero section with title, subtitle, and CTAs
- **Section**: Wrapper with optional title and subtitle
- **CTABand**: Call-to-action band with colored background
- **VerticalCards**: Grid of vertical preview cards
- **CapabilitiesGrid**: Grid of capability/service cards
- **HowWeWork**: Step-by-step process display
- **WhyUs**: Bulleted list with checkmarks
- **FAQ**: Accordion-style FAQ section

### Layout Components

- **SiteHeader**: Navigation with industries dropdown and language switcher
- **SiteFooter**: Footer with links and company info
- **VerticalSwitch**: Pill-style tabs for switching between verticals (shown only on vertical pages)

## SEO

Each page has metadata configured:

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  // Additional metadata...
};
```

The root layout (`app/[locale]/layout.tsx`) includes:
- Default title template: "%s | InterMax"
- Description
- Language attribute based on current locale

To enhance SEO further, add:
- OpenGraph images
- Twitter card metadata
- Structured data (JSON-LD)
- Sitemap generation

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

1. Build the project: `npm run build`
2. The output will be in `.next/`
3. Deploy using `npm start` or your preferred hosting

## Environment Variables

No environment variables are currently required. When adding backend integrations, create a `.env.local` file:

```env
# Example for email service
SENDGRID_API_KEY=your_key
CONTACT_EMAIL=contact@intermax.ro
```

## License

© 2025 InterMax. All rights reserved.

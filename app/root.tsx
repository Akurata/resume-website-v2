/**
 * Application root — wraps every route in the HeroUI provider and
 * renders the global particle background. Handles SEO meta tags,
 * font loading, and structured data (JSON-LD).
 */

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useNavigate,
  type NavigateOptions,
} from "react-router";
import { HeroUIProvider } from "@heroui/react";

import {
  ParticleBackground,
  loadParticlesEngine,
} from "app/components/ParticleBackground";

import type { Route } from "./+types/root";
import "./app.css";

/* ------------------------------------------------------------------ */
/*  Asset preloads & font links                                        */
/* ------------------------------------------------------------------ */
export function links(): Route.LinkDescriptors {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
    // Devicons CDN for skill icons
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    },
    { rel: "canonical", href: "https://alexkurata.com/" },
  ];
}

/* ------------------------------------------------------------------ */
/*  SEO meta tags                                                      */
/* ------------------------------------------------------------------ */
export function meta(): Route.MetaDescriptors {
  const title = "Alex Kurata — Senior Software Engineer";
  const description =
    "Full-stack engineer with 8+ years of experience building cloud-native platforms, Kubernetes operators, and distributed systems at IBM. Explore my resume, projects, and technical skills.";
  const url = "https://alexkurata.com";
  const image = `${url}/og-image.png`;

  return [
    { title },
    { name: "description", content: description },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:site_name", content: "Alex Kurata" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Misc
    { name: "author", content: "Alex Kurata" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#030712" },
  ];
}

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */
const JSONLD_PERSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Kurata",
  jobTitle: "Senior Software Engineer",
  url: "https://alexkurata.com",
  email: "alex@alexkurata.com",
  sameAs: [
    "https://github.com/akurata",
    "https://www.linkedin.com/in/alexkurata/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Marist University",
  },
  worksFor: {
    "@type": "Organization",
    name: "IBM",
    url: "https://www.ibm.com/",
  },
});

/* ------------------------------------------------------------------ */
/*  Layout shell                                                       */
/* ------------------------------------------------------------------ */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSONLD_PERSON }}
        />
      </head>
      <body className="bg-gray-950 text-white antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/* ------------------------------------------------------------------ */
/*  Error boundary                                                     */
/* ------------------------------------------------------------------ */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <main className="flex h-screen w-screen items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-white/90">Something went wrong</h1>
        <p className="text-white/50">Please try refreshing the page.</p>
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Client-side engine bootstrap                                       */
/* ------------------------------------------------------------------ */
export async function clientLoader() {
  await loadParticlesEngine();
}

/* ------------------------------------------------------------------ */
/*  App wrapper                                                        */
/* ------------------------------------------------------------------ */
export default function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <div className="relative min-h-dvh">
        <ParticleBackground />
        <main className="relative z-10">
          <Outlet />
        </main>
      </div>
    </HeroUIProvider>
  );
}

/* ------------------------------------------------------------------ */
/*  React-Router type augmentation                                     */
/* ------------------------------------------------------------------ */
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

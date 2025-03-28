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
import {HeroUIProvider} from "@heroui/react";

import {
  ParticleBackground,
  loadParticlesEngine,
} from "app/components/ParticleBackground";

import type {Route} from "./+types/root";
import "./app.css";

export function links(): Route.LinkDescriptors {
  return [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
  ];
}

export function meta(): Route.MetaDescriptors {
  return [
    {title: "Alex Kurata"},
    {name: "description", content: "Alex Kurata resume"},
  ];
}

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  return (
    <main className="h-screen w-screen pt-16 p-4 container mx-auto">
      <h1>Error</h1>
    </main>
  );
}

export async function clientLoader() {
  // Load Particles engine in page load
  await loadParticlesEngine();
}

export default function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <div className="relative flex h-dvh w-full flex-col overflow-hidden">
        <main className="z-10 container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
          <Outlet />
        </main>
        <ParticleBackground />
      </div>
    </HeroUIProvider>
  );
}

/**
 * Extend shared react type to use
 * the react-router navigation options
 * (mainly viewTransition)
 */
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

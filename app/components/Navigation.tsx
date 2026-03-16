/**
 * Floating navigation bar — appears on scroll, anchors to page sections.
 * Uses a glassmorphism style consistent with the space theme.
 */

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-gray-950/70 px-2 py-1.5 shadow-lg shadow-black/20 backdrop-blur-md">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3.5 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white/90"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

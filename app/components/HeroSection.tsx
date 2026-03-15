/**
 * Hero section — name, title, contact info, and resume download CTA.
 * Rendered at the top of the page with a gradient text treatment.
 */

import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center"
    >
      {/* Name */}
      <h1 className="mb-3 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
        <span className="bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          Alex Kurata
        </span>
      </h1>

      {/* Title */}
      <p className="mb-6 text-lg font-medium text-white/60 sm:text-xl md:text-2xl">
        Senior Software Engineer · Hybrid Cloud · Platform Infrastructure
      </p>

      {/* Summary */}
      <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/45 sm:text-base">
        Full-stack engineer with 8+ years of experience building cloud-native platforms,
        Kubernetes operators, and distributed systems at IBM. Passionate about
        developer experience, infrastructure automation, and shipping reliable software at scale.
      </p>

      {/* Contact row */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
        <a
          href="mailto:alex@alexkurata.com"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white/80"
        >
          <Icon icon="material-symbols:mail-outline" width={16} />
          alex@alexkurata.com
        </a>
        <span className="hidden text-white/20 sm:inline">·</span>
        <a
          href="https://github.com/akurata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white/80"
        >
          <Icon icon="mdi:github" width={16} />
          GitHub
        </a>
        <span className="hidden text-white/20 sm:inline">·</span>
        <a
          href="https://www.linkedin.com/in/alexkurata/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white/80"
        >
          <Icon icon="mdi:linkedin" width={16} />
          LinkedIn
        </a>
      </div>

      {/* CTA */}
      <Button
        as={Link}
        color="primary"
        size="lg"
        variant="shadow"
        className="font-semibold"
        endContent={<Icon icon="material-symbols:download" width={20} />}
        to="/AlexKurataResume.pdf"
        target="_blank"
        download
      >
        Download Resume
      </Button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce text-white/30">
        <Icon icon="material-symbols:keyboard-arrow-down" width={28} />
      </div>
    </section>
  );
}

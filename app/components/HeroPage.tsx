import React from "react";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";

import {FadeInImage} from "./FadeInImage";

export function HeroPage() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text">
              Alex Kurata
            </div>
          </div>

          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            🚧 Website under construction 🚧
          </p>

          <div className="flex flex-col text-center">
            <span>🖥️ alexkurata.com</span>
            <span>📧 alex@alexkurata.com</span>
          </div>
        </section>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <FadeInImage
            alt="Gradient background"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
          />
        </div>
      </main>
    </div>
  );
}

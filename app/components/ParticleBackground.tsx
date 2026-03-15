/**
 * Particle background — subtle, drifting star field.
 *
 * Uses tsParticles slim bundle for minimal footprint. Particles are small,
 * low-opacity, and slowly drifting to create an ambient space aesthetic
 * without overwhelming the content layer.
 */

import { MoveDirection, OutMode, type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/** Particle configuration — gentle, ambient star field. */
const STAR_OPTIONS: ISourceOptions = {
  fullScreen: false,
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: { enable: true },
    },
    color: { value: ["#ffffff", "#a5b4fc", "#93c5fd"] },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: { default: OutMode.out },
      random: true,
      speed: 0.15,
      straight: false,
    },
    opacity: {
      value: { min: 0.1, max: 0.6 },
      animation: {
        enable: true,
        speed: 0.3,
        sync: false,
      },
    },
    size: {
      value: { min: 0.5, max: 2 },
      animation: {
        enable: true,
        speed: 0.02,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

/**
 * Initialize the tsParticles engine (call once during app bootstrap).
 * Loaded in the root clientLoader to ensure it's ready before first paint.
 */
export async function loadParticlesEngine() {
  await initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  });
}

/** Renders a fixed, full-screen particle canvas behind all content. */
export function ParticleBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <Particles id="tsparticles" options={STAR_OPTIONS} />
    </div>
  );
}

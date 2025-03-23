import {MoveDirection, OutMode, type ISourceOptions} from "@tsparticles/engine";
import Particles, {initParticlesEngine} from "@tsparticles/react";
// import {loadAll} from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import {loadFull} from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import {loadSlim} from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import {loadBasic} from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const particleOptions: Record<string, ISourceOptions> = {
  stars: {
    retina_detect: true,
    background: {
      color: "#000",
    },
    particles: {
      number: {
        value: 100,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: 0.2,
        straight: false,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
        value: {min: 0, max: 1},
      },
      size: {
        value: {min: 1, max: 3},
        animation: {
          enable: true,
          speed: 0.02,
          sync: false,
        },
      },
    },
  },
};

// Client loader function for initializing the particles
// engine for the background component
export async function loadParticlesEngine() {
  await initParticlesEngine(async (e) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadAll(engine);
    // await loadFull(engine);
    await loadSlim(e);
    // await loadBasic(engine);
  });
}

export function ParticleBackground() {
  return (
    <div className="absolute w-screen h-screen z-0">
      <Particles id="tsparticles" options={particleOptions.stars} />
    </div>
  );
}

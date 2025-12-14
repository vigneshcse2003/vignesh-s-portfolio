import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#050505",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false, // Disabled for smoothness
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.4,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#4361ee", // Neon Royal Blue
          },
          links: {
            color: "#4cc9f0", // Neon Sky Blue
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5, // Even slower for a "floating" feel, less jittery
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Higher area = fewer particles per pixel (cleaner)
            },
            value: 30, // Low count for high performance
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: false, // Disable to prevent lag on 4k screens
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground;
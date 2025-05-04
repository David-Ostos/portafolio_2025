'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ReactNode } from 'react';

interface SpaceParticlesProps {
  className?: string;
  children?: ReactNode;
}

export const SpaceParticles3 = ({
  className = '',
  children,
}: SpaceParticlesProps) => {
  const [loaded, setLoaded] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Función corregida
  const particlesLoaded = async (container?: Container): Promise<void> => {
    setLoaded(true);
    console.log(container);
  };

  const canvasClass = `absolute inset-0 w-full h-full z-0 pointer-events-none 
    transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { 
                value: 150,
                density: { enable: true, width: 800, height: 600 } 
              },
              color: { value: '#ffffff' },
              shape: { type: 'circle' },
              opacity: { value: { min: 0.1, max: 0.5 } },
              size: { value: { min: 0.5, max: 2 } },
              move: {
                enable: true,
                direction: 'none',
                speed: { min: 0.1, max: 0.5 },
                outModes: { default: 'bounce' },
              },
              links: {
                enable: true,
                distance: 80,
                color: '#fff',
                opacity: 0.2,
                width: 2,
              }
            },
            detectRetina: true,
          }}
          className={canvasClass}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
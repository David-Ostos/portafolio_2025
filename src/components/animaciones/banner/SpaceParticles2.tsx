'use client';

import { ReactNode, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type {  ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

interface SpaceParticlesProps {
  className?: string;
  children?: ReactNode;
}

const SpaceParticles2 = ({ className = '', children }: SpaceParticlesProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 2222,
        density: { enable: true, width: 1920, height: 1080 }
      },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.1, max: 0.5 }
      },
      size: {
        value: { min: 0.3, max: 1.5 }
      },
      move: {
        enable: true,
        direction: 'top',
        speed: { min: 0.5, max: 2.0 },
        outModes: {
          default: 'destroy',
          top: 'none'
        },
        straight: true
      }
    },
    background: {
      color: '#000000'
    },
    detectRetina: true
  };

  return (
    <div className={`relative ${className}`}>
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export { SpaceParticles2 };
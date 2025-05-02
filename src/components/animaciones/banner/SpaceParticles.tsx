"use client";

import { ReactNode, useEffect, useRef } from 'react';

interface SpaceParticlesProps {
  className?: string;
  children?: ReactNode;
}

const SpaceParticles = ({
  className = '',
  children
}: SpaceParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      speed: number;
      size: number;
      alpha: number;
    }

    // Configuración
    const particles: Particle[] = [];
    const particleCount = 369;
    const minSpeed = 0.5;
    const maxSpeed = 2.0;
    const baseColor = '#000000'; // Fondo negro espacio

    // Inicializar partículas
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          size: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
    };

    // Actualizar partículas
    const updateParticles = () => {
      particles.forEach(particle => {
        particle.y -= particle.speed;
        
        // Reinicio suave en la parte inferior
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
      });
    };

    // Dibujar partículas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();
      });
    };

    // Manejar resize
    const handleResize = () => {
      const updateCanvasSize = () => {
        if (!canvas) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      
      updateCanvasSize();
      initParticles();
    };

    // Animación
    let animationFrameId: number;
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Configurar observer
    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas);
    
    handleResize();
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className={`relative ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export {SpaceParticles};
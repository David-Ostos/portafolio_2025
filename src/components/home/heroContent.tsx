'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {


  const ButtonPrimary = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <div className="relative dark:bg-dark pt-[120px] text-white pb-[110px] mx-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <div className="mt-12 mb-12 text-4xl font-medium text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl font-gothic">
                <p><span className="font-bold">BIENVENIDOS</span></p>
                <p><span className="lg:tracking-wide ">Soy David <b>Ostos</b></span></p>
                <p className="leading-[0]">
                  <span className="text-2xl lg:text-3xl lg:uppercase">
                    Programador Full-Stack{' '}
                    {/* <b className="text-js">
                      <FontAwesomeIcon 
                        icon={faSquareJs} 
                        bounce 
                        className="text-[#00dc82]" 
                        style={{ animationDuration: '2s' }} 
                      />
                    </b> */}
                  </span>
                </p>
              </div>

              <div className="">
                <p className="mb-12 max-w-[480px] text-base  dark:text-slate-400">
                  Desarrollador Full Stack enfocado en soluciones, con experiencia en JavaScript. Realizo PWA y apps híbridas con Capacitor.js, y manejo de Apache y Linux Server. Conocimientos en AWS, NestJS, Vue.js, Docker y TypeORM. Resuelvo desafíos técnicos con creatividad y eficiencia.
                </p>
              </div>

              <ul className="flex flex-wrap items-center">
                <li>
                  <ButtonPrimary href="/profile">Sobre Mí</ButtonPrimary>
                </li>
              </ul>

              {/* Sección opcional de redes sociales */}
              {/* <div className="clients pt-16">
                <h6 className="flex items-center mb-6 text-xs font-normal text-gray-600 dark:text-slate-400">
                  Redes Sociales
                  <span className="inline-block w-8 h-px ml-3 bg-primary"></span>
                </h6>
                <div className="flex items-center gap-4 xl:gap-[50px]">
                  {clients.map((client, index) => (
                    <a
                      key={index}
                      href={client.link}
                      className="block py-3 text-[50px] text-slate-400 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={client.icon} />
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0 rounded-s-full">
                <Image
                  src="/img/yo.jpeg"
                  alt="David Ostos"
                  className="lg:ml-auto -scale-x-100 rounded-xl rounded-ss-[6rem] max-w-[500px]"
                  width={500}
                  height={600}
                  quality={90}
                  priority
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Círculos SVG */}
                    {[...Array(25)].map((_, i) => (
                      <circle
                        key={i}
                        cx={`${(i % 5) * 22 + 2.5}`}
                        cy={`${Math.floor(i / 5) * 22 + 2.5}`}
                        r="2.5"
                        fill="#00dc82"
                      />
                    ))}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
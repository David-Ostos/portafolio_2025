"use client";
import Image from "next/image";
import {FadeIn} from "@/components/prueba";
import {SpaceParticles} from "@/components"


export default function Home() {


  return (
    <div>
      <div>
          <SpaceParticles className="h-screen w-full">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex items-center justify-center m-20 w-full">
                <div className="self-start  w-full">
                  <div className="text-8xl font-bold text-white">
                    <FadeIn>Hola Mi nombre es David Ostos</FadeIn>
                  </div>
                  {/* <p className="mt-4 text-lg text-gray-300">Aquí hay un poco de información sobre mí.</p> */}
                </div>
                <Image
                  src="/img/yo.png"
                  alt="Descripción de la imagen"
                  width={400}
                  height={400}
                  className="mt-8 rounded-full scale-x-[-1]"
                />
              </div>
            </div>
          </SpaceParticles>
      </div>
    </div>
  );
}

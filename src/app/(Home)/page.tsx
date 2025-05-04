"use client";
import { SpaceParticles, SpaceParticles3} from "@/components"
import HeroSection from "@/components/home/heroContent";
import { useState } from "react";
import { IoMoonOutline, IoReloadCircle, IoSunnyOutline } from "react-icons/io5";



export default function Home() {
  const [color, setColor] = useState(true)
  const [change, setChange] = useState(true)




  return (
    <div className="  ">
      <div className={`h-full transform transition-all duration-300 ease-in ${color ? "bg-blue-500" : "bg-black"} `}>
            
            {
              change ?
              <SpaceParticles3 className="relative h-screen">
                <div className=" absolute text-white top-4 right-4 z-50">
                  <div className="flex gap-2">
                    <button onClick={ () => setChange(!change)}>
                      <IoReloadCircle size={30}/>
                    </button>
                    <button onClick={ () => setColor(!color)}>
                      {
                        color ? <IoSunnyOutline size={30}/> : <IoMoonOutline size={30}/>
                      }
                    </button>

                  </div>
                </div>
              <HeroSection/>
              </SpaceParticles3>
              :
              <SpaceParticles className="relative h-screen">
                <div className=" absolute text-white top-4 right-4 z-50">
                <button onClick={ () => setChange(!change)}>
                    <IoReloadCircle size={30}/>
                  </button>
                 
                </div>
              <HeroSection/>
              </SpaceParticles>

            }
      </div>
    </div>
  );
}

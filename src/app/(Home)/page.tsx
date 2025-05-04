"use client";
import { SpaceParticles3} from "@/components"
import HeroSection from "@/components/home/heroContent";
import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";



export default function Home() {
  const [color, setColor] = useState(true)




  return (
    <div className="  ">
      <div className={`h-screen transform transition-all duration-300 ease-in ${color ? "bg-blue-500" : "bg-black"} `}>
            <SpaceParticles3 className="relative">
              <div className=" absolute text-white top-4 right-4 z-50">
                <button onClick={ () => setColor(!color)}>
                  {
                    color ? <IoSunnyOutline size={30}/> : <IoMoonOutline size={30}/>
                  }
                </button>
              </div>
            <HeroSection/>
            </SpaceParticles3>
      </div>
    </div>
  );
}

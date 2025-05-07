"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const CurrentWork = () => {
  return (
    <div className="py-20 w-full  overflow-hidden" id="current-work">
      {/* Background elements similar to your Footer component */}
      <div>
        <Spotlight className="h-[60vh]" fill="grey" />
        <Spotlight className="left-80 h-[50vh] w-[40vw]" fill="#87CEEB" />
      </div>
      
      <div className="w-full absolute left-0 -bottom-40 min-h-72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <h1 className="heading">
        What I&apos;m <span className="text-purple">Working On</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-16 gap-10 z-10 relative">
        {/* Left side: App visualization */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
            {/* Phone frame */}
            <div className="absolute inset-0 rounded-[40px] border-8 border-neutral-800 bg-black z-10"></div>
            
            {/* App screens mockup with layered effect */}
            <div className="absolute left-8 right-8 top-16 bottom-16 overflow-hidden rounded-xl bg-gradient-to-b from-purple-700 to-blue-500 z-20">
              <img 
                src="/destinationhistory.jpg" 
                alt="Destination History App" 
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  e.currentTarget.src = "/bg.png"; 
                }}
              />
            </div>
            
            {/* Floating UI elements to show app features */}
            <div className="absolute top-28 right-[-40px] w-32 h-20 bg-white/10 backdrop-blur-md rounded-xl p-3 z-30 border border-white/20 shadow-xl">
              <div className="w-full h-3 bg-purple-500 rounded mb-2"></div>
              <div className="w-3/4 h-3 bg-white/40 rounded mb-2"></div>
              <div className="w-1/2 h-3 bg-white/40 rounded"></div>
            </div>
            
            <div className="absolute bottom-28 left-[-40px] w-32 h-20 bg-white/10 backdrop-blur-md rounded-xl p-3 z-30 border border-white/20 shadow-xl">
              <div className="w-8 h-8 bg-blue-500 rounded-full mb-2 flex items-center justify-center">
                <FaLocationArrow className="text-white" size={14} />
              </div>
              <div className="w-full h-3 bg-white/40 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right side: Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 lg:text-left text-center">
          <div className="inline-flex items-center justify-center lg:justify-start">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
              January 2024 - Present
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Destination History</h2>
          <h3 className="text-xl text-purple mb-4">Volunteer Software Developer</h3>
          
          <p className="text-white-200 text-lg mb-4">
            Currently building an innovative travel application focused on secondary tourist markets, 
            helping travelers discover hidden gems and less-explored destinations.
          </p>
          
          <ul className="list-none space-y-4 mb-6">
            <li className="flex items-center gap-3 lg:justify-start justify-center">
              <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                <img src="/react.png" alt="Tech" className="p-2" 
                onError={(e) => {
                  e.currentTarget.src = "/icons/code.svg"; // Fallback to a generic icon
                }}/>
              </div>
              <span>Building full-stack features with modern web technologies</span>
            </li>
            <li className="flex items-center gap-3 lg:justify-start justify-center">
              {/* <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center"> */}
                <img src="/ai.png" alt="AI" className=" w-10 h-10 rounded-full flex items-center justify-center"
                onError={(e) => {
                  e.currentTarget.src = "/icons/brain.svg"; // Fallback to a generic icon
                }}/>
              {/* </div> */}
              <span>Developing AI-driven trip planning capabilities</span>
            </li>
            <li className="flex items-center gap-3 lg:justify-start justify-center">
              {/* <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center"> */}
                <img src="/nodejs.png" alt="Map" className="w-10 h-10 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "/icons/map.svg"; // Fallback to a generic icon
                }}/>
              {/* </div> */}
              <span>Focusing on secondary tourist markets</span>
            </li>
          </ul>
          
          <div className="m-4">
            <Link href="#contact">
              <MagicButton
                title="Contact me about this project"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWork;
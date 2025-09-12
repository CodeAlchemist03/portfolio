import Image from 'next/image';
import React from 'react';
import heroImage from '../assets/hero.png';
import logoImage from '../assets/logo.png';
import figma from '../assets/Figma.png';
import figma2 from '../assets/Figma-1.png';
import ellipse from '../assets/ellipse.png';
import Experience from "./experience";

import Education from './edu';
import Project from './project';
import VideoResume from './vresume';
import Footer from './footer';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative md:min-h-screen flex items-center justify-center bg-gray-50">
        {/* Colorful Blurred Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-32 h-32 bg-blue-400 opacity-30 blur-3xl bottom-10 left-20 rounded-full"></div>
          <Image src={figma} alt="Logo" width={90} height={90} className="absolute w-56 h-56 top-80 md:w-96 md:h-96" />
          <Image src={figma2} alt="Logo" width={90} height={90} className="absolute w-56 h-56 md:w-56 md:h-56" />
          <Image src={ellipse} alt="Logo" width={90} height={90} className="absolute w-24 h-24 top-0 right-0 md:w-96 md:h-96" />
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-6xl w-full min-h-[90vh] mx-auto backdrop-blur-2xl border border-white shadow-lg rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
          {/* ✅ Logo & Text (Top Left) */}
          <div className="absolute top-5 left-5 flex items-center gap-3 p-4">
            <Image src={logoImage} alt="Logo" width={20} height={20} className="w-4 h-4" />
            <span className="text-sm font-bold text-gray-800">MY PORTFOLIO</span>
          </div>
          <div className="absolute top-5 right-5 flex items-center gap-3 p-4">
           
            <span className="text-sm font-light text-gray-800">Scroll down for Video Resume</span>
          </div>
          <div className="absolute w-40 h-40 bg-red-400 opacity-30 blur-3xl top-10 left-10 rounded-full"></div>

          {/* Profile Image */}
          {/* <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden flex items-center">
              <Image src={heroImage} alt="Amit Kumar" layout="responsive" />
            </div>
          </div> */}
         {/* Enhanced Profile Image - Next.js Optimized */}
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Inner gradient ring */}
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-60"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full"></div>
                
                {/* Next.js Image Component */}
                <Image 
                  src={heroImage} 
                  alt="Sumit Chavda" 
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover hover:saturate-110 transition-all duration-300 rounded-full"
                  priority
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:100ms]"></div>
                  <div className="absolute top-12 right-8 w-1 h-1 bg-purple-300 rounded-full animate-bounce [animation-delay:200ms]"></div>
                  <div className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce [animation-delay:300ms]"></div>
                  <div className="absolute bottom-16 right-6 w-1 h-1 bg-pink-300 rounded-full animate-bounce [animation-delay:500ms]"></div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl scale-110 animate-pulse -z-10"></div>
            </div>

                      
          {/* Left Content */}
          <div className="text-left flex-1 z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Hi, I'm <span className="text-purple-500">Sumit Chavda</span>
            </h1>
            <p className="text-gray-600 mt-4 text-justify">
            Software Engineer passionate about creating intelligent, scalable applications. I combine machine learning expertise with full-stack development to build smarter solutions. With published IEEE research and hands-on experience across fintech, edtech, and marketplace platforms, I turn innovative ideas into impactful digital products and exploring the world of machine learning to build smarter applications. Let's turn ideas into reality!
            </p>
            <a
              href="/resume.pdf"
              download="Sumit_Chavda_Resume.pdf"
              className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Education Section (Now Below Hero) */}
      <Education />
      <Project/>
      <Experience/>
      <VideoResume/>
      <Footer/>
    </>
  );
};

export default Hero;

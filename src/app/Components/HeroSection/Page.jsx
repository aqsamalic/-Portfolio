'use client';

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Header/Navbar";

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  if (!clientRendered) return null;;

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  return (
    <div  className={`min-h-screen min-w-full dark:bg-gray-900 ${isDarkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <div className="container mx-auto bg-[#c1ea28]">
        <Navbar toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Hero Section */}
      <div id='home'  className="container mx-auto flex flex-col md:flex-row items-center justify-between  mt-16 md:mt-16 px-0">
        {/* Left Section: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
  <div className="relative">
    {/* Adjusted Position for "Hire Me" Button */}
    <div className="absolute -left-12 md:-left-12 -top-4  sm:-left-8  md:-top-4 bg-gray-200 dark:bg-gray-800 rounded-full p-4 md:p-6 transform -rotate-12">
      <span className="text-sm md:text-base font-bold">Hire Me</span>
      <div className="text-xs md:text-sm">Web Developer</div>
    </div>

    {/* Updated Image Component */} 
    <Image
      src="/Aqsa.png" // Ensure this path is correct
      alt="Developer Portrait"
      width={500}
      height={600}
      className="rounded-lg w-full opacity-90 relative hover:opacity-100 transition-opacity"
      priority={true} // Optimize for immediate loading
    />
  </div>
</div>


        {/* Right Section: Content */}
        <div className="md:w-1/2 text-center sm:mt-8 md:text-left order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white dark:text-white text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-white">Make your digital journey by</span>
              <br />
              <TypeAnimation
                sequence={[
                  "Code faster",
                  1000,
                  "Code smarter",
                  1000,
                  "Design better",
                  1000,
                  "Deliver faster.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#c1ea28]"
              />
            </h1>
            <p className="text-lg md:text-xl text-white  dark:text-gray-200 mb-4 md:mb-6">
              Passionate about coding and design, I craft dynamic web applications with precision
              and creativity. My skills in React.js and full-stack development empower me to build
              scalable, user-friendly solutions. Discover my latest projects and innovations.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Link
                href="/Aqsa Malik Web Developer Resume.pdf"
                className="bg-[#c1ea28] text-white px-6 py-3 rounded-full hover:bg-[#a0c722] transition-colors"
                download
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="text-lg md:text-xl text-white dark:text-white underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



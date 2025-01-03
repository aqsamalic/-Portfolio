'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [clientRendered, setClientRendered] = useState(false);
  const [clientCount, setClientCount] = useState(1);
  const [projectCount, setProjectCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  useEffect(() => {
    setClientRendered(true);

    // Increment counts
    const clientInterval = setInterval(() => {
      setClientCount((prev) => (prev < 40 ? prev + 1 : 40));
    }, 50);

    const projectInterval = setInterval(() => {
      setProjectCount((prev) => (prev < 20 ? prev + 1 : 20));
    }, 10);

    const experienceInterval = setInterval(() => {
      setExperienceCount((prev) => (prev < 3 ? prev + 0.1 : 3));
    }, 100);

    return () => {
      clearInterval(clientInterval);
      clearInterval(projectInterval);
      clearInterval(experienceInterval);
    };
  }, []);
  if (!clientRendered) return null;
  return (
    <div id= 'about-us' className=" min-h-screen text-white overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold text-center py-10 creative-heading">
        <span className="animate-color-shift">P</span>
        <span className="animate-color-shift animation-delay-100">a</span>
        <span className="animate-color-shift animation-delay-200">s</span>
        <span className="animate-color-shift animation-delay-300">s</span>
        <span className="animate-color-shift animation-delay-400">i</span>
        <span className="animate-color-shift animation-delay-500">o</span>
        <span className="animate-color-shift animation-delay-600">n</span>
        <span className="animate-color-shift animation-delay-700"> </span>
        <span className="animate-color-shift animation-delay-800">F</span>
        <span className="animate-color-shift animation-delay-900">u</span>
        <span className="animate-color-shift animation-delay-1000">e</span>
        <span className="animate-color-shift animation-delay-1100">l</span>
        <span className="animate-color-shift animation-delay-1200">s</span>
        <span className="animate-color-shift animation-delay-1300"> </span>
        <span className="animate-color-shift animation-delay-1400">P</span>
        <span className="animate-color-shift animation-delay-1500">u</span>
        <span className="animate-color-shift animation-delay-1600">r</span>
        <span className="animate-color-shift animation-delay-1700">p</span>
        <span className="animate-color-shift animation-delay-1800">o</span>
        <span className="animate-color-shift animation-delay-1900">s</span>
        <span className="animate-color-shift animation-delay-2000">e</span>
        <span className="animate-color-shift animation-delay-2100">!</span>
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Biography Section */}
          <div className="md:w-1/3 animate-slide-in-left">
            <h2 className="text-2xl font-bold mb-4 text-lime-400">BIOGRAPHY</h2>
            <p className="text-lg text-white">
             Hi, I'm AQSA, a passionate web developer  dedicated to crafting stunning, functional, and user-focused digital experiences. With over 3 years of expertise in the industry, I continuously seek innovative approaches to transform my clients' ideas into reality.
            </p>
            <p className="text-lg mt-4 text-white">
             I believe design goes beyond aesthetics; it's about solving challenges and delivering seamless, enjoyable, and intuitive experiences for users. Let’s create something extraordinary together!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 animate-bounce-in">
            <Image
              src="/aqsa.jpg" // Ensure the image is in the public folder
              alt="CodeBucks"
              width={300}
              height={400}
              className="rounded-lg shadow-lg border-4 border-lime-400"
              priority={true} // Optimize for faster loading
              onError={(e) => {
                e.target.src = "/fallback-image.png"; // Ensure fallback image exists in public folder
              }}
            />
          </div>

          {/* Statistics Section */}
          <div className="md:w-1/3 space-y-8 animate-slide-in-right">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-lime-400">
                {clientCount}+
              </h2>
              <p className="text-xl mt-2">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <h2 className="text-6xl font-bold text-lime-400">
                {projectCount}+
              </h2>
              <p className="text-xl mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <h2 className="text-6xl font-bold text-lime-400">
                {experienceCount.toFixed(1)}+
              </h2>
              <p className="text-xl mt-2">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


'use client';
import PropTypes from "prop-types";
import Image from "next/image";
import { useState, useEffect } from "react";

const WorkProcessStep = ({ title, description, image, link }) => (
  <div
    className="relative flex flex-col w-full h-[500px] md:h-96 sm:h-[600px] bg-transparent bg-opacity-90 backdrop-blur-md rounded-xl transform transition-all duration-300 ease-in-out border border-gray-800 shadow-lg hover:shadow-2xl hover:shadow-lime-400/70 cursor-pointer"
  >
    {/* Top Half Image */}
    <div className="w-full h-1/2 rounded-t-xl overflow-hidden relative">
    <Image
        src={image}
        alt={title}
        width={800}  // Define width
        height={400} // Define height
        priority={false}
        style={{ objectFit: 'cover' }} // Use style for objectFit
        className="transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
    {/* Bottom Half Content */}
    <div className="flex flex-col justify-between items-start p-6 ">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
        <p className="text-gray-300 leading-relaxed text-base">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-lime-400 text-black px-4 py-2 mt-4 rounded-full hover:bg-lime-500 transition-colors"
      >
        View
      </a>
    </div>
  </div>
);

WorkProcessStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const WorkProcess = () => {
  const [isClient, setIsClient] = useState(false);

  const steps = [
    {
      title: "Roll & Match Dice Game",
      description:
        "Test your luck with the Roll & Match Dice Game! Select your number, roll the dice, and see if fortune favors you.",
      image: "/dice.webp",
      link: "https://dice-game-one-nu.vercel.app/",
    },
    {
      title: "Custom Digital Marketing Website",
      description:
        "Built from scratch with precision, this custom digital marketing website showcases my expertise in coding and creating responsive, functional websites.",
      image: "/Digitalmarketing.webp",
      link: "https://xsuite.digital/",
    },
    {
      title: "E-Commerce Website Development",
      description:
        "Experience seamless online shopping with this custom-built e-commerce website. Designed with user experience in mind.",
      image: "/E-Commerce.webp",
      link: "https://hakathon1-zboy.vercel.app/",
    },
    {
      title: "Restaurant Website Design & Development",
      description:
        "This custom-built restaurant website offers a seamless online experience for both customers and restaurant owners.",
      image: "/Food.webp",
      link: "https://ny-212.com/",
    },
    {
      title: "Weather Forecaster",
      description:
        "Making a custom weather forecaster GPT, that took API actions from Zapier and provides weather conditions worldwide.",
      image: "/WFGPT.webp",
      link: "https://chatgpt.com/g/g-fG2K60WMV-weather-forecaster",
    },
    {
      title: "Custom Chat GPT (Healthy Diet Planner)",
      description:
        "Making a custom Chat GPT for health and diet queries.",
      image: "/HGPT.webp",
      link: "https://chatgpt.com/g/g-SEhe9tDDF-healthy-diet-planner",
    },
  ];

  useEffect(() => {
    // Ensure client-side rendering
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div id="projects" className="w-auto mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h1
          className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-400 to-lime-400 hover:scale-105 transition-transform duration-300"
        >
          Recent Work
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {steps.map((step) => (
          <WorkProcessStep key={step.title} {...step} />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;


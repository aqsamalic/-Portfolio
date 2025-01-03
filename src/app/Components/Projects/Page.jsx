
'use client';
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const WorkProcessStep = ({ title, description, image, link }) => (
  <div
    className={`relative flex flex-col w-full h-[500px] md:h-96  sm:h-[600px] bg-transparent bg-opacity-90 backdrop-blur-md rounded-xl transform transition-all duration-500 ease-in-out border border-gray-800
    shadow-lg hover:shadow-2xl hover:shadow-lime-400/70 cursor-pointer`}
  >
    {/* Top Half Image */}
    <div
      className="w-full h-1/2 rounded-t-xl overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    {/* Bottom Half Content */}
    <div className="flex flex-col justify-between items-start p-6 h-1/2">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
        <p className="text-gray-300 leading-relaxed text-base">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-lime-400 text-white px-4 py-2 mt-4 rounded-full hover:bg-lime-500 transition-colors"
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
      image: "/dice.png",
      link: "https://dice-game-one-nu.vercel.app/",
    },
    {
      title: "Custom Digital Marketing Website",
      description:
        "Built from scratch with precision, this custom digital marketing website showcases my expertise in coding and creating responsive, functional websites.",
      image: "/Digitalmarketing.jpg",
      link: "https://xsuite.digital/",
    },
    {
      title: "E-Commerce Website Development",
      description:
        "Experience seamless online shopping with this custom-built e-commerce website. Designed with user experience in mind.",
      image: "/E-Commerce.jpg",
      link: "https://hakathon1-zboy.vercel.app/",
    },
    {
      title: "Restaurant Website Design & Development",
      description:
        "This custom-built restaurant website offers a seamless online experience for both customers and restaurant owners.",
      image: "/Food.jpg",
      link: "https://ny-212.com/",
    },
    {
      title: "Weather Forcaster",
      description:
        "Making a custom weather forcaster gpt, that took API actions from zapeir and provide weather condition overall worldwide",
      image: "/WFGPT.png",
      link: "https://chatgpt.com/g/g-fG2K60WMV-weather-forecaster",
    },
    {
      title: "Custom chat Gpt (healthy Diet Planner)",
      description:
        "Making a custom chat gpt regarding health and diet queries",
      image: "/HGPT.png",
      link: "https://chatgpt.com/g/g-SEhe9tDDF-healthy-diet-planner ",
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
          className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-400 to-lime-400
          hover:scale-105 transition-transform duration-500"
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

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function OrbitalSkills() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [radius, setRadius] = useState(200); // Default radius for desktop

  const skills = [
    { name: 'Web', orbit: 1 },
    { name: 'CSS', orbit: 1 },
    { name: 'HTML', orbit: 1 },
    { name: 'JavaScript', orbit: 1 },
    { name: 'ReactJS', orbit: 1 },
    { name: 'NextJS', orbit: 1 },
    { name: 'GitHub', orbit: 1 },
    { name: 'Figma', orbit: 1 },
    { name: 'GatsbyJS', orbit: 1 },
    { name: 'Web Design', orbit: 1 },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const handleResize = debounce(() => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) setRadius(80); // Mobile
      else if (screenWidth < 1024) setRadius(150); // Tablet
      else setRadius(200); // Desktop
    }, 100);

    handleResize(); // Set initial radius
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const positions = useMemo(() => {
    const angleStep = (2 * Math.PI) / skills.length; // Equal spacing
    return skills.map((skill, index) => {
      const angle = index * angleStep; // Distribute evenly
      return {
        ...skill,
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    });
  }, [skills, radius]);

  return (
    <div className="relative bg-black h-[600px] w-full max-w-3xl mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Center Text */}
        <motion.div
          className="absolute text-white text-2xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.div>

        {/* Orbital Circle */}
        <motion.div
          className="absolute rounded-full border border-gray-200"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Skills */}
        {positions.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute"
            style={{
              left: `calc(50% + ${skill.x}px)`,
              top: `calc(50% + ${skill.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ x: 0, y: 0, scale: 0 }}
            animate={
              isLoaded
                ? { x: skill.x, y: skill.y, scale: 1 }
                : { x: 0, y: 0, scale: 0 }
            }
            transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
          >
            <div
              className="whitespace-nowrap rounded-full bg-lime-400 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-black hover:bg-gray-800 transition-colors"
              aria-label={`Skill: ${skill.name}`}
            >
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Debounce function to reduce resize handler calls
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}


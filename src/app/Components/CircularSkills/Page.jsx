

'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CircularSkills() {
  const [radius, setRadius] = useState(null); // Radius will be set after client-side computation
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const skills = [
    { name: 'Web', delay: 0 },
    { name: 'CSS', delay: 0.1 },
    { name: 'HTML', delay: 0.2 },
    { name: 'JavaScript', delay: 0.3 },
    { name: 'ReactJS', delay: 0.4 },
    { name: 'NextJS', delay: 0.5 },
    { name: 'GitHub', delay: 0.6 },
    { name: 'Figma', delay: 0.7 },
    { name: 'GatsbyJS', delay: 0.8 },
    { name: 'Web Design', delay: 0.9 },
  ];

  useEffect(() => {
    const handleResize = () => {
      // Adjust radius based on screen size
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) setRadius(120); // Mobile screens
      else if (screenWidth < 1024) setRadius(180); // Tablet screens
      else setRadius(250); // Desktop screens
    };

    handleResize(); // Set initial radius
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView && radius !== null) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, radius, controls]);

  if (radius === null) {
    // Prevent rendering until radius is set to avoid hydration mismatch
    return null;
  }

  return (
    <div id='skills' ref={ref} className="relative mx-auto h-[600px] w-[600px] max-w-full">
      {/* Circular Border */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gray-200"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          left: `calc(50% - ${radius}px)`,
          top: `calc(50% - ${radius}px)`,
        }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 0.5 },
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Skills */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI; // Divide circle evenly
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={skill.name}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{
              duration: 1,
              delay: skill.delay,
              ease: 'easeOut',
            }}
          >
            <div className="whitespace-nowrap rounded-full bg-lime-400 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-black hover:bg-gray-800 transition-colors">
              {skill.name}
            </div>
          </motion.div>
        );
      })}

      {/* Center Text */}
      <motion.div
        className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-bold"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
      >
        Skills
      </motion.div>
    </div>
  );
}

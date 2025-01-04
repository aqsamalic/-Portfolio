'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../Hooks/useScrollAnimation';

export const WorkExperienceCard = ({ experience, index, total }) => {
  const { ref, controls, variants } = useScrollAnimation();

  const isLeft = index % 2 === 0; // Calculate position based on index
  const isLast = index === total - 1; // Check if it's the last item

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={`relative mb-8 ${isLeft ? 'mr-auto' : 'ml-auto'} w-full md:w-5/12`}
    >
      {/* Card Content */}
      <div
        className={`bg-white rounded-lg shadow-md p-6 ${
          isLeft ? 'mr-4' : 'ml-4'
        }`}
      >
        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
        <p className="text-lg text-gray-600">{experience.company}</p>
        <p className="text-sm text-gray-500 mb-4">{experience.date}</p>
        <p className="text-gray-700">{experience.description}</p>
      </div>

      {/* Horizontal Connector */}
      <div
        className={`absolute top-6 ${
          isLeft ? '-right-10' : '-left-10'
        } w-20 h-0.5 bg-lime-400`}
      ></div>

      {/* Circular Node */}
      <div
        className={`absolute ${
          isLeft ? '-right-14' : '-left-14'
        } top-5 w-7 h-7 bg-lime-400 rounded-full border-4 border-white`}
      ></div>

      {/* Vertical Connector (Not for the last item) */}
      {!isLast && (
        <div
          className={`absolute ${
            isLeft ? '-right-11' : '-left-11'
          } top-12 bottom-0 w-0.5 bg-lime-400`}
        ></div>
      )}
    </motion.div>
  );
};

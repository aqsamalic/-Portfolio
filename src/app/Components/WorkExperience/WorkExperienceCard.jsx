"use client"
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../Hooks/useScrollAnimation';


export const WorkExperienceCard = ({
  title,
  company,
  date,
  description,
  isLeft,
  isLast,
}) => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={`relative mb-8 ${isLeft ? 'mr-auto' : 'ml-auto'} w-full md:w-5/12`}
    >
      <div className={`bg-white rounded-lg shadow-md p-6 ${isLeft ? 'mr-4' : 'ml-4'}`}>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className={`absolute top-6 ${isLeft ? '-right-10' : '-left-10'} w-20 h-0.5 bg-lime-400`}></div>
      <div className={`absolute ${isLeft ? '-right-14' : '-left-14'} top-5 w-7 h-7 bg-lime-400 rounded-full border-4 border-white`}></div>
      {!isLast && (
        <div className={`absolute ${isLeft ? '-right-11' : '-left-11'} top-12 bottom-0 w-0.5 bg-lime-400 `}></div>
      )}
    </motion.div>
  );
};

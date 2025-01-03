"use client"
import React from 'react';
import { WorkExperienceCard } from './WorkExperienceCard';

const workExperiences = [
 
 
  {
    title: 'Junior Full Stack Developer',
    company: 'Xsuite.Digital',
    date: 'Sep 2024 - Presant',
    description: 'Developed and maintained multiple client websites. Collaborated with design team to implement responsive UI/UX designs.',
  },
  {
    title: 'Full Stack Developer intern',
    company: 'MicroThink.com',
    date: ' - May 2024 - Aug 2024',
    description: 'Assisted in the development of company website and internal tools. Gained experience in front-end technologies and agile methodologies.',
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: 'Mar 2022 - Dec 2022',
    description: 'Assisted in the development of company website and internal tools.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: 'Jan 2023 - March 2023',
    description: 'Working as frontend developer intern  and be a part of different development  projects .',
  },
 
];

export const WorkExperience = () => {
  return (
    <section id='experience' className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-lime-400"></div>
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              description={experience.description}
              isLeft={index % 2 === 0}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

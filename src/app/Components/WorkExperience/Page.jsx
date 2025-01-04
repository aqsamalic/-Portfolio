'use client';
import React from 'react';
import { WorkExperienceCard } from './WorkExperienceCard';

const workExperiences = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Xsuite.Digital',
    date: 'Sep 2024 - Present',
    description: 'Developed and maintained multiple client websites. Collaborated with the design team to implement responsive UI/UX designs.',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'MicroThink.com',
    date: 'May 2024 - Aug 2024',
    description: 'Assisted in the development of the company website and internal tools. Gained experience in front-end technologies and agile methodologies.',
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: 'Mar 2022 - Dec 2022',
    description: 'Worked on the development of company websites and internal tools, delivering high-quality front-end solutions.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: 'Jan 2023 - Mar 2023',
    description: 'Collaborated on various development projects as a frontend developer intern.',
  },
];

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Work Experience
        </h2>
        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-lime-400"></div>

          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              experience={experience}
              index={index}
              total={workExperiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


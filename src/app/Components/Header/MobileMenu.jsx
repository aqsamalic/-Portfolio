'use client';

import { XIcon } from 'lucide-react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaDribbble } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';

const NavItem = ({ href, children, onClick }) => (
  <Link 
    href={href} 
    className="text-white text-xl py-2 hover:text-gray-300 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

const SocialIcon = ({ Icon, href, color }) => (
  <Link href={href} className={`text-2xl ${color} transition-transform hover:scale-125`}>
    <Icon />
  </Link>
);

const MobileMenu = ({ isOpen, onClose, toggleDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center">
      <div className="w-full flex justify-between items-center p-4">
        <button onClick={onClose} className="text-white p-2">
          <XIcon className="w-6 h-6" />
        </button>
        <div className="bg-white text-black rounded-full p-3">
          <span className="text-xl font-bold">CB</span>
        </div>
        <div className="w-6" /> {/* Spacer for alignment */}
      </div>

      <nav className="flex flex-col items-center space-y-6 mt-16">
        <NavItem href="/" onClick={onClose}>Home</NavItem>
        <NavItem href="/AboutUs" onClick={onClose}>About</NavItem>
        <NavItem href="/projects" onClick={onClose}>Projects</NavItem>
        <NavItem href="/articles" onClick={onClose}>Skills</NavItem>
        <NavItem href="/WorkExperience " onClick={onClose}>Experience</NavItem>
        <NavItem href="/WorkProcess" onClick={onClose}>Projects</NavItem>
        <NavItem href="/Contact" onClick={onClose}>Contact</NavItem>
      </nav>

      <div className="flex items-center space-x-4 mt-12">
        {/* <SocialIcon Icon={FaTwitter} href="https://twitter.com" color="text-blue-400" /> */}
        <SocialIcon Icon={FaGithub} href="https://github.com" color="text-white" />
        <SocialIcon Icon={FaLinkedin} href="https://linkedin.com" color="text-blue-400" />
        <SocialIcon Icon={FaPinterest} href="https://pinterest.com" color="text-red-600" />
        <SocialIcon Icon={FaDribbble} href="https://dribbble.com" color="text-pink-600" />
        <button onClick={toggleDarkMode} className="text-2xl text-yellow-500 hover:text-yellow-600">
          <MdDarkMode />
        </button>
      </div>

      <div className="mt-12 flex items-center space-x-4">
        <Link 
          href="/resume" 
          className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          Resume
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

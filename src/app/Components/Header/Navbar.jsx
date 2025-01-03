'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaPinterest, FaDribbble } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { MdDarkMode } from 'react-icons/md';

import Link from 'next/link';

export default function Navbar({ toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about-us' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact-page' },
  ];

  const SocialIcon = ({ Icon, href, color }) => (
    <Link href={href} className={`text-2xl ${color} transition-transform hover:scale-125`}>
      <Icon />
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Left-Aligned Navbar Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navbar.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-lg hover:underline transition-all duration-300"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden top-0  text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>

        {/* Right-Aligned Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialIcon Icon={FaGithub} href="https://github.com" color="text-gray-800" />
          <SocialIcon Icon={FaLinkedin} href="https://linkedin.com" color="text-blue-700" />
          <SocialIcon Icon={FaPinterest} href="https://pinterest.com" color="text-red-600" />
          <SocialIcon Icon={FaDribbble} href="https://dribbble.com" color="text-pink-600" />
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-yellow-500 hover:text-yellow-600 transition-colors"
          >
            <MdDarkMode />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navbar.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline text-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            <div className="flex items-center space-x-4">
              <SocialIcon Icon={FaGithub} href="https://github.com" color="text-gray-800" />
              <SocialIcon Icon={FaLinkedin} href="https://linkedin.com" color="text-blue-700" />
              <SocialIcon Icon={FaPinterest} href="https://pinterest.com" color="text-red-600" />
              <SocialIcon Icon={FaDribbble} href="https://dribbble.com" color="text-pink-600" />
              <button
                onClick={toggleDarkMode}
                className="text-2xl text-yellow-500 hover:text-yellow-600 transition-colors"
              >
                <MdDarkMode />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 0.25);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#050816]/75 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center border border-accent-purple/30 group-hover:border-accent-purple transition-all duration-300">
            <Terminal className="w-5 h-5 text-accent-purple group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-sans font-bold text-xl tracking-wider text-white group-hover:text-accent-purple transition-colors duration-300">
            {personalInfo.name.split(' ')[0]}
            <span className="text-accent-purple">.</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-purple"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded-lg border border-accent-purple/40 text-accent-purple hover:bg-accent-purple hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide shadow-sm hover:glow-purple cursor-pointer"
          >
            Connect
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050816]/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 text-lg font-medium transition-colors duration-300 cursor-pointer ${
                      isActive ? 'text-accent-purple border-l-2 border-accent-purple pl-3' : 'text-gray-400 hover:text-white pl-3'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 w-full py-3 rounded-lg bg-accent-purple text-white text-center font-semibold hover:bg-accent-purple/90 transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

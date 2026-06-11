import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom inline SVG replacements for brand icons
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Leetcode = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className={props.className}
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-8-7.728a1.155 1.155 0 0 1 0-1.677l2.697-2.607c.466-.45 1.211-.45 1.677 0a1.155 1.155 0 0 1 0 1.677l-1.859 1.797 6.323 6.108 4.677-4.515a1.155 1.155 0 0 1 1.677 0c.466.45.466 1.21 0 1.677zM20.579 7.42c-.466-.45-1.211-.45-1.677 0L14.225 11.9a1.155 1.155 0 0 1-1.677 0c-.466-.45-.466-1.21 0-1.677l4.677-4.515c.466-.45.466-1.21 0-1.677-.466-.45-1.211-.45-1.677 0l-4.677 4.515a3.465 3.465 0 0 0 0 4.975 3.465 3.465 0 0 0 4.976 0l4.677-4.515c.466-.45.466-1.21 0-1.677z" />
  </svg>
);



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social links */}
        <div className="flex gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            title="LeetCode"
          >
            <Leetcode className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <div>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/2 border border-white/10 hover:border-accent-purple flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-purple/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}

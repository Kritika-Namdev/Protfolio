import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((currentIndex) => (currentIndex + 1) % personalInfo.titles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Greeting Animation */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">
              Welcome to my space
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-purple-400">{personalInfo.name}</span>
          </h1>

          {/* Animated Typist Title */}
          <div className="h-10 sm:h-12 mb-6">
            <span className="text-xl sm:text-2xl font-bold text-gray-300">
              I am a{' '}
              <span className="text-accent-purple underline decoration-accent-purple/30 decoration-wavy underline-offset-4">
                {personalInfo.titles[titleIndex]}
              </span>
              <span className="animate-pulse text-accent-purple font-light ml-1">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 mx-auto">
            {personalInfo.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-xl bg-accent-purple text-white font-semibold flex items-center gap-2 hover:bg-accent-purple/90 transition-all duration-300 shadow-md shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:glow-purple cursor-pointer group"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={personalInfo.resumeUrl}
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-accent-purple/50 bg-white/5 hover:bg-accent-purple/10 text-white font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              Download Resume
              <Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Server, Cpu, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timer;
    const activeTitle = personalInfo.titles[currentTitleIndex];

    if (!isDeleting) {
      if (currentText.length < activeTitle.length) {
        timer = setTimeout(() => {
          setCurrentText(activeTitle.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(activeTitle.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % personalInfo.titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

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
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent-purple/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Copywriting and CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center text-left"
        >
          {/* Greeting Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">
              Welcome to my space
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-purple-400">{personalInfo.name}</span>
          </h1>

          {/* Animated Typist Title */}
          <div className="h-10 sm:h-12 mb-6">
            <span className="text-xl sm:text-2xl font-bold text-gray-300">
              I am a{' '}
              <span className="text-accent-purple underline decoration-accent-purple/30 decoration-wavy underline-offset-4">
                {currentText}
              </span>
              <span className="animate-pulse text-accent-purple font-light ml-1">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            {personalInfo.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-xl bg-accent-purple text-white font-semibold flex items-center gap-2 hover:bg-accent-purple/90 transition-all duration-300 shadow-md shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:glow-purple cursor-pointer group"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resumeUrl}
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-accent-purple/50 bg-white/5 hover:bg-accent-purple/10 text-white font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              Download Resume
              <Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Floating Interactive Developer/Networking Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          {/* Dynamic glowing backdrops */}
          <div className="absolute w-[250px] h-[250px] bg-accent-purple/30 rounded-full blur-[80px] -z-10 animate-pulse-glow" />

          {/* Interactive floating card container */}
          <motion.div
            className="w-full max-w-[450px] h-[400px] glassmorphism-card rounded-2xl p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl border border-accent-purple/20"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Console Header Bar */}
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                cisco-ios-terminal.sh
              </span>
            </div>

            {/* Network Node simulation representation in the center */}
            <div className="flex-1 py-6 relative flex items-center justify-center">
              {/* Central Router Ring */}
              <div className="absolute w-44 h-44 rounded-full border border-dashed border-accent-purple/20 flex items-center justify-center animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-28 h-28 rounded-full border border-accent-purple/30 flex items-center justify-center animate-[spin_20s_linear_infinite]" style={{ animationDirection: 'reverse' }} />

              {/* Network Devices float */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center shadow-lg shadow-accent-purple/20 cursor-pointer hover:border-accent-purple transition-all"
              >
                <Server className="w-5 h-5 text-accent-purple" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0], y: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-8 left-10 w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/20 cursor-pointer hover:border-emerald-500 transition-all"
              >
                <Cpu className="w-5 h-5 text-emerald-400" />
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0], y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-8 right-10 w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-500/20 cursor-pointer hover:border-blue-500 transition-all"
              >
                <Globe className="w-5 h-5 text-blue-400" />
              </motion.div>

              {/* Connecting lines SVG backdrop overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Lines connecting server to CPU and Globe */}
                <line x1="50" y1="20" x2="25" y2="80" stroke="rgba(145, 94, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="50" y1="20" x2="75" y2="80" stroke="rgba(145, 94, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="25" y1="80" x2="75" y2="80" stroke="rgba(145, 94, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2" />
              </svg>

              {/* Static visual stats */}
              <div className="absolute text-center bg-[#050816]/80 px-4 py-2.5 rounded-xl border border-white/5 shadow-xl">
                <span className="block text-[10px] text-gray-500 font-mono tracking-wide uppercase">Core Status</span>
                <span className="text-xs font-semibold text-emerald-400 font-mono">CCNA_SECURE: UP</span>
              </div>
            </div>

            {/* Code shell style output at bottom */}
            <div className="border-t border-white/5 pt-4 font-mono text-[11px] text-left text-gray-400 space-y-1 bg-[#050816]/40 p-3 rounded-lg">
              <p className="text-gray-500">kritikanamdev$ <span className="text-white">ping -c 4 enterprise-net</span></p>
              <p className="text-accent-purple">64 bytes from net_gateway: icmp_seq=1 ttl=64 time=1.24 ms</p>
              <p className="text-emerald-400">Connection established successfully.</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { User, Target, ShieldAlert, Award } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import avatarImg from '../assets/kritika_avatar.png';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[90px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 font-mono"
          >
            Introduction
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            About Me
          </motion.h3>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* About Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Avatar Profile Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-4 glassmorphism-card rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group border border-accent-purple/15"
          >
            {/* Hover inner gradient glow */}
            <div className="absolute inset-0 bg-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Circular Profile Photo */}
            <div className="w-44 h-44 rounded-full border-2 border-accent-purple/40 p-1.5 mb-6 relative hover:border-accent-purple transition-all duration-300 shadow-xl shadow-accent-purple/10">
              <img
                src={avatarImg}
                alt="Kritika Namdev Avatar"
                className="w-full h-full object-cover rounded-full bg-[#050816]"
              />
              {/* Pulse glow behind */}
              <div className="absolute inset-0 rounded-full bg-accent-purple/10 blur-md -z-10 group-hover:scale-105 transition-transform" />
            </div>

            <h4 className="text-xl font-bold text-white mb-1 tracking-wide uppercase">Kritika Namdev</h4>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-purple font-mono mb-6">
              Indore, MP, India
            </p>

            <div className="flex gap-2 items-center justify-center w-full bg-[#050816]/80 px-4 py-2.5 rounded-xl border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-gray-300 font-mono uppercase tracking-wider">
                MERN & CCNA SPECIALIST
              </span>
            </div>
          </motion.div>

          {/* Right Column: Bio Details, Objective, and Competences */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-8 flex flex-col gap-6 justify-between text-left"
          >
            {/* Bio Block */}
            <div className="glassmorphism-card rounded-2xl p-8 md:p-10 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20">
                  <User className="w-5 h-5 text-accent-purple" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-wide">Developer & Engineer Profile</h4>
              </div>

              <h5 className="text-lg font-semibold text-gray-200 mb-4 leading-relaxed">
                {aboutData.intro}
              </h5>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {aboutData.paragraph1}
              </p>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {aboutData.paragraph2}
              </p>
            </div>

            {/* Strengths & Focus Areas */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono mb-4">Core Focus Areas</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aboutData.qualities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#050816]/60 p-4 rounded-xl border border-white/5 hover:border-accent-purple/20 transition-all duration-300">
                    <Award className="w-5 h-5 text-accent-purple shrink-0" />
                    <div className="text-left">
                      <span className="block text-sm font-bold text-white mb-0.5">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

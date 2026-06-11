import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Database, Network, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'frameworks', label: 'Frameworks', icon: Server },
    { id: 'csCore', label: 'CS Core', icon: Network },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816]/30">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">My Arsenal</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Technical Skills</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2.5 transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white bg-white/2 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-accent-purple rounded-xl -z-10 shadow-lg shadow-accent-purple/20 border border-accent-purple/50"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills List container */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism-card rounded-xl p-6 hover:border-accent-purple/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-accent-purple/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-base font-bold text-white tracking-wide">{skill.name}</span>
                    <span className="text-sm font-semibold text-accent-purple font-mono">{skill.level}%</span>
                  </div>

                  {/* Progress track */}
                  <div className="w-full h-2.5 bg-[#050816] rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-accent-purple to-purple-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

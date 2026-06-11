import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Landmark } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">Qualifications</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">My Education</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative pl-8 sm:pl-10">
          
          {/* Vertical line connector */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple/60 via-purple-500/20 to-transparent" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="relative mb-12 text-left"
            >
              {/* Timeline glowing icon node */}
              <div className="absolute -left-[37px] top-1.5 z-20 w-8 h-8 rounded-full bg-[#050816] border-2 border-accent-purple flex items-center justify-center shadow-lg shadow-accent-purple/10">
                <GraduationCap className="w-4 h-4 text-accent-purple" />
              </div>

              {/* Glassmorphic box */}
              <div className="glassmorphism-card rounded-2xl p-6 md:p-8 hover:border-accent-purple/20 transition-all duration-300">
                <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
                  
                  {/* Years */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent-purple/10 border border-accent-purple/20 text-xs font-semibold text-accent-purple font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.date}
                  </span>

                  <span className="text-xs text-gray-500 font-semibold font-mono tracking-widest uppercase">
                    UNDERGRADUATE
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide leading-snug">
                  {edu.degree}
                </h3>

                {/* College */}
                <div className="flex items-center gap-2 text-purple-400 font-semibold mb-6 text-sm">
                  <Landmark className="w-4 h-4 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Achievements details */}
                <div className="flex gap-3 items-start bg-white/2 p-4 rounded-xl border border-white/5">
                  <Award className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {edu.achievements}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

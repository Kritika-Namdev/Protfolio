import { motion } from 'framer-motion';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050816]/30">
      {/* Background Accent blur */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">Endorsements</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Licenses & Certifications</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificate Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(145, 94, 255, 0.4)',
                boxShadow: '0 10px 30px -10px rgba(145, 94, 255, 0.25)'
              }}
              className="glassmorphism-card rounded-2xl p-6 md:p-8 border border-accent-purple/10 flex flex-col justify-between items-start transition-all duration-300 relative group text-left"
            >
              {/* Badge Icon */}
              <div className="flex justify-between items-center w-full mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors duration-300">
                  {cert.title.includes('CCNA') || cert.title.includes('Cybersecurity') ? (
                    <ShieldCheck className="w-6 h-6 text-accent-purple" />
                  ) : (
                    <Award className="w-6 h-6 text-accent-purple" />
                  )}
                </div>
                
                {/* Date stamp */}
                <span className="text-xs font-mono font-bold text-gray-500 tracking-wider">
                  {cert.date.toUpperCase()}
                </span>
              </div>

              {/* Title & Info */}
              <div className="w-full flex-1">
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-accent-purple transition-colors duration-300">
                  {cert.title}
                </h3>
                <h4 className="text-sm font-semibold text-purple-400 mb-4 font-sans">
                  {cert.issuer}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cert.detail}
                </p>
              </div>

              {/* Verify decoration */}
              <div className="flex items-center gap-1 text-xs font-bold text-gray-400 group-hover:text-white transition-colors cursor-pointer">
                <span>Verified Credential</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

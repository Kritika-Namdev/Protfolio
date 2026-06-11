import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Custom inline SVG replacement for brand icons
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
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


// Reusable Tilt Card Component
function TiltCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (max 12 degrees)
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
      }}
      className="glassmorphism-card rounded-2xl overflow-hidden hover:border-accent-purple/40 hover:shadow-xl hover:shadow-accent-purple/10 flex flex-col h-full group relative cursor-pointer"
    >
      {/* Visual background gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Project Image */}
      <div className="h-48 w-full overflow-hidden relative border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Hover action overlay */}
        <div className="absolute inset-0 bg-[#050816]/65 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#050816]/90 border border-white/10 hover:border-accent-purple flex items-center justify-center text-white hover:text-accent-purple hover:scale-110 transition-all duration-300"
            title="View Source"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#050816]/90 border border-white/10 hover:border-accent-purple flex items-center justify-center text-white hover:text-accent-purple hover:scale-110 transition-all duration-300"
            title="Live Demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project details */}
      <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((techItem) => (
              <span
                key={techItem}
                className="text-[10px] font-semibold font-mono tracking-wide px-2 py-0.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-purple-300"
              >
                {techItem}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-300 tracking-wide">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Links Footer (standard buttons fallback for mobile/accessibility) */}
        <div className="flex gap-4 pt-4 border-t border-white/5 items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <Code className="w-3.5 h-3.5" />
            Repository
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-accent-purple hover:text-purple-300 transition-colors"
          >
            Live Preview
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050816]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">My Creations</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Recent Projects</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

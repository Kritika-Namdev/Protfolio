import { ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

function ProjectCard({ project }) {
  return (
    <div className="glassmorphism-card rounded-2xl overflow-hidden hover:border-accent-purple/40 hover:shadow-xl hover:shadow-accent-purple/10 flex flex-col h-full group relative">
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
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#050816]/90 border border-white/10 hover:border-accent-purple flex items-center justify-center text-white hover:text-accent-purple hover:scale-110 transition-all duration-300"
              title="View Source"
              aria-label={`View ${project.title} source`}
            >
              <Code className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#050816]/90 border border-white/10 hover:border-accent-purple flex items-center justify-center text-white hover:text-accent-purple hover:scale-110 transition-all duration-300"
              title="Live Demo"
              aria-label={`Open ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Project details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
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
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-accent-purple hover:text-purple-300 transition-colors"
            >
              Live Preview
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

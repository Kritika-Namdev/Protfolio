import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

function ExperienceCard({ experience }) {
  return (
    <div className="glassmorphism-card rounded-2xl p-6 md:p-8 w-full hover:border-accent-purple/30 transition-all duration-300 relative text-left shadow-xl">
      <div className="flex items-center gap-2 text-xs font-semibold text-accent-purple uppercase tracking-wider mb-3 font-mono">
        <Calendar className="w-3.5 h-3.5" />
        {experience.date}
      </div>

      <h3 className="text-xl font-bold text-white mb-1 tracking-wide">{experience.role}</h3>
      <h4 className="text-sm font-semibold text-purple-400 mb-4">{experience.company}</h4>

      <ul className="space-y-2.5 text-sm text-gray-400">
        {experience.description.map((detail) => (
          <li key={detail} className="flex gap-2 items-start leading-relaxed">
            <ChevronRight className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">My Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Work & Leadership Experience</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative space-y-12 md:space-y-0">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple/60 via-purple-500/20 to-transparent" />

          {experienceData.map((experience, index) => (
            <div key={experience.role} className="relative md:grid md:grid-cols-2 md:gap-16 items-start">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-20 w-8 h-8 rounded-full bg-[#050816] border-2 border-accent-purple items-center justify-center shadow-lg hover:glow-purple transition-all duration-300">
                <Briefcase className="w-3.5 h-3.5 text-accent-purple" />
              </div>

              <div className="md:flex md:justify-end">
                {index % 2 === 0 ? <ExperienceCard experience={experience} /> : <div className="hidden md:block w-full" />}
              </div>

              <div className="md:flex md:justify-start">
                {index % 2 === 1 ? <ExperienceCard experience={experience} /> : <div className="hidden md:block w-full" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import {
  Code, Code2, Braces, Server, Database, Network, Wrench, Cloud,
  Palette, Atom, Workflow, GitBranch, Send, Monitor, Binary, Cpu, Boxes
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const skillIcons = {
  'C++': Code2,
  Python: Code2,
  JavaScript: Braces,
  SQL: Database,
  HTML: Code,
  CSS: Palette,
  'Node.js': Server,
  'Express.js': Server,
  'React.js': Atom,
  TailwindCSS: Palette,
  'REST APIs': Workflow,
  MongoDB: Database,
  MySQL: Database,
  AWS: Cloud,
  Git: GitBranch,
  GitHub: GitBranch,
  Postman: Send,
  'VS Code': Monitor,
  'Data Structures & Algorithms': Binary,
  DBMS: Database,
  'Operating Systems': Cpu,
  OOPs: Boxes,
  'Computer Networks': Network
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frameworks', label: 'Frameworks', icon: Server },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'cloud', label: 'Cloud Platform', icon: Cloud },
    { id: 'csCore', label: 'CS Core', icon: Network },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
  ];


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
                {isActive && <span className="absolute inset-0 bg-accent-purple rounded-xl -z-10 shadow-lg shadow-accent-purple/20 border border-accent-purple/50" />}
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills List container */}
        <div className="min-h-[140px]">
            <div className="flex flex-wrap justify-center gap-4">
              {skillsData[activeTab].map((skill) => {
                const SkillIcon = skillIcons[skill] || Code;
                return (
                  <div
                    key={skill}
                    className="glassmorphism-card rounded-full px-4 py-3 hover:-translate-y-1 hover:border-accent-purple/40 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-accent-purple/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="w-10 h-10 rounded-full bg-accent-purple/10 border border-accent-purple/25 flex items-center justify-center text-accent-purple shrink-0">
                      <SkillIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide pr-2">{skill}</span>
                  </div>
                );
              })}
            </div>
        </div>

      </div>
    </section>
  );
}

import { ExternalLink, Trophy, Users } from 'lucide-react';
import { achievementsData, activitiesData } from '../data/portfolioData';

function HighlightCard({ item, Icon }) {
  return (
    <article
      className="glassmorphism-card rounded-2xl p-6 md:p-8 border border-accent-purple/10"
    >
      <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-accent-purple" />
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-accent-purple hover:text-purple-300 transition-colors"
        >
          {item.linkText || 'View profile'} <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </article>
  );
}

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">Beyond the Coursework</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Achievements & Activities</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent-purple" /> Technical Achievements
            </h3>
            <div className="space-y-4">
              {achievementsData.map((item) => <HighlightCard key={item.title} item={item} Icon={Trophy} />)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent-purple" /> Co-curricular Activities
            </h3>
            <div className="space-y-4">
              {activitiesData.map((item) => <HighlightCard key={item.title} item={item} Icon={Users} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { Trophy, Medal, Award, CheckCircle } from 'lucide-react';

const getResultIcon = (result: string) => {
  if (result.includes('Gold')) return <Trophy className="text-yellow-500" size={24} />;
  if (result.includes('Silver')) return <Medal className="text-gray-400" size={24} />;
  if (result.includes('Bronze')) return <Award className="text-amber-600" size={24} />;
  return <CheckCircle className="text-accent-blue" size={24} />;
};

export function AchievementsSection() {
  const { achievements } = studentData;

  return (
    <section className="py-24 relative bg-gray-50/50 dark:bg-[#080d1a]" id="achievements">
      <div className="max-w-4xl mx-auto px-5 sm:px-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Achievements
          </h2>
          <p className="text-gray-600 dark:text-text-muted text-lg">
            A timeline of competition results and awards.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue/50 via-accent-purple/50 to-transparent transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-8">
            {achievements.map((item, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className={`relative flex flex-col sm:flex-row items-start sm:items-center ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''} gap-6 md:gap-12`}>
                  
                  {/* Center Dot */}
                  <div className="hidden sm:flex absolute left-[28px] md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-dark-base bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                    <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent ${idx % 2 === 0 ? 'hidden md:block -left-4 border-r-8 border-r-white dark:border-r-dark-card' : 'hidden md:block -right-4 border-l-8 border-l-white dark:border-l-dark-card'}`}></div>
                      
                      <div className={`flex items-center gap-4 mb-3 ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        <div className="p-2 rounded-xl bg-gray-50 dark:bg-[#060B14] shadow-inner">
                          {getResultIcon(item.result)}
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white text-lg">
                          {item.result.replace(/[🥇🥈🥉]/g, '').trim()}
                        </span>
                      </div>
                      <h3 className="text-gray-600 dark:text-text-secondary font-medium leading-relaxed">
                        {item.competition}
                      </h3>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

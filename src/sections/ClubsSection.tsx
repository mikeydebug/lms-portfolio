import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { Calculator, FunctionSquare, Code, Mic, Microscope, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator size={24} />,
  FunctionSquare: <FunctionSquare size={24} />,
  Code: <Code size={24} />,
  Mic: <Mic size={24} />,
  Microscope: <Microscope size={24} />,
};

export function ClubsSection() {
  const { clubs } = studentData;

  return (
    <section className="py-24 relative overflow-hidden" id="clubs">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-accent-blue/10 rounded-full mb-4">
            <Star className="text-accent-blue" size={20} />
          </div>
          <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            GEMMA Clubs
          </h2>
          <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl mx-auto">
            Active participation in specialized clubs to foster innovation, critical thinking, and collaborative skills.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, idx) => (
            <FadeIn key={club.name} delay={0.1 * idx}>
              <div className="group h-full bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 dark:from-accent-blue/20 dark:to-accent-purple/20 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {iconMap[club.icon] || <Star size={24} />}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {club.name}
                </h3>
                
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-[#060B14] rounded-full text-xs font-medium text-gray-600 dark:text-text-muted mb-4 border border-gray-200 dark:border-dark-border">
                  {club.duration}
                </div>
                
                <p className="text-gray-700 dark:text-text-secondary leading-relaxed">
                  {club.highlight}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

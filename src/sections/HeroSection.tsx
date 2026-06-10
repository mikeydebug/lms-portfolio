import { FadeIn } from '../components/FadeIn';
import { SplineScene } from '../components/ui/splite';
import { FileText, Award } from 'lucide-react';
import { studentData } from '../data/student';
import { Counter } from '../components/Counter';

export function HeroSection() {
  const scrollToAchievements = () => {
    document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col px-5 sm:px-10 overflow-hidden" id="hero">
      {/* 3D Robot Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end pointer-events-auto cursor-grab active:cursor-grabbing">
        <div className="w-full md:w-[60%] h-full opacity-30 md:opacity-100 transition-opacity duration-300">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-start relative z-10 w-full max-w-7xl mx-auto pt-24 pb-20 pointer-events-none">
        <div className="max-w-2xl text-left bg-white/40 dark:bg-dark-base/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 sm:p-10 md:p-0 rounded-3xl md:rounded-none border border-white/20 md:border-transparent">
          <FadeIn delay={0.1} y={-20} className="mb-6 flex flex-col items-start">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-accent-blue/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 pointer-events-auto">
              <img src={studentData.profile.photo} alt={studentData.profile.name} className="w-full h-full object-cover" />
            </div>
            <div className="px-4 py-1.5 rounded-full border border-accent-blue/40 bg-accent-blue/10 text-accent-cyan text-xs sm:text-sm font-medium tracking-wide animate-pulse-glow">
              {studentData.profile.tagline}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="w-full relative">
            <h1 className="hero-heading font-grotesk font-black uppercase tracking-tight leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[100px] mb-4">
              {studentData.profile.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="mt-4">
            <p className="text-gray-900 dark:text-text-muted font-light text-base sm:text-lg md:text-xl tracking-wide leading-relaxed">
              {studentData.profile.shortIntro}
            </p>
          </FadeIn>
          
          {/* CTA Buttons */}
          <FadeIn delay={0.4} y={20} className="mt-10 flex flex-col sm:flex-row gap-4 items-start pointer-events-auto">
            <button 
              onClick={scrollToAchievements}
              className="flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)] w-full sm:w-auto"
            >
              <Award size={18} />
              View Achievements
            </button>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Stats Bar */}
      <FadeIn delay={0.6} y={40} className="w-full max-w-5xl mx-auto pb-8 md:pb-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/60 dark:bg-[#0a0f1e]/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-full p-6 sm:px-10 shadow-xl">
          {studentData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-grotesk text-gray-900 dark:text-white flex items-center">
                <Counter value={stat.value} suffix={stat.suffix} className="text-accent-blue" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-text-muted mt-1 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

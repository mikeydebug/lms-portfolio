import { AnimatedText } from '../components/AnimatedText';
import { TerminalCard } from '../components/TerminalCard';
import { FadeIn } from '../components/FadeIn';
import { SparklesCore } from '../components/ui/sparkles';

export function AboutSection() {
  const aboutText = "I'm a Computer Science undergrad at IIIT Raichur with a passion for building scalable web applications. I work with the MERN stack and love shipping products that actually solve problems. Beyond code, I lead teams — as PR Head of E-Cell and Video Team Lead, I've delivered high-impact digital content and cross-functional campaigns. I also hit the gym because clean code and clean lifts go hand in hand. Let's build something legendary.";

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-dark-base px-5 sm:px-10 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-about"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#3B82F6"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 items-center relative z-10">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col">
          <FadeIn>
            <div className="text-accent-blue font-mono text-sm uppercase tracking-widest mb-4">
              // about_me
            </div>
            <h2 className="hero-heading font-grotesk font-black text-[clamp(3rem,10vw,100px)] leading-none mb-8">
              About Me
            </h2>
          </FadeIn>
          
          <div className="text-text-secondary font-medium max-w-[520px] text-[clamp(1rem,1.8vw,1.3rem)] leading-relaxed mb-12">
            <AnimatedText text={aboutText} />
          </div>

          <FadeIn delay={0.2} className="flex gap-12">
            <div>
              <div className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-2">37+</div>
              <div className="text-text-darker text-sm uppercase tracking-widest font-medium">GitHub Repos</div>
            </div>
            <div>
              <div className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-2">3+</div>
              <div className="text-text-darker text-sm uppercase tracking-widest font-medium">Leadership Roles</div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 hidden md:block">
          <FadeIn x={30} y={0} delay={0.3} className="h-full w-full">
            <TerminalCard />
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}

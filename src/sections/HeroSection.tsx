import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { SplineScene } from '../components/ui/splite';
import { GitBranch, GraduationCap, Code2 } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col px-5 sm:px-10 overflow-hidden" id="hero">
      {/* 3D Robot Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 mix-blend-screen pointer-events-auto cursor-grab active:cursor-grabbing">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full max-w-7xl mx-auto py-8 flex justify-between items-center z-20 relative">
        <nav className="hidden md:flex gap-8">
          {['About', 'Stack', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#94A3B8] font-medium uppercase tracking-wider text-sm transition-colors duration-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        {/* Mobile basic nav */}
        <div className="md:hidden text-white font-bold text-xl tracking-wider">MAYANK</div>
        
        <ContactButton className="animate-pulse-glow" onClick={scrollToContact}>
          Hire Me
        </ContactButton>
      </FadeIn>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-7xl mx-auto pointer-events-none">
        <FadeIn delay={0.1} y={-10}>
          <div className="mb-6 px-4 py-1.5 rounded-full border border-accent-blue/40 bg-accent-blue/10 text-accent-cyan text-xs font-medium tracking-wide animate-pulse-glow">
            ⚡ Available for Internships & Projects
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={40} className="text-center w-full relative px-4">
          <h1 className="hero-heading font-grotesk font-black uppercase tracking-tight leading-none text-[15vw] sm:text-[12vw] md:text-[9vw] lg:text-[110px]">
            Hi, I'm Mayank
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mt-4">
          <p className="text-text-muted font-light text-xl md:text-2xl tracking-wide text-center">
            Full Stack Developer & CS Undergrad
          </p>
        </FadeIn>
      </div>

      {/* Floating Chips */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <FadeIn delay={0.5} y={30} className="absolute top-[30%] left-[10%] animate-float-1">
          <div className="flex items-center gap-2 bg-dark-card border border-dark-border text-text-muted rounded-full px-4 py-2 text-sm shadow-xl">
            <GitBranch size={16} className="text-accent-blue" />
            37 Repos
          </div>
        </FadeIn>
        
        <FadeIn delay={0.6} y={30} className="absolute top-[20%] right-[15%] animate-float-2">
          <div className="flex items-center gap-2 bg-dark-card border border-dark-border text-text-muted rounded-full px-4 py-2 text-sm shadow-xl">
            <GraduationCap size={16} className="text-accent-pink" />
            IIIT Raichur
          </div>
        </FadeIn>

        <FadeIn delay={0.7} y={30} className="absolute bottom-[40%] right-[10%] animate-float-3">
          <div className="flex items-center gap-2 bg-dark-card border border-dark-border text-text-muted rounded-full px-4 py-2 text-sm shadow-xl">
            <Code2 size={16} className="text-accent-cyan" />
            MERN Stack
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <FadeIn delay={0.4} y={20} className="w-full max-w-7xl mx-auto pb-8 md:pb-12 flex justify-between items-end z-20">
        <div>
          <p className="text-text-darker text-sm uppercase tracking-widest mb-1">
            MERN Stack · React · Node.js · MongoDB
          </p>
          <p className="text-[#475569] text-xs tracking-wider">
            PR Head @ E-Cell · Video Lead @ IIIT Raichur
          </p>
        </div>
        <div className="hidden sm:block">
          <ContactButton onClick={scrollToContact}>Let's Talk</ContactButton>
        </div>
      </FadeIn>
    </section>
  );
}

import { Mail, Github, Linkedin } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { SparklesCore } from '../components/ui/sparkles';

export function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('cs24b1031@iiitr.ac.in');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="bg-dark-base py-32 px-5 flex flex-col items-center text-center relative z-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-contact"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#3B82F6"
        />
      </div>
      
      <FadeIn y={20} className="relative z-10">
        <div className="text-accent-blue font-mono text-sm uppercase tracking-widest mb-4">
          // let's_connect
        </div>
        <h2 className="hero-heading font-grotesk font-black text-[clamp(3rem,12vw,120px)] leading-none mb-8">
          Get In Touch
        </h2>
      </FadeIn>

      <div className="text-text-muted max-w-[500px] text-lg leading-relaxed mb-16 relative z-10">
        <AnimatedText text="I'm currently looking for internship opportunities and open to freelance projects. Whether you have a cool idea, a team that needs a developer, or just want to talk tech — my inbox is always open." />
      </div>

      <FadeIn delay={0.2} y={30} className="flex flex-col sm:flex-row gap-4 mb-16 relative z-10">
        <button 
          onClick={handleCopyEmail}
          className="group flex flex-col gap-2 items-center bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-accent-blue/50 w-40"
        >
          <Mail className="text-accent-blue mb-2 group-hover:scale-110 transition-transform" size={32} />
          <span className="text-white font-medium">Email</span>
          <span className="text-text-darker text-xs">Copy to clipboard</span>
        </button>

        <a 
          href="https://github.com/mikeydebug" 
          target="_blank" 
          rel="noreferrer"
          className="group flex flex-col gap-2 items-center bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-accent-blue/50 w-40"
        >
          <Github className="text-white mb-2 group-hover:scale-110 transition-transform" size={32} />
          <span className="text-white font-medium">GitHub</span>
          <span className="text-text-darker text-xs">mikeydebug</span>
        </a>

        <a 
          href="https://linkedin.com/in/mayank-soni-2580a9337" 
          target="_blank" 
          rel="noreferrer"
          className="group flex flex-col gap-2 items-center bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-accent-blue/50 w-40"
        >
          <Linkedin className="text-accent-cyan mb-2 group-hover:scale-110 transition-transform" size={32} />
          <span className="text-white font-medium">LinkedIn</span>
          <span className="text-text-darker text-xs">Mayank Soni</span>
        </a>
      </FadeIn>

      <FadeIn delay={0.3} y={20} className="relative z-10">
        <a href="mailto:cs24b1031@iiitr.ac.in">
          <ContactButton>Say Hello</ContactButton>
        </a>
      </FadeIn>

      <FadeIn delay={0.4} y={10} className="pt-24 mt-12 border-t border-dark-border/30 w-full max-w-4xl text-center relative z-20">
        <p className="text-text-darker text-sm">
          Built with React & ☕ by Mayank Soni · @mikeydebug
        </p>
      </FadeIn>
    </section>
  );
}

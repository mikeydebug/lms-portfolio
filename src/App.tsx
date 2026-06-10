import { HeroSection } from './sections/HeroSection';
import { SkillsMarqueeSection } from './sections/SkillsMarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { TopSkillsSection } from './sections/TopSkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { StackSection } from './sections/StackSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CinematicFooter } from './components/ui/motion-footer';

function App() {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-white font-sans selection:bg-accent-blue/30 selection:text-white">
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index and minimum height to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full bg-dark-base border-b border-dark-border/50 shadow-2xl rounded-b-[40px] md:rounded-b-[60px] pb-10">
        <HeroSection />
        <SkillsMarqueeSection />
        <AboutSection />
        <TopSkillsSection />
        <ExperienceSection />
        <StackSection />
        <ProjectsSection />
        <TestimonialsSection />
      </main>

      <div id="contact">
        <CinematicFooter />
      </div>
    </div>
  );
}

export default App;

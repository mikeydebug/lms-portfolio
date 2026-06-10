import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { AcademicsSection } from './sections/AcademicsSection';
import { ClubsSection } from './sections/ClubsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { SkillsSection } from './sections/SkillsSection';
import { BlogSection } from './sections/BlogSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { SparklesCore } from './components/ui/sparkles';

function App() {
  return (
    <div className="bg-white dark:bg-dark-base min-h-screen text-gray-900 dark:text-white font-sans selection:bg-accent-blue/30 selection:text-white transition-colors duration-300 relative">
      {/* GLOBAL 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={60}
          className="w-full h-full opacity-50 dark:opacity-100"
          particleColor="#3B82F6"
          speed={2}
        />
      </div>

      <Navbar />
      
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index and minimum height to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full bg-white/80 dark:bg-dark-base/80 backdrop-blur-sm border-b border-gray-200 dark:border-dark-border/50 shadow-2xl rounded-b-[40px] md:rounded-b-[60px]">
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <ClubsSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificatesSection />
        <SkillsSection />
        <BlogSection />
        <TestimonialsSection />
      </main>

      <ContactSection />
    </div>
  );
}

export default App;

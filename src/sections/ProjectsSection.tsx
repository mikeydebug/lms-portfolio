import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

const PROJECTS = [
  {
    num: "01",
    title: "Crowd Management System",
    category: "Full Stack",
    desc: "A comprehensive system designed to manage and monitor large crowds effectively, ensuring safety and order using data analytics and real-time tracking.",
    stack: "React · Node.js · MongoDB",
    github: "https://github.com/Kartavya2906/Crowd_Management_System",
    live: "https://crowdbuddy.vercel.app/",
    image: "/projects/crowdbuddy.png",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    num: "02",
    title: "StayNest",
    category: "Web App",
    desc: "A modern platform for finding and booking accommodations, featuring dynamic search, user authentication, and seamless booking flows.",
    stack: "React · Tailwind CSS · MongoDB",
    github: "https://github.com/mikeydebug/StayNest",
    image: "/projects/staynest.png",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    num: "03",
    title: "Employees Management System",
    category: "Full Stack",
    desc: "An enterprise-grade dashboard to manage employee records, attendance, and payroll with secure role-based access.",
    stack: "MERN Stack · Express",
    github: "https://github.com/mikeydebug/Employees-Management-System",
    live: "https://employees-management-system-demo.vercel.app",
    image: "/projects/empoyee managemerntsystem.png",
    color: "from-cyan-500/20 to-teal-500/20"
  },
  {
    num: "04",
    title: "Interior Design Website",
    category: "Frontend",
    desc: "A visually stunning portfolio website for an interior design agency, highlighting high-quality images with smooth scroll animations.",
    stack: "HTML · Tailwind CSS · JS",
    github: "https://github.com/mikeydebug/Interior-Design-website",
    live: "https://interior-design-website-smoky-nine.vercel.app",
    image: "/projects/interir-design.png",
    color: "from-amber-500/20 to-orange-500/20"
  }
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  total: number;
  progress: any;
}

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  // calculate the scale of the card based on how far it's been scrolled over
  // When this card is stuck at the top and the user continues to scroll, it scales down slightly
  const targetScale = 1 - (total - index) * 0.03;
  
  // The progress range for this specific card
  const range = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${index * 30}px)` }}
        className="w-full max-w-5xl rounded-[50px] border-2 border-dark-border bg-dark-terminal p-6 md:p-8 relative overflow-hidden"
      >
        <div className="flex flex-col h-full gap-8">
          
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="font-grotesk font-black hero-heading text-5xl md:text-6xl">{project.num}</span>
                <span className="px-4 py-1.5 rounded-full border border-dark-border bg-dark-base text-text-secondary text-xs uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <h3 className="font-grotesk font-bold text-3xl md:text-4xl text-white">
                {project.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-dark-border hover:border-accent-blue/50 text-text-secondary hover:text-white transition-all bg-dark-base w-max text-sm"
              >
                GitHub 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              {/* @ts-ignore */}
              {project.live && (
                <a 
                  // @ts-ignore
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-blue/50 hover:border-accent-cyan bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-cyan transition-all w-max text-sm"
                >
                  Live Demo
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Bottom Area / Image Placeholder */}
          <div className={`w-full h-[clamp(200px,30vw,400px)] rounded-[30px] bg-gradient-to-br ${project.color} border border-dark-border relative flex items-center justify-center overflow-hidden`}>
            {/* @ts-ignore */}
            {project.image ? (
              // @ts-ignore
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" />
            ) : (
              <>
                <div className="absolute inset-0 bg-dark-base/50 backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
                  <div className="text-white/40 font-mono text-sm uppercase tracking-widest">Project Preview</div>
                  <div className="px-4 py-2 rounded-full bg-dark-card/80 border border-dark-border/50 text-accent-cyan text-sm font-medium backdrop-blur-md">
                    {project.stack}
                  </div>
                </div>
              </>
            )}
          </div>

          <p className="text-text-darker text-sm md:text-base leading-relaxed">
            {project.desc}
          </p>

        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-dark-base rounded-t-[50px] -mt-10 relative z-20 pt-24 pb-10">
      <FadeIn y={20} className="text-center px-5 mb-12">
        <div className="text-accent-blue font-mono text-sm uppercase tracking-widest mb-4">
          // featured_projects
        </div>
        <h2 className="hero-heading font-grotesk font-black text-[clamp(3rem,12vw,140px)] leading-none">
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative px-5 md:px-10 pb-32" style={{ height: `${PROJECTS.length * 100}vh` }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard 
            key={project.num}
            index={i}
            project={project}
            progress={scrollYProgress}
            total={PROJECTS.length}
          />
        ))}
      </div>

      <FadeIn y={20} delay={0.2} className="flex justify-center pb-20 pt-10">
        <a 
          href="https://github.com/mikeydebug" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center gap-3 px-8 py-4 rounded-full bg-dark-card border border-dark-border hover:border-accent-blue/50 text-white font-bold transition-all shadow-xl hover:shadow-accent-blue/20"
        >
          View All Projects
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </FadeIn>
    </section>
  );
}

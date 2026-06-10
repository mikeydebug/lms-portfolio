import { PixelCanvas } from '../components/ui/pixel-logo-grid';
import { FadeIn } from '../components/FadeIn';
import { Code2, Database, Terminal, FileCode2, Layout, Server, Globe, GitBranch, Container, Cpu, FileJson, DatabaseBackup, Flame, Cloud, Command, Network } from 'lucide-react';
import { SparklesCore } from '../components/ui/sparkles';

const TOP_SKILLS = [
  {
    name: "React",
    icon: Code2,
    colors: ["#61DAFB", "#00D8FF", "#38BDF8"]
  },
  {
    name: "Node.js",
    icon: Server,
    colors: ["#339933", "#43853D", "#68A063"]
  },
  {
    name: "MongoDB",
    icon: Database,
    colors: ["#47A248", "#4DB33D", "#3FA037"]
  },
  {
    name: "TypeScript",
    icon: FileCode2,
    colors: ["#3178C6", "#2D79C7", "#007ACC"]
  },
  {
    name: "Tailwind CSS",
    icon: Layout,
    colors: ["#38B2AC", "#06B6D4", "#0EA5E9"]
  },
  {
    name: "Express.js",
    icon: Terminal,
    colors: ["#ffffff", "#cccccc", "#999999"]
  },
  {
    name: "Next.js",
    icon: Globe,
    colors: ["#ffffff", "#e5e5e5", "#a3a3a3"]
  },
  {
    name: "PostgreSQL",
    icon: DatabaseBackup,
    colors: ["#336791", "#4180B1", "#5294C4"]
  },
  {
    name: "Docker",
    icon: Container,
    colors: ["#2496ED", "#1D82D3", "#126BBA"]
  },
  {
    name: "Git",
    icon: GitBranch,
    colors: ["#F05032", "#E04225", "#C9361B"]
  },
  {
    name: "Python",
    icon: FileJson,
    colors: ["#3776AB", "#FFD343", "#4B8BBE"]
  },
  {
    name: "C++",
    icon: Cpu,
    colors: ["#00599C", "#004B87", "#0069B3"]
  },
  {
    name: "Firebase",
    icon: Flame,
    colors: ["#FFCA28", "#FFA000", "#F57C00"]
  },
  {
    name: "AWS",
    icon: Cloud,
    colors: ["#FF9900", "#F28100", "#E47700"]
  },
  {
    name: "Linux",
    icon: Command,
    colors: ["#FCC624", "#E5B01A", "#CC9A0F"]
  },
  {
    name: "GraphQL",
    icon: Network,
    colors: ["#E10098", "#C70087", "#AD0075"]
  }
];

export function TopSkillsSection() {
  return (
    <section className="bg-dark-terminal relative z-10 py-32 px-5 border-y border-dark-border/50">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <SparklesCore
          id="tsparticles-topskills"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#38BDF8"
        />
      </div>

      <div className="max-w-6xl relative z-10 mx-auto">
        <FadeIn y={20} className="text-center mb-16">
          <div className="text-accent-blue font-mono text-sm uppercase tracking-widest mb-4">
            // core_competencies
          </div>
          <h2 className="hero-heading font-grotesk font-black text-[clamp(2.5rem,8vw,80px)] leading-none mt-2">
            My Top Skills
          </h2>
          <p className="mt-6 text-text-muted text-lg max-w-xl mx-auto">
            These are the core technologies I use to build scalable web applications. Hover over them to see the magic.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {TOP_SKILLS.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <div className="group relative w-full aspect-[4/3] rounded-[24px] bg-dark-card border border-dark-border overflow-hidden flex flex-col items-center justify-center cursor-pointer">
                {/* The PixelCanvas handles the hover effect internally based on the parent card's mouseenter event */}
                <PixelCanvas colors={skill.colors} gap={5} speed={35} />
                
                <div className="relative z-10 flex flex-col items-center gap-3 transition-transform duration-300 group-hover:-translate-y-2">
                  <skill.icon 
                    size={36} 
                    className="text-text-muted group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                  <span className="font-grotesk font-bold text-base md:text-lg text-white tracking-wide">
                    {skill.name}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '../components/FadeIn';
import { SparklesCore } from '../components/ui/sparkles';

const STACK_DATA = [
  {
    num: "01",
    category: "Frontend",
    tech: "React, React Native, JavaScript, TypeScript, Tailwind CSS, HTML/CSS"
  },
  {
    num: "02",
    category: "Backend",
    tech: "Node.js, Express.js, REST APIs, FastAPI, Python"
  },
  {
    num: "03",
    category: "Database",
    tech: "MongoDB, Firebase"
  },
  {
    num: "04",
    category: "Tools & DevOps",
    tech: "Git, GitHub, Postman, Vercel, GitHub Actions, Nodemon"
  },
  {
    num: "05",
    category: "Creative Suite",
    tech: "Adobe Photoshop, Premiere Pro, After Effects, Lightroom, Canva"
  },
  {
    num: "06",
    category: "CS Core",
    tech: "Data Structures & Algorithms, C, C++, NumPy, PowerShell"
  }
];

export function StackSection() {
  return (
    <section id="stack" className="bg-dark-terminal rounded-t-[50px] -mt-10 relative z-10 py-24 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-stack"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#8B5CF6"
        />
      </div>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <FadeIn y={20}>
          <div className="text-accent-blue font-mono text-sm uppercase tracking-widest mb-4 text-center">
            // tech_stack
          </div>
          <h2 className="hero-heading font-grotesk font-black text-[clamp(3rem,12vw,140px)] leading-none text-center mb-16">
            My Stack
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {STACK_DATA.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.08} y={30} className="h-full">
              <div className="group h-full bg-dark-base border border-dark-border rounded-3xl p-6 md:p-8 transition-all duration-300 hover:border-accent-blue/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] flex flex-col justify-between">
                <div>
                  <div className="font-grotesk font-black hero-heading text-[clamp(2.5rem,6vw,5rem)] leading-none mb-2">
                    {item.num}
                  </div>
                  <div className="text-white font-semibold text-xl mb-4">
                    {item.category}
                  </div>
                </div>
                <div className="text-text-darker font-light text-sm leading-relaxed">
                  {item.tech}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

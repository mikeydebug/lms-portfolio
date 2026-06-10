import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ROW_1 = [
  "React", "Node.js", "MongoDB", "Express.js", "JavaScript", 
  "TypeScript", "Tailwind CSS", "Python", "C++", "REST APIs", 
  "Firebase", "Vercel"
];

const ROW_2 = [
  "Git", "GitHub", "Postman", "Adobe Photoshop", "Adobe Premiere Pro", 
  "After Effects", "Canva", "React Native", "FastAPI", "NumPy", 
  "Bootstrap", "React Query"
];

// Tripled content for seamless loop
const ROW_1_TRIPLED = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_TRIPLED = [...ROW_2, ...ROW_2, ...ROW_2];

export function SkillsMarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400 });

  // Map progress to X translation
  const x1 = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);
  const x2 = useTransform(smoothProgress, [0, 1], ['-50%', '0%']);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 pb-10 overflow-hidden relative w-full flex flex-col gap-6"
    >
      {/* Row 1: Scrolls Left */}
      <div className="relative w-[300vw] sm:w-[200vw] lg:w-[150vw]">
        <motion.div 
          style={{ x: x1, willChange: 'transform' }} 
          className="flex gap-4 sm:gap-6"
        >
          {ROW_1_TRIPLED.map((skill, index) => (
            <div 
              key={`${skill}-${index}`}
              className="whitespace-nowrap rounded-xl bg-dark-card border border-dark-border px-6 py-4 flex gap-3 items-center text-text-muted font-medium text-lg flex-shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent-blue/80"></div>
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Scrolls Right */}
      <div className="relative w-[300vw] sm:w-[200vw] lg:w-[150vw] -left-[100vw] sm:-left-[50vw]">
        <motion.div 
          style={{ x: x2, willChange: 'transform' }} 
          className="flex gap-4 sm:gap-6"
        >
          {ROW_2_TRIPLED.map((skill, index) => (
            <div 
              key={`${skill}-${index}`}
              className="whitespace-nowrap rounded-xl bg-dark-card border border-dark-border px-6 py-4 flex gap-3 items-center text-text-muted font-medium text-lg flex-shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent-purple/80"></div>
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

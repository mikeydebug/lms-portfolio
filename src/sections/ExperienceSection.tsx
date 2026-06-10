"use client";

import { GraduationCap, Users, Video, Code2 } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { FadeIn } from "../components/FadeIn";
import { SparklesCore } from "../components/ui/sparkles";

const timelineData = [
  {
    id: 1,
    title: "CS Undergrad",
    date: "2024 - Present",
    content: "Pursuing B.Tech in Computer Science at IIIT Raichur. Building a strong foundation in algorithms and software engineering.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2, 3, 4],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    date: "2023 - Present",
    content: "Developing scalable full-stack web applications. Built 'Dev Dashboard', 'Affirmo', and multiple freelance projects.",
    category: "Development",
    icon: Code2,
    relatedIds: [1],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "PR Head @ E-Cell",
    date: "2024 - Present",
    content: "Leading cross-functional campaigns, managing public relations, and driving digital outreach for IIIT Raichur's Entrepreneurship Cell.",
    category: "Leadership",
    icon: Users,
    relatedIds: [1],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Video Team Lead",
    date: "2024 - Present",
    content: "Delivering high-impact digital content, managing the creative pipeline, and leading a team of video editors at IIIT Raichur.",
    category: "Creative",
    icon: Video,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 80,
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-dark-terminal relative z-20 py-32 px-5 border-t border-dark-border/30 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <SparklesCore
          id="tsparticles-experience"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#3B82F6"
        />
      </div>

      <div className="max-w-6xl relative z-10 mx-auto">
        <FadeIn y={20} className="text-center mb-16">
          <div className="text-accent-blue font-mono text-sm uppercase tracking-widest mb-4">
            // experience
          </div>
          <h2 className="hero-heading font-grotesk font-black text-[clamp(2.5rem,8vw,80px)] leading-none mt-2">
            My Journey
          </h2>
          <p className="mt-6 text-text-muted text-lg max-w-xl mx-auto">
            A timeline of my education, leadership roles, and developer journey.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full flex justify-center">
          <div className="w-full max-w-4xl text-slate-100">
            {/* Using standard Tailwind dark mode text classes in case the component has light defaults */}
            <div className="dark">
              <RadialOrbitalTimeline timelineData={timelineData} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

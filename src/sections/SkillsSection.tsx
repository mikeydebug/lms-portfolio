import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { BookOpen, Monitor, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const { skills } = studentData;

  const skillCategories = [
    {
      title: "Academic Skills",
      icon: <BookOpen className="text-accent-purple" size={24} />,
      items: skills.academic,
      color: "from-accent-purple/20 to-accent-blue/10",
      borderColor: "border-accent-purple/20"
    },
    {
      title: "Technical Skills",
      icon: <Monitor className="text-accent-cyan" size={24} />,
      items: skills.technical,
      color: "from-accent-cyan/20 to-accent-blue/10",
      borderColor: "border-accent-cyan/20"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-accent-pink" size={24} />,
      items: skills.soft,
      color: "from-accent-pink/20 to-accent-purple/10",
      borderColor: "border-accent-pink/20"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Skills & Abilities
          </h2>
          <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl mx-auto">
            A comprehensive overview of my capabilities across different domains.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.title} delay={0.1 * idx} className="h-full">
              <div className={`h-full bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl p-8 shadow-sm hover:shadow-xl dark:shadow-none transition-shadow relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`p-3 rounded-2xl bg-gray-50 dark:bg-[#060B14] border ${category.borderColor} shadow-inner`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-grotesk text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                  {category.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.1) + (skillIdx * 0.1), duration: 0.3 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/10 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue opacity-70"></div>
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

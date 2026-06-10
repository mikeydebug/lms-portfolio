import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { ExternalLink, Github, Code2, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const getProjectIcon = (type: string) => {
  if (type.includes('Science') || type.includes('IoT')) return <Cpu className="text-accent-cyan" size={24} />;
  if (type.includes('Web')) return <Globe className="text-accent-blue" size={24} />;
  return <Code2 className="text-accent-pink" size={24} />;
};

export function ProjectsSection() {
  const { projects } = studentData;

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dark-base pointer-events-none -z-20 hidden dark:block" />
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] flex-1 bg-gradient-to-l from-accent-blue/50 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight text-center">
              Project Showcase
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent-blue/50 to-transparent"></div>
          </div>
          <p className="text-center text-gray-600 dark:text-text-muted text-lg">
            A collection of my recent academic and personal projects.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} className="h-full">
              <div className="group h-full flex flex-col bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-dark-border rounded-3xl overflow-hidden hover:border-accent-blue/50 transition-colors duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
                
                {/* Visual Header / Placeholder for project image */}
                <div className="h-48 w-full bg-gray-100 dark:bg-[#060B14] border-b border-gray-200 dark:border-dark-border relative overflow-hidden flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-[#0a101d] transition-colors">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="p-4 rounded-full bg-white dark:bg-dark-card shadow-lg dark:shadow-none"
                  >
                     {getProjectIcon(project.type)}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-1">
                        {project.type}
                      </div>
                      <h3 className="text-xl font-bold font-grotesk text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                    <a 
                      href={project.demoLink} 
                      className="flex-1 flex justify-center items-center gap-2 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 text-white dark:text-white transition-colors text-sm font-medium"
                      onClick={(e) => e.preventDefault()} // dummy
                    >
                      <Globe size={16} /> Live Demo
                    </a>
                    <a 
                      href={project.detailsLink} 
                      className="flex-1 flex justify-center items-center gap-2 py-2 rounded-xl border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 transition-colors text-sm font-medium"
                      onClick={(e) => e.preventDefault()} // dummy
                    >
                      <ExternalLink size={16} /> Details
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

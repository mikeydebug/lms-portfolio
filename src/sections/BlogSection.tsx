import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { ArrowRight, Clock, Calendar as CalendarIcon } from 'lucide-react';

export function BlogSection() {
  const { blogs } = studentData;

  return (
    <section className="py-24 relative bg-gray-50/50 dark:bg-[#080d1a]" id="blog">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
              Student Blog
            </h2>
            <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl">
              Thoughts, reflections, and experiences from my academic journey.
            </p>
          </div>
          <button className="text-accent-blue font-medium hover:text-accent-blue/80 transition-colors flex items-center gap-2 group">
            View All Posts <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} className="h-full">
              <div className="group h-full flex flex-col bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer">
                
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-text-muted mb-4">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon size={14} className="text-accent-blue" />
                    {blog.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-dark-border"></div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-accent-purple" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-grotesk text-gray-900 dark:text-white mb-3 group-hover:text-accent-blue transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-text-secondary leading-relaxed flex-1 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-100 dark:border-dark-border mt-auto flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors">
                  Read Full Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

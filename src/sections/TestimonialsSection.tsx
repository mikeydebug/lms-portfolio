import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { testimonials } = studentData;

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl mx-auto">
            Feedback from my teachers and family.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl p-8 relative shadow-sm hover:shadow-xl dark:shadow-none transition-shadow h-full flex flex-col">
                <Quote className="absolute top-6 right-6 text-gray-100 dark:text-white/5" size={60} />
                
                <p className="text-gray-700 dark:text-text-secondary text-lg leading-relaxed relative z-10 italic mb-8 flex-1">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full bg-gray-100 dark:bg-dark-base border-2 border-gray-200 dark:border-dark-border"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white font-grotesk text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-accent-blue text-sm font-medium">
                      {testimonial.role}
                    </p>
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

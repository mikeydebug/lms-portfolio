import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { Mail, Linkedin, Instagram, Twitter, Send } from 'lucide-react';
import { CinematicFooter } from '../components/ui/motion-footer';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ];

  return (
    <>
      <section className="py-24 relative bg-gray-50/50 dark:bg-[#060B14]" id="contact">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl mx-auto">
              Feel free to reach out for collaborations, questions, or just a friendly hello.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeIn delay={0.1}>
              <div className="h-full flex flex-col justify-center gap-8">
                <div>
                  <h3 className="text-2xl font-bold font-grotesk text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-text-secondary hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
                    <div className="p-3 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl group-hover:border-accent-blue/50 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <a href={`mailto:${studentData.profile.email}`} className="text-lg font-medium">
                      {studentData.profile.email}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-grotesk text-gray-900 dark:text-white mb-4">Follow My Journey</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.label}
                        href={link.href}
                        className="p-3 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl text-gray-600 dark:text-text-secondary hover:text-accent-blue dark:hover:text-accent-blue hover:border-accent-blue/50 transition-all shadow-sm hover:-translate-y-1"
                        aria-label={link.label}
                        onClick={(e) => e.preventDefault()}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 rounded-3xl shadow-sm">
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-[#060B14] border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-[#060B14] border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-[#060B14] border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : submitted ? (
                      <span>Message Sent!</span>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* We keep the cinematic footer as requested to maintain aesthetic */}
      <CinematicFooter />
    </>
  );
}

import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { User, Calendar, GraduationCap, MapPin, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
  const { profile } = studentData;

  const infoItems = [
    { icon: <User size={18} />, label: "Name", value: profile.name },
    { icon: <Calendar size={18} />, label: "Date of Birth", value: profile.dob },
    { icon: <GraduationCap size={18} />, label: "Education", value: `${profile.grade}, ${profile.school}` },
    { icon: <MapPin size={18} />, label: "Location", value: profile.city },
    { icon: <Target size={18} />, label: "Career Goal", value: profile.careerAspiration, highlight: true },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50/50 dark:bg-[#060B14]/50 pointer-events-none -z-10" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight">
              About Me
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent-blue/50 to-transparent"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Bio & Details */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl p-8 shadow-sm">
                <p className="text-gray-700 dark:text-text-secondary text-lg leading-relaxed mb-8">
                  {profile.bio}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                  {infoItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-2 rounded-lg ${item.highlight ? 'bg-accent-blue/10 text-accent-blue' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-text-muted mb-1 font-medium tracking-wide uppercase">{item.label}</p>
                        <p className={`text-sm sm:text-base font-medium ${item.highlight ? 'text-accent-blue' : 'text-gray-900 dark:text-white'}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interests & Photo */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent-pink/10 text-accent-pink rounded-lg">
                    <Heart size={20} />
                  </div>
                  <h3 className="text-xl font-bold font-grotesk text-gray-900 dark:text-white">Interests & Hobbies</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {profile.hobbies.map((hobby, idx) => (
                    <motion.div
                      key={hobby}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gray-50 dark:bg-[#060B14] border border-gray-200 dark:border-dark-border rounded-full text-sm font-medium text-gray-700 dark:text-text-secondary cursor-default shadow-sm hover:shadow-md transition-shadow"
                    >
                      {hobby}
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} className="hidden lg:block relative rounded-3xl overflow-hidden h-48 border border-gray-100 dark:border-dark-border bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                {/* Decorative element replacing another photo, or could just be a quote */}
                <div className="absolute inset-0 bg-white/40 dark:bg-dark-base/40 backdrop-blur-sm"></div>
                <div className="relative z-10 p-6 text-center">
                  <p className="font-grotesk font-bold text-2xl text-gray-900 dark:text-white mb-2">"Aim for the stars"</p>
                  <p className="text-sm text-gray-600 dark:text-text-muted font-medium">- Future Explorer</p>
                </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { motion } from 'framer-motion';

export function AcademicsSection() {
  const { academics } = studentData;

  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (academics.overallPercentage / 100) * circleCircumference;

  return (
    <section className="py-24 relative bg-gray-50/50 dark:bg-[#080d1a]" id="academics">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
                Academic Performance
              </h2>
              <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl">
                A strong foundation in core subjects, reflecting dedication to learning and analytical thinking.
              </p>
            </div>
            
            {/* Overall Percentage Circle */}
            <div className="flex items-center gap-4 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-4 rounded-2xl shadow-sm">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                  <circle
                    className="text-gray-200 dark:text-dark-border"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={circleRadius}
                    cx="70"
                    cy="70"
                  />
                  <motion.circle
                    className="text-accent-blue"
                    strokeWidth="10"
                    strokeDasharray={circleCircumference}
                    initial={{ strokeDashoffset: circleCircumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={circleRadius}
                    cx="70"
                    cy="70"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="font-grotesk font-bold text-2xl text-gray-900 dark:text-white">
                    {academics.overallPercentage}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-text-muted font-medium uppercase tracking-wider">Overall</span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">Percentage</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academics.subjects.map((subject, idx) => (
            <FadeIn key={subject.name} delay={0.1 * idx}>
              <div className="group bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors">
                    {subject.name}
                  </h3>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#060B14] border border-gray-100 dark:border-dark-border flex items-center justify-center text-xl font-bold font-grotesk text-accent-blue shadow-sm">
                    {subject.grade}
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

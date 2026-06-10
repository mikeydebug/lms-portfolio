import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { studentData } from '../data/student';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CertificatesSection() {
  const { certificates } = studentData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 relative bg-gray-50/50 dark:bg-[#060B14]" id="certificates">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Certificates Gallery
          </h2>
          <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-accent-blue to-transparent mb-4"></div>
          <p className="text-gray-600 dark:text-text-muted text-lg max-w-2xl mx-auto">
            A showcase of awards, medals, and participation certificates.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div 
                className="group relative bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-[#0a0f1e] relative">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 text-white">
                      <ExternalLink size={18} />
                      <span className="font-medium text-sm tracking-wide">View Certificate</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1 mb-1" title={cert.name}>
                    {cert.name}
                  </h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-accent-blue font-medium">{cert.issuer}</span>
                    <span className="text-gray-500 dark:text-text-muted bg-gray-100 dark:bg-[#060B14] px-2 py-0.5 rounded-md font-mono text-xs">{cert.year}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged certificate"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Clubs', href: '#clubs' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
];

export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section logic
      const sections = navItems.map((item) => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0a0f1e]/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-gray-200 dark:border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-20 flex items-center justify-between">
        <div className="font-grotesk font-bold text-xl tracking-wider text-gray-900 dark:text-white">
          AARAV<span className="text-accent-blue">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-accent-blue'
                  : 'text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hidden sm:block">
            <ContactButton onClick={() => scrollToSection('#contact')}>
              Contact
            </ContactButton>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0a0f1e] border-b border-gray-200 dark:border-dark-border overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-lg font-medium ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent-blue'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <ContactButton onClick={() => scrollToSection('#contact')} className="w-full justify-center mt-2">
                Contact
              </ContactButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

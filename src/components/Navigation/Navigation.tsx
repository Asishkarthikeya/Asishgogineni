import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navItems, personalInfo } from '../../data/portfolio';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: id === 'home' ? 0 : element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <button 
            className="navbar-brand" 
            onClick={() => scrollTo('home')}
            aria-label={`${personalInfo.name} - Back to top`}
          >
            <img src={personalInfo.avatar} alt="" className="navbar-avatar" />
            <span className="navbar-name">{personalInfo.name}</span>
          </button>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navItems.filter(item => item.id !== 'home').map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <div className="theme-toggle-segmented">
              <button 
                className={`theme-toggle-btn-segment ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
                aria-label="Switch to Light mode"
              >
                <Sun size={14} />
                <span className="theme-toggle-label">Light</span>
              </button>
              <button 
                className={`theme-toggle-btn-segment ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
                aria-label="Switch to Dark mode"
              >
                <Moon size={14} />
                <span className="theme-toggle-label">Dark</span>
              </button>
            </div>
            <button 
              className="nav-contact-btn"
              onClick={() => scrollTo('contact')}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Actions (Theme Toggle & Menu Toggle) */}
          <div className="navbar-actions-mobile">
            <div className="theme-toggle-segmented">
              <button 
                className={`theme-toggle-btn-segment ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
                aria-label="Switch to Light mode"
              >
                <Sun size={14} />
                <span className="theme-toggle-label">Light</span>
              </button>
              <button 
                className={`theme-toggle-btn-segment ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
                aria-label="Switch to Dark mode"
              >
                <Moon size={14} />
                <span className="theme-toggle-label">Dark</span>
              </button>
            </div>
            <button 
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

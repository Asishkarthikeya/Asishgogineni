import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { SplineScene } from '../SplineScene/SplineScene';
import './FloatingRobot.css';

const FloatingRobot = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [robotY, setRobotY] = useState(300);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('robot-voice-muted') !== 'false'; // default to true (muted)
    }
    return true;
  });

  const lastSpokenSectionRef = useRef('');

  // Persist mute state
  useEffect(() => {
    localStorage.setItem('robot-voice-muted', String(isMuted));
  }, [isMuted]);

  // Shadow-piercing watermark removal loop
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cleanWatermarks = () => {
      const robotContainer = document.querySelector('.floating-robot-container');
      if (!robotContainer) return;

      const walk = (node: Node) => {
        if (!node) return;

        if (node instanceof HTMLElement) {
          const tagName = node.tagName.toLowerCase();
          const id = node.id || '';
          const className = typeof node.className === 'string' ? node.className : '';
          const textContent = node.textContent || '';
          const href = node.getAttribute ? (node.getAttribute('href') || '') : '';

          // Target Spline logo/watermark elements
          if (
            tagName === 'a' ||
            id === 'logo' ||
            className.includes('logo') ||
            href.includes('spline.design') ||
            (tagName === 'div' && textContent.includes('Spline'))
          ) {
            node.style.setProperty('display', 'none', 'important');
            node.style.setProperty('opacity', '0', 'important');
            node.style.setProperty('visibility', 'hidden', 'important');
            node.style.setProperty('pointer-events', 'none', 'important');
          }
        }

        // Traverse children in Light DOM
        node.childNodes.forEach(walk);

        // Traverse Shadow DOM if present
        if (node instanceof HTMLElement && node.shadowRoot) {
          walk(node.shadowRoot);
        }
      };

      walk(robotContainer);
    };

    // Run clean interval to handle asynchronous WebGL/Canvas loads
    const interval = setInterval(cleanWatermarks, 200);
    return () => clearInterval(interval);
  }, []);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Load and listen for system voice list updates
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Voice Assistant Speech Synthesis
  useEffect(() => {
    if (isMuted || activeSection === 'home') {
      // Cancel speech if muted or returned to home
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    if (activeSection === lastSpokenSectionRef.current) return;

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();

      let text = '';
      switch (activeSection) {
        case 'about':
          text = "You reached Ashish's about section.";
          break;
        case 'skills':
          text = "You reached Ashish's skills section.";
          break;
        case 'experience':
          text = "You reached Ashish's experience section.";
          break;
        case 'projects':
          text = "You reached Ashish's projects section.";
          break;
        case 'publications':
          text = "You reached Ashish's research section.";
          break;
        case 'contact':
          text = "You reached Ashish's contact section.";
          break;
      }

      if (text && voices.length > 0) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1.05; // Standard, natural pitch
        utterance.rate = 0.95;  // Gentle, calm pacing
        
        // Select a high-quality, calm, and natural-sounding English voice
        const preferredVoices = ['Google US English', 'Samantha', 'Hazel', 'Daniel', 'Zira', 'Karen', 'Tessa', 'Moira', 'Victoria'];
        const selectedVoice = voices.find(v => 
          v.lang.startsWith('en') && 
          preferredVoices.some(name => v.name.toLowerCase().includes(name.toLowerCase()))
        );
        
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

        window.speechSynthesis.speak(utterance);
        lastSpokenSectionRef.current = activeSection;
      }
    }
  }, [activeSection, isMuted, voices]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'publications', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          // Trigger when active section center comes into view
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
      setIsVisible(currentSection !== 'home');

      // Calculate target vertical position relative to viewport
      const activeEl = document.getElementById(currentSection);
      if (activeEl) {
        const titleEl = activeEl.querySelector('.section-title') || activeEl;
        const rect = titleEl.getBoundingClientRect();
        
        // Align the center of the robot with the section header title
        // Clamp Y to prevent going too high (near navbar) or too low (near footer)
        const targetY = Math.max(120, Math.min(window.innerHeight - 340, rect.top + rect.height / 2 - 120));
        setRobotY(targetY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="floating-robot-container"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ 
          y: robotY, 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
          x: isVisible ? 0 : 50
        }}
        transition={{ 
          y: { type: "spring", stiffness: 50, damping: 15, mass: 1 },
          opacity: { duration: 0.4, ease: "easeInOut" },
          scale: { duration: 0.4, ease: "easeInOut" },
          x: { duration: 0.4, ease: "easeInOut" }
        }}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        <div className="robot-wrapper">
          <button 
            className="robot-sound-toggle-floating"
            onClick={() => setIsMuted(prev => !prev)}
            aria-label={isMuted ? "Unmute robot voice" : "Mute robot voice"}
            title={isMuted ? "Unmute robot voice" : "Mute robot voice"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <div className="robot-canvas-container">
            <SplineScene 
              scene={`${import.meta.env.BASE_URL || '/'}scene.splinecode`} 
              className="robot-spline-canvas"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingRobot;

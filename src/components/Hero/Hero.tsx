import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import ParticleField from './ParticleField';
import { personalInfo } from '../../data/portfolio';
import './Hero.css';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="hero-section">
      <ParticleField />
      <div className="container hero-container">
        
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-header">
            <p className="hero-role">Data Scientist · ML Researcher</p>
            <h1 className="hero-title">{personalInfo.name}</h1>
            <div className="hero-divider"></div>
          </div>

          <div className="hero-bio">
            <p className="hero-bio-main">
              M.S. Computer Science · <span className="highlight-text">Georgia State University</span>
            </p>
            <p className="hero-bio-sub">
              Graduate Research Assistant · AI & ML research with a focus on generative AI, NLP, and applied ML systems.
            </p>
          </div>

          <div className="hero-socials">
            {personalInfo.socialLinks.map((link) => {
              let Icon = Github;
              if (link.name === 'LinkedIn') Icon = Linkedin;
              if (link.name === 'Google Scholar') Icon = GraduationCap;
              
              if (link.name !== 'Instagram') {
                return (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              }
              return null;
            })}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="social-icon"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="hero-location">
            <span className="location-text">📍 Atlanta, USA</span>
          </div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <motion.div 
            className="hero-photo-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div style={{ transform: "translateZ(30px)" }}>
              <img 
                src={personalInfo.profilePhoto} 
                alt={personalInfo.name} 
                className="hero-photo"
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

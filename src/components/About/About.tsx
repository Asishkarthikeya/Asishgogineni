import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Award, BookOpen, Quote, Sparkles, Compass } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import './About.css';

const About = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 1.11, 0.81, 0.99] },
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building research-grade ML systems with a focus on real-world impact.</h2>
        </motion.div>

        <motion.div 
          className="about-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* CARD 1: BIO NARRATIVE (7 Columns) */}
          <motion.div 
            className="bento-card bento-bio" 
            variants={cardVariants}
            onMouseMove={handleMouseMove}
          >
            <div className="card-glass-glow" />
            <div className="bento-card-content">
              <div className="card-header-icon-row">
                <Sparkles className="card-icon accent-glow" size={20} />
                <span className="card-tag">Biography</span>
              </div>
              <h3 className="card-heading">Data Scientist & ML Researcher</h3>
              <div className="bio-paragraphs">
                <p>
                  I'm an M.S. in Computer Science candidate at <span className="highlight-text">Georgia State University</span>, specializing in data-centric AI, production-grade ML systems, and natural language processing. I graduated with a B.E. in Computer Science from <span className="highlight-text">SRM University AP</span> as a Gold Medalist, and have authored <span className="highlight-text">3 journal papers</span> across deep learning and sentiment analysis.
                </p>
                <p>
                  Previously, I worked as a Data Scientist Co-op at <span className="highlight-text">Vensai Technologies</span>, where I built LLM microservices and agentic RAG architectures. Currently, I am a Graduate Research Assistant building AI-powered systems for healthcare and student services.
                </p>
              </div>
              <div className="bio-footer">
                <span className="monogram">{personalInfo.monogram}</span>
                <span className="signature-title">{personalInfo.firstName} Karthikeya G.</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: RESEARCH & DOMAIN FOCUS (5 Columns) */}
          <motion.div 
            className="bento-card bento-interests" 
            variants={cardVariants}
            onMouseMove={handleMouseMove}
          >
            <div className="card-glass-glow" />
            <div className="bento-card-content">
              <div className="card-header-icon-row">
                <Compass className="card-icon primary-glow" size={20} />
                <span className="card-tag">Focus Areas</span>
              </div>
              <h3 className="card-heading">Research Fields</h3>
              <p className="card-desc">Investigating computational bounds and structural representations in intelligent agents.</p>
              <div className="bento-tags-grid">
                <div className="bento-interest-tag">
                  <Brain size={13} className="tag-inner-icon" />
                  <span>Agentic AI</span>
                </div>
                <div className="bento-interest-tag">
                  <Brain size={13} className="tag-inner-icon" />
                  <span>Deep Learning</span>
                </div>
                <div className="bento-interest-tag">
                  <Brain size={13} className="tag-inner-icon" />
                  <span>Natural Language Processing</span>
                </div>
                <div className="bento-interest-tag">
                  <Brain size={13} className="tag-inner-icon" />
                  <span>Computer Vision</span>
                </div>
                <div className="bento-interest-tag">
                  <Brain size={13} className="tag-inner-icon" />
                  <span>Data-Centric AI</span>
                </div>
                <div className="bento-interest-tag">
                  <Brain size={13} className="tag-inner-icon" />
                  <span>Production ML Systems</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: TIMELINE MILESTONES (5 Columns) */}
          <motion.div 
            className="bento-card bento-milestones" 
            variants={cardVariants}
            onMouseMove={handleMouseMove}
          >
            <div className="card-glass-glow" />
            <div className="bento-card-content">
              <div className="card-header-icon-row">
                <GraduationCap className="card-icon secondary-glow" size={20} />
                <span className="card-tag">Timeline</span>
              </div>
              <h3 className="card-heading">Key Milestones</h3>
              <ul className="bento-milestone-list">
                <li>
                  <div className="milestone-time">Now</div>
                  <div className="milestone-text">
                    <strong>Gen AI Research Engineer</strong>
                    <span>Building production LLM agents at Cotiviti</span>
                  </div>
                </li>
                <li>
                  <div className="milestone-time">2024</div>
                  <div className="milestone-text">
                    <strong>GSU Master's Program</strong>
                    <span>Started Graduate Research Assistantship in ML</span>
                  </div>
                </li>
                <li>
                  <div className="milestone-time">Recent</div>
                  <div className="milestone-text">
                    <strong>IEEE Xplore Publication</strong>
                    <span>Co-authored paper on Melanoma Image Classification</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CARD 4: KEY STATS DASHBOARD (7 Columns) */}
          <motion.div 
            className="bento-card bento-stats-card" 
            variants={cardVariants}
            onMouseMove={handleMouseMove}
          >
            <div className="card-glass-glow" />
            <div className="bento-card-content">
              <div className="card-header-icon-row">
                <Award className="card-icon accent-glow" size={20} />
                <span className="card-tag">Metrics</span>
              </div>
              <h3 className="card-heading">Academic & Industry Footprint</h3>
              
              <div className="bento-stats-grid">
                {personalInfo.stats.map((stat, idx) => (
                  <div key={idx} className="bento-stat-item">
                    <div className="stat-glow-radial" />
                    <div className="bento-stat-num">
                      {stat.value}
                      {stat.suffix && <span className="stat-plus">{stat.suffix}</span>}
                    </div>
                    <div className="bento-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 5: PHILOSOPHY QUOTE (12 Columns) */}
          <motion.div 
            className="bento-card bento-quote-card" 
            variants={cardVariants}
            onMouseMove={handleMouseMove}
          >
            <div className="card-glass-glow" />
            <div className="bento-card-content quote-layout">
              <Quote className="quote-left-icon" size={32} />
              <div className="quote-body">
                <p className="philosophy-quote-text">
                  "Turning data into intelligence and ideas into impact — blending research and practical tech to solve real-world problems."
                </p>
                <div className="quote-author-meta">
                  <div className="author-bar" />
                  <span className="author-desc">Asish Karthikeya Gogineni</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;

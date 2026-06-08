import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'SQL (PostgreSQL)', 'R', 'PySpark'],
    icon: '💻'
  },
  {
    title: 'AI & ML',
    skills: ['LangChain', 'LangGraph', 'LangSmith', 'REST APIs', 'Fine Tuning', 'Microservices (FastAPI, MCP)', 'Transformers'],
    icon: '🧠'
  },
  {
    title: 'Libraries',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Keras'],
    icon: '📚'
  },
  {
    title: 'Big Data & Cloud',
    skills: ['Databricks', 'Apache Spark', 'Azure (ADF, Synapse, Data Lake)', 'AWS Services (S3, EC2, Lambda)', 'GCP (Vertex AI)'],
    icon: '☁️'
  },
  {
    title: 'Competencies',
    skills: ['ETL Pipelines', 'Large Language Models', 'Vector DB', 'Prompt Engineering', 'Docker', 'Data Visualization'],
    icon: '🎯'
  },
  {
    title: 'AI Tools',
    skills: ['GitHub Copilot', 'Claude Code', 'LangSmith', 'OpenAI', 'Google Gemini'],
    icon: '🤖'
  }
];

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  color: string;
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: '#ff9900'
  },
  {
    title: 'RAG agents with LLM\'s',
    issuer: 'NVIDIA (DLI)',
    icon: '👁️',
    color: '#76b900'
  },
  {
    title: 'Data Analysis',
    issuer: 'Deloitte',
    icon: '📊',
    color: '#86bc25'
  },
  {
    title: 'Foundations of LangChain',
    issuer: 'LangChain',
    icon: '🦜',
    color: '#38bdf8'
  },
  {
    title: 'Foundations of LangGraph',
    issuer: 'LangChain',
    icon: '🕸️',
    color: '#ec4899'
  }
];

const Skills = () => {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState<number | null>(null);
  const [hoveredCertIndex, setHoveredCertIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">
            The stack I reach for across research, production ML, and data infrastructure work.
          </p>
        </motion.div>

        {/* Skills Grid with Card Hover Effect */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="skill-card-wrapper"
              onMouseEnter={() => setHoveredCategoryIndex(idx)}
              onMouseLeave={() => setHoveredCategoryIndex(null)}
            >
              <AnimatePresence>
                {hoveredCategoryIndex === idx && (
                  <motion.span
                    className="skill-card-hover-bg"
                    layoutId="skillsHoverBg"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.05 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-card-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill} 
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-section with Card Hover Effect */}
        <div className="certs-section">
          <motion.div 
            className="certs-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="certs-title">Certifications</h3>
            <p className="section-subtitle">Industry credentials verifying technical domain expertise.</p>
          </motion.div>

          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className="cert-card-wrapper"
                onMouseEnter={() => setHoveredCertIndex(idx)}
                onMouseLeave={() => setHoveredCertIndex(null)}
              >
                <AnimatePresence>
                  {hoveredCertIndex === idx && (
                    <motion.span
                      className="cert-card-hover-bg"
                      layoutId="certsHoverBg"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.05 },
                      }}
                      style={{
                        backgroundColor: `${cert.color}08`,
                        borderColor: `${cert.color}60`,
                        boxShadow: `0 0 20px ${cert.color}15`,
                      }}
                    />
                  )}
                </AnimatePresence>
                <div 
                  className="cert-card"
                  style={{
                    borderColor: hoveredCertIndex === idx ? `${cert.color}60` : 'var(--border)'
                  }}
                >
                  <div 
                    className="cert-badge" 
                    style={{ 
                      backgroundColor: `${cert.color}10`, 
                      border: `1px solid ${cert.color}30` 
                    }}
                  >
                    <span className="cert-icon">{cert.icon}</span>
                  </div>
                  <div className="cert-details">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

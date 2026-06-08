import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { publications, personalInfo } from '../../data/portfolio';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <motion.div 
          className="publications-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">Research</span>
          <h2 className="section-title">Publications</h2>
          <p className="publications-subtitle">Published research in machine learning, NLP, and healthcare AI</p>
        </motion.div>

        <div className="publications-grid">
          {publications.map((pub, idx) => (
            <motion.article 
              key={idx}
              className="pub-card clean-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
            >
              <div className="pub-image-container">
                <img src={pub.image} alt={pub.title} className="pub-image" loading="lazy" />
                <div className="pub-journal-badge">{pub.journal}</div>
              </div>
              
              <div className="pub-content">
                <h3 className="pub-title">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                
                <div className="pub-meta">
                  <span className="pub-date">{pub.date}</span>
                  <span className="pub-authors">{pub.authors}</span>
                </div>
                
                <div className="pub-actions">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="pub-link"
                  >
                    Read Paper <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="scholar-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <a 
            href={personalInfo.googleScholar} 
            target="_blank" 
            rel="noopener noreferrer"
            className="scholar-cta"
          >
            <div className="scholar-content">
              <span className="scholar-icon">🎓</span>
              <span className="scholar-text">View All Publications on Google Scholar</span>
            </div>
            <ExternalLink className="scholar-arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;

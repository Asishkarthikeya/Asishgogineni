import { motion } from 'framer-motion';
import { MapPin, Calendar, BookOpen, Briefcase } from 'lucide-react';
import { experience, education } from '../../data/portfolio';
import './Experience.css';

const ExperienceCard = ({ item, isEducation = false, index }: { item: any, isEducation?: boolean, index: number }) => {
  return (
    <motion.article 
      className="experience-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="experience-card-top">
        <div className="experience-card-titles">
          <h3 className="experience-org">{item.organization}</h3>
          {/* Use description as the sub-department/school if education, else it's normal description */}
          {isEducation && item.description && (
            <p className="experience-suborg">{item.description}</p>
          )}
          <p className="experience-role">{item.title}</p>
        </div>
        
        {item.logo && (
          <div className="experience-logo-wrapper">
            <img src={item.logo} alt={item.organization} className="experience-logo" />
          </div>
        )}
      </div>

      <div className="experience-meta-row">
        <div className="meta-item">
          <Calendar size={14} />
          <span>{item.period}</span>
        </div>
        <div className="meta-item">
          <MapPin size={14} />
          <span>{item.location}</span>
        </div>
      </div>

      {!isEducation && item.description && (
        <p className="experience-desc-text">{item.description}</p>
      )}

      {item.bullets && (
        <ul className="experience-bullets">
          {item.bullets.map((bullet: string, i: number) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}

      {item.tags && item.tags.length > 0 && (
        <div className="experience-tags-section">
          <div className="tags-label">
            {isEducation ? <BookOpen size={14} /> : <Briefcase size={14} />}
            <span>{isEducation ? 'COURSEWORK' : 'SKILLS'}</span>
          </div>
          <div className="experience-tags">
            {item.tags.map((tag: string) => (
              <span key={tag} className="exp-tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        <div className="experience-category">
          <motion.div 
            className="experience-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-label">Experience</span>
            <h2 className="section-title">Work</h2>
          </motion.div>

          <div className="experience-list">
            {experience.map((item, idx) => (
              <ExperienceCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        <div className="experience-category education-category">
          <motion.div 
            className="experience-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-label">Academic Background</span>
            <h2 className="section-title">Education</h2>
          </motion.div>

          <div className="experience-list">
            {education.map((item, idx) => (
              <ExperienceCard key={idx} item={item} isEducation={true} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

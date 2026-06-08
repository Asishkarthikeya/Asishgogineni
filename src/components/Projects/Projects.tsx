import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ContainerScroll } from './ContainerScroll';
import { projects, projectCategories } from '../../data/portfolio';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category.includes(filter)
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
        </motion.div>

        {/* Filters */}
        <div className="projects-filter">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              {filter === cat.id && (
                <motion.div
                  layoutId="filter-active"
                  className="filter-active-bg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="filter-text">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Projects List */}
        <motion.div layout className="projects-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {idx > 0 && <div className="project-divider" />}
                <ContainerScroll
                  titleComponent={
                    <div className="project-scroll-header">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      
                      <div className="project-tags-center">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>

                      <p className="project-description-center">{project.description}</p>
                      
                      <div className="project-actions-center">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                          >
                            <Github size={16} /> Source Code
                          </a>
                        )}
                        {(project.demo || project.link) && (
                          <a 
                            href={project.demo || project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  }
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-scroll-image"
                    loading="lazy"
                  />
                  <div className="project-category-badge-scroll">
                    {projectCategories.find(c => c.id === project.category[0])?.label}
                  </div>
                </ContainerScroll>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

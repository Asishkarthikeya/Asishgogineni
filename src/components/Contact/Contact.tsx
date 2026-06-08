import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Left Column */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="contact-header">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Let's connect</h2>
              <p className="contact-desc">
                Feel free to reach out for collaborations, research opportunities, or just to say hello!
              </p>
            </div>

            <a href={`mailto:${personalInfo.email}`} className="email-link">
              <span className="email-icon">
                <Mail size={20} />
              </span>
              {personalInfo.email}
            </a>

            <div className="social-links">
              <a href={personalInfo.socialLinks.find(l => l.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={personalInfo.socialLinks.find(l => l.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Github size={18} /> GitHub
              </a>
              <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer" className="social-pill">
                <GraduationCap size={18} /> Google Scholar
              </a>
            </div>
          </motion.div>

          {/* Right Column - Clean Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <form 
              action={`mailto:${personalInfo.email}`}
              method="POST"
              encType="text/plain"
              className="clean-form clean-card"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Hello..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p className="copyright">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <p className="built-with">Built with React & TypeScript.</p>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Instagram, Linkedin, Github, GraduationCap } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:asishgogineni45@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: Instagram, url: 'http://instagram.com/asishkarthikeya_gogineni', label: 'Instagram', color: 'from-pink-500 to-rose-500' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/asish-karthikeya-gogineni-0bb301239/', label: 'LinkedIn', color: 'from-blue-500 to-cyan-500' },
        { icon: Github, url: 'https://github.com/Asishkarthikeya', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
        { icon: GraduationCap, url: 'https://scholar.google.com/citations?user=1LDy9ooAAAAJ&hl=en&authuser=2', label: 'Scholar', color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-textMuted text-lg max-w-2xl mx-auto">
                        Let's discuss your next project or collaboration opportunity
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-textMuted">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-textMuted">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-textMuted">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full btn-primary flex items-center justify-center space-x-2"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Email Card */}
                        <div className="glass-card p-8">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                                    <Mail size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold">Email Me</h3>
                            </div>
                            <a
                                href="mailto:asishgogineni45@gmail.com"
                                className="text-primary hover:underline font-mono text-sm"
                            >
                                asishgogineni45@gmail.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-4 bg-gradient-to-r ${social.color} rounded-xl flex flex-col items-center justify-center space-y-2 text-white font-semibold`}
                                    >
                                        <social.icon size={28} />
                                        <span className="text-sm">{social.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Collaboration Card */}
                        <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                            <h3 className="text-xl font-bold mb-4">Let's Collaborate</h3>
                            <p className="text-textMuted leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Let's build something amazing together!
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/10 text-center"
                >
                    <p className="text-textMuted">
                        © {new Date().getFullYear()} Asish Karthikeya Gogineni. Built with React, Vite, and TailwindCSS.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

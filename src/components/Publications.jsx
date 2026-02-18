import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="section-padding bg-gradient-to-b from-background to-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Research <span className="gradient-text">Publications</span>
                    </h2>
                    <p className="text-textMuted text-lg max-w-2xl mx-auto">
                        Contributing to the advancement of AI and Machine Learning
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.a
                        href="https://scholar.google.com/citations?user=1LDy9ooAAAAJ&hl=en&authuser=2"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="glass-card p-10 block group"
                    >
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                                    <BookOpen size={48} className="text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                        Published Research Papers
                                    </h3>
                                    <ExternalLink size={24} className="text-textMuted group-hover:text-primary transition-colors duration-300" />
                                </div>

                                <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-semibold mb-4">
                                    5 Papers Published
                                </div>

                                <p className="text-lg text-textMuted leading-relaxed mb-6">
                                    Published research in machine learning, NLP, and healthcare AI.
                                    Including 3 journal papers and 2 conference presentations, contributing to
                                    advancements in medical image analysis, natural language processing, and deep learning.
                                </p>

                                <div className="flex items-center space-x-2 text-primary font-semibold group-hover:underline">
                                    <span>View Publications on Google Scholar</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Publications;

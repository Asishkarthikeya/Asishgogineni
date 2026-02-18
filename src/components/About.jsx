import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
    const stats = [
        { number: '15+', label: 'Projects Completed' },
        { number: '5', label: 'Research Papers' },
        { number: '1000+', label: 'Connections' },
        { number: '4', label: 'Achievements' },
    ];

    return (
        <section id="about" className="section-padding bg-gradient-to-b from-background to-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-textMuted text-lg max-w-2xl mx-auto">
                        Passionate about AI and Data Science
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20" />
                        <div className="relative glass-card p-2">
                            <img
                                src="/images/AVATAR.png"
                                alt="About Asish"
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-8 space-y-6">
                            <h3 className="text-2xl font-bold">
                                Hi, I'm Asish — <span className="gradient-text">Data Scientist | ML Researcher | Gold Medalist</span>
                            </h3>

                            <p className="text-lg text-textMuted leading-relaxed">
                                I turn data into intelligence and ideas into impact — blending research, machine learning,
                                and practical tech to solve real-world problems.
                            </p>

                            <p className="text-lg text-textMuted leading-relaxed">
                                Currently mastering the science of AI at Georgia State University, with 3 journal papers,
                                2 conference talks, and a drive to push boundaries.
                            </p>

                            <p className="text-lg text-textMuted leading-relaxed">
                                I believe in building AI that empowers people — not replaces them. Let's build the future,
                                responsibly and boldly.
                            </p>

                            <motion.a
                                href="https://drive.google.com/file/d/1gFpl5_ttSI8nfzYvVkf1sTesHXD71PPg/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold shadow-lg hover:shadow-glow transition-all duration-300"
                            >
                                <Download size={20} />
                                <span>Download CV</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-8 text-center card-hover"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-textMuted font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

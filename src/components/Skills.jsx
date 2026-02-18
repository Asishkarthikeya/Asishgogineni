import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'AI Agents', description: 'Building Autonomous Multi-Agent Systems for Real-World Intelligence', gradient: 'skill-card-purple' },
        { name: 'LangChain', description: 'Chaining LLMs into Powerful, Context-Aware AI Pipelines', gradient: 'skill-card-blue' },
        { name: 'LangGraph', description: 'Orchestrating Complex Agent Workflows with Graph-Based Reasoning', gradient: 'skill-card-pink' },
        { name: 'RAG', description: 'Retrieval-Augmented Generation for Grounded, Accurate AI Responses', gradient: 'skill-card-teal' },
        { name: 'CrewAI', description: 'Coordinating Collaborative AI Crews for Complex Task Automation', gradient: 'skill-card-orange' },
        { name: 'Machine Learning', description: 'Unleashing Algorithms to Unlock Tomorrow\'s Solutions', gradient: 'skill-card-green' },
        { name: 'Python', description: 'Crafting Elegant Code to Conquer Complex Challenges', gradient: 'skill-card-yellow' },
        { name: 'Deep Learning', description: 'Sculpting Neural Networks for Breakthrough Innovations', gradient: 'skill-card-violet' },
        { name: 'NLP', description: 'Harnessing the Power of Language with Advanced NLP Skills', gradient: 'skill-card-red' },
        { name: 'Azure, AWS', description: 'Navigating the Skies of Cloud with Expert Precision', gradient: 'skill-card-purple' },
        { name: 'SQL', description: 'Unraveling Data Mysteries with Precision Query Mastery', gradient: 'skill-card-blue' },
        { name: 'Statistics', description: 'Mastering the Symphony of Numbers for Data Revelations', gradient: 'skill-card-pink' },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-textMuted text-lg max-w-2xl mx-auto">
                        Expertise across multiple domains of AI and Data Science
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className={`${skill.gradient} rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden group`}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                                <p className="text-white/90 leading-relaxed">{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

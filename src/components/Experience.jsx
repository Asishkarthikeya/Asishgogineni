import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Graduate Research Assistant – Data Science',
            company: 'Georgia State University',
            period: 'Aug 2024 - Present',
            location: 'Atlanta, GA',
            points: [
                'Developed SIQ, a GPT-4 powered chatbot that delivers reliable answers to Student Immigration Queries with minimal hallucination, using OpenAI\'s text-embedding-ada-002 and FAISS, enabling contextual retrieval and response generation through RAG framework.',
                'Architected a Model Context Protocol (MCP) server to bridge internal healthcare databases with LLM agents, enabling secure, real-time data tool-calling and reducing manual query latency by 60%.',
                'Delivered an NLQ to SQL agent with LangChain and AWS Bedrock and added a geocoding layer for geospatially aware query referencing and filters, improving multi-source query accuracy by ~35% and reducing ad-hoc SQL tickets by ~60%.',
            ],
        },
        {
            type: 'work',
            title: 'Data Scientist Co-op',
            company: 'Vensai Technologies (client – Ceva Logistics)',
            period: 'Jan 2023 - Jun 2024',
            location: 'Atlanta (Offshore), GA',
            points: [
                'Designed and developed an AI-powered HR onboarding chatbot using Agentic RAG with multi-agent orchestration via Autogen framework, enabling dynamic conversation flows and task delegation among specialized agents.',
                'Spearheaded an SDLC Automation Agent utilizing Transformer-based architectures (RoBERTa/BERT) to autonomously detect and classify critical system issues from 500+ weekly logs.',
                'Built an LLM microservice using Amazon Bedrock and AWS Lambda integrated via API Gateway to automate 2 internal API workflows, reducing content analysis time by 75% and saving 3 engineering days per week.',
            ],
        },
        {
            type: 'education',
            title: 'Master of Science in Computer Science',
            company: 'Georgia State University',
            period: 'Aug 2024 - Present',
            location: 'Atlanta, GA',
            points: [
                'Focus: Machine Learning, Deep Learning, NLP',
                'GPA: 3.86/4.0',
                'Coursework: Advanced ML, Big Data, Information Retrieval',
            ],
        },
        {
            type: 'education',
            title: 'Bachelor of Engineering',
            company: 'SRM University AP',
            period: 'Aug 2020 - April 2024',
            location: 'India',
            points: [
                'Computer Science & Engineering',
                'Gold Medalist',
                'Data Structures, Algorithms, Big Data, Data Mining',
            ],
        },
    ];

    const awards = [
        {
            title: '🥈 2nd Place – National ML Hackathon',
            org: 'IIIT Sri City, India',
            description: 'Secured 2nd place in a 24-hour national ML hackathon.',
            link: null,
            linkText: 'View Certificate',
        },
        {
            title: '🥇 Gold Medal & Special Mention Award',
            org: 'SRM University, India',
            description: 'Received Gold Medal and Special Mention Award for Research.',
            link: null,
            linkText: 'View Certificate',
        },
        {
            title: '🎓 100% Full-Ride Scholarship',
            org: 'Georgia State University',
            description: '100% Full-Ride scholarship awardee for academic merit and research at GSU.',
            link: null,
            linkText: null,
        },
    ];

    const workExperiences = experiences.filter(e => e.type === 'work');
    const educationExperiences = experiences.filter(e => e.type === 'education');

    const TimelineItem = ({ exp, index }) => (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative pl-8 pb-12 last:pb-0"
        >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-4 h-4 -translate-x-[7px] rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow" />

            {/* Content Card */}
            <div className="glass-card p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-mono">
                        {exp.period}
                    </span>
                </div>

                <ul className="space-y-2 mb-4">
                    {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-textMuted">
                            <span className="text-primary mr-2">▸</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                <p className="text-sm text-textMuted">📍 {exp.location}</p>
            </div>
        </motion.div>
    );

    return (
        <section id="experience" className="section-padding bg-gradient-to-b from-surface to-background">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-textMuted text-lg max-w-2xl mx-auto">
                        Professional experience and educational background
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Work Experience */}
                    <div>
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                                <Briefcase size={28} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Work Experience</h3>
                        </div>
                        <div>
                            {workExperiences.map((exp, index) => (
                                <TimelineItem key={index} exp={exp} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-xl">
                                <GraduationCap size={28} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div>
                            {educationExperiences.map((exp, index) => (
                                <TimelineItem key={index} exp={exp} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Awards & Hackathons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="p-3 bg-gradient-to-r from-accent to-success rounded-xl">
                            <Trophy size={28} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Awards & Hackathons</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ scale: 1.03 }}
                                className="glass-card p-6 card-hover border border-accent/20"
                            >
                                <h4 className="text-lg font-bold text-white mb-1">{award.title}</h4>
                                <p className="text-accent text-sm font-semibold mb-3">{award.org}</p>
                                <p className="text-textMuted text-sm leading-relaxed">{award.description}</p>
                                {award.link && (
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-primary text-sm hover:underline"
                                    >
                                        {award.linkText} →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;

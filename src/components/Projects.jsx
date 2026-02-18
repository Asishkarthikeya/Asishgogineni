import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        // ── AI Agents ──────────────────────────────────────────────────────────
        {
            title: 'Sentinel AI Financial Agent',
            category: 'agents',
            description: 'Multi-agent AI system automating financial analysis with real-time market & web intelligence.',
            tags: ['Python', 'LangChain', 'FastAPI', 'MCP', 'Groq API', 'LlamaIndex', 'Gemini 1.5 Pro', 'Docker'],
            image: '/images/sentinel.jpg',
            githubLink: 'https://github.com/Asishkarthikeya/Sentinel',
            demoLink: 'https://huggingface.co/spaces/Asish22/Sentinel',
            points: [
                'Architected a multi-agent AI system to automate financial analysis, synthesizing real-time data from market (Alpha Vantage) and web intelligence (Tavily) APIs to reduce time-to-insight.',
                'Engineered a modular and secure backend using FastAPI to simulate an enterprise-grade microservice architecture (MCP), isolating each external data source. Deployed the system as a full-stack, interactive web application with a Gradio user interface.',
            ],
        },
        {
            title: 'Code Crawler AI',
            category: 'agents',
            description: 'Graph-RAG Code Intelligence Agent merging Vector Retrieval with AST-driven Knowledge Graphs.',
            tags: ['Python', 'LangChain', 'LangGraph', 'Gemini 2.5 Flash', 'Qdrant/Chroma', 'NetworkX', 'AST Graph'],
            image: '/images/code-crawler.png',
            githubLink: 'https://github.com/Asishkarthikeya/Codebase_Agent',
            demoLink: 'https://huggingface.co/spaces/Asish22/code-crawler',
            points: [
                'Architected a sophisticated Graph-RAG Code Intelligence Agent, merging Vector Retrieval with AST-driven Knowledge Graphs to provide deep, context-aware insights across diverse data sources (ZIPs, GitHub, Web).',
                'Engineered a recursive multi-agent workflow using LangGraph for autonomous file navigation and reasoning, deploying the system as a premium full-stack application with a custom Streamlit UI and companion VS Code extension.',
            ],
        },
        // ── Healthcare ─────────────────────────────────────────────────────────
        {
            title: 'Cancer Classification – MLOps',
            category: 'healthcare',
            description: 'End-to-end MLOps pipeline for cancer classification achieving 94% accuracy, deployed on AWS EC2 with CI/CD automation.',
            tags: ['AWS S3', 'EC2', 'MongoDB', 'MLflow', 'Dagshub', 'CI/CD', 'XGBoost', 'Random Forest', 'FastAPI', 'Docker'],
            image: '/images/Medical.png',
            githubLink: 'https://github.com/Asishkarthikeya/Colon-Cancer-Transfer_Learning',
            demoLink: null,
            points: [
                'Developed modular pipelines for data ingestion, validation, and transformation using AWS S3, while optimizing XGBoost and Random Forest models via GridSearchCV to achieve 94% accuracy and 92% macro F1 score, tracked using MLflow and Dagshub.',
                'Deployed a Dockerized application to AWS EC2 via ECR by automating CI/CD workflows with GitHub Actions, enabling real-time predictions through FastAPI and batch inference pipelines.',
            ],
        },
        // ── NLP ────────────────────────────────────────────────────────────────
        {
            title: 'JobWise ATS Analyser',
            category: 'nlp',
            description: 'AI-powered resume analyzer to optimize job applications using advanced NLP techniques',
            tags: ['NLP', 'Python', 'AI'],
            image: '/images/logo.png',
            githubLink: 'https://huggingface.co/spaces/Asish22/JobWise-Resume-Analyzer',
            demoLink: null,
            points: [],
        },
        {
            title: 'NLP Innovations',
            category: 'nlp',
            description: 'Hate Speech Detection, Suicidal Prevention, Toxic Comment Classification, Instagram Spam Detection',
            tags: ['NLP', 'Deep Learning', 'Classification'],
            image: '/images/nlp.png',
            githubLink: 'https://github.com/Asishkarthikeya/NLP-Innovations',
            demoLink: null,
            points: [],
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'agents', label: 'AI Agents' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'nlp', label: 'NLP' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const ProjectCard = ({ project, index }) => (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card rounded-3xl overflow-hidden group flex flex-col"
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category badge */}
                {project.category === 'agents' && (
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-glow">
                        AI Agent
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-textMuted mb-4 text-sm">{project.description}</p>

                {/* Bullet points for AI Agent projects */}
                {project.points.length > 0 && (
                    <ul className="space-y-2 mb-4">
                        {project.points.map((point, i) => (
                            <li key={i} className="flex items-start text-textMuted text-sm">
                                <span className="text-primary mr-2 mt-0.5 shrink-0">▸</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-white/10">
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-textMuted hover:text-white transition-colors duration-200"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    )}
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-textMuted hover:text-primary transition-colors duration-200"
                        >
                            <Play size={16} />
                            Demo
                        </a>
                    )}
                    {!project.demoLink && project.category !== 'agents' && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-textMuted hover:text-primary transition-colors duration-200 ml-auto"
                        >
                            <ExternalLink size={16} />
                            View
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="works" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-textMuted text-lg max-w-2xl mx-auto mb-8">
                        Showcasing my work in AI Agents, ML, and Data Science
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow'
                                    : 'glass-card text-textMuted hover:text-white'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

import type { PersonalInfo, Skill, TimelineEntry, Award, Project, Publication } from '../types';

const asset = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
};

export const personalInfo: PersonalInfo = {
  name: 'Asish Karthikeya Gogineni',
  firstName: 'Asish',
  monogram: 'AKG',
  roles: ['Data Scientist', 'ML Engineer', 'AI Researcher'],
  bio: "Hi, I'm Asish — Data Scientist | ML Researcher | Gold Medalist. I turn data into intelligence and ideas into impact — blending research, machine learning, and practical tech to solve real-world problems. Currently mastering the science of AI at Georgia State University, with 3 journal papers, 2 conference talks, and a drive to push boundaries. I believe in building AI that empowers people — not replaces them.",
  heroBio: 'Transforming data into intelligence and ideas into impact — blending research, machine learning, and practical tech to solve real-world problems.',
  email: 'asishgogineni45@gmail.com',
  cvLink: 'https://drive.google.com/file/d/1gFpl5_ttSI8nfzYvVkf1sTesHXD71PPg/view?usp=sharing',
  avatar: asset('/images/AVATAR.png'),
  profilePhoto: asset('/images/AVATAR.png'),
  googleScholar: 'https://scholar.google.com/citations?user=1LDy9ooAAAAJ&hl=en&authuser=2',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Asishkarthikeya', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asish-karthikeya-gogineni-0bb301239/', icon: 'linkedin' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=1LDy9ooAAAAJ&hl=en&authuser=2', icon: 'graduation-cap' },
    { name: 'Instagram', url: 'https://instagram.com/asishkarthikeya_gogineni', icon: 'instagram' },
  ],
  stats: [
    { value: 15, suffix: '+', label: 'Projects Completed', icon: 'folder-open' },
    { value: 5, label: 'Research Papers', icon: 'file-text' },
    { value: 30, suffix: '+', label: 'Citations', icon: 'graduation-cap' },
    { value: 4, label: 'Awards & Medals', icon: 'award' },
  ],
};


export const education: TimelineEntry[] = [
  {
    period: 'Aug 2024 — Present',
    title: 'Master of Science in Computer Science',
    organization: 'Georgia State University',
    location: 'Atlanta, GA',
    description: 'GPA: 3.86/4.0 — Focus: ML, Deep Learning, NLP',
    tags: ['Python', 'SQL', 'Machine Learning', 'Deep Learning', 'NLP'],
    logo: asset('/images/gsu.png'),
  },
  {
    period: 'Aug 2020 — April 2024',
    title: 'Bachelor of Engineering',
    organization: 'SRM University AP',
    location: 'India',
    description: 'Computer Science & Engineering — Gold Medalist',
    tags: ['Data Structures', 'Big Data', 'Information Retrieval', 'Data Mining'],
    logo: asset('/images/SRM.jpeg'),
  },
];

export const experience: TimelineEntry[] = [
  {
    period: 'Jun 2026 — Present',
    title: 'Gen AI Research Engineer Intern',
    organization: 'Cotiviti',
    location: 'Atlanta, GA',
    description: 'Generative AI research and large language model applications',
    bullets: [
      'Will be designing and shipping end-to-end agentic AI workflow pipelines for healthcare informatics, with tool-use, planning, and verifier loops aimed at reliable clinical and operational decision support.',
      'Will be researching RL-based post-training (RLHF, DPO, and reward-model variants) to align LLM behavior on healthcare tasks under safety, traceability, and bias constraints.',
      'Will be exploring agentic RAG architectures — retrieval-augmented multi-step reasoning over clinical, payment, and operations data — to push beyond single-shot prompting toward auditable AGI-grade workflows.',
    ],
    tags: ['AWS EC2', 'LLMs', 'Transformers', 'NLP', 'GenAI'],
    logo: asset('/images/cotiviti.png'),
  },
  {
    period: 'Aug 2024 — May 2026',
    title: 'Graduate Research Assistant — Data Science',
    organization: 'Georgia State University',
    location: 'Atlanta, GA',
    description: 'Building AI-powered systems for healthcare and student services',
    bullets: [
      'Developed SIQ, a GPT-4 powered chatbot for Student Immigration Queries using OpenAI\'s text-embedding-ada-002 and FAISS, with RAG framework',
      'Architected a Model Context Protocol (MCP) server to bridge internal healthcare databases with LLM agents, reducing manual query latency by 60%',
      'Delivered an NLQ to SQL agent with LangChain and AWS Bedrock with geocoding layer, improving multi-source query accuracy by ~35%',
    ],
    tags: ['Azure Databricks', 'PySpark', 'MLflow', 'Power BI', 'LangChain'],
    logo: asset('/images/gsu.png'),
  },
  {
    period: 'Jan 2023 — Jun 2024',
    title: 'Data Scientist Co-op',
    organization: 'Vensai Technologies (Ceva Logistics)',
    location: 'Atlanta (Offshore), GA',
    description: 'AI-powered automation and intelligent agent systems',
    bullets: [
      'Designed AI-powered HR onboarding chatbot using Agentic RAG with multi-agent orchestration via Autogen framework',
      'Spearheaded SDLC Automation Agent using Transformer-based architectures (RoBERTa/BERT) to detect and classify critical system issues from 500+ weekly logs',
      'Built LLM microservice using Amazon Bedrock and AWS Lambda, reducing content analysis time by 75% and saving 3 engineering days per week',
    ],
    tags: ['TensorFlow', 'Keras', 'AWS', 'Python', 'Autogen', 'BERT'],
    logo: asset('/images/vensai.png'),
  },
];

export const awards: Award[] = [
  { icon: '🥈', title: '2nd Place — National ML Hackathon', source: 'IIIT Sri City, India' },
  { icon: '🥇', title: 'Gold Medal & Special Mention Award', source: 'SRM University, India' },
  { icon: '🎓', title: '100% Full-Ride Scholarship', source: 'Georgia State University' },
];

export const projects: Project[] = [
  {
    id: 'sentinel-ai',
    title: 'Sentinel AI Financial Agent',
    subtitle: 'Multi-Agent Financial Intelligence',
    description: 'Multi-agent AI system automating financial analysis with real-time market & web intelligence. Features autonomous research, report generation, and investment insights.',
    image: asset('/images/sentinel.jpg'),
    tags: ['Python', 'LangChain', 'FastAPI', 'MCP', 'Groq API', 'LlamaIndex', 'Gemini 1.5 Pro', 'Docker'],
    category: ['agents'],
    github: 'https://github.com/Asishkarthikeya/Sentinel',
    demo: 'https://huggingface.co/spaces/Asish22/Sentinel',
  },
  {
    id: 'code-crawler',
    title: 'Code Crawler AI',
    subtitle: 'Graph-RAG Code Intelligence',
    description: 'Graph-RAG Code Intelligence Agent merging Vector Retrieval with AST-driven Knowledge Graphs for deep codebase understanding and intelligent code navigation.',
    image: asset('/images/code-crawler.png'),
    tags: ['Python', 'LangChain', 'LangGraph', 'Gemini 2.5 Flash', 'Qdrant', 'NetworkX', 'AST Graph'],
    category: ['agents'],
    github: 'https://github.com/Asishkarthikeya/Codebase_Agent',
    demo: 'https://huggingface.co/spaces/Asish22/code-crawler',
  },
  {
    id: 'aura-healthcare',
    title: 'AURA — Multimodal Agentic Healthcare Ecosystem',
    subtitle: 'Multimodal Agentic Health Platform',
    description: 'A multi-agent healthcare ecosystem using LangGraph to orchestrate 5 specialized AI agents (Diagnostic, Diet, Insurance) with Agentic RAG and ChromaDB for zero-hallucination clinical triage, powered by an integrated Vision Transformer (ViT) diagnostic engine.',
    image: asset('/images/aura.png'),
    tags: ['Python', 'LangGraph', 'ViTs', 'Gemini 3.0 Pro', 'FastAPI', 'React', 'ChromaDB', 'Agentic RAG'],
    category: ['agents', 'healthcare'],
    github: 'https://github.com/Asishkarthikeya/AURA',
    demo: 'https://devpost.com/software/aura-intelligent-health-network-for-oculomics',
  },
  {
    id: 'diffmaster',
    title: 'DiffMaster — AI-Powered Code Review Platform',
    subtitle: 'AI Code Review & Analysis',
    description: 'An AI-powered automated code review platform distributed as a GitHub Action and FastAPI microservice. Auto-audits Pull Requests for security vulnerabilities, performance regressions, and code smells with inline comments via the GitHub Review API.',
    image: asset('/images/diffmaster.png'),
    tags: ['Celery', 'Redis', 'FAISS', 'Gemini 2.5', 'HuggingFace', 'FastAPI', 'GitHub Action'],
    category: ['agents'],
    github: 'https://github.com/Asishkarthikeya/DiffMaster',
    demo: 'https://drive.google.com/drive/u/0/my-drive',
  },
  {
    id: 'cancer-classification',
    title: 'Cancer Classification — MLOps',
    subtitle: 'End-to-End ML Pipeline',
    description: 'End-to-end MLOps pipeline achieving 94% accuracy, deployed on AWS EC2 with CI/CD. Features automated model training, versioning, and production deployment.',
    image: asset('/images/Medical.png'),
    tags: ['AWS S3', 'EC2', 'MongoDB', 'MLflow', 'Dagshub', 'CI/CD', 'XGBoost', 'FastAPI', 'Docker'],
    category: ['healthcare'],
    github: 'https://github.com/Asishkarthikeya/Colon-Cancer-Transfer_Learning',
  },
  {
    id: 'jobwise-ats',
    title: 'JobWise ATS Analyser',
    subtitle: 'AI-Powered Resume Intelligence',
    description: 'AI-powered resume analyzer that helps job seekers optimize their resumes for ATS systems using advanced NLP techniques and intelligent scoring algorithms.',
    image: asset('/images/logo.png'),
    tags: ['NLP', 'Python', 'AI', 'Streamlit'],
    category: ['nlp'],
    link: 'https://huggingface.co/spaces/Asish22/JobWise-Resume-Analyzer',
  },
  {
    id: 'nlp-innovations',
    title: 'NLP Innovations',
    subtitle: 'Multi-Model NLP Suite',
    description: 'Comprehensive NLP project suite including Hate Speech Detection, Suicidal Prevention, Toxic Comment Classification, and Instagram Spam Detection.',
    image: asset('/images/nlp.png'),
    tags: ['NLP', 'Deep Learning', 'Classification', 'BERT', 'TensorFlow'],
    category: ['nlp'],
    github: 'https://github.com/Asishkarthikeya/NLP-Innovations',
  },
];

export const publications: Publication[] = [
  {
    title: 'Comparative study on sentimental analysis using machine learning techniques',
    journal: 'IEEE — Q1 Journal',
    date: 'January 2023',
    authors: 'Asish Karthikeya & Team',
    link: 'https://ieeexplore.ieee.org/document/10134476',
    image: asset('/images/SA.png'),
  },
  {
    title: 'A Hybrid Deep Learning Framework for Efficient Sentiment Analysis',
    journal: 'IJACSA',
    date: 'December 2023',
    authors: 'Asish Karthikeya & Team',
    link: 'https://thesai.org/Downloads/Volume14No12/Paper_105-A_Hybrid_Deep_Learning_Framework_for_Efficient_Sentiment_Analysis.pdf',
    image: asset('/images/NN.png'),
  },
  {
    title: 'Comparative Study of Melanoma Disease Classification Using Deep and Transfer Learning',
    journal: 'IEEE Xplore',
    date: 'December 2024',
    authors: 'Asish Karthikeya & Team',
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10973676',
    image: asset('/images/Disease.jpg'),
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'agents', label: 'AI Agents' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'nlp', label: 'NLP' },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

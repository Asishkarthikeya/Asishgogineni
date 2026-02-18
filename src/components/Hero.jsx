import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, GraduationCap, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ['Data Scientist', 'ML Engineer', 'AI Researcher'];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const socialLinks = [
        { icon: Instagram, url: 'http://instagram.com/asishkarthikeya_gogineni', label: 'Instagram' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/asish-karthikeya-gogineni-0bb301239/', label: 'LinkedIn' },
        { icon: Github, url: 'https://github.com/Asishkarthikeya', label: 'GitHub' },
        { icon: GraduationCap, url: 'https://scholar.google.com/citations?user=1LDy9ooAAAAJ&hl=en&authuser=2', label: 'Scholar' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 section-padding relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                />

                {/* Floating Sparkle Shapes */}
                {[
                    { shape: 'triangle', color: '#f43f5e', top: '18%', left: '12%', size: 18, delay: 0 },
                    { shape: 'triangle', color: '#eab308', top: '14%', left: '55%', size: 16, delay: 1.2 },
                    { shape: 'triangle', color: '#6366f1', top: '12%', left: '80%', size: 14, delay: 0.5 },
                    { shape: 'arc', color: '#14b8a6', top: '35%', left: '88%', size: 22, delay: 0.8 },
                    { shape: 'arc', color: '#14b8a6', top: '62%', left: '8%', size: 20, delay: 1.5 },
                    { shape: 'arc', color: '#ec4899', top: '72%', left: '52%', size: 18, delay: 0.3 },
                    { shape: 'line', color: '#a855f7', top: '55%', left: '82%', size: 20, delay: 1.0 },
                    { shape: 'line', color: '#6366f1', top: '80%', left: '70%', size: 16, delay: 0.6 },
                    { shape: 'arc', color: '#eab308', top: '8%', left: '6%', size: 22, delay: 1.8 },
                    { shape: 'arc', color: '#eab308', top: '88%', left: '5%', size: 22, delay: 0.2 },
                    { shape: 'arc', color: '#14b8a6', top: '88%', left: '88%', size: 22, delay: 1.4 },
                    { shape: 'triangle', color: '#6366f1', top: '48%', left: '4%', size: 14, delay: 2.0 },
                    { shape: 'line', color: '#f43f5e', top: '30%', left: '70%', size: 18, delay: 0.9 },
                    { shape: 'arc', color: '#ec4899', top: '92%', left: '40%', size: 20, delay: 1.1 },
                ].map((s, i) => (
                    <motion.div
                        key={i}
                        style={{ position: 'absolute', top: s.top, left: s.left }}
                        animate={{ y: [0, -14, 0], rotate: [0, 20, -20, 0], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                    >
                        {s.shape === 'triangle' && (
                            <svg width={s.size * 1.2} height={s.size} viewBox="0 0 24 21" fill="none">
                                <polygon points="12,2 22,19 2,19" stroke={s.color} strokeWidth="2.5" fill="none" />
                            </svg>
                        )}
                        {s.shape === 'arc' && (
                            <svg width={s.size} height={s.size * 0.6} viewBox="0 0 30 18" fill="none">
                                <path d="M2 16 Q15 2 28 16" stroke={s.color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            </svg>
                        )}
                        {s.shape === 'line' && (
                            <svg width={s.size * 0.4} height={s.size} viewBox="0 0 8 24" fill="none">
                                <line x1="4" y1="2" x2="4" y2="22" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        )}
                    </motion.div>
                ))}
            </div>


            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="mb-12 inline-block"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
                            <img
                                src="/images/profile.jpg"
                                alt="Asish Karthikeya Gogineni"
                                className="relative w-56 h-56 rounded-full border-4 border-white/20 object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                    >
                        Asish Karthikeya{' '}
                        <span className="gradient-text">Gogineni</span>
                    </motion.h1>

                    {/* Typewriter Role */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-2xl font-semibold mb-8 h-12"
                    >
                        <span className="text-textMuted">I'm a </span>
                        <span className="text-primary">{text}</span>
                        <span className="animate-pulse text-primary">|</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm md:text-base text-textMuted max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Transforming data into intelligence and ideas into impact — blending research,
                        machine learning, and practical tech to solve real-world problems.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="glass-card p-4 hover:bg-white/10 transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="btn-primary inline-block"
                    >
                        Get In Touch
                    </motion.a>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex flex-col items-center text-textMuted"
                        >
                            <span className="text-sm mb-2">Scroll Down</span>
                            <ChevronDown size={24} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

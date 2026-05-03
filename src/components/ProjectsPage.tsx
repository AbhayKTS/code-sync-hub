import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowLeft, Calendar } from 'lucide-react';
import { projects } from '@/data/projects';
import { SystemPanel } from './SystemPanel';
import { getRankColor } from '../utils/rankUtils';

const pageFlipEase = [0.33, 1, 0.68, 1] as const;

export default function ProjectsPage({ onBack, initialProject }: { onBack: () => void, initialProject?: string | null }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        // If an initial project is provided, scroll to it; otherwise go to top
        // Use a small timeout to ensure refs are settled and layout is ready
        const scrollTimeout = setTimeout(() => {
            if (initialProject && projectRefs.current[initialProject]) {
                projectRefs.current[initialProject]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop = 0;
            }
        }, 100);

        return () => clearTimeout(scrollTimeout);
    }, [initialProject]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-foreground overflow-hidden"
        >
            {/* Archive Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-[url('/download%20(4).jpg')] bg-cover bg-fixed bg-center opacity-80"
                aria-hidden="true"
            />
            <div className="absolute inset-0 z-0 bg-background/50 backdrop-blur-[1px]" aria-hidden="true" />

            <div className="relative z-10 flex flex-col h-screen">
                {/* Header */}
                <header className="flex-shrink-0 z-50 glass-card px-6 py-4 flex items-center justify-between border-b border-primary/20 bg-background/80 backdrop-blur-md">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-primary font-manga hover:brightness-125 transition-all group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>RETURN_TO_HOME</span>
                    </button>
                    <div className="font-manga text-xl tracking-[0.3em] opacity-40">ARCHIVE_LOG: PROJECTS</div>
                </header>

                <main
                    ref={scrollContainerRef}
                    className="flex-grow container mx-auto px-4 pt-12 space-y-24 snap-y snap-mandatory overflow-y-auto custom-scrollbar-hidden scroll-smooth pb-40 flex flex-col items-center"
                >
                    {projects.map((project, index) => (
                        <motion.section
                            key={project.title}
                            ref={el => projectRefs.current[project.title] = el}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: pageFlipEase }}
                            className="relative snap-center scroll-mt-24 pt-12 w-full max-w-5xl flex-shrink-0"
                        >
                            <SystemPanel
                                title={project.title}
                                subtitle={project.category === 'startup' ? 'STARTUP & INITIATIVE' : `PROJECT_MODEL_0${index + 1}`}
                                className="border-primary/20"
                            >
                                <div className="grid lg:grid-cols-2 gap-12 py-6">
                                    {/* Intro Side */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-4 bg-primary/5 border border-primary/20 text-primary">
                                                <project.icon size={32} />
                                            </div>
                                            <div>
                                                <div className="flex gap-2 mb-2">
                                                    {(() => {
                                                        const colors = getRankColor(project.rank);
                                                        return (
                                                            <span className={`px-2 py-0.5 text-[10px] font-manga border transition-all duration-300 ${colors.border} ${colors.bg} ${colors.text} ${colors.glow}`}>
                                                                {project.rankLabel}
                                                            </span>
                                                        );
                                                    })()}
                                                    <span className="px-2 py-0.5 text-[10px] font-manga border border-foreground/20 text-foreground/60 uppercase">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Calendar size={14} />
                                                    <span className="text-xs font-manga tracking-wider uppercase">{project.date}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Screenshot Display */}
                                        {project.image && (
                                            <div className="relative group/img overflow-hidden border border-primary/10 bg-black/40">
                                                <div className="absolute inset-0 bg-primary/5 group-hover/img:bg-transparent transition-colors z-10" />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full aspect-video object-cover opacity-60 group-hover/img:opacity-100 transition-all duration-700 grayscale-[0.5] group-hover/img:grayscale-0 scale-105 group-hover/img:scale-100"
                                                />
                                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md border border-primary/20 text-[8px] font-manga text-primary opacity-0 group-hover/img:opacity-100 transition-opacity">
                                                    VISUAL_CAPTURE_0{index + 1}
                                                </div>
                                            </div>
                                        )}

                                        <p className="text-xl font-body text-foreground leading-relaxed italic">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary/80 text-xs font-manga uppercase tracking-widest">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-6 mt-8">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-manga hover:brightness-125 transition-all text-sm">
                                                    <Github size={18} />
                                                    RECOVER_SOURCE
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Details Side */}
                                    <div className="relative">
                                        <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-transparent to-transparent hidden lg:block" />
                                        <div className="space-y-6">
                                            <span className="text-[10px] font-manga tracking-[0.3em] opacity-40 uppercase text-secondary">PROJECT_CAPABILITIES</span>
                                            {project.longDescription ? (
                                                <ul className="space-y-4">
                                                    {project.longDescription.map((desc, i) => (
                                                        <li key={i} className="flex gap-3 text-foreground/80 font-body text-base leading-relaxed">
                                                            <span className="text-primary mt-1">▸</span>
                                                            {desc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-foreground/80 font-body text-base leading-relaxed">
                                                    Data entry for this terminal is still being synchronized. Core functionality is operational but detailed logs are pending.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SystemPanel>
                        </motion.section>
                    ))}
                </main>

            </div>
        </motion.div>
    );
}

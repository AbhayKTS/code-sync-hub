import { motion } from 'framer-motion';
import { Github, ExternalLink, Rocket } from 'lucide-react';
import ChapterHeader from './ChapterHeader';
import { SystemPanel } from './SystemPanel';
import { getRankColor } from '../utils/rankUtils';

// Page-flip easing for manhwa aesthetic
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

// Stagger variants for project cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotateX: -5
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

import { projects } from '@/data/projects';

export default function ProjectsSection({ onViewAll }: { onViewAll?: () => void }) {
  const featuredProjects = projects.slice(0, 3);
  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute top-10 md:top-20 right-4 md:right-10 font-manga text-[60px] md:text-[150px] text-foreground leading-none pointer-events-none"
      >
        TECH
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter Header */}
        <ChapterHeader number="CHAPTER 02" title="COMPLETED QUESTS" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-manga text-4xl md:text-6xl text-foreground relative mt-2 tracking-wider">
            <span className="text-primary">TECHNIQUES</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-base md:text-lg">Featured works from my martial journey</p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
              style={{ perspective: '1200px' }}
            >
              <SystemPanel
                title={project.title}
                subtitle={`Project_Model_0${index + 1}`}
                className="h-full border-primary/10 hover:border-primary/40 transition-colors"
                showCorners={true}
              >
                {/* Status Bar - Fix for overlaps */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    {(() => {
                      const colors = getRankColor(project.rank);
                      return (
                        <span className={`px-2 py-0.5 text-[9px] font-manga border transition-all duration-300 ${colors.border} ${colors.bg} ${colors.text} ${colors.glow}`}>
                          {project.rankLabel}
                        </span>
                      );
                    })()}
                    {project.status && (
                      <span className="px-2 py-0.5 text-[9px] font-manga border border-yellow-500/50 bg-yellow-500/10 text-yellow-500 animate-pulse">
                        {project.status.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] font-manga opacity-20 tracking-widest">
                    ID: {project.title.substring(0, 3).toUpperCase()}_{2026}
                  </div>
                </div>

                {/* Card Content Area - Fixed Padding via SystemPanel content-area */}
                <div className="relative space-y-6">
                  {/* Backdrop Image - Subdued for terminal aesthetic */}
                  {project.image && (
                    <div
                      className="absolute -right-8 -bottom-8 w-40 h-40 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 blur-[2px] group-hover:blur-0 grayscale pointer-events-none z-0"
                      style={{
                        backgroundImage: `url('${project.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maskImage: 'radial-gradient(circle at center, black, transparent)'
                      }}
                    />
                  )}

                  {/* Icon Area with Glow */}
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      className="w-14 h-14 bg-card border border-primary/20 flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                      <project.icon size={28} className="text-primary relative z-10" />
                    </motion.div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  <p className="font-body text-foreground/70 text-base leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Tech cards */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[9px] font-manga bg-primary/5 border border-primary/10 text-primary/60 uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2, color: 'var(--primary)' }}
                          className="flex items-center gap-2 text-[10px] font-manga text-foreground/40 tracking-[0.2em]"
                        >
                          <Github size={14} />
                          SOURCE
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2, color: 'var(--secondary)' }}
                          className="flex items-center gap-2 text-[10px] font-manga text-foreground/40 tracking-[0.2em]"
                        >
                          <ExternalLink size={14} />
                          DEPLOY
                        </motion.a>
                      )}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_var(--primary)] transition-all" />
                  </div>
                </div>
              </SystemPanel>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: pageFlipEase }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={onViewAll}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(29,185,84,0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-background font-manga tracking-wider border border-primary"
            style={{ boxShadow: '0 0 20px rgba(29,185,84,0.3)' }}
          >
            <Rocket size={20} />
            <span>View All Techniques</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

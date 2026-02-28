import { motion } from 'framer-motion';
import { Github, ExternalLink, Rocket, Globe, Shield, TrendingUp } from 'lucide-react';
import ChapterHeader from './ChapterHeader';
import { SystemPanel } from './SystemPanel';

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

const projects = [
  {
    title: 'CollegeVerse',
    description: 'A futuristic AI-powered student ecosystem with mentorship, identity verification, 3D digital campus, and micro-internships.',
    tech: ['React', 'AI', 'Web3', '3D'],
    github: 'https://github.com/AbhayKTS',
    status: 'Building',
    icon: Globe,
    rank: 'S',
    rankLabel: 'S-RANK',
  },
  {
    title: 'Climate Explorer',
    description: 'A climate intelligence dashboard showing temperature trends, CO2, rainfall, and anomaly insights.',
    tech: ['React', 'Data Viz', 'Analytics'],
    github: 'https://github.com/AbhayKTS/data-climate-whisperer',
    live: 'https://climate-explorer.netlify.app',
    icon: Globe,
    rank: 'A',
    rankLabel: 'A-RANK',
  },
  {
    title: 'FitChaos',
    description: 'A full fitness tracking platform (web + app) with personalized workouts and analytics.',
    tech: ['React', 'Mobile', 'Analytics'],
    github: 'https://github.com/AbhayKTS/fresh-start',
    icon: Rocket,
    rank: 'A',
    rankLabel: 'A-RANK',
  },
  {
    title: 'Samurai Oracle Network',
    description: 'A decentralized AI oracle predicting smart contract exploits before they happen.',
    tech: ['Web3', 'AI', 'Blockchain'],
    github: 'https://github.com/AbhayKTS/synergix',
    live: 'https://oracleking.netlify.app',
    icon: Shield,
    rank: 'S',
    rankLabel: 'S-RANK',
  },
  {
    title: 'SalePred',
    description: 'ML model predicting sales based on marketing spend for ROI optimization.',
    tech: ['Python', 'ML', 'Analytics'],
    github: 'https://github.com/AbhayKTS/sales_prediction',
    icon: TrendingUp,
    rank: 'B',
    rankLabel: 'B-RANK',
  },
];

export default function ProjectsSection() {
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
          {projects.map((project, index) => (
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
                    <span className={`px-2 py-0.5 text-[9px] font-manga border ${project.rank === 'S' ? 'border-primary bg-primary/20 text-primary' : 'border-secondary bg-secondary/20 text-secondary'
                      }`}>
                      {project.rankLabel}
                    </span>
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
                  {/* Icon Area with Glow */}
                  <div className="flex items-center gap-4">
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

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: pageFlipEase }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/AbhayKTS"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(29,185,84,0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-background font-manga tracking-wider border border-primary"
            style={{ boxShadow: '0 0 20px rgba(29,185,84,0.3)' }}
          >
            <Github size={20} />
            <span>View All Techniques</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

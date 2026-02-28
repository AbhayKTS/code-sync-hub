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
        className="absolute top-20 right-10 font-manga text-[150px] text-foreground leading-none pointer-events-none"
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
          className="text-center mb-16"
        >
          <h2 className="font-manga text-5xl md:text-6xl text-foreground relative mt-2 tracking-wider">
            <span className="text-primary">TECHNIQUES</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">Featured works from my martial journey</p>
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
              style={{ perspective: '1000px' }}
            >
              <SystemPanel
                title={project.title}
                subtitle={project.rankLabel}
                className="h-full"
                showCorners={true}
              >
                {/* Rank badge - absolute positioned inside SystemPanel */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute -top-12 -right-2 z-20"
                >
                  <div
                    className={`px-3 py-1 font-manga text-sm border ${project.rank === 'S'
                      ? 'bg-primary/20 border-primary text-primary'
                      : project.rank === 'A'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                        : 'bg-teal-500/20 border-teal-500 text-teal-400'
                      }`}
                    style={{ boxShadow: project.rank === 'S' ? '0 0 15px rgba(29,185,84,0.4)' : undefined }}
                  >
                    {project.rank}
                  </div>
                </motion.div>

                {/* Status badge for building projects */}
                {project.status && (
                  <div className="absolute -top-12 left-0 z-20">
                    <span className="px-2 py-1 text-[10px] font-manga tracking-wider bg-yellow-500/20 border border-yellow-500/50 text-yellow-400">
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative pt-2">
                  {/* Icon Area */}
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-black/40 border border-primary/30 flex items-center justify-center"
                      style={{ boxShadow: '0 0 15px rgba(29,185,84,0.1)' }}
                    >
                      <project.icon size={24} className="text-primary" />
                    </motion.div>

                    <div className="font-manga text-3xl text-foreground/5 select-none">
                      0{index + 1}
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-body bg-primary/5 border border-primary/20 text-primary/80 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 border-t border-primary/10 pt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2, color: '#1DB954' }}
                        className="flex items-center gap-2 text-xs font-manga text-foreground/60 hover:text-primary transition-colors tracking-widest"
                      >
                        <Github size={14} />
                        CODE
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2, color: '#1DB954' }}
                        className="flex items-center gap-2 text-xs font-manga text-foreground/60 hover:text-primary transition-colors tracking-widest"
                      >
                        <ExternalLink size={14} />
                        LIVE
                      </motion.a>
                    )}
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

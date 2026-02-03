import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Sparkles, Zap, Sword, Star } from 'lucide-react';

const projects = [
  {
    title: 'Code Sync Hub',
    description: 'Real-time collaborative code editor with live synchronization. Built for developers who love working together.',
    tech: ['React', 'WebSocket', 'Node.js', 'Monaco Editor'],
    github: 'https://github.com/AbhayKTS/code-sync-hub',
    color: 'from-pastel-blue via-secondary to-pastel-lavender',
    accentColor: 'secondary',
    icon: Code2,
    rank: 'S',
  },
  {
    title: 'AI Story Generator',
    description: 'An intelligent story creation tool powered by machine learning that crafts unique narratives.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    color: 'from-pastel-pink via-primary to-pastel-peach',
    accentColor: 'primary',
    icon: Sparkles,
    rank: 'A',
  },
  {
    title: 'Portfolio Showcase',
    description: 'This very website! A manhwa-inspired portfolio showcasing creativity and code.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    color: 'from-pastel-mint via-accent to-pastel-lavender',
    accentColor: 'accent',
    icon: Zap,
    rank: 'S',
  },
];

const rankColors: Record<string, string> = {
  'S': 'from-action-gold to-yellow-300 text-manga-border',
  'A': 'from-primary to-pink-300 text-white',
  'B': 'from-secondary to-cyan-300 text-white',
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-20 right-10 font-manga text-[200px] text-manga-border leading-none pointer-events-none"
      >
        作品
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-manga text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 02</span>
          <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-secondary text-3xl md:text-4xl">「</span>
            MY <span className="text-secondary">ARSENAL</span>
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-secondary text-3xl md:text-4xl">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">Featured works from my coding journey</p>
        </motion.div>

        {/* Project cards - comic panel grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12, rotate: 0, transition: { duration: 0.3 } }}
              className="manga-panel group relative"
            >
              {/* Rank badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                className={`absolute -top-4 -right-4 z-20 w-14 h-14 rounded-xl bg-gradient-to-br ${rankColors[project.rank]} flex items-center justify-center font-manga text-2xl border-3 border-manga-border shadow-manga`}
              >
                {project.rank}
              </motion.div>

              {/* Header gradient with icon */}
              <div className={`h-36 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                {/* Action lines effect */}
                <div className="absolute inset-0 action-lines opacity-20" />
                
                {/* Halftone overlay */}
                <div className="halftone absolute inset-0" />
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/50"
                >
                  <project.icon size={28} className="text-white drop-shadow-lg" />
                </motion.div>

                {/* Chapter number */}
                <div className="absolute bottom-4 right-4 font-manga text-6xl text-white/20">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Decorative stars */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-16 opacity-50"
                >
                  <Star size={16} className="text-white fill-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-manga text-2xl text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  <Sword size={20} className="text-muted-foreground" />
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-manga bg-pastel-cream rounded-lg border border-manga-border/20 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-2 text-sm font-manga text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  )}
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, x: 3 }}
                    className="flex items-center gap-2 text-sm font-manga text-foreground hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </motion.a>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-t from-${project.accentColor}/10 to-transparent`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/AbhayKTS"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="manga-btn bg-gradient-to-r from-pastel-lavender to-pastel-pink text-foreground inline-flex"
          >
            <Github size={22} />
            <span>See More on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
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
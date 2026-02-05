import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Scroll, Sword, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Code Sync Hub',
    description: 'Real-time collaborative code editor with live synchronization. Built for developers who love working together.',
    tech: ['React', 'WebSocket', 'Node.js', 'Monaco Editor'],
    github: 'https://github.com/AbhayKTS/code-sync-hub',
    icon: Code2,
    rank: '甲',
    rankLabel: 'S-RANK',
  },
  {
    title: 'AI Story Generator',
    description: 'An intelligent story creation tool powered by machine learning that crafts unique narratives.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    icon: Scroll,
    rank: '乙',
    rankLabel: 'A-RANK',
  },
  {
    title: 'Portfolio Showcase',
    description: 'This very website! A manhwa-inspired portfolio showcasing creativity and code.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    icon: Shield,
    rank: '甲',
    rankLabel: 'S-RANK',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative ink element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute top-20 right-10 font-manga text-[200px] text-foreground leading-none pointer-events-none"
      >
        武功
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 02</span>
          <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2 tracking-wider">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">「</span>
            武功
            <span className="block text-primary text-4xl md:text-5xl mt-2">TECHNIQUES</span>
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">Featured works from my martial journey</p>
        </motion.div>

        {/* Project cards - panel grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="manga-panel group relative overflow-hidden"
            >
              {/* Rank badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="absolute -top-1 -right-1 z-20 rank-badge"
              >
                <span className="font-manga text-lg">{project.rank}</span>
              </motion.div>

              {/* Header with icon */}
              <div className="h-36 bg-foreground relative overflow-hidden">
                {/* Ink texture */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                  }}
                />
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 left-4 w-12 h-12 bg-parchment/20 border-2 border-parchment/30 flex items-center justify-center"
                >
                  <project.icon size={24} className="text-parchment" />
                </motion.div>

                {/* Rank label */}
                <div className="absolute bottom-4 left-4 font-manga text-xs text-parchment/60 tracking-widest">
                  {project.rankLabel}
                </div>

                {/* Chapter number */}
                <div className="absolute bottom-4 right-4 font-manga text-5xl text-parchment/10">
                  {['壹', '貳', '參'][index]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-manga text-xl text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2 tracking-wide">
                  <Sword size={18} className="text-primary" />
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
                      className="skill-tag-sm"
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
                      whileHover={{ x: 2 }}
                      className="flex items-center gap-2 text-sm font-manga text-foreground hover:text-primary transition-colors tracking-wide"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  <motion.a
                    href="#"
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-2 text-sm font-manga text-foreground hover:text-primary transition-colors tracking-wide"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-t from-primary/5 to-transparent" />
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
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 2, y: 2 }}
            className="manga-btn bg-foreground text-parchment inline-flex"
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
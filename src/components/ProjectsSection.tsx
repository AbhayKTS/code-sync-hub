import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Sparkles, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Code Sync Hub',
    description: 'Real-time collaborative code editor with live synchronization. Built for developers who love working together.',
    tech: ['React', 'WebSocket', 'Node.js', 'Monaco Editor'],
    github: 'https://github.com/AbhayKTS/code-sync-hub',
    color: 'from-pastel-blue to-pastel-lavender',
    icon: Code2,
  },
  {
    title: 'AI Story Generator',
    description: 'An intelligent story creation tool powered by machine learning that crafts unique narratives.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    color: 'from-pastel-pink to-pastel-peach',
    icon: Sparkles,
  },
  {
    title: 'Portfolio Showcase',
    description: 'This very website! A manhwa-inspired portfolio showcasing creativity and code.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    color: 'from-pastel-mint to-pastel-blue',
    icon: Zap,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-manga text-4xl md:text-5xl text-foreground inline-block relative">
            <span className="absolute -left-8 top-0 text-secondary text-2xl">「</span>
            Projects
            <span className="absolute -right-8 top-0 text-secondary text-2xl">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">Featured works from my coding journey</p>
        </motion.div>

        {/* Comic panel grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="manga-panel group relative overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative`}>
                {/* Comic effect lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px bg-manga-border"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: 0,
                        right: 0,
                        transform: `rotate(${-5 + i}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <project.icon size={24} className="text-white" />
                </div>

                {/* Chapter number */}
                <div className="absolute bottom-4 left-4 font-manga text-5xl text-white/30">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-manga text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-body bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-body text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-body text-foreground hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none rounded-lg" />
            </motion.div>
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AbhayKTS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-manga text-lg text-foreground hover:text-primary transition-colors group"
          >
            <Github size={20} />
            See more on GitHub
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

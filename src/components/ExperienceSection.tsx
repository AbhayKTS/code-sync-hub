import { motion } from 'framer-motion';
import { Code, GraduationCap, Rocket, Trophy, Users } from 'lucide-react';
import ChapterHeader from './ChapterHeader';

// Page-flip easing for manhwa aesthetic
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

// Timeline item variants
const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -50, rotateY: 10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 50, rotateY: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

const timelineEvents = [
  {
    year: '2026',
    title: 'Building CollegeVerse',
    description: 'No wins yet, building CollegeVerse and expanding AI/Web3 skills. The journey continues...',
    icon: Rocket,
    type: 'current',
  },
  {
    year: '2025',
    title: 'First Hackathon Year',
    description: 'First hackathon experience. Won 2 hackathons and received 1 special recognition. Started serious development journey.',
    icon: Trophy,
    type: 'achievement',
    links: [
      { label: 'Quick Greet Generator', url: 'https://github.com/AbhayKTS/quick-greet-generator' },
    ],
    teammates: [
      { name: 'ansh-codr', url: 'https://github.com/ansh-codr' },
      { name: 'LittleCodr', url: 'https://github.com/LittleCodr' },
    ],
  },
  {
    year: '2024',
    title: 'Started Programming',
    description: 'Began exploring the world of code. First steps into the cultivation of digital arts.',
    icon: Code,
    type: 'milestone',
  },
  {
    year: 'Education',
    title: 'Academic Journey',
    description: 'APS Nagrota (Pre-primary) → KV Nagrota (1-10) → KV Baad Mathura (11-12) → GLA University (B.Tech CSE AI/ML)',
    icon: GraduationCap,
    type: 'education',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 font-manga text-[120px] text-foreground leading-none pointer-events-none"
      >
        PATH
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter Header */}
        <ChapterHeader number="CHAPTER 03" title="CULTIVATION PATH" />
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-manga text-5xl md:text-6xl text-foreground relative mt-2 tracking-wider">
            <span className="text-primary">JOURNEY</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">The cultivation path...</p>
        </motion.div>

        {/* Vertical timeline */}
        <motion.div 
          className="relative max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={timelineVariants}
        >
          {/* Central timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-primary/30" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={index % 2 === 0 ? itemLeftVariants : itemRightVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Timeline node */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-black border-2 border-primary md:-translate-x-1/2 z-10"
                style={{ boxShadow: '0 0 15px rgba(29,185,84,0.4)' }}
              />

              {/* Content card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
              >
                <div 
                  className="p-5 relative border border-primary/40 bg-black/60"
                  style={{ boxShadow: '0 0 20px rgba(29,185,84,0.1)' }}
                >
                  {/* Year badge */}
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className={`absolute -top-3 ${index % 2 === 0 ? 'right-4' : 'left-4'} px-3 py-1 bg-primary text-background font-manga text-sm`}
                    style={{ boxShadow: '0 0 10px rgba(29,185,84,0.4)' }}
                  >
                    {event.year}
                  </motion.div>

                  {/* Type indicator */}
                  <div className="absolute top-3 right-3">
                    {event.type === 'current' && (
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse inline-block" />
                    )}
                    {event.type === 'achievement' && (
                      <Trophy size={14} className="text-yellow-500" />
                    )}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-10 h-10 bg-black/80 border border-primary/50 flex items-center justify-center mb-3"
                    style={{ boxShadow: '0 0 10px rgba(29,185,84,0.2)' }}
                  >
                    <event.icon size={20} className="text-primary" />
                  </div>

                  <h3 className="font-manga text-lg text-foreground mb-2 tracking-wide">
                    {event.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {event.description}
                  </p>

                  {/* Links */}
                  {event.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {event.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline font-body"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Teammates */}
                  {event.teammates && (
                    <div className="mt-3 pt-3 border-t border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={12} className="text-primary/60" />
                        <span className="text-[10px] text-primary/60 font-manga tracking-wider">TEAMMATES</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {event.teammates.map((mate) => (
                          <a
                            key={mate.url}
                            href={mate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-foreground/70 hover:text-primary transition-colors"
                          >
                            @{mate.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Corner decorations */}
                  <span className="absolute top-1 left-1 w-3 h-3 border-t border-l border-primary/40" />
                  <span className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-primary/40" />
                </div>
              </motion.div>

              {/* Spacer */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4, ease: pageFlipEase }}
            className="absolute left-8 md:left-1/2 bottom-0 md:-translate-x-1/2"
          >
            <div 
              className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center"
              style={{ boxShadow: '0 0 20px rgba(29,185,84,0.5)' }}
            >
              <span className="font-manga text-background text-lg">→</span>
            </div>
          </motion.div>
        </motion.div>

        {/* To be continued */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: pageFlipEase }}
          className="text-center mt-20"
        >
          <div 
            className="inline-block px-8 py-4 bg-black/60 border border-primary/40"
            style={{ boxShadow: '0 0 30px rgba(29,185,84,0.2)' }}
          >
            <p className="font-manga text-xl md:text-2xl text-foreground tracking-widest">
              TO BE CONTINUED...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

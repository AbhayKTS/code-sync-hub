import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Sword, Crown } from 'lucide-react';

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
    year: '2024',
    title: 'Senior Frontend Developer',
    description: 'Leading frontend architecture and mentoring junior disciples',
    icon: Crown,
    rank: '宗師',
  },
  {
    year: '2023',
    title: 'AI Integration Specialist',
    description: 'Integrated AI cultivation techniques into web applications',
    icon: Rocket,
    rank: '長老',
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    description: 'Building responsive and interactive web experiences',
    icon: Briefcase,
    rank: '弟子',
  },
  {
    year: '2021',
    title: 'Started Coding Journey',
    description: 'Began learning the fundamental martial arts of web development',
    icon: GraduationCap,
    rank: '入門',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 font-manga text-[150px] text-foreground leading-none pointer-events-none"
      >
        歷程
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 03</span>
          <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2 tracking-wider">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">「</span>
            歷程
            <span className="block text-primary text-4xl md:text-5xl mt-2">JOURNEY</span>
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">」</span>
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
          {/* Central timeline line - ink brush style */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-foreground/30" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={index % 2 === 0 ? itemLeftVariants : itemRightVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Timeline node */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-parchment border-2 border-foreground md:-translate-x-1/2 z-10"
              />

              {/* Content card - murim panel style */}
              <motion.div 
                whileHover={{ y: -4 }}
                className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
              >
                <div className="manga-panel p-6 relative border-l-2 border-primary">
                  {/* Year badge */}
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className={`absolute -top-3 ${index % 2 === 0 ? 'right-4 md:right-4' : 'left-4 md:left-4'} rank-badge`}
                  >
                    <span>{event.year}</span>
                  </motion.div>

                  {/* Rank indicator */}
                  <div className="absolute top-4 right-4 font-manga text-2xl text-primary/30">
                    {event.rank}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-foreground flex items-center justify-center mb-4 ink-shadow">
                    <event.icon size={22} className="text-parchment" />
                  </div>

                  <h3 className="font-manga text-lg text-foreground mb-2 flex items-center gap-2 tracking-wide">
                    <Sword size={16} className="text-primary" />
                    {event.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {event.description}
                  </p>

                  {/* Chapter number - Chinese numeral */}
                  <div className="absolute bottom-2 right-4 chapter-number">
                    {['壹', '貳', '參', '肆'][index]}
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-foreground/20" />
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
            <div className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center ink-shadow">
              <span className="font-manga text-parchment text-lg">→</span>
            </div>
          </motion.div>
        </motion.div>

        {/* To be continued - murim style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: pageFlipEase }}
          className="text-center mt-20"
        >
          <div className="inline-block system-panel px-8 py-4">
            <p className="font-manga text-xl md:text-2xl text-parchment tracking-widest">
              修煉未完 • TO BE CONTINUED...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
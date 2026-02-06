import { motion } from "framer-motion";
import { SystemPanel, StatDisplay, SystemTag } from "./SystemPanel";
import ChapterHeader from './ChapterHeader';
import TechniqueCards from './TechniqueCards';
import { Trophy, Code, GraduationCap, Cpu, Database, Cloud, Bot } from 'lucide-react';

// Page-flip easing
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

// Stagger variants for grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

const coreStats = [
  { label: "HACKATHONS", value: "10-11", icon: <Trophy size={16} /> },
  { label: "WINS", value: "2", icon: <Trophy size={16} /> },
  { label: "SPECIAL", value: "1", icon: <Trophy size={16} /> },
];

const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Web3", "AI/ML", "Flask", "Django"
];

const tools = [
  { name: "VS Code", icon: <Code size={14} /> },
  { name: "Git", icon: <Code size={14} /> },
  { name: "Firebase", icon: <Database size={14} /> },
  { name: "Supabase", icon: <Database size={14} /> },
  { name: "ChatGPT", icon: <Bot size={14} /> },
];

const strongAreas = [
  { name: "Full-Stack Development", icon: <Cpu size={16} /> },
  { name: "Machine Learning", icon: <Bot size={16} /> },
  { name: "AI Integration", icon: <Cloud size={16} /> },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ink-black rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter Header */}
        <ChapterHeader number="CHAPTER 01" title="CHARACTER PROFILE" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: pageFlipEase }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4 tracking-wider">
            ABOUT <span className="text-primary">ME</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Bio Panel */}
          <motion.div variants={panelVariants}>
            <SystemPanel title="CULTIVATOR INFO" className="h-full">
              <div className="space-y-6">
                {/* Bio */}
                <div className="content-box p-4">
                  <p className="font-crimson text-lg text-foreground/90 leading-relaxed">
                    I'm a full-stack developer exploring Web3, building modern apps with clean UIs and solid backends. 
                    Powered by AI, I move fast — experimenting, learning, and pushing ideas into real products. 
                    Inspired by manhwa and cultivation novels, I blend creativity with code to craft futuristic digital experiences.
                  </p>
                </div>

                {/* Current Role */}
                <div className="p-4 bg-black/40 border border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="font-manga text-sm text-primary tracking-wider">CURRENT STATUS</span>
                  </div>
                  <p className="font-crimson text-foreground/80">
                    Full-stack Developer • Web3 Learner
                  </p>
                  <p className="font-crimson text-foreground/60 text-sm mt-1">
                    B.Tech CSE (AI/ML) • 2nd Year • GLA University
                  </p>
                </div>

                {/* Hackathon Stats */}
                <div>
                  <span className="font-manga text-sm text-primary tracking-wider block mb-3">HACKATHON STATS</span>
                  <div className="grid grid-cols-3 gap-2">
                    {coreStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.4, ease: pageFlipEase }}
                      >
                        <StatDisplay label={stat.label} value={stat.value} icon={stat.icon} />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">First hackathon was in 2025</p>
                </div>

                {/* Strong Areas */}
                <div className="space-y-2">
                  <span className="font-manga text-sm text-primary tracking-wider">STRONG AREAS</span>
                  <div className="flex flex-wrap gap-2">
                    {strongAreas.map((area) => (
                      <SystemTag key={area.name} icon={area.icon} variant="active">
                        {area.name}
                      </SystemTag>
                    ))}
                  </div>
                </div>
              </div>
            </SystemPanel>
          </motion.div>

          {/* Tech Stack Panel */}
          <motion.div variants={panelVariants} className="relative">
            <SystemPanel title="TECH ARSENAL" className="h-full">
              <div className="space-y-6">
                {/* Tech Stack Tags */}
                <div>
                  <span className="font-manga text-sm text-primary/70 tracking-wider block mb-3">LANGUAGES & FRAMEWORKS</span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index }}
                        className="px-3 py-1.5 bg-black/50 border border-primary/40 text-foreground text-sm font-body hover:bg-primary/20 hover:border-primary transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <span className="font-manga text-sm text-primary/70 tracking-wider block mb-3">TOOLS</span>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <SystemTag key={tool.name} icon={tool.icon}>
                        {tool.name}
                      </SystemTag>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="content-box border-l-4 border-primary p-4 mt-4">
                  <p className="font-crimson italic text-foreground/70">
                    "The code that flows from my fingers is not mere logic — it is the crystallization 
                    of countless experiments in the realm of silicon and light."
                  </p>
                  <p className="text-right text-primary font-cinzel text-sm mt-2">— Chaos_Immortal</p>
                </div>
              </div>
            </SystemPanel>
          </motion.div>
        </motion.div>

        {/* Technique Level Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: pageFlipEase }}
          className="mt-12"
        >
          <SystemPanel title="MURIM TECHNIQUE LEVELS" subtitle="MARTIAL ARTS PROFICIENCY">
            <TechniqueCards />
          </SystemPanel>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SystemPanel, StatDisplay, SystemTag } from "./SystemPanel";
import ChapterHeader from './ChapterHeader';
import TechniqueCards from './TechniqueCards';
import { Trophy, Code, GraduationCap, Cpu, Database, Cloud, Bot, Zap } from 'lucide-react';

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

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript", "Python", "Java", "SQL", "C"],
    icon: <Code size={14} />
  },
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS"],
    icon: <Cpu size={14} />
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "FastAPI", "REST APIs", "Flask", "Django"],
    icon: <Database size={14} />
  },
  {
    title: "CLOUD & DEVOPS",
    skills: ["Firebase", "GCP", "Azure", "Netlify", "Render", "Vercel", "IPFS"],
    icon: <Cloud size={14} />
  },
  {
    title: "WEB3 & BLOCKCHAIN",
    skills: ["Solidity", "MetaMask", "Smart Contracts", "Polygon"],
    icon: <Zap size={14} />
  }
];

const strongAreas = [
  { name: "Full-Stack Development", icon: <Cpu size={16} /> },
  { name: "Machine Learning", icon: <Bot size={16} /> },
  { name: "AI Integration", icon: <Cloud size={16} /> },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-background/50">
      {/* Background HUD elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter Header */}
        <ChapterHeader number="CHAPTER 01" title="CHARACTER PROFILE" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-manga font-black text-foreground mb-4 tracking-tighter uppercase relative z-10">
            CHARACTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">LEVEL</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 md:w-12 bg-primary/40" />
            <span className="font-manga text-primary tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm uppercase">LV. 13 RANK: S-RANK</span>
            <div className="h-px w-8 md:w-12 bg-primary/40" />
          </div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Bio Panel */}
          <motion.div variants={panelVariants}>
            <SystemPanel title="PLAYER_AUTO_BIO" subtitle="CULTIVATOR OVERVIEW" className="h-full">
              <div className="space-y-8 md:space-y-10">
                {/* Bio */}
                <div className="relative">
                  <span className="absolute -left-2 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent" />
                  <p className="text-lg md:text-xl text-foreground font-body leading-relaxed pl-3 md:pl-2">
                    I'm a full-stack developer exploring <span className="text-secondary font-bold">Web3</span>, building modern apps with clean UIs and solid backends.
                    Powered by AI, I move fast — experimenting, learning, and pushing ideas into real products.
                    Inspired by <span className="text-primary font-bold">manhwa</span> and cultivation novels, I blend creativity with code to craft futuristic digital experiences.
                  </p>
                </div>

                {/* Current Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 md:p-6 bg-primary/5 border border-primary/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2 opacity-60">
                      <GraduationCap size={16} className="text-primary" />
                      <span className="text-[8px] md:text-[9px] font-manga uppercase tracking-widest">POSITION</span>
                    </div>
                    <p className="font-manga text-base md:text-lg text-white">TECH CULTIVATOR</p>
                  </div>
                  <div className="p-4 md:p-6 bg-secondary/5 border border-secondary/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2 opacity-60">
                      <Cpu size={16} className="text-secondary" />
                      <span className="text-[8px] md:text-[9px] font-manga uppercase tracking-widest">YEAR</span>
                    </div>
                    <p className="font-manga text-base md:text-lg text-white">PLAYER_LEVEL 02</p>
                  </div>
                </div>

                {/* Performance Memory Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden border border-primary/20 bg-black/40 mt-4"
                >
                  <motion.img
                    src="/1771659636539 (1).jpg"
                    alt="Hackathon Memory"
                    className="w-full h-auto max-h-[600px] object-contain transition-all duration-700 grayscale group-hover:grayscale-0 md:grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-primary/20 backdrop-blur-sm border border-primary/40">
                    <span className="text-[8px] font-manga text-primary tracking-widest uppercase">STORAGE_LOG: PERFORMANCE_VERIFICATION</span>
                  </div>
                </motion.div>
              </div>
            </SystemPanel>
          </motion.div>

          {/* Tech Stack Panel */}
          <motion.div variants={panelVariants} className="relative">
            <SystemPanel title="SKILL_INVENTORY" subtitle="ARSENAL_MODULE_v2" className="h-full">
              <div className="space-y-10">
                {/* Categorized Skills */}
                <div className="space-y-8">
                  {skillCategories.map((category, catIndex) => (
                    <div key={category.title} className="space-y-3">
                      <div className="flex items-center gap-2 opacity-60">
                        {category.icon}
                        <span className="text-[10px] font-manga tracking-widest uppercase text-secondary">{category.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                            className="px-3 py-1.5 bg-muted/30 border border-white/5 text-foreground/80 text-[11px] font-body hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all cursor-default backdrop-blur-md"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Level Progress Indicator */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-manga text-[10px] opacity-60">
                    <span>OVERALL_EXP</span>
                    <span>92.4%</span>
                  </div>
                  <div className="system-progress h-2">
                    <motion.div
                      className="system-progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92.4%' }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Hackathon Stats - Redesigned as Status Window */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] md:text-[11px] font-manga tracking-widest uppercase opacity-60">
                    <span>HACKATHON_STATISTICS</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                    <StatDisplay label="PARTICIPATION" value="15" rank="A" icon={<Cpu size={12} />} />
                    <StatDisplay label="VICTORIES" value="04" rank="SSS" icon={<Trophy size={12} />} />
                    <StatDisplay label="SPECIAL" value="01" rank="SS" icon={<Trophy size={12} />} />
                    <StatDisplay label="FINALIST" value="09" rank="S" icon={<Trophy size={12} />} />
                  </div>
                </div>

                {/* Strong Areas */}
                <div className="space-y-4">
                  <span className="text-[10px] font-manga tracking-widest opacity-40 uppercase text-secondary">CORE_PROFICIENCIES</span>
                  <div className="flex flex-wrap gap-3">
                    {strongAreas.map((area) => (
                      <SystemTag key={area.name} icon={area.icon} variant="active">
                        {area.name}
                      </SystemTag>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative p-8 mt-6 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 border border-primary/10 -skew-x-6" />
                  <p className="relative z-10 font-manga text-sm text-foreground/80 italic leading-relaxed">
                    "The code that flows from my fingers is not mere logic — it is the crystallization
                    of countless experiments in the realm of silicon and light."
                  </p>
                  <p className="relative z-10 text-right text-primary font-manga text-[10px] mt-4 tracking-widest">— Chaos_Immortal</p>
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
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="mt-16"
        >
          <SystemPanel title="MARTIAL_ARTS_MODULE" subtitle="MURIM_TECHNIQUES" showCorners={false}>
            <TechniqueCards />
          </SystemPanel>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SystemPanel, SkillCard, StatDisplay, SystemTag } from "./SystemPanel";
import ChapterHeader from './ChapterHeader';
import MangaSFX from './MangaSFX';
import MurimTooltip from './MurimTooltip';

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

const skills = [
  { name: "React/TypeScript", level: 9, maxLevel: 10, description: "Mastery of modern frontend architecture", rank: "S" as const },
  { name: "Node.js/Python", level: 9, maxLevel: 10, description: "Backend cultivation complete", rank: "S" as const },
  { name: "Cloud Architecture", level: 8, maxLevel: 10, description: "Azure and AWS formation mastery", rank: "A" as const },
  { name: "System Design", level: 8, maxLevel: 10, description: "Architect-level comprehension", rank: "S" as const },
  { name: "Database Arts", level: 8, maxLevel: 10, description: "SQL and NoSQL dual cultivation", rank: "A" as const },
  { name: "DevOps Flow", level: 7, maxLevel: 10, description: "CI/CD pipeline techniques", rank: "B" as const },
];

const coreStats = [
  { label: "PROJECTS", value: "50+", tooltip: "Countless artifacts forged in the fires of production. Each one a testament to battles won.", rank: "S" as const },
  { label: "EXPERIENCE", value: "5Y", tooltip: "Five cycles of cultivation in the digital realm. Wisdom accumulated through code and conflict.", rank: "A" as const },
  { label: "COMMITS", value: "2K+", tooltip: "Over 2000 inscriptions in the sacred git scrolls. Each commit a step forward on the path.", rank: "A" as const },
  { label: "CERTS", value: "8", tooltip: "Eight official seals of recognition from the great cloud sects: Azure, AWS, and beyond.", rank: "B" as const },
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
        <ChapterHeader number="CHAPTER 02" title="ABILITIES UNLOCKED" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: pageFlipEase }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4 tracking-wider">
            CHARACTER <span className="text-primary">PROFILE</span>
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
          <motion.div variants={panelVariants}>
            <SystemPanel title="CULTIVATOR INFO" className="h-full">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {coreStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4, ease: pageFlipEase }}
                    >
                      <MurimTooltip 
                        content={stat.tooltip} 
                        title={`[${stat.label}]`}
                        rank={stat.rank}
                      >
                        <div className="cursor-help">
                          <StatDisplay label={stat.label} value={stat.value} />
                        </div>
                      </MurimTooltip>
                    </motion.div>
                  ))}
                </div>

                <div className="content-box p-4">
                  <p className="font-crimson text-lg text-foreground/90 leading-relaxed">
                    A wandering cultivator who has walked the path of code for many cycles. 
                    Specializing in the ancient arts of full-stack development, I forge 
                    digital weapons that cut through complexity like a blade through silk.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <MurimTooltip 
                    content="You have achieved mastery over the frontend realm. React, Vue, and Angular bow before your presence."
                    title="[Frontend Master]"
                    rank="A"
                  >
                    <SystemTag>Frontend Master</SystemTag>
                  </MurimTooltip>
                  <MurimTooltip 
                    content="Server-side cultivation has reached the Adept stage. APIs and databases respond to your commands."
                    title="[Backend Adept]"
                    rank="B"
                  >
                    <SystemTag variant="active">Backend Adept</SystemTag>
                  </MurimTooltip>
                  <MurimTooltip 
                    content="A legendary achievement! You have transcended mortal infrastructure and now command the clouds themselves."
                    title="[Cloud Architect]"
                    rank="S"
                  >
                    <SystemTag variant="legendary">Cloud Architect</SystemTag>
                  </MurimTooltip>
                  <MurimTooltip 
                    content="You see the patterns that connect all systems. Your architectural insights guide entire development clans."
                    title="[System Designer]"
                    rank="A"
                  >
                    <SystemTag>System Designer</SystemTag>
                  </MurimTooltip>
                </div>

                <div className="content-box border-l-4 border-primary p-4 mt-4">
                  <p className="font-crimson italic text-foreground/70">
                    "The code that flows from my fingers is not mere logic - it is the crystallization 
                    of countless battles fought in the realm of silicon and light."
                  </p>
                  <p className="text-right text-primary font-cinzel text-sm mt-2">- The Developer</p>
                </div>
              </div>
            </SystemPanel>
          </motion.div>

          <motion.div variants={panelVariants} className="relative">
            {/* Manga SFX */}
            <MangaSFX 
              text="SHFF!" 
              type="shff" 
              className="absolute -top-4 -right-2 z-10"
              delay={0.3}
            />
            <SystemPanel title="MARTIAL TECHNIQUES" className="h-full">
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      maxLevel={skill.maxLevel}
                      description={skill.description}
                      rank={skill.rank}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6 pt-4 border-t-2 border-primary/30"
              >
                <div className="flex justify-between items-center">
                  <span className="font-cinzel font-bold text-foreground">TOTAL CULTIVATION</span>
                  <span className="font-cinzel text-2xl text-primary font-bold">
                    {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
                  </span>
                </div>
                <div className="h-3 bg-background border-2 border-primary/30 mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </motion.div>
            </SystemPanel>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: pageFlipEase }}
          className="mt-8"
        >
          <SystemPanel title="BONUS TECHNIQUES">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Code Review", desc: "Piercing gaze that finds all bugs", icon: "eye", rank: "A" as const, tooltip: "Your eyes have been trained to see through deception. No bug can hide from your reviewing gaze." },
                { name: "Debug Mastery", desc: "Console.log no jutsu activated", icon: "search", rank: "S" as const, tooltip: "The ancient art of Console-jutsu. Stack traces bow before your debugging prowess." },
                { name: "Deploy Arts", desc: "One-click production release", icon: "rocket", rank: "A" as const, tooltip: "With a single keystroke, your code ascends to the heavenly production servers." },
              ].map((technique, index) => (
                <MurimTooltip 
                  key={technique.name}
                  content={technique.tooltip}
                  title={`[${technique.name}]`}
                  rank={technique.rank}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="manhwa-card p-4 cursor-pointer"
                    style={{ transform: `rotate(${index === 1 ? 0.5 : index === 0 ? -0.8 : 1.2}deg)` }}
                  >
                    <div className="text-2xl mb-2 font-cinzel text-primary">[{technique.icon}]</div>
                    <h4 className="font-cinzel font-bold text-foreground">{technique.name}</h4>
                    <p className="font-crimson text-sm text-foreground/60">{technique.desc}</p>
                  </motion.div>
                </MurimTooltip>
              ))}
            </div>
          </SystemPanel>
        </motion.div>
      </div>
    </section>
  );
}

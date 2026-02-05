import { useState } from "react";import { motion } from 'framer-motion';

import { motion, AnimatePresence } from "framer-motion";import { Code, Palette, Brain, Sword, Shield, Scroll, Star, Target, Zap } from 'lucide-react';

import { SystemPanel, SkillCard, StatDisplay, SystemTag, useSystemSound } from "./SystemPanel";import { SystemPanel, SystemTag, SkillCard, StatDisplay } from './SystemPanel';



const skills = [const skills = [

  { name: "React/TypeScript", level: 95, description: "Mastery of modern frontend architecture", rank: "S" },  { name: 'React', icon: Code, level: 9, rank: 'S' as const, description: 'Component architecture mastery' },

  { name: "Node.js/Python", level: 90, description: "Backend cultivation complete", rank: "S" },  { name: 'TypeScript', icon: Sword, level: 8, rank: 'A' as const, description: 'Type-safe development' },

  { name: "Cloud Architecture", level: 85, description: "Azure & AWS formation mastery", rank: "A" },  { name: 'Tailwind CSS', icon: Palette, level: 9, rank: 'S' as const, description: 'Rapid UI styling' },

  { name: "System Design", level: 88, description: "Architect-level comprehension", rank: "S" },  { name: 'Next.js', icon: Shield, level: 7, rank: 'A' as const, description: 'Full-stack React framework' },

  { name: "Database Arts", level: 82, description: "SQL & NoSQL dual cultivation", rank: "A" },  { name: 'AI/ML', icon: Brain, level: 6, rank: 'B' as const, description: 'Machine learning integration' },

  { name: "DevOps Flow", level: 78, description: "CI/CD pipeline techniques", rank: "B" },  { name: 'Node.js', icon: Scroll, level: 7, rank: 'A' as const, description: 'Server-side JavaScript' },

];];



const coreStats = [const stats = [

  { label: "PROJECTS", value: "50+" },  { label: 'Years Training', value: '3+', icon: <Zap size={16} /> },

  { label: "EXPERIENCE", value: "5Y" },  { label: 'Techniques', value: '20+', icon: <Sword size={16} /> },

  { label: "COMMITS", value: "2K+" },  { label: 'Power Level', value: '∞', icon: <Star size={16} /> },

  { label: "CERTIFICATIONS", value: "8" },];

];

export default function AboutSection() {

export default function AboutSection() {  return (

  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);    <section id="about" className="py-20 relative">

  const playSound = useSystemSound();      {/* Background ink panel effect */}

      <div className="absolute inset-0 opacity-5">

  const handleSkillClick = (index: number) => {        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-foreground" />

    playSound();        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-foreground" />

    setExpandedSkill(expandedSkill === index ? null : index);      </div>

  };

      <div className="container mx-auto px-4">

  return (        {/* Chapter title - murim style */}

    <section id="about" className="py-24 px-4 relative overflow-hidden">        <motion.div

      {/* Background ink splatter decoration */}          initial={{ opacity: 0, y: 30 }}

      <div className="absolute inset-0 opacity-5">          whileInView={{ opacity: 1, y: 0 }}

        <div className="absolute top-20 left-10 w-64 h-64 bg-ink-black rounded-full blur-3xl" />          viewport={{ once: true }}

        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blood-red rounded-full blur-3xl" />          className="text-center mb-16"

      </div>        >

          <motion.div

      <div className="max-w-6xl mx-auto relative z-10">            initial={{ scale: 0.9 }}

        {/* Section Title */}            whileInView={{ scale: 1 }}

        <motion.div            viewport={{ once: true }}

          initial={{ opacity: 0, y: -20 }}            className="inline-block"

          whileInView={{ opacity: 1, y: 0 }}          >

          viewport={{ once: true }}            <span className="font-body text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 01</span>

          className="text-center mb-16"            <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2 tracking-wider">

        >              <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">「</span>

          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-ink-black mb-4 tracking-wider">              人物

            CHARACTER <span className="text-blood-red">PROFILE</span>              <span className="block text-primary text-4xl md:text-5xl mt-2">CHARACTER</span>

          </h2>              <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">」</span>

          <div className="w-32 h-1 bg-blood-red mx-auto" />            </h2>

        </motion.div>          </motion.div>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Column - Profile Panel */}        <div className="grid lg:grid-cols-5 gap-8">

          <motion.div          {/* Character introduction - main panel */}

            initial={{ opacity: 0, x: -50 }}          <motion.div

            whileInView={{ opacity: 1, x: 0 }}            initial={{ opacity: 0, x: -50 }}

            viewport={{ once: true }}            whileInView={{ opacity: 1, x: 0 }}

            transition={{ delay: 0.2 }}            viewport={{ once: true }}

          >            transition={{ type: "spring", stiffness: 100 }}

            <SystemPanel title="▣ CULTIVATOR INFO" className="h-full">            className="lg:col-span-3 manga-panel-lg p-8 md:p-10 relative"

              <div className="space-y-6">          >

                {/* Core Stats Grid */}            {/* Corner decorations */}

                <div className="grid grid-cols-2 gap-4 mb-6">            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-foreground/50" />

                  {coreStats.map((stat, index) => (            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-foreground/50" />

                    <motion.div            

                      key={stat.label}            {/* Character name plate */}

                      initial={{ opacity: 0, scale: 0.8 }}            <motion.div 

                      whileInView={{ opacity: 1, scale: 1 }}              initial={{ x: -100, opacity: 0 }}

                      viewport={{ once: true }}              whileInView={{ x: 0, opacity: 1 }}

                      transition={{ delay: 0.1 * index }}              viewport={{ once: true }}

                    >              transition={{ delay: 0.3 }}

                      <StatDisplay label={stat.label} value={stat.value} />              className="absolute -top-4 left-8 rank-badge"

                    </motion.div>            >

                  ))}              <Star className="text-primary fill-primary" size={14} />

                </div>              <span className="tracking-wider">PROTAGONIST</span>

            </motion.div>

                {/* Bio Text */}

                <div className="border-2 border-ink-black bg-parchment-light p-4">            <div className="mt-6 relative z-10">

                  <p className="font-crimson text-lg text-ink-black leading-relaxed">              {/* Avatar and name */}

                    A wandering cultivator who has walked the path of code for many cycles.               <div className="flex items-center gap-6 mb-8">

                    Specializing in the ancient arts of full-stack development, I forge                 <motion.div 

                    digital weapons that cut through complexity like a blade through silk.                  whileHover={{ scale: 1.05 }}

                  </p>                  className="w-24 h-24 md:w-28 md:h-28 bg-parchment border-3 border-foreground ink-shadow flex items-center justify-center relative overflow-hidden"

                </div>                >

                  <span className="font-manga text-4xl text-foreground relative z-10">阿</span>

                {/* Cultivation Path */}                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />

                <div className="flex flex-wrap gap-2">                </motion.div>

                  <SystemTag>Frontend Master</SystemTag>                <div>

                  <SystemTag variant="blood">Backend Adept</SystemTag>                  <h3 className="font-manga text-3xl md:text-4xl text-foreground tracking-wider">ABHAY</h3>

                  <SystemTag variant="gold">Cloud Architect</SystemTag>                  <p className="font-body text-muted-foreground italic text-lg">武林小弟子 • Young Disciple</p>

                  <SystemTag>System Designer</SystemTag>                  <div className="flex gap-2 mt-2">

                </div>                    <SystemTag variant="active">ACTIVE</SystemTag>

                    <SystemTag variant="legendary">ELITE</SystemTag>

                {/* Quote Panel */}                  </div>

                <div className="border-l-4 border-blood-red bg-ink-black/5 p-4 mt-4">                </div>

                  <p className="font-crimson italic text-steel-gray">              </div>

                    "The code that flows from my fingers is not mere logic—it is the crystallization 

                    of countless battles fought in the realm of silicon and light."              {/* Character stats - System HUD style */}

                  </p>              <div className="space-y-3 mb-6">

                  <p className="text-right text-blood-red font-cinzel text-sm mt-2">— The Developer</p>                <SystemPanel variant="stat" className="p-3">

                </div>                  <div className="flex items-center gap-3">

              </div>                    <Target className="text-primary" size={20} />

            </SystemPanel>                    <div className="flex-1">

          </motion.div>                      <span className="font-manga text-parchment/70 text-xs tracking-wide">CLASS</span>

                      <p className="font-body text-parchment text-sm">Frontend Engineer</p>

          {/* Right Column - Skills Panel */}                    </div>

          <motion.div                  </div>

            initial={{ opacity: 0, x: 50 }}                </SystemPanel>

            whileInView={{ opacity: 1, x: 0 }}                <SystemPanel variant="stat" className="p-3">

            viewport={{ once: true }}                  <div className="flex items-center gap-3">

            transition={{ delay: 0.4 }}                    <Sword className="text-primary" size={20} />

          >                    <div className="flex-1">

            <SystemPanel title="◈ MARTIAL TECHNIQUES" className="h-full">                      <span className="font-manga text-parchment/70 text-xs tracking-wide">SPECIAL TECHNIQUE</span>

              <div className="space-y-3">                      <p className="font-body text-parchment text-sm">Turning ideas into interactive experiences</p>

                {skills.map((skill, index) => (                    </div>

                  <motion.div                  </div>

                    key={skill.name}                </SystemPanel>

                    initial={{ opacity: 0, x: 20 }}              </div>

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}              {/* Stats row - Interactive HUD cards */}

                    transition={{ delay: 0.1 * index }}              <div className="grid grid-cols-3 gap-3 mt-6">

                  >                {stats.map((stat, index) => (

                    <SkillCard                  <motion.div

                      name={skill.name}                    key={stat.label}

                      level={skill.level}                    initial={{ opacity: 0, y: 20 }}

                      description={skill.description}                    whileInView={{ opacity: 1, y: 0 }}

                      rank={skill.rank as "S" | "A" | "B" | "C"}                    viewport={{ once: true }}

                      isExpanded={expandedSkill === index}                    transition={{ delay: 0.5 + index * 0.1 }}

                      onClick={() => handleSkillClick(index)}                  >

                    />                    <SystemPanel variant="stat" className="p-3 text-center">

                  </motion.div>                      <div className="text-primary mb-1">{stat.icon}</div>

                ))}                      <p className="font-manga text-2xl text-parchment" style={{ textShadow: '0 0 10px rgba(180,50,50,0.5)' }}>

              </div>                        {stat.value}

                      </p>

              {/* Total Power Level */}                      <p className="font-body text-xs text-parchment/60">{stat.label}</p>

              <motion.div                    </SystemPanel>

                initial={{ opacity: 0 }}                  </motion.div>

                whileInView={{ opacity: 1 }}                ))}

                viewport={{ once: true }}              </div>

                transition={{ delay: 0.8 }}            </div>

                className="mt-6 pt-4 border-t-2 border-ink-black"

              >            {/* Chapter number - ink style */}

                <div className="flex justify-between items-center">            <div className="absolute bottom-4 right-6 chapter-number">

                  <span className="font-cinzel font-bold text-ink-black">TOTAL CULTIVATION</span>              貳

                  <span className="font-cinzel text-2xl text-blood-red font-bold">            </div>

                    {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%          </motion.div>

                  </span>

                </div>          {/* Skills panel - Interactive System Cards */}

                <div className="h-3 bg-parchment-dark border-2 border-ink-black mt-2 overflow-hidden">          <motion.div

                  <motion.div            initial={{ opacity: 0, x: 50 }}

                    initial={{ width: 0 }}            whileInView={{ opacity: 1, x: 0 }}

                    whileInView={{ width: `${Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%` }}            viewport={{ once: true }}

                    viewport={{ once: true }}            transition={{ delay: 0.3 }}

                    transition={{ delay: 1, duration: 1 }}            className="lg:col-span-2 space-y-4"

                    className="h-full bg-gradient-to-r from-blood-red to-aged-gold"          >

                  />            {/* Skills Header */}

                </div>            <SystemPanel title="MARTIAL ARTS MASTERED" subtitle="SKILLS" className="p-4 mb-4">

              </motion.div>              <p className="text-parchment/60 text-xs font-body">Click to view details</p>

            </SystemPanel>            </SystemPanel>

          </motion.div>

        </div>            {/* Skill Cards */}

            <div className="space-y-3">

        {/* Bottom Panel - Bonus Techniques */}              {skills.slice(0, 4).map((skill, index) => (

        <motion.div                <motion.div

          initial={{ opacity: 0, y: 50 }}                  key={skill.name}

          whileInView={{ opacity: 1, y: 0 }}                  initial={{ opacity: 0, x: 20 }}

          viewport={{ once: true }}                  whileInView={{ opacity: 1, x: 0 }}

          transition={{ delay: 0.6 }}                  viewport={{ once: true }}

          className="mt-8"                  transition={{ delay: 0.4 + index * 0.1 }}

        >                >

          <SystemPanel title="⚔ BONUS TECHNIQUES" interactive>                  <SkillCard

            <div className="grid md:grid-cols-3 gap-4">                    name={skill.name}

              {[                    level={skill.level}

                { name: "Code Review", desc: "Piercing gaze that finds all bugs", icon: "👁" },                    maxLevel={10}

                { name: "Debug Mastery", desc: "Console.log no jutsu activated", icon: "🔍" },                    description={skill.description}

                { name: "Deploy Arts", desc: "One-click production release", icon: "🚀" },                    icon={<skill.icon size={20} className="text-primary" />}

              ].map((technique, index) => (                    rank={skill.rank}

                <motion.div                  />

                  key={technique.name}                </motion.div>

                  whileHover={{ scale: 1.02 }}              ))}

                  className="border-2 border-ink-black bg-parchment-light p-4 cursor-pointer            </div>

                             hover:bg-aged-gold/20 transition-colors"

                  onClick={playSound}            {/* Additional skills as tags */}

                >            <motion.div

                  <div className="text-3xl mb-2">{technique.icon}</div>              initial={{ opacity: 0 }}

                  <h4 className="font-cinzel font-bold text-ink-black">{technique.name}</h4>              whileInView={{ opacity: 1 }}

                  <p className="font-crimson text-sm text-steel-gray">{technique.desc}</p>              viewport={{ once: true }}

                </motion.div>              transition={{ delay: 0.9 }}

              ))}            >

            </div>              <SystemPanel variant="stat" className="p-4">

          </SystemPanel>                <p className="font-manga text-xs text-parchment/70 mb-3 tracking-wider">BONUS TECHNIQUES</p>

        </motion.div>                <div className="flex flex-wrap gap-2">

      </div>                  {['JavaScript', 'HTML5', 'CSS3', 'Git', 'Figma', 'REST APIs'].map((skill) => (

    </section>                    <SystemTag key={skill}>{skill}</SystemTag>

  );                  ))}

}                </div>

              </SystemPanel>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
                  <div>
                    <span className="font-manga text-primary tracking-wide">Class:</span>
                    <span className="ml-2">Frontend Engineer</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-parchment/50 border-2 border-foreground/20">
                  <Sword className="text-primary" size={24} />
                  <div>
                    <span className="font-manga text-primary tracking-wide">Special Technique:</span>
                    <span className="ml-2">Turning ideas into interactive experiences</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 font-body text-muted-foreground leading-relaxed space-y-3">
                <p className="relative pl-4 border-l-2 border-primary/50">
                  A passionate developer who believes every line of code tells a story. 
                  Armed with the power of React and the wisdom of TypeScript, I craft 
                  digital experiences that captivate and inspire.
                </p>
                <p className="relative pl-4 border-l-2 border-muted-foreground/30">
                  When I'm not coding, you'll find me exploring AI technologies, 
                  diving into manhwa stories, or designing interfaces that push 
                  creative boundaries.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="text-center p-4 bg-parchment/80 border-2 border-foreground ink-shadow"
                  >
                    <p className="font-manga text-4xl text-primary">
                      {stat.value}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chapter number - ink style */}
            <div className="absolute bottom-4 right-6 chapter-number">
              貳
            </div>
          </motion.div>

          {/* Skills panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Skills unlocked panel */}
            <div className="manga-panel p-6 relative">
              <div className="absolute -top-3 left-6 rank-badge">
                <Sword size={12} />
                <span>MARTIAL ARTS MASTERED</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="skill-tag"
                  >
                    <skill.icon size={16} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote panel - scroll style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="system-panel p-6"
            >
              <Scroll className="text-parchment/80 mb-3" size={24} />
              <p className="font-body text-parchment/90 text-center italic leading-relaxed">
                "Every great interface starts with understanding the user's story!"
              </p>
            </motion.div>

            {/* Additional skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="manga-panel p-4"
            >
              <p className="font-manga text-sm text-muted-foreground mb-3 tracking-wider">BONUS TECHNIQUES</p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'HTML5', 'CSS3', 'Git', 'Figma', 'REST APIs', 'GraphQL'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="skill-tag-sm hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
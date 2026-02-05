import { motion } from 'framer-motion';
import { Code, Palette, Brain, Sword, Shield, Scroll, Star, Target, Zap } from 'lucide-react';
import { SystemPanel, SystemTag, SkillCard, StatDisplay } from './SystemPanel';

const skills = [
  { name: 'React', icon: Code, level: 9, rank: 'S' as const, description: 'Component architecture mastery' },
  { name: 'TypeScript', icon: Sword, level: 8, rank: 'A' as const, description: 'Type-safe development' },
  { name: 'Tailwind CSS', icon: Palette, level: 9, rank: 'S' as const, description: 'Rapid UI styling' },
  { name: 'Next.js', icon: Shield, level: 7, rank: 'A' as const, description: 'Full-stack React framework' },
  { name: 'AI/ML', icon: Brain, level: 6, rank: 'B' as const, description: 'Machine learning integration' },
  { name: 'Node.js', icon: Scroll, level: 7, rank: 'A' as const, description: 'Server-side JavaScript' },
];

const stats = [
  { label: 'Years Training', value: '3+', icon: <Zap size={16} /> },
  { label: 'Techniques', value: '20+', icon: <Sword size={16} /> },
  { label: 'Power Level', value: '∞', icon: <Star size={16} /> },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background ink panel effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-foreground" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-foreground" />
      </div>

      <div className="container mx-auto px-4">
        {/* Chapter title - murim style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="font-body text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 01</span>
            <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2 tracking-wider">
              <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">「</span>
              人物
              <span className="block text-primary text-4xl md:text-5xl mt-2">CHARACTER</span>
              <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">」</span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Character introduction - main panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:col-span-3 manga-panel-lg p-8 md:p-10 relative"
          >
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-foreground/50" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-foreground/50" />
            
            {/* Character name plate */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 left-8 rank-badge"
            >
              <Star className="text-primary fill-primary" size={14} />
              <span className="tracking-wider">PROTAGONIST</span>
            </motion.div>

            <div className="mt-6 relative z-10">
              {/* Avatar and name */}
              <div className="flex items-center gap-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 md:w-28 md:h-28 bg-parchment border-3 border-foreground ink-shadow flex items-center justify-center relative overflow-hidden"
                >
                  <span className="font-manga text-4xl text-foreground relative z-10">阿</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="font-manga text-3xl md:text-4xl text-foreground tracking-wider">ABHAY</h3>
                  <p className="font-body text-muted-foreground italic text-lg">武林小弟子 • Young Disciple</p>
                  <div className="flex gap-2 mt-2">
                    <SystemTag variant="active">ACTIVE</SystemTag>
                    <SystemTag variant="legendary">ELITE</SystemTag>
                  </div>
                </div>
              </div>

              {/* Character stats - System HUD style */}
              <div className="space-y-3 mb-6">
                <SystemPanel variant="stat" className="p-3">
                  <div className="flex items-center gap-3">
                    <Target className="text-primary" size={20} />
                    <div className="flex-1">
                      <span className="font-manga text-parchment/70 text-xs tracking-wide">CLASS</span>
                      <p className="font-body text-parchment text-sm">Frontend Engineer</p>
                    </div>
                  </div>
                </SystemPanel>
                <SystemPanel variant="stat" className="p-3">
                  <div className="flex items-center gap-3">
                    <Sword className="text-primary" size={20} />
                    <div className="flex-1">
                      <span className="font-manga text-parchment/70 text-xs tracking-wide">SPECIAL TECHNIQUE</span>
                      <p className="font-body text-parchment text-sm">Turning ideas into interactive experiences</p>
                    </div>
                  </div>
                </SystemPanel>
              </div>

              {/* Stats row - Interactive HUD cards */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <SystemPanel variant="stat" className="p-3 text-center">
                      <div className="text-primary mb-1">{stat.icon}</div>
                      <p className="font-manga text-2xl text-parchment" style={{ textShadow: '0 0 10px rgba(180,50,50,0.5)' }}>
                        {stat.value}
                      </p>
                      <p className="font-body text-xs text-parchment/60">{stat.label}</p>
                    </SystemPanel>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chapter number - ink style */}
            <div className="absolute bottom-4 right-6 chapter-number">
              貳
            </div>
          </motion.div>

          {/* Skills panel - Interactive System Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Skills Header */}
            <SystemPanel title="MARTIAL ARTS MASTERED" subtitle="SKILLS" className="p-4 mb-4">
              <p className="text-parchment/60 text-xs font-body">Click to view details</p>
            </SystemPanel>

            {/* Skill Cards */}
            <div className="space-y-3">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <SkillCard
                    name={skill.name}
                    level={skill.level}
                    maxLevel={10}
                    description={skill.description}
                    icon={<skill.icon size={20} className="text-primary" />}
                    rank={skill.rank}
                  />
                </motion.div>
              ))}
            </div>

            {/* Additional skills as tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <SystemPanel variant="stat" className="p-4">
                <p className="font-manga text-xs text-parchment/70 mb-3 tracking-wider">BONUS TECHNIQUES</p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML5', 'CSS3', 'Git', 'Figma', 'REST APIs'].map((skill) => (
                    <SystemTag key={skill}>{skill}</SystemTag>
                  ))}
                </div>
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
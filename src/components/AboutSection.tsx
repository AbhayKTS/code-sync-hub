import { motion } from 'framer-motion';
import { Code, Palette, Brain, Sparkles, Zap, Coffee, Star, Target } from 'lucide-react';

const skills = [
  { name: 'React', color: 'bg-pastel-blue', icon: Code },
  { name: 'TypeScript', color: 'bg-pastel-lavender', icon: Zap },
  { name: 'Tailwind CSS', color: 'bg-pastel-mint', icon: Palette },
  { name: 'Next.js', color: 'bg-pastel-peach', icon: Sparkles },
  { name: 'AI/ML', color: 'bg-pastel-pink', icon: Brain },
  { name: 'Node.js', color: 'bg-pastel-yellow', icon: Coffee },
];

const stats = [
  { label: 'Years Exp', value: '3+', color: 'from-primary to-pink-400' },
  { label: 'Projects', value: '20+', color: 'from-secondary to-cyan-400' },
  { label: 'Power Level', value: '∞', color: 'from-accent to-purple-400' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background manga panel effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-manga-border rotate-6" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-manga-border -rotate-3" />
      </div>

      <div className="container mx-auto px-4">
        {/* Chapter title - manga style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="font-manga text-sm text-muted-foreground tracking-[0.3em] uppercase">Chapter 01</span>
            <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2">
              <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-3xl md:text-4xl">「</span>
              CHARACTER
              <span className="block text-primary">PROFILE</span>
              <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-3xl md:text-4xl">」</span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Character introduction - main manga panel */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:col-span-3 action-panel p-8 md:p-10 relative"
          >
            {/* Focus lines overlay */}
            <div className="focus-lines absolute inset-0 rounded-xl" />
            
            {/* Character name plate */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-5 left-8 shout-bubble bg-gradient-to-r from-action-gold via-pastel-yellow to-action-gold"
            >
              <span className="font-manga text-xl text-manga-border flex items-center gap-2">
                <Star className="text-action-red fill-action-red" size={18} />
                PROTAGONIST
                <Star className="text-action-red fill-action-red" size={18} />
              </span>
            </motion.div>

            <div className="mt-6 relative z-10">
              {/* Avatar and name */}
              <div className="flex items-center gap-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blue border-4 border-manga-border shadow-manga flex items-center justify-center relative overflow-hidden"
                >
                  <span className="font-manga text-4xl text-foreground relative z-10">A</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-manga-border/20 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="font-manga text-3xl md:text-4xl text-foreground">ABHAY</h3>
                  <p className="font-body text-muted-foreground italic text-lg">a.k.a "young_master"</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-manga text-primary">ACTIVE</span>
                    <span className="px-3 py-1 bg-secondary/20 rounded-full text-xs font-manga text-secondary">ELITE</span>
                  </div>
                </div>
              </div>

              {/* Character stats */}
              <div className="space-y-4 font-body text-foreground">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border-2 border-manga-border/20">
                  <Target className="text-primary" size={24} />
                  <div>
                    <span className="font-manga text-primary">Class:</span>
                    <span className="ml-2">Frontend Engineer</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border-2 border-manga-border/20">
                  <Zap className="text-secondary" size={24} />
                  <div>
                    <span className="font-manga text-secondary">Special Ability:</span>
                    <span className="ml-2">Turning ideas into interactive experiences</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 font-body text-muted-foreground leading-relaxed space-y-3">
                <p className="relative pl-4 border-l-4 border-primary/30">
                  A passionate developer who believes every line of code tells a story. 
                  Armed with the power of React and the wisdom of TypeScript, I craft 
                  digital experiences that captivate and inspire.
                </p>
                <p className="relative pl-4 border-l-4 border-secondary/30">
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
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="text-center p-4 bg-white/80 rounded-xl border-2 border-manga-border shadow-manga"
                  >
                    <p className={`font-manga text-4xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Panel number */}
            <div className="absolute bottom-4 right-6 font-manga text-8xl text-manga-border/5">
              02
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
              <div className="absolute -top-4 left-6 px-4 py-1 bg-primary text-primary-foreground font-manga text-sm rounded-lg border-2 border-manga-border shadow-manga">
                SKILLS UNLOCKED
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className={`skill-tag ${skill.color}`}
                  >
                    <skill.icon size={16} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring" }}
              className="speech-bubble bg-gradient-to-br from-white to-pastel-cream"
            >
              <p className="font-manga text-lg text-foreground text-center">
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
              <p className="font-manga text-sm text-muted-foreground mb-3">BONUS ABILITIES</p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'HTML5', 'CSS3', 'Git', 'Figma', 'REST APIs', 'GraphQL'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-sm font-body bg-pastel-cream rounded-lg border border-manga-border/20 text-muted-foreground hover:bg-pastel-lavender/50 transition-colors cursor-default"
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
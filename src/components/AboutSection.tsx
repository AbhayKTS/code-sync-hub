import { motion } from 'framer-motion';
import { Code, Palette, Brain, Sparkles, Zap, Coffee } from 'lucide-react';

const skills = [
  { name: 'React', color: 'bg-pastel-blue', icon: Code },
  { name: 'TypeScript', color: 'bg-pastel-lavender', icon: Zap },
  { name: 'Tailwind CSS', color: 'bg-pastel-mint', icon: Palette },
  { name: 'Next.js', color: 'bg-pastel-peach', icon: Sparkles },
  { name: 'AI/ML', color: 'bg-pastel-pink', icon: Brain },
  { name: 'Node.js', color: 'bg-pastel-mint', icon: Coffee },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section title in manga style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-manga text-4xl md:text-5xl text-foreground inline-block relative">
            <span className="absolute -left-8 top-0 text-primary text-2xl">「</span>
            About Me
            <span className="absolute -right-8 top-0 text-primary text-2xl">」</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Character introduction box - manga style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 manga-panel-lg p-8 relative"
          >
            {/* Character name tag */}
            <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-6 py-2 font-manga text-lg border-2 border-manga-border shadow-manga rounded-md">
              CHARACTER PROFILE
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pastel-pink to-pastel-lavender border-4 border-manga-border shadow-manga flex items-center justify-center">
                  <span className="font-manga text-2xl text-foreground">A</span>
                </div>
                <div>
                  <h3 className="font-manga text-2xl text-foreground">Abhay</h3>
                  <p className="font-body text-muted-foreground italic">a.k.a "young_master"</p>
                </div>
              </div>

              <div className="font-body text-foreground leading-relaxed space-y-3">
                <p className="text-lg">
                  <span className="font-bold text-primary">Class:</span> Frontend Engineer
                </p>
                <p className="text-lg">
                  <span className="font-bold text-secondary">Special Ability:</span> Turning ideas into interactive experiences
                </p>
                <p className="text-muted-foreground">
                  A passionate developer who believes every line of code tells a story. 
                  Armed with the power of React and the wisdom of TypeScript, I craft 
                  digital experiences that captivate and inspire. My journey through 
                  the vast world of web development has taught me that the best 
                  interfaces are those that feel effortless to use.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring AI technologies, 
                  diving into manhwa stories, or designing interfaces that push 
                  creative boundaries.
                </p>
              </div>

              {/* Stats in manga style */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t-2 border-dashed border-manga-border/30">
                <div className="text-center">
                  <p className="font-manga text-3xl text-primary">3+</p>
                  <p className="font-body text-sm text-muted-foreground">Years Exp</p>
                </div>
                <div className="text-center">
                  <p className="font-manga text-3xl text-secondary">20+</p>
                  <p className="font-body text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-manga text-3xl text-accent">∞</p>
                  <p className="font-body text-sm text-muted-foreground">Passion</p>
                </div>
              </div>
            </div>

            {/* Panel decorations */}
            <div className="absolute bottom-4 right-4 text-muted-foreground/30 font-manga text-6xl">
              01
            </div>
          </motion.div>

          {/* Skills as floating bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="manga-panel p-6">
              <h3 className="font-manga text-xl text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="text-primary" size={20} />
                SKILLS UNLOCKED
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`skill-tag ${skill.color} flex items-center gap-2`}
                  >
                    <skill.icon size={16} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="speech-bubble"
            >
              <p className="font-body text-foreground italic">
                "Every great interface starts with understanding the user's story."
              </p>
            </motion.div>

            {/* Additional skill tags floating */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['JavaScript', 'HTML5', 'CSS3', 'Git', 'Figma', 'REST APIs'].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="px-3 py-1 text-sm font-body bg-white/80 rounded-full border border-manga-border/30 text-muted-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

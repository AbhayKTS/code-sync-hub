import { motion } from 'framer-motion';

interface TechniqueCardProps {
  name: string;
  level: number;
  maxLevel?: number;
  delay?: number;
}

function TechniqueCard({ name, level, maxLevel = 10, delay = 0 }: TechniqueCardProps) {
  const percentage = (level / maxLevel) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative bg-primary/5 border border-primary/20 p-5 group backdrop-blur-sm"
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />

      {/* Name and Level */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-manga text-white/80 tracking-widest text-xs uppercase">{name}</span>
        <span
          className="font-manga text-primary text-sm font-bold"
          style={{ textShadow: '0 0 10px var(--primary)' }}
        >
          LV.{level}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-black/40 border border-primary/10 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/40 shadow-[0_0_15px_var(--primary)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function TechniqueCards() {
  const techniques = [
    { name: 'JavaScript_Core', level: 8 },
    { name: 'React/TS_Framework', level: 7 },
    { name: 'Web3_Protocols', level: 3 },
    { name: 'Backend_Alchemy', level: 4 },
    { name: 'AI/ML_Neural_Links', level: 6 },
    { name: 'Cloud_Domain', level: 5 },
    { name: 'Java_Imperial', level: 6 },
    { name: 'Python_Scripts', level: 3 },
    { name: 'C_Foundation', level: 3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {techniques.map((tech, index) => (
        <TechniqueCard
          key={tech.name}
          name={tech.name}
          level={tech.level}
          delay={index * 0.05}
        />
      ))}
    </motion.div>
  );
}

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative bg-black/70 border border-[#1DB954]/40 p-4 group"
      style={{
        boxShadow: '0 0 15px rgba(29,185,84,0.1), inset 0 0 20px rgba(0,0,0,0.5)'
      }}
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1DB954]" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#1DB954]" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#1DB954]" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1DB954]" />
      
      {/* Name and Level */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-manga text-foreground tracking-wide text-sm">{name}</span>
        <span 
          className="font-manga text-[#1DB954] text-lg"
          style={{ textShadow: '0 0 10px rgba(29,185,84,0.5)' }}
        >
          LV {level}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-black/60 border border-[#1DB954]/30 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#1DB954] to-[#2ECC71]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.6, ease: 'easeOut' }}
          style={{
            boxShadow: '0 0 10px rgba(29,185,84,0.5)'
          }}
        />
      </div>
      
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 20px rgba(29,185,84,0.15)'
        }}
      />
    </motion.div>
  );
}

export default function TechniqueCards() {
  const techniques = [
    { name: 'JavaScript', level: 8 },
    { name: 'React/TypeScript', level: 7 },
    { name: 'Web3', level: 3 },
    { name: 'Flask/Django', level: 4 },
    { name: 'AI/ML Systems', level: 6 },
    { name: 'Cloud Architecture', level: 5 },
    { name: 'Java', level: 6 },
    { name: 'Python', level: 3 },
    { name: 'C', level: 3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {techniques.map((tech, index) => (
        <TechniqueCard 
          key={tech.name}
          name={tech.name}
          level={tech.level}
          delay={index * 0.08}
        />
      ))}
    </motion.div>
  );
}

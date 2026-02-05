import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LevelUpEffectProps {
  children: ReactNode;
  className?: string;
}

export default function LevelUpEffect({ children, className = '' }: LevelUpEffectProps) {
  return (
    <motion.div 
      className={`level-up-container ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {/* Level Up text */}
      <span className="level-up-text">LEVEL UP!</span>
      
      {/* Sparkles */}
      <span className="level-up-sparkle" style={{ left: '20%' }} />
      <span className="level-up-sparkle" style={{ left: '40%' }} />
      <span className="level-up-sparkle" style={{ left: '60%' }} />
      <span className="level-up-sparkle" style={{ left: '80%' }} />
      
      {/* Content */}
      {children}
      
      {/* Golden glow overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(180, 140, 50, 0.1) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}

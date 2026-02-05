import { motion } from 'framer-motion';

interface MangaSFXProps {
  text: string;
  type?: 'shff' | 'swoosh' | 'ding' | 'default';
  className?: string;
  delay?: number;
}

// Page-flip easing
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

export default function MangaSFX({ 
  text, 
  type = 'default', 
  className = '',
  delay = 0 
}: MangaSFXProps) {
  const typeClass = type !== 'default' ? `manga-sfx-${type}` : '';
  
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
      whileInView={{ 
        opacity: 0.15, 
        scale: 1, 
        rotate: type === 'swoosh' ? 5 : type === 'shff' ? -12 : -5 
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: pageFlipEase 
      }}
      className={`manga-sfx ${typeClass} ${className}`}
    >
      {text}
    </motion.span>
  );
}

import { motion } from 'framer-motion';

export default function SpeedLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial focus lines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `repeating-conic-gradient(
            from 0deg at 50% 120%,
            transparent 0deg,
            rgba(0, 0, 0, 0.02) 0.5deg,
            transparent 1deg
          )`
        }}
      />
      
      {/* Horizontal action lines */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 30px,
            rgba(0, 0, 0, 0.03) 30px,
            rgba(0, 0, 0, 0.03) 31px
          )`
        }}
      />

      {/* Vertical manga panel lines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 80px,
            rgba(0, 0, 0, 0.02) 80px,
            rgba(0, 0, 0, 0.02) 81px
          )`
        }}
      />

      {/* Decorative corner accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-0 left-0 w-32 h-32 opacity-30"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0 0 L100 0 L80 20 L20 20 L20 80 L0 100 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 right-0 w-32 h-32 opacity-30 rotate-180"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0 0 L100 0 L80 20 L20 20 L20 80 L0 100 Z"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Floating ink splatters */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-manga-border/5"
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
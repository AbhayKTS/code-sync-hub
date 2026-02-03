import { motion } from 'framer-motion';

export default function KnightCharacter() {
  return (
    <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
      {/* Glowing aura behind knight */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-t from-pastel-lavender/50 via-pastel-blue/30 to-transparent rounded-full blur-3xl"
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 bg-primary/60 rounded-full"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Knight SVG illustration */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))' }}
      >
        {/* Cape/Cloak flowing */}
        <motion.path
          d="M120 180 Q100 250 90 350 Q85 400 100 450 L300 450 Q315 400 310 350 Q300 250 280 180"
          fill="url(#capeGradient)"
          animate={{
            d: [
              "M120 180 Q100 250 90 350 Q85 400 100 450 L300 450 Q315 400 310 350 Q300 250 280 180",
              "M120 180 Q95 250 85 350 Q80 400 95 450 L305 450 Q320 400 315 350 Q305 250 280 180",
              "M120 180 Q100 250 90 350 Q85 400 100 450 L300 450 Q315 400 310 350 Q300 250 280 180"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Body armor */}
        <ellipse cx="200" cy="250" rx="60" ry="80" fill="url(#armorGradient)" />
        
        {/* Armor details */}
        <path
          d="M160 220 L200 200 L240 220 L240 300 L200 320 L160 300 Z"
          fill="url(#armorDetailGradient)"
          stroke="hsl(var(--manga-border))"
          strokeWidth="2"
        />
        
        {/* Shoulder armor left */}
        <ellipse cx="140" cy="200" rx="30" ry="20" fill="url(#shoulderGradient)" stroke="hsl(var(--manga-border))" strokeWidth="2" />
        
        {/* Shoulder armor right */}
        <ellipse cx="260" cy="200" rx="30" ry="20" fill="url(#shoulderGradient)" stroke="hsl(var(--manga-border))" strokeWidth="2" />
        
        {/* Head/Helmet */}
        <circle cx="200" cy="130" r="50" fill="url(#helmetGradient)" stroke="hsl(var(--manga-border))" strokeWidth="3" />
        
        {/* Helmet visor */}
        <path
          d="M160 125 Q200 140 240 125"
          fill="none"
          stroke="hsl(var(--manga-border))"
          strokeWidth="3"
        />
        
        {/* Glowing eyes */}
        <motion.ellipse
          cx="180"
          cy="130"
          rx="8"
          ry="5"
          fill="hsl(var(--secondary))"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.ellipse
          cx="220"
          cy="130"
          rx="8"
          ry="5"
          fill="hsl(var(--secondary))"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Helmet crest */}
        <path
          d="M200 80 L200 50 L210 70 L200 65 L190 70 Z"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--manga-border))"
          strokeWidth="2"
        />
        
        {/* Sword */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: '280px 350px' }}
        >
          {/* Sword glow */}
          <motion.path
            d="M280 200 L285 150 L290 200"
            fill="hsl(var(--secondary))"
            opacity="0.5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Sword blade */}
          <path
            d="M280 350 L275 250 L285 100 L295 250 L290 350 Z"
            fill="url(#swordGradient)"
            stroke="hsl(var(--manga-border))"
            strokeWidth="2"
          />
          
          {/* Sword handle */}
          <rect x="275" y="350" width="20" height="40" rx="5" fill="#8B4513" stroke="hsl(var(--manga-border))" strokeWidth="2" />
          
          {/* Sword crossguard */}
          <rect x="260" y="340" width="50" height="12" rx="3" fill="#FFD700" stroke="hsl(var(--manga-border))" strokeWidth="2" />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="capeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(340 80% 45%)" />
          </linearGradient>
          <linearGradient id="armorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="100%" stopColor="#B0B0B0" />
          </linearGradient>
          <linearGradient id="armorDetailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
          <linearGradient id="shoulderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4D4D4" />
            <stop offset="100%" stopColor="#A0A0A0" />
          </linearGradient>
          <linearGradient id="helmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#C8C8C8" />
          </linearGradient>
          <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E0E0E0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ground effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-gradient-to-t from-manga-border/20 to-transparent rounded-full blur-md" />
    </div>
  );
}

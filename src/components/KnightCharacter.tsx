import { motion } from 'framer-motion';

export default function KnightCharacter() {
  return (
    <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
      {/* Qi/Energy aura behind character - subtle ink wash effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(180,50,50,0.3) 0%, transparent 70%)'
        }}
      />
      
      {/* Floating qi particles - ink drops */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute w-1.5 h-1.5 bg-foreground/40 rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            top: `${35 + (i % 3) * 15}%`,
          }}
        />
      ))}

      {/* Murim Warrior SVG illustration */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(4px 8px 16px rgba(0,0,0,0.3))' }}
      >
        {/* Hanfu/Robe flowing - ink black with red trim */}
        <motion.path
          d="M120 180 Q100 250 90 350 Q85 400 100 450 L300 450 Q315 400 310 350 Q300 250 280 180"
          fill="url(#robeGradient)"
          animate={{
            d: [
              "M120 180 Q100 250 90 350 Q85 400 100 450 L300 450 Q315 400 310 350 Q300 250 280 180",
              "M120 180 Q95 250 85 350 Q80 400 95 450 L305 450 Q320 400 315 350 Q305 250 280 180",
              "M120 180 Q100 250 90 350 Q85 400 100 450 L300 450 Q315 400 310 350 Q300 250 280 180"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Robe inner layer - blood red */}
        <path
          d="M140 200 L200 180 L260 200 L250 400 L150 400 Z"
          fill="url(#innerRobeGradient)"
        />
        
        {/* Body/Torso */}
        <ellipse cx="200" cy="250" rx="55" ry="75" fill="url(#torsoGradient)" />
        
        {/* Chest detail - martial arts sash */}
        <path
          d="M165 220 L200 200 L235 220 L235 290 L200 310 L165 290 Z"
          fill="#1a1a1a"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />
        
        {/* Belt/Sash */}
        <rect x="155" y="295" width="90" height="15" fill="hsl(var(--primary))" />
        <rect x="190" y="290" width="20" height="25" rx="2" fill="#1a1a1a" stroke="hsl(var(--primary))" strokeWidth="1" />
        
        {/* Shoulder cloth left */}
        <path
          d="M130 190 Q140 180 160 190 L155 210 Q140 215 130 210 Z"
          fill="#1a1a1a"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
        />
        
        {/* Shoulder cloth right */}
        <path
          d="M270 190 Q260 180 240 190 L245 210 Q260 215 270 210 Z"
          fill="#1a1a1a"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
        />
        
        {/* Head */}
        <circle cx="200" cy="130" r="45" fill="url(#skinGradient)" />
        
        {/* Hair - long martial artist style */}
        <path
          d="M155 100 Q155 70 200 65 Q245 70 245 100 Q250 130 245 160 
             Q235 140 200 145 Q165 140 155 160 Q150 130 155 100"
          fill="#1a1a1a"
        />
        
        {/* Hair flowing back */}
        <motion.path
          d="M155 140 Q130 160 120 220 Q115 250 125 280"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="15"
          strokeLinecap="round"
          animate={{
            d: [
              "M155 140 Q130 160 120 220 Q115 250 125 280",
              "M155 140 Q125 160 115 220 Q110 250 120 280",
              "M155 140 Q130 160 120 220 Q115 250 125 280"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Eyes - intense gaze */}
        <motion.ellipse
          cx="182"
          cy="128"
          rx="6"
          ry="4"
          fill="hsl(var(--primary))"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.ellipse
          cx="218"
          cy="128"
          rx="6"
          ry="4"
          fill="hsl(var(--primary))"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Eyebrows - sharp */}
        <path d="M170 120 L185 118" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M215 118 L230 120" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        
        {/* Headband */}
        <rect x="155" y="100" width="90" height="8" fill="hsl(var(--primary))" />
        <motion.path
          d="M245 104 Q260 100 270 120 Q275 130 270 140"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="6"
          animate={{
            d: [
              "M245 104 Q260 100 270 120 Q275 130 270 140",
              "M245 104 Q262 98 272 118 Q278 128 272 142",
              "M245 104 Q260 100 270 120 Q275 130 270 140"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Sword - elegant jian style */}
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ transformOrigin: '285px 350px' }}
        >
          {/* Sword qi glow */}
          <motion.path
            d="M282 200 L285 120 L288 200"
            fill="hsl(var(--primary))"
            opacity="0.3"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Sword blade - straight Chinese jian */}
          <path
            d="M280 350 L278 250 L285 80 L292 250 L290 350 Z"
            fill="url(#swordGradient)"
            stroke="#1a1a1a"
            strokeWidth="1"
          />
          
          {/* Blade center line */}
          <line x1="285" y1="100" x2="285" y2="340" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          
          {/* Sword handle - wrapped */}
          <rect x="278" y="350" width="14" height="35" rx="2" fill="#1a1a1a" />
          <line x1="280" y1="355" x2="290" y2="355" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="280" y1="365" x2="290" y2="365" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="280" y1="375" x2="290" y2="375" stroke="hsl(var(--primary))" strokeWidth="1" />
          
          {/* Sword guard - circular */}
          <circle cx="285" cy="348" r="12" fill="#1a1a1a" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          
          {/* Pommel */}
          <circle cx="285" cy="390" r="6" fill="hsl(var(--primary))" />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="robeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="innerRobeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0 75% 35%)" />
            <stop offset="100%" stopColor="hsl(0 75% 25%)" />
          </linearGradient>
          <linearGradient id="torsoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3EAD7" />
            <stop offset="100%" stopColor="#E8DCC8" />
          </linearGradient>
          <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ground shadow - ink style */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-foreground/10 rounded-full blur-md" />
    </div>
  );
}

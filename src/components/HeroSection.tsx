import { motion } from 'framer-motion';
import { ChevronDown, Code, MessageSquare, Zap, Shield, Brain, Target } from 'lucide-react';
// Video is in public folder, reference directly

// Black & Green color palette
const colors = {
  neonGreen: '#1DB954',
  softGreen: '#2ECC71',
  darkGreen: '#0D7D3A',
  deepBlack: '#0A0A0A',
  offWhite: '#EAEAEA',
};

// Holographic distortion animation
const holoVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(10px) brightness(1.5)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px) brightness(1)',
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  },
};

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

// Stat Panel Component
function StatPanel({ 
  label, 
  value, 
  icon: Icon,
  delay = 0,
  position 
}: { 
  label: string; 
  value: string; 
  icon: React.ElementType;
  delay?: number;
  position: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={`absolute ${position} z-20 hidden md:block`}
    >
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${colors.neonGreen}40` }}
        className="relative bg-black/80 backdrop-blur-sm border border-[#1DB954]/60 px-4 py-3 min-w-[120px]"
        style={{
          boxShadow: `0 0 20px ${colors.neonGreen}20, inset 0 0 20px rgba(0,0,0,0.5)`
        }}
      >
        {/* Corner nodes - green */}
        <motion.span 
          className="absolute -top-1 -left-1 w-2 h-2 bg-[#1DB954]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.span 
          className="absolute -top-1 -right-1 w-2 h-2 bg-[#1DB954]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.span 
          className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#1DB954]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.span 
          className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#1DB954]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Scan line effect - green */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: 0.1 }}
        >
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#1DB954] to-transparent"
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <div className="flex items-center gap-3">
          <Icon size={16} className="text-[#1DB954]" />
          <div>
            <div className="text-[10px] text-[#EAEAEA]/50 font-sans tracking-[0.2em] uppercase">{label}</div>
            <div className="text-[#EAEAEA] font-serif text-lg font-bold" style={{ textShadow: `0 0 10px ${colors.neonGreen}60` }}>
              {value}
            </div>
          </div>
        </div>

        {/* Pulsing border effect - green */}
        <motion.div
          className="absolute inset-0 border border-[#1DB954]/30 pointer-events-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Video Background - Samurai centered right */}
      <div className="absolute inset-0 z-0">
        <video
          src="/From KlickPin CF Samurai Practice Live Wallpaper.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ 
            filter: 'brightness(0.75) contrast(1.1) saturate(0.9)',
          }}
        />
        
        {/* Dark gradient overlays - heavier on left for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.4) 100%)`
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.7) 100%)`
          }}
        />
        
        {/* Neon green accent glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, rgba(29,185,84,0.08) 0%, transparent 50%)`
          }}
        />
        
        {/* Cinematic vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
          }}
        />
      </div>

      {/* Animated green energy lines */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Top horizontal line - green */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-24 left-0 w-1/3 h-px origin-left"
          style={{ background: `linear-gradient(90deg, transparent, ${colors.neonGreen}80, ${colors.neonGreen}40)` }}
        />
        
        {/* Bottom horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-24 right-0 w-1/3 h-px origin-right"
          style={{ background: `linear-gradient(270deg, transparent, ${colors.darkGreen}80, ${colors.darkGreen}40)` }}
        />
        
        {/* Pulsing vertical accent lines */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-8 top-0 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, transparent, ${colors.neonGreen}60, transparent)` }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute right-8 top-0 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, transparent, ${colors.neonGreen}60, transparent)` }}
        />
      </div>

      {/* Left side - Text Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="absolute left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 max-w-lg"
      >
        {/* Main panel with holographic effect */}
        <motion.div
          variants={holoVariants}
          className="relative bg-black/80 backdrop-blur-md border border-[#1DB954]/50 p-6 md:p-8"
          style={{
            boxShadow: `0 0 40px ${colors.neonGreen}30, inset 0 0 40px rgba(0,0,0,0.5)`
          }}
        >
          {/* Corner nodes - glowing green */}
          <motion.span 
            className="absolute -top-2 -left-2 w-3 h-3 bg-[#1DB954]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.neonGreen}`, `0 0 20px ${colors.neonGreen}`, `0 0 10px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span 
            className="absolute -top-2 -right-2 w-3 h-3 bg-[#1DB954]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.neonGreen}`, `0 0 20px ${colors.neonGreen}`, `0 0 10px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.span 
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#1DB954]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.neonGreen}`, `0 0 20px ${colors.neonGreen}`, `0 0 10px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.span 
            className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#1DB954]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.neonGreen}`, `0 0 20px ${colors.neonGreen}`, `0 0 10px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          {/* Scan lines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(29,185,84,0.1) 2px, rgba(29,185,84,0.1) 4px)'
            }}
          />

          {/* Hunter Title Badge */}
          <motion.div 
            variants={holoVariants}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#1DB954]/50 bg-[#1DB954]/10"
          >
            <span className="w-2 h-2 bg-[#1DB954] animate-pulse" />
            <span className="text-[10px] text-[#1DB954] font-sans tracking-[0.3em] uppercase">Chaos_Immortal</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={holoVariants}>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F5F5F5] leading-tight mb-1"
              style={{ textShadow: `0 0 30px ${colors.neonGreen}50` }}
            >
              ABHAY KUMAR
            </motion.h1>
            <motion.span 
              className="block text-lg md:text-xl font-serif text-[#1DB954] tracking-widest mb-3"
              style={{ textShadow: `0 0 15px ${colors.neonGreen}60` }}
            >
              — The System Walker
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            variants={holoVariants}
            className="text-sm md:text-base font-sans text-[#F5F5F5]/80 tracking-wide mb-6 leading-relaxed border-l-2 border-[#1DB954]/50 pl-4"
          >
            "Walking between logic and chaos, crafting systems that think, adapt, and evolve."
          </motion.p>

          {/* Special Ability Tag */}
          <motion.div
            variants={holoVariants}
            className="mb-6 p-3 bg-black/50 border border-[#1DB954]/30"
          >
            <div className="text-[10px] text-[#1DB954]/70 font-sans tracking-[0.2em] uppercase mb-1">Special Ability</div>
            <div className="text-sm text-[#F5F5F5] font-sans">
              <span className="text-[#1DB954] font-medium">Code Absorption</span> — Learns new frameworks instantly
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={holoVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: `0 0 30px ${colors.neonGreen}60`,
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1DB954] text-[#0A0A0A] font-sans font-medium tracking-wider border border-[#1DB954]"
              style={{ boxShadow: `0 0 20px ${colors.neonGreen}40` }}
            >
              <Code size={18} />
              <span>View Techniques</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.02, 
                borderColor: colors.softGreen,
                boxShadow: `0 0 20px ${colors.softGreen}30`,
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-transparent text-[#F5F5F5] font-sans font-medium tracking-wider border border-[#F5F5F5]/30"
            >
              <MessageSquare size={18} />
              <span>Contact</span>
            </motion.a>
          </motion.div>

          {/* Pulsing border animation */}
          <motion.div
            className="absolute inset-0 border border-[#1DB954]/20 pointer-events-none"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Stat Panels - Positioned on edges, not covering samurai */}
      <StatPanel 
        label="LEVEL" 
        value="99" 
        icon={Zap}
        delay={1.2}
        position="top-28 right-6 lg:right-16"
      />
      
      <StatPanel 
        label="STRENGTH" 
        value="999+" 
        icon={Shield}
        delay={1.4}
        position="top-48 right-6 lg:right-32"
      />
      
      <StatPanel 
        label="INTELLIGENCE" 
        value="999+" 
        icon={Brain}
        delay={1.6}
        position="bottom-48 right-6 lg:right-16"
      />
      
      <StatPanel 
        label="FOCUS" 
        value="990" 
        icon={Target}
        delay={1.7}
        position="bottom-32 right-6 lg:right-40"
      />

      {/* Rank Badge - EX Chaos Rank */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute top-28 left-6 md:left-12 lg:left-20 z-30 hidden md:block"
      >
        <motion.div
          animate={{ 
            boxShadow: [`0 0 20px ${colors.neonGreen}40`, `0 0 40px ${colors.neonGreen}60`, `0 0 20px ${colors.neonGreen}40`]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-4 py-2 bg-black/90 border-2 border-[#1DB954]"
        >
          <div className="text-[10px] text-[#1DB954]/70 tracking-[0.2em] uppercase">Rank</div>
          <div className="text-2xl font-serif font-bold text-[#1DB954]" style={{ textShadow: `0 0 15px ${colors.neonGreen}` }}>
            EX
          </div>
          <div className="text-[10px] text-[#F5F5F5]/60 tracking-wider">CHAOS RANK</div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="font-sans text-xs text-[#F5F5F5]/50 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-[#1DB954]" />
        </motion.div>
      </motion.div>

      {/* Green glow at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${colors.neonGreen}10, transparent)`
        }}
      />
    </section>
  );
}

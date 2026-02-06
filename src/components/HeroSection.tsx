import { motion } from 'framer-motion';
import { ChevronDown, Code, MessageSquare, Zap, Shield, Cpu, Target } from 'lucide-react';

// Cinematic color palette
const colors = {
  crimson: '#9B0A0A',
  softBlood: '#CC2E2E',
  iron: '#1A1A1A',
  mist: '#F5F5F5',
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
      className={`absolute ${position} z-20`}
    >
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${colors.crimson}40` }}
        className="relative bg-black/80 backdrop-blur-sm border border-[#9B0A0A]/60 px-4 py-3 min-w-[120px]"
        style={{
          boxShadow: `0 0 20px ${colors.crimson}20, inset 0 0 20px rgba(0,0,0,0.5)`
        }}
      >
        {/* Corner nodes */}
        <motion.span 
          className="absolute -top-1 -left-1 w-2 h-2 bg-[#CC2E2E]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.span 
          className="absolute -top-1 -right-1 w-2 h-2 bg-[#CC2E2E]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.span 
          className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#CC2E2E]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.span 
          className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#CC2E2E]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: 0.1 }}
        >
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#CC2E2E] to-transparent"
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <div className="flex items-center gap-3">
          <Icon size={16} className="text-[#CC2E2E]" />
          <div>
            <div className="text-[10px] text-[#F5F5F5]/50 font-sans tracking-[0.2em] uppercase">{label}</div>
            <div className="text-[#F5F5F5] font-serif text-lg font-bold" style={{ textShadow: `0 0 10px ${colors.crimson}60` }}>
              {value}
            </div>
          </div>
        </div>

        {/* Pulsing border effect */}
        <motion.div
          className="absolute inset-0 border border-[#CC2E2E]/30 pointer-events-none"
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
      {/* Video Background - Fixed Samurai */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        >
          <source src="/From KlickPin CF Samurai Practice Live Wallpaper.mp4" type="video/mp4" />
        </video>
        
        {/* Dark gradient overlays for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)`
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.7) 100%)`
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

      {/* Animated red energy lines */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Top horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-24 left-0 w-1/3 h-px origin-left"
          style={{ background: `linear-gradient(90deg, transparent, ${colors.crimson}80, ${colors.crimson}40)` }}
        />
        
        {/* Bottom horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-24 right-0 w-1/3 h-px origin-right"
          style={{ background: `linear-gradient(270deg, transparent, ${colors.crimson}80, ${colors.crimson}40)` }}
        />
        
        {/* Pulsing vertical accent lines */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-8 top-0 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, transparent, ${colors.crimson}60, transparent)` }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute right-8 top-0 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, transparent, ${colors.crimson}60, transparent)` }}
        />
      </div>

      {/* Left side - Text Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-20 max-w-xl"
      >
        {/* Main panel with holographic effect */}
        <motion.div
          variants={holoVariants}
          className="relative bg-black/70 backdrop-blur-md border border-[#9B0A0A]/50 p-8 md:p-10"
          style={{
            boxShadow: `0 0 40px ${colors.crimson}30, inset 0 0 40px rgba(0,0,0,0.5)`
          }}
        >
          {/* Corner nodes - glowing */}
          <motion.span 
            className="absolute -top-2 -left-2 w-3 h-3 bg-[#CC2E2E]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.softBlood}`, `0 0 20px ${colors.softBlood}`, `0 0 10px ${colors.softBlood}`]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span 
            className="absolute -top-2 -right-2 w-3 h-3 bg-[#CC2E2E]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.softBlood}`, `0 0 20px ${colors.softBlood}`, `0 0 10px ${colors.softBlood}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.span 
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#CC2E2E]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.softBlood}`, `0 0 20px ${colors.softBlood}`, `0 0 10px ${colors.softBlood}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.span 
            className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#CC2E2E]"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              boxShadow: [`0 0 10px ${colors.softBlood}`, `0 0 20px ${colors.softBlood}`, `0 0 10px ${colors.softBlood}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          {/* Scan lines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(155,10,10,0.1) 2px, rgba(155,10,10,0.1) 4px)'
            }}
          />

          {/* Title */}
          <motion.div variants={holoVariants}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] leading-tight mb-2"
              style={{ textShadow: `0 0 30px ${colors.crimson}50` }}
            >
              ABHAY
            </motion.h1>
            <motion.span 
              className="block text-xl md:text-2xl font-serif text-[#CC2E2E] tracking-widest mb-4"
              style={{ textShadow: `0 0 15px ${colors.crimson}60` }}
            >
              — The Hunter
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={holoVariants}
            className="text-sm md:text-base font-sans text-[#F5F5F5]/70 tracking-wide mb-8 leading-relaxed"
          >
            Full-Stack Developer | AI Builder | System Architect
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={holoVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: `0 0 30px ${colors.crimson}60`,
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B0A0A] text-[#F5F5F5] font-sans font-medium tracking-wider border border-[#CC2E2E]"
              style={{ boxShadow: `0 0 20px ${colors.crimson}40` }}
            >
              <Code size={18} />
              <span>View Techniques</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.02, 
                borderColor: colors.softBlood,
                boxShadow: `0 0 20px ${colors.crimson}30`,
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#F5F5F5] font-sans font-medium tracking-wider border border-[#F5F5F5]/30"
            >
              <MessageSquare size={18} />
              <span>Contact</span>
            </motion.a>
          </motion.div>

          {/* Pulsing border animation */}
          <motion.div
            className="absolute inset-0 border border-[#CC2E2E]/20 pointer-events-none"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Stat Panels - Positioned around samurai (not covering center) */}
      <StatPanel 
        label="LEVEL" 
        value="99" 
        icon={Zap}
        delay={1.2}
        position="top-32 right-8 md:right-16 lg:right-24"
      />
      
      <StatPanel 
        label="STRENGTH" 
        value="999+" 
        icon={Shield}
        delay={1.4}
        position="top-48 right-8 md:right-40 lg:right-56"
      />
      
      <StatPanel 
        label="POWER" 
        value="∞" 
        icon={Cpu}
        delay={1.6}
        position="bottom-40 right-8 md:right-16 lg:right-24"
      />
      
      <StatPanel 
        label="RANK" 
        value="S" 
        icon={Target}
        delay={1.8}
        position="bottom-56 right-8 md:right-48 lg:right-64"
      />

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
          <ChevronDown size={24} className="text-[#CC2E2E]" />
        </motion.div>
      </motion.div>

      {/* Red glow at bottom for cinematic effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${colors.crimson}10, transparent)`
        }}
      />
    </section>
  );
}
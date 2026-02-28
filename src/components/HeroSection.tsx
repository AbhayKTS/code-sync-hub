import { motion } from 'framer-motion';
import { ChevronDown, Code, MessageSquare, Zap, Shield, Brain, Target, Sparkles } from 'lucide-react';

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
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Stat item for the status window
function StatItem({
  label,
  value,
  icon: Icon,
  delay = 0,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center justify-between py-2 border-b border-[#1DB954]/20 last:border-b-0"
    >
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-[#1DB954]" />
        <span className="text-[11px] text-[#EAEAEA]/60 font-sans tracking-[0.15em] uppercase">{label}</span>
      </div>
      <span
        className="text-[#1DB954] font-serif text-base font-bold"
        style={{ textShadow: `0 0 8px ${colors.neonGreen}60` }}
      >
        {value}
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  const stats = [
    { label: 'LEVEL', value: '99', icon: Zap },
    { label: 'STRENGTH', value: '999+', icon: Shield },
    { label: 'INTELLIGENCE', value: '999+', icon: Brain },
    { label: 'FOCUS', value: '990', icon: Target },
  ];

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

      {/* Left side - Solo Leveling Style Status Window */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 w-[90%] max-w-md"
      >
        {/* Main Status Window */}
        <motion.div
          variants={holoVariants}
          className="relative bg-black/85 backdrop-blur-md border border-[#1DB954]/50"
          style={{
            boxShadow: `0 0 50px ${colors.neonGreen}25, inset 0 0 40px rgba(0,0,0,0.6)`
          }}
        >
          {/* Corner nodes - glowing green */}
          <motion.span
            className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#1DB954]"
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [`0 0 8px ${colors.neonGreen}`, `0 0 16px ${colors.neonGreen}`, `0 0 8px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span
            className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#1DB954]"
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [`0 0 8px ${colors.neonGreen}`, `0 0 16px ${colors.neonGreen}`, `0 0 8px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.span
            className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#1DB954]"
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [`0 0 8px ${colors.neonGreen}`, `0 0 16px ${colors.neonGreen}`, `0 0 8px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.span
            className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#1DB954]"
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [`0 0 8px ${colors.neonGreen}`, `0 0 16px ${colors.neonGreen}`, `0 0 8px ${colors.neonGreen}`]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          {/* Scan lines overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(29,185,84,0.15) 2px, rgba(29,185,84,0.15) 4px)'
            }}
          />

          {/* Header Section with Rank and Title */}
          <div className="p-4 md:p-5 border-b border-[#1DB954]/30">
            <div className="flex items-start justify-between gap-3">
              {/* Left: Title Info */}
              <div className="flex-1">
                {/* Hunter ID Badge */}
                <motion.div
                  variants={holoVariants}
                  className="inline-flex items-center gap-2 px-2 py-1 mb-3 border border-[#1DB954]/40 bg-[#1DB954]/10"
                >
                  <span className="w-1.5 h-1.5 bg-[#1DB954] animate-pulse" />
                  <span className="text-[10px] text-[#1DB954] font-sans tracking-[0.2em] uppercase">Chaos_Immortal</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#F5F5F5] leading-tight text-glitch"
                  data-text="ABHAY KUMAR"
                  style={{ textShadow: `0 0 25px ${colors.neonGreen}40` }}
                >
                  ABHAY KUMAR
                </motion.h1>
                <motion.span
                  className="block text-base md:text-lg font-serif text-[#1DB954] tracking-widest mt-1"
                  style={{ textShadow: `0 0 12px ${colors.neonGreen}50` }}
                >
                  — The System Walker
                </motion.span>
              </div>

              {/* Right: Rank Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div
                  className="px-3 py-2 bg-black/80 border-2 border-[#1DB954] text-center"
                  style={{ boxShadow: `0 0 20px ${colors.neonGreen}40` }}
                >
                  <div className="text-[9px] text-[#1DB954]/70 tracking-[0.15em] uppercase">Rank</div>
                  <div
                    className="text-2xl md:text-3xl font-serif font-bold text-[#1DB954]"
                    style={{ textShadow: `0 0 15px ${colors.neonGreen}` }}
                  >
                    EX
                  </div>
                  <div className="text-[8px] text-[#F5F5F5]/50 tracking-wider uppercase">Chaos</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-4 md:p-5 border-b border-[#1DB954]/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={12} className="text-[#1DB954]" />
              <span className="text-[10px] text-[#1DB954]/70 font-sans tracking-[0.2em] uppercase">Status</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  delay={0.8 + index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Tagline Section */}
          <div className="p-4 md:p-5 border-b border-[#1DB954]/30">
            <p className="text-sm md:text-base font-sans text-[#F5F5F5]/80 tracking-wide leading-relaxed italic">
              "Walking between logic and chaos, crafting systems that think, adapt, and evolve."
            </p>
          </div>

          {/* Special Ability Section */}
          <div className="p-4 md:p-5 border-b border-[#1DB954]/30">
            <div className="text-[10px] text-[#1DB954]/70 font-sans tracking-[0.15em] uppercase mb-1">Special Ability</div>
            <div className="text-sm text-[#F5F5F5] font-sans">
              <span className="text-[#1DB954] font-medium">Code Absorption</span> — Learns new frameworks instantly
            </div>
          </div>

          {/* Buttons */}
          <div className="p-4 md:p-5">
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 25px ${colors.neonGreen}50`,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1DB954] text-[#0A0A0A] font-sans font-medium tracking-wider text-sm border border-[#1DB954]"
                style={{ boxShadow: `0 0 15px ${colors.neonGreen}30` }}
              >
                <Code size={16} />
                <span>View Techniques</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.02,
                  borderColor: colors.softGreen,
                  boxShadow: `0 0 15px ${colors.softGreen}25`,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent text-[#F5F5F5] font-sans font-medium tracking-wider text-sm border border-[#F5F5F5]/30"
              >
                <MessageSquare size={16} />
                <span>Contact</span>
              </motion.a>
            </div>
          </div>

          {/* Pulsing border animation */}
          <motion.div
            className="absolute inset-0 border border-[#1DB954]/20 pointer-events-none"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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

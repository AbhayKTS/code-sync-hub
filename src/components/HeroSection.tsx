import { motion } from 'framer-motion';
import { ChevronDown, Sword, Shield, Zap, Target, Flame } from 'lucide-react';
import MartialArtist from './MartialArtist';
import { SystemPanel, SystemTag, StatDisplay } from './SystemPanel';
import { RankBadge } from './StatusHUD';
import ChapterHeader from './ChapterHeader';
import MangaSFX from './MangaSFX';

// Custom page-flip easing for manhwa aesthetic
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

// Stagger container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Child item variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: pageFlipEase,
    },
  },
};

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-24 overflow-hidden">
      {/* Dark ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(180,40,40,0.15) 0%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(200,160,50,0.1) 0%, transparent 60%)',
            filter: 'blur(50px)'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(180,40,40,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(180,40,40,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative energy lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-0 right-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/20 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-32 right-0 left-1/2 h-px bg-gradient-to-l from-transparent via-secondary/30 to-secondary/10 origin-right"
      />

      {/* Chapter Header */}
      <div className="absolute top-28 left-0 right-0 z-20">
        <ChapterHeader number="CHAPTER 01" title="THE HUNTER AWAKENS" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content - System Window Style */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative bg-black/90 border-2 border-primary/60 p-8 md:p-12"
          style={{
            boxShadow: '0 0 40px rgba(180,40,40,0.3), inset 0 0 30px rgba(0,0,0,0.5)'
          }}
        >
          {/* Scan lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,40,40,0.05) 2px, rgba(180,40,40,0.05) 4px)'
            }}
          />

          {/* Corner nodes */}
          <motion.span className="absolute top-2 left-3 text-xs text-primary" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>◉</motion.span>
          <motion.span className="absolute top-2 right-3 text-xs text-primary" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>◉</motion.span>
          <motion.span className="absolute bottom-2 left-3 text-xs text-primary" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>◉</motion.span>
          <motion.span className="absolute bottom-2 right-3 text-xs text-primary" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}>◉</motion.span>

          {/* Rank badge - S-Rank */}
          <motion.div 
            variants={itemVariants}
            className="absolute -top-6 right-8 flex items-center gap-2"
          >
            <RankBadge rank="S" size="md" />
          </motion.div>

          <div className="relative z-10">
            {/* Player title */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-[10px] text-primary/70 font-manga tracking-[0.3em] uppercase">SHADOW MONARCH CLASS</span>
            </motion.div>

            <motion.h1 
              className="font-manga text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-2 tracking-wider"
              variants={itemVariants}
            >
              <motion.span 
                className="block"
                whileHover={{ scale: 1.01 }}
                style={{ textShadow: '0 0 30px rgba(180,40,40,0.5)' }}
              >
                ABHAY
              </motion.span>
            </motion.h1>
            
            <motion.span 
              className="block text-secondary text-2xl md:text-3xl font-manga tracking-widest mb-6"
              variants={itemVariants}
              style={{ textShadow: '0 0 15px rgba(200,160,50,0.5)' }}
            >
              THE HUNTER
            </motion.span>
            
            {/* System Tags - Sharp bordered */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              variants={itemVariants}
            >
              <SystemTag icon={<Zap size={12} />}>Frontend Engineer</SystemTag>
              <SystemTag icon={<Target size={12} />} variant="active">AI Builder</SystemTag>
              <SystemTag icon={<Flame size={12} />}>Full-Stack Dev</SystemTag>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(180,40,40,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-manga tracking-wider border-2 border-primary"
                style={{ boxShadow: '0 0 15px rgba(180,40,40,0.3)' }}
              >
                <Sword size={18} />
                <span>VIEW SKILLS</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary))' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground font-manga tracking-wider border-2 border-foreground/30"
              >
                <Shield size={18} />
                <span>CONTACT</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Martial Artist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center"
        >
          {/* Manga SFX - Warrior Entrance */}
          <MangaSFX 
            text="SWOOSH" 
            type="swoosh" 
            className="absolute top-4 -left-8 z-20"
            delay={0.6}
          />

          <MartialArtist />

          {/* Power level indicator - Interactive System HUD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute top-8 right-0"
          >
            <MangaSFX 
              text="DING!" 
              type="ding" 
              className="absolute -top-6 -left-4 z-10"
              delay={1.6}
            />
            <SystemPanel variant="stat" className="px-4 py-3 min-w-[100px]">
              <StatDisplay label="POWER" value="∞" />
            </SystemPanel>
          </motion.div>

          {/* Level indicator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="absolute top-24 left-0"
          >
            <SystemPanel variant="stat" className="px-3 py-2">
              <div className="text-[10px] text-primary/70 font-manga tracking-widest">LEVEL</div>
              <div className="text-secondary font-manga text-xl" style={{ textShadow: '0 0 10px rgba(200,160,50,0.6)' }}>99</div>
            </SystemPanel>
          </motion.div>

          {/* Rank indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="absolute bottom-16 right-4"
          >
            <SystemPanel variant="stat" className="px-3 py-2 flex items-center gap-2">
              <div className="text-[10px] text-primary/70 font-manga tracking-widest">RANK</div>
              <RankBadge rank="S" size="sm" />
            </SystemPanel>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="absolute bottom-4 left-0"
          >
            <SystemPanel variant="stat" className="px-3 py-2">
              <div className="text-[10px] text-primary/70 font-manga tracking-widest">STRENGTH</div>
              <div className="text-primary font-manga text-lg" style={{ textShadow: '0 0 8px rgba(180,40,40,0.5)' }}>999+</div>
            </SystemPanel>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-sm text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
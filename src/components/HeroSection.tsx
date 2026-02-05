import { motion } from 'framer-motion';
import { ChevronDown, Sword, Shield, Zap, Target, Flame } from 'lucide-react';
import KnightCharacter from './KnightCharacter';
import { SystemPanel, SystemTag, StatDisplay } from './SystemPanel';
import ChapterHeader from './ChapterHeader';

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
      {/* Ink wash background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Decorative brush strokes */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-0 right-1/2 h-0.5 bg-gradient-to-r from-transparent via-foreground/20 to-foreground/10 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-32 right-0 left-1/2 h-0.5 bg-gradient-to-l from-transparent via-primary/30 to-primary/10 origin-right"
      />

      {/* Chapter Header */}
      <div className="absolute top-28 left-0 right-0 z-20">
        <ChapterHeader number="CHAPTER 01" title="THE PROTAGONIST" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content - MURIM SCROLL PANEL */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="manga-panel-lg p-8 md:p-12 relative"
        >
          {/* Ink texture overlay */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Rank badge - System style */}
          <motion.div 
            variants={itemVariants}
            className="absolute -top-4 right-8 rank-badge"
          >
            <Sword size={14} />
            <span className="tracking-wider">MASTER RANK</span>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-foreground/40" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-foreground/40" />

          <div className="relative z-10">
            <motion.h1 
              className="font-manga text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 tracking-wider"
              variants={itemVariants}
            >
              <motion.span 
                className="block text-stroke"
                whileHover={{ scale: 1.01 }}
              >
                ABHAY
              </motion.span>
              <motion.span 
                className="block text-primary text-4xl md:text-5xl mt-2"
                variants={itemVariants}
              >
                武林開發者
              </motion.span>
              <motion.span 
                className="block text-muted-foreground text-xl md:text-2xl font-body mt-4 tracking-wide"
                variants={itemVariants}
              >
                Murim Developer
              </motion.span>
            </motion.h1>
            
            {/* System Tags - Sharp black-bordered */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              variants={itemVariants}
            >
              <SystemTag icon={<Zap size={12} />}>Frontend Engineer</SystemTag>
              <SystemTag icon={<Target size={12} />} variant="active">AI Builder</SystemTag>
              <SystemTag icon={<Flame size={12} />}>Designer</SystemTag>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                className="manga-btn bg-primary text-primary-foreground"
              >
                <Sword size={18} />
                <span>View Techniques</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                className="manga-btn bg-parchment text-foreground"
              >
                <Shield size={18} />
                <span>Contact</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Chapter number - ink style */}
          <div className="absolute bottom-4 right-6 chapter-number">
            壹
          </div>
        </motion.div>

        {/* Right side - Knight Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center"
        >
          {/* Subtle aura effect */}
          <motion.div
            animate={{ 
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(180,50,50,0.2) 0%, transparent 70%)'
            }}
          />

          <KnightCharacter />

          {/* Power level indicator - Interactive System HUD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute top-8 right-0"
          >
            <SystemPanel variant="stat" className="px-4 py-3 min-w-[100px]">
              <StatDisplay label="POWER" value="∞" />
            </SystemPanel>
          </motion.div>

          {/* Additional floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="absolute top-24 left-0"
          >
            <SystemPanel variant="stat" className="px-3 py-2">
              <div className="text-[10px] text-primary/70 font-manga tracking-widest">LEVEL</div>
              <div className="text-parchment font-manga text-lg" style={{ textShadow: '0 0 8px rgba(180,50,50,0.5)' }}>99</div>
            </SystemPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="absolute bottom-16 right-4"
          >
            <SystemPanel variant="stat" className="px-3 py-2">
              <div className="text-[10px] text-primary/70 font-manga tracking-widest">RANK</div>
              <div className="text-yellow-400 font-manga text-lg" style={{ textShadow: '0 0 8px rgba(234,179,8,0.5)' }}>S</div>
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
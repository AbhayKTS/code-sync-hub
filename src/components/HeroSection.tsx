import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import KnightCharacter from './KnightCharacter';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-24 overflow-hidden">
      {/* Background dramatic effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial burst from center */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg,
              hsl(var(--primary) / 0.3) 15deg,
              transparent 30deg,
              hsl(var(--secondary) / 0.3) 45deg,
              transparent 60deg
            )`
          }}
        />

        {/* Floating action lines */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-transparent to-transparent"
        />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-32 left-0 right-0 h-1 bg-gradient-to-l from-secondary/40 via-transparent to-transparent"
        />
      </div>

      {/* Decorative manga elements */}
      <motion.svg 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-16 left-8 w-40 h-40" 
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M10 50 Q 30 10, 50 50 T 90 50"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle 
          cx="90" 
          cy="50" 
          r="8" 
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8 }}
        />
      </motion.svg>

      <motion.svg 
        className="absolute bottom-40 right-8 w-32 h-32" 
        viewBox="0 0 100 100"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <circle cx="50" cy="50" r="35" stroke="hsl(var(--secondary))" strokeWidth="3" fill="none" strokeDasharray="10 5" />
        <circle cx="50" cy="50" r="20" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
      </motion.svg>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side - Text content - DRAMATIC MANGA PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="manga-panel-lg p-8 md:p-12 relative border-accent-corner"
        >
          {/* Action flash effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-yellow/20 via-transparent to-pastel-pink/20 rounded-xl" />
          
          {/* Comic speed lines inside panel */}
          <div className="action-lines absolute inset-0 rounded-xl opacity-30" />

          {/* Character title tag - shout style */}
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="absolute -top-5 right-8 shout-bubble bg-gradient-to-r from-action-gold to-pastel-peach px-5 py-2"
          >
            <span className="font-manga text-lg text-manga-border flex items-center gap-2">
              <Zap size={18} className="text-action-red" />
              LEVEL 999
              <Sparkles size={18} className="text-secondary" />
            </span>
          </motion.div>

          <div className="relative z-10">
            <motion.h1 
              className="font-manga text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span 
                className="block text-stroke text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground"
                whileHover={{ scale: 1.02 }}
              >
                ABHAY
              </motion.span>
              <motion.span 
                className="block text-primary glow-text"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Crafting Code
              </motion.span>
              <motion.span 
                className="block text-secondary"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                with Style
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="inline-block px-3 py-1 bg-pastel-lavender/50 rounded-lg mr-2">Frontend Engineer</span>
              <span className="inline-block px-3 py-1 bg-pastel-blue/50 rounded-lg mr-2">AI Builder</span>
              <span className="inline-block px-3 py-1 bg-pastel-mint/50 rounded-lg">Designer</span>
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="manga-btn bg-gradient-to-r from-primary to-pink-400 text-primary-foreground"
              >
                <Sparkles size={20} />
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="manga-btn bg-gradient-to-r from-secondary to-cyan-400 text-secondary-foreground"
              >
                <Zap size={20} />
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Panel number */}
          <div className="absolute bottom-4 right-6 font-manga text-7xl text-muted-foreground/10">
            01
          </div>
        </motion.div>

        {/* Right side - Knight Character with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="relative flex justify-center"
        >
          {/* Power aura rings */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-dashed border-primary/30"
          />
          <motion.div
            animate={{ 
              rotate: -360,
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-secondary/20"
          />

          <KnightCharacter />

          {/* Power stat floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute top-10 right-0 power-badge"
          >
            <span className="text-manga-border">PWR</span>
            <span className="text-action-red font-bold">∞</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with manga style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          className="speech-bubble py-2 px-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-manga text-sm text-muted-foreground">SCROLL ↓</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
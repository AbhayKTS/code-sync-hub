import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import KnightCharacter from './KnightCharacter';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-24">
      {/* Decorative ink strokes */}
      <svg className="absolute top-20 left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
        <path
          d="M10 50 Q 30 20, 50 50 T 90 50"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
          className="ink-stroke animate-ink-stroke"
        />
      </svg>
      <svg className="absolute bottom-40 right-10 w-24 h-24 opacity-15" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
      </svg>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="manga-panel-lg p-8 md:p-12 relative"
        >
          {/* Comic panel border effects */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-manga-border" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-manga-border" />
          
          {/* Speech bubble accent */}
          <div className="absolute -top-6 right-8 bg-primary text-primary-foreground px-4 py-1 rounded-full font-manga text-sm shadow-manga border-2 border-manga-border">
            YOUNG_MASTER
          </div>

          <h1 className="font-manga text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-4">
            <span className="text-stroke">Abhay</span>
            <br />
            <span className="text-primary">Crafting Code</span>
            <br />
            <span className="text-secondary">with Style</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-6 max-w-md">
            Frontend Engineer • AI Builder • Story-driven Designer
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-bold border-2 border-manga-border shadow-manga hover:shadow-manga-lg transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-body font-bold border-2 border-manga-border shadow-manga hover:shadow-manga-lg transition-shadow"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Speed lines inside panel */}
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>

        {/* Right side - Knight Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <KnightCharacter />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-body text-sm">Scroll to read more</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

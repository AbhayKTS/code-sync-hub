import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import SpeedLines from '@/components/SpeedLines';
import ParallaxBackground from '@/components/ParallaxBackground';
import SystemMenu from '@/components/SystemMenu';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { usePageNavigation } from '@/hooks/usePageNavigation';

// Custom page-flip easing
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

// Ink brush divider component with page-flip animation
function InkDivider({ symbol, delay = 0 }: { symbol: string; delay?: number }) {
  return (
    <motion.div 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: pageFlipEase, delay }}
      className="relative mx-auto w-4/5 max-w-xl my-8 md:my-12"
    >
      {/* Main divider line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      
      {/* Center symbol */}
      <motion.span 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: pageFlipEase, delay: delay + 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 -top-4 text-foreground/40 font-manga text-lg bg-background px-3"
      >
        {symbol}
      </motion.span>
      
      {/* Side decorations */}
      <motion.span 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: pageFlipEase, delay: delay + 0.4 }}
        className="absolute -left-6 top-1/2 -translate-y-1/2 text-primary/40 text-xs"
      >
        ◆
      </motion.span>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: pageFlipEase, delay: delay + 0.4 }}
        className="absolute -right-6 top-1/2 -translate-y-1/2 text-primary/40 text-xs"
      >
        ◆
      </motion.span>
    </motion.div>
  );
}

// Section wrapper with page-flip animation
function PageSection({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create paper fold shadow effect based on scroll
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <motion.div
      ref={ref}
      className={`section-page relative ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6, 
        ease: pageFlipEase,
        delay 
      }}
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d',
        y: yOffset
      }}
    >
      {/* Paper fold shadow - top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ 
          opacity: shadowOpacity,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 40%, transparent 100%)'
        }}
      />
      
      {/* Page edge effects */}
      <div className="absolute top-0 bottom-0 left-0 w-2 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.05) 0%, transparent 100%)'
        }}
      />
      <div className="absolute top-0 bottom-0 right-0 w-2 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.05) 0%, transparent 100%)'
        }}
      />
      
      {children}
      
      {/* Paper fold shadow - bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{ 
          opacity: shadowOpacity,
          background: 'linear-gradient(to top, rgba(0,0,0,0.06) 0%, transparent 100%)'
        }}
      />
    </motion.div>
  );
}

function App() {
  // Enable keyboard (A/D, arrows) and swipe navigation between sections
  usePageNavigation();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Canvas parallax background - paper scraps, ink droplets, speedlines */}
      <ParallaxBackground />
      
      {/* Dark ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(180,40,40,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(180,40,40,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Flowing energy strokes background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px opacity-20"
            style={{
              left: `${15 + i * 15}%`,
              height: '100%',
              background: `linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.3), transparent)`,
            }}
          />
        ))}
      </div>
      
      {/* Vertical panel lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-8 md:px-16">
        <div className="w-px h-full bg-primary/5" />
        <div className="w-px h-full bg-primary/5 hidden md:block" />
        <div className="w-px h-full bg-primary/5 hidden lg:block" />
        <div className="w-px h-full bg-primary/5" />
      </div>
      
      <SpeedLines />
      <Navigation />
      
      <main className="panel-gutter relative z-10">
        <PageSection>
          <HeroSection />
        </PageSection>
        
        <InkDivider symbol="I" />
        
        <PageSection delay={0.1}>
          <AboutSection />
        </PageSection>
        
        <InkDivider symbol="II" delay={0.1} />
        
        <PageSection delay={0.1}>
          <ProjectsSection />
        </PageSection>
        
        <InkDivider symbol="III" delay={0.1} />
        
        <PageSection delay={0.1}>
          <ExperienceSection />
        </PageSection>
        
        <InkDivider symbol="IV" delay={0.1} />
        
        <PageSection delay={0.1}>
          <ContactSection />
        </PageSection>
      </main>
      
      {/* Footer - Dark System Style */}
      <footer className="relative py-16 mt-12 border-t-2 border-primary/30 bg-black/80">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-manga text-2xl text-primary mb-3 tracking-widest" style={{ textShadow: '0 0 15px rgba(29,185,84,0.5)' }}>
              — THE END —
            </p>
            <p className="font-body text-sm text-muted-foreground tracking-wide">
              © 2025 Abhay Kumar — Chaos_Immortal — The System Walker
            </p>
            <div className="flex justify-center gap-4 mt-6 text-primary/60">
              <motion.span className="text-xl" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>◆</motion.span>
              <motion.span className="text-xl" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>◇</motion.span>
              <motion.span className="text-xl" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>◆</motion.span>
            </div>
          </motion.div>
        </div>
      </footer>
      
      {/* Floating System Menu with navigation controls */}
      <SystemMenu />
    </div>
  );
}

export default App;
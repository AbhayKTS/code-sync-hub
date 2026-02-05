import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import SpeedLines from '@/components/SpeedLines';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-parchment overflow-x-hidden relative">
      {/* Ink texture background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Vertical panel lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-8 md:px-16">
        <div className="w-px h-full bg-foreground/5" />
        <div className="w-px h-full bg-foreground/5 hidden md:block" />
        <div className="w-px h-full bg-foreground/5 hidden lg:block" />
        <div className="w-px h-full bg-foreground/5" />
      </div>
      
      <SpeedLines />
      <Navigation />
      
      <main className="panel-gutter space-y-12 md:space-y-20 relative z-10">
        <HeroSection />
        
        {/* Ink brush divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-foreground/20 relative"
        >
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-foreground/30 font-manga text-sm">一</span>
        </motion.div>
        
        <AboutSection />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-foreground/20 relative"
        >
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-foreground/30 font-manga text-sm">二</span>
        </motion.div>
        
        <ProjectsSection />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-foreground/20 relative"
        >
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-foreground/30 font-manga text-sm">三</span>
        </motion.div>
        
        <ExperienceSection />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-foreground/20 relative"
        >
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-foreground/30 font-manga text-sm">四</span>
        </motion.div>
        
        <ContactSection />
      </main>
      
      {/* Footer - Murim scroll style */}
      <footer className="relative py-16 mt-12 border-t-2 border-foreground/20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-manga text-2xl text-foreground/60 mb-3 tracking-widest">
              — 完 —
            </p>
            <p className="font-body text-sm text-muted-foreground tracking-wide">
              © 2024 Abhay — Forged in the fires of the Murim
            </p>
            <div className="flex justify-center gap-4 mt-6 text-foreground/40">
              <span className="text-xl">⚔</span>
              <span className="text-xl">墨</span>
              <span className="text-xl">道</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
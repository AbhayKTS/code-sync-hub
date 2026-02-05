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
    <div className="min-h-screen bg-gradient-to-b from-pastel-cream via-white to-pastel-pink/20 overflow-x-hidden relative">
      {/* Background texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <SpeedLines />
      <Navigation />
      
      <main className="panel-gutter space-y-8 md:space-y-16 relative z-10">
        <HeroSection />
        
        {/* Panel divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-manga-border/20 to-transparent"
        />
        
        <AboutSection />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-manga-border/20 to-transparent"
        />
        
        <ProjectsSection />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-manga-border/20 to-transparent"
        />
        
        <ExperienceSection />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-manga-border/20 to-transparent"
        />
        
        <ContactSection />
      </main>
      
      {/* Footer with manga style */}
      <footer className="relative py-12 mt-8">
        <div className="absolute inset-0 bg-gradient-to-t from-pastel-cream to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-manga text-xl text-muted-foreground mb-2">
              — THE END —
            </p>
            <p className="font-body text-sm text-muted-foreground">
              © 2024 Abhay — Crafted with passion like a true manhwa hero
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-2xl">⚔️</span>
              <span className="text-2xl">🎨</span>
              <span className="text-2xl">💻</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
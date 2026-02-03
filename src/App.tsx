import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import SpeedLines from '@/components/SpeedLines';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-cream via-white to-pastel-pink/30 overflow-x-hidden">
      <SpeedLines />
      <Navigation />
      <main className="panel-gutter space-y-8 md:space-y-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 text-muted-foreground font-body text-sm">
        <p>© 2024 Abhay — Crafted with passion like a true manhwa hero</p>
      </footer>
    </div>
  );
}

export default App;

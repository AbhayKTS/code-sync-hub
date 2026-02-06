import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePageNavigation } from '../hooks/usePageNavigation';

const menuItems = [
  { id: 'hero', label: 'ORIGIN', icon: Home, chapter: '01' },
  { id: 'about', label: 'ABILITIES', icon: User, chapter: '02' },
  { id: 'projects', label: 'QUESTS', icon: Code, chapter: '03' },
  { id: 'experience', label: 'JOURNEY', icon: Briefcase, chapter: '04' },
  { id: 'contact', label: 'CONTACT', icon: Mail, chapter: '05' },
];

export default function SystemMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentSection, goToNext, goToPrevious, navigateToSection, sections } = usePageNavigation();

  const handleNavigate = (index: number) => {
    navigateToSection(index);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,15,10,0.95) 100%)',
          border: '2px solid hsl(145, 80%, 45%)',
          boxShadow: '0 0 20px rgba(29, 185, 84, 0.4), inset 0 0 15px rgba(0,0,0,0.5)',
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="text-foreground" size={24} />
          ) : (
            <Menu className="text-primary" size={24} />
          )}
        </motion.div>
        
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 border-2 border-primary/50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Corner nodes */}
        <span className="absolute -top-0.5 -left-0.5 text-primary text-[6px]">◉</span>
        <span className="absolute -top-0.5 -right-0.5 text-primary text-[6px]">◉</span>
        <span className="absolute -bottom-0.5 -left-0.5 text-primary text-[6px]">◉</span>
        <span className="absolute -bottom-0.5 -right-0.5 text-primary text-[6px]">◉</span>
      </motion.button>

      {/* Navigation Arrows - Always visible */}
      <div className="fixed bottom-6 left-6 z-50 flex gap-2">
        <motion.button
          onClick={goToPrevious}
          disabled={currentSection === 0}
          className="w-10 h-10 flex items-center justify-center disabled:opacity-30"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,15,10,0.9) 100%)',
            border: '2px solid hsl(145, 80%, 45%)',
            boxShadow: '0 0 10px rgba(29, 185, 84, 0.3)',
          }}
        >
          <ChevronLeft className="text-foreground" size={18} />
        </motion.button>
        
        <motion.button
          onClick={goToNext}
          disabled={currentSection === sections.length - 1}
          className="w-10 h-10 flex items-center justify-center disabled:opacity-30"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,15,10,0.9) 100%)',
            border: '2px solid hsl(145, 80%, 45%)',
            boxShadow: '0 0 10px rgba(29, 185, 84, 0.3)',
          }}
        >
          <ChevronRight className="text-foreground" size={18} />
        </motion.button>
        
        {/* Keyboard hint */}
        <div className="hidden md:flex items-center gap-1 ml-2 text-[10px] text-foreground/50 font-mono">
          <span className="px-1.5 py-0.5 bg-ink-black/50 border border-foreground/20">A</span>
          <span>/</span>
          <span className="px-1.5 py-0.5 bg-ink-black/50 border border-foreground/20">D</span>
        </div>
      </div>

      {/* Expanded Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 z-50 w-72"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(20,15,10,0.98) 100%)',
                border: '3px solid hsl(145, 80%, 45%)',
                boxShadow: '0 0 40px rgba(29, 185, 84, 0.5), inset 0 0 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Corner nodes */}
              <span className="absolute -top-1 -left-1 text-primary text-xs">◉</span>
              <span className="absolute -top-1 -right-1 text-primary text-xs">◉</span>
              <span className="absolute -bottom-1 -left-1 text-primary text-xs">◉</span>
              <span className="absolute -bottom-1 -right-1 text-primary text-xs">◉</span>
              
              {/* Scan lines */}
              <div className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(29,185,84,0.3) 2px, rgba(29,185,84,0.3) 4px)'
                }}
              />
              
              {/* Header */}
              <div className="p-4 border-b-2 border-primary/30">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm">『</span>
                  <h3 className="font-cinzel text-foreground font-bold tracking-wider">SYSTEM MENU</h3>
                  <span className="text-primary text-sm">』</span>
                </div>
                <p className="text-foreground/50 text-xs font-crimson mt-1">Navigate chapters</p>
              </div>
              
              {/* Menu Items */}
              <div className="p-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(index)}
                    className={`w-full p-3 flex items-center gap-3 transition-all ${
                      currentSection === index 
                        ? 'bg-primary/20 border-l-2 border-primary' 
                        : 'hover:bg-foreground/5 border-l-2 border-transparent'
                    }`}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center border ${
                      currentSection === index ? 'border-primary bg-primary/20' : 'border-foreground/30'
                    }`}>
                      <item.icon size={16} className={currentSection === index ? 'text-primary' : 'text-foreground/70'} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="font-cinzel text-sm text-foreground tracking-wide">{item.label}</div>
                      <div className="text-[10px] text-foreground/40 font-mono">CHAPTER {item.chapter}</div>
                    </div>
                    
                    {currentSection === index && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-primary text-xs"
                      >
                        ◆
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Footer */}
              <div className="p-3 border-t border-primary/20 text-center">
                <p className="text-[10px] text-foreground/30 font-mono">
                  PRESS [A] PREV • [D] NEXT
                </p>
              </div>
              
              {/* Glowing animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  boxShadow: 'inset 0 0 30px rgba(29, 185, 84, 0.15)'
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Current Chapter Indicator */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2 px-4 py-2"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,15,10,0.8) 100%)',
            border: '1px solid rgba(29, 185, 84, 0.3)',
          }}
        >
          <span className="text-primary/60 text-xs">『</span>
          <span className="font-cinzel text-foreground/80 text-xs tracking-widest">
            CH.0{currentSection + 1}
          </span>
          <span className="text-primary/60 text-xs">』</span>
          
          {/* Progress dots */}
          <div className="flex gap-1 ml-2">
            {sections.map((_, i) => (
              <motion.div
                key={i}
                className={`w-1.5 h-1.5 ${i === currentSection ? 'bg-primary' : 'bg-foreground/30'}`}
                animate={i === currentSection ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

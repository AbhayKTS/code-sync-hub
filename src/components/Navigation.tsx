import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="manga-panel px-6 py-3 flex items-center justify-between">
        {/* Logo with manga flair */}
        <motion.a 
          href="#hero" 
          className="font-manga text-2xl md:text-3xl relative group"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            ABHAY
          </span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute -top-1 -right-4"
          >
            <Sparkles size={14} className="text-action-gold" />
          </motion.span>
          
          {/* Hover effect */}
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full" />
        </motion.a>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={item.href}
                className="relative px-4 py-2 font-manga text-sm uppercase tracking-wider text-foreground hover:text-primary transition-all group"
              >
                {item.label}
                {/* Manga underline effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary/50 transition-all duration-300 delay-75 group-hover:w-1/2" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg border-2 border-manga-border bg-white text-foreground hover:bg-pastel-pink/30 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu - Manga Panel Style */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="manga-panel mt-2 p-4 md:hidden"
        >
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-manga text-lg text-center py-3 px-4 text-foreground hover:bg-pastel-lavender/50 hover:text-primary transition-all rounded-lg"
                >
                  <span className="text-muted-foreground/50 mr-2">0{index + 1}</span>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
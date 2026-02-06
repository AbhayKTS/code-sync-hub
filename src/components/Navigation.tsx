import { motion } from 'framer-motion';
import { Menu, X, Sword } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: '序章', subLabel: 'Prologue', href: '#hero' },
  { label: '人物', subLabel: 'Character', href: '#about' },
  { label: '武功', subLabel: 'Techniques', href: '#projects' },
  { label: '歷程', subLabel: 'Journey', href: '#experience' },
  { label: '聯繫', subLabel: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="glass-card px-6 py-3 flex items-center justify-between">
        {/* Logo - Murim style */}
        <motion.a 
          href="#hero" 
          className="font-manga text-xl md:text-2xl relative group flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <Sword size={20} className="text-primary" />
          <span className="text-foreground tracking-wider">
            ABHAY
          </span>
          <span className="text-primary font-body text-xs ml-1">武林</span>
          
          {/* Blood accent underline */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </motion.a>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-0">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative"
            >
              {/* Vertical divider */}
              {index > 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-4 bg-foreground/20" />
              )}
              <a
                href={item.href}
                className="relative px-4 py-2 font-body text-sm uppercase tracking-widest text-foreground hover:text-primary transition-all group flex flex-col items-center"
              >
                <span className="text-[10px] text-muted-foreground/60 font-manga">{item.label}</span>
                <span>{item.subLabel}</span>
                {/* Ink underline effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 border-2 border-primary bg-background text-foreground hover:bg-primary hover:text-background transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu - Murim Panel Style */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="manga-panel mt-2 p-4 md:hidden"
        >
          <ul className="space-y-0">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="border-b border-foreground/10 last:border-b-0"
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between font-body text-base py-3 px-4 text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-muted-foreground/40 font-manga text-xs">0{index + 1}</span>
                    <span className="text-sm text-muted-foreground/60">{item.label}</span>
                  </span>
                  <span className="uppercase tracking-wider">{item.subLabel}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
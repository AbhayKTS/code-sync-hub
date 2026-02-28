import { motion } from 'framer-motion';
import { Menu, X, Sword } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TECHNIQUES', href: '#projects' },
  { label: 'JOURNEY', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 md:top-4 md:left-1/2 md:-translate-x-1/2 z-50 w-full md:w-[95%] max-w-4xl"
    >
      <div className="glass-card px-4 py-2 md:px-6 md:py-3 flex items-center justify-between rounded-none md:rounded-xl border-t-0 border-x-0 md:border-t-2 md:border-x-2">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="font-manga text-lg md:text-2xl relative group flex items-center gap-1.5 md:gap-2 mx-auto md:mx-0"
          whileHover={{ scale: 1.02 }}
        >
          <Sword size={18} className="text-primary" />
          <span className="text-foreground tracking-wider">
            ABHAY
          </span>
          <span className="text-primary font-body text-[10px] md:text-xs ml-0.5 md:ml-1">CHAOS</span>

          {/* Accent underline */}
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
                <span>{item.label}</span>
                {/* Ink underline effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button - Moved to absolute to keep logo centered */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 absolute right-4 top-1/2 -translate-y-1/2 border-2 border-primary bg-background text-foreground hover:bg-primary hover:text-background transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
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
                  </span>
                  <span className="uppercase tracking-wider">{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

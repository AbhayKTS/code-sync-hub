import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Scroll, Code } from 'lucide-react';
import { useState } from 'react';
import ChapterHeader from './ChapterHeader';

// Page-flip easing for manhwa aesthetic
const pageFlipEase = [0.33, 1, 0.68, 1] as const;

// Stagger variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const panelLeftVariants = {
  hidden: { opacity: 0, x: -60, rotateY: 8 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: pageFlipEase,
    },
  },
};

const panelRightVariants = {
  hidden: { opacity: 0, x: 60, rotateY: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: pageFlipEase,
    },
  },
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/AbhayKTS', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abhay-kumar-220363326/', label: 'LinkedIn' },
  { icon: Code, href: 'https://leetcode.com/u/CHAOS_immortal/', label: 'LeetCode' },
  { icon: Code, href: 'https://codeforces.com/profile/Chaos_Immortal', label: 'CodeForces' },
  { icon: Mail, href: 'mailto:abhay88998@gmail.com', label: 'Email' },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Message sent! Thank you for reaching out.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 font-manga text-[150px] text-foreground leading-none pointer-events-none"
      >
        LINK
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter Header */}
        <ChapterHeader number="CHAPTER 04" title="CONTACT GATE" />
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-manga text-5xl md:text-6xl text-foreground relative mt-2 tracking-wider">
            <span className="text-primary">CONTACT</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">Send a message via carrier pigeon (or email)</p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Contact form */}
          <motion.div
            variants={panelLeftVariants}
            className="p-6 relative border border-primary/40 bg-black/60"
            style={{ 
              perspective: '1000px',
              boxShadow: '0 0 30px rgba(29,185,84,0.1)'
            }}
          >
            {/* Corner decorations */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
            
            {/* Title badge */}
            <div className="flex items-center gap-2 mb-6">
              <Scroll size={16} className="text-primary" />
              <span className="font-manga text-sm text-primary tracking-widest">SEND MESSAGE</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label className="font-manga text-foreground text-sm mb-2 block tracking-wider">
                  NAME
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-primary/40 bg-black/50 font-body text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(29,185,84,0.3)] transition-all"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label className="font-manga text-foreground text-sm mb-2 block tracking-wider">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-primary/40 bg-black/50 font-body text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(29,185,84,0.3)] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-manga text-foreground text-sm mb-2 block tracking-wider">
                  MESSAGE
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-primary/40 bg-black/50 font-body text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(29,185,84,0.3)] transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(29,185,84,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-primary text-background font-manga tracking-wider flex items-center justify-center gap-2 border border-primary"
                style={{ boxShadow: '0 0 20px rgba(29,185,84,0.3)' }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ⟳
                  </motion.span>
                ) : (
                  <>
                    <Send size={18} />
                    DISPATCH
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social links and info */}
          <motion.div
            variants={panelRightVariants}
            className="space-y-6"
            style={{ perspective: '1000px' }}
          >
            {/* Social icons */}
            <div 
              className="p-6 border border-primary/40 bg-black/60"
              style={{ boxShadow: '0 0 20px rgba(29,185,84,0.1)' }}
            >
              <h3 className="font-manga text-sm text-primary mb-6 tracking-widest">TRANSMISSION CHANNELS</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 0 20px rgba(29,185,84,0.4)' }}
                    className="w-14 h-14 bg-black/80 border border-primary/40 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                    title={link.label}
                  >
                    <link.icon size={22} className="text-foreground" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 border border-primary/30 bg-black/40"
            >
              <Scroll className="text-primary mb-3" size={24} />
              <p className="font-body text-foreground text-center leading-relaxed italic">
                "Every collaboration is a new chapter in the cultivation journey. Let's write something legendary together."
              </p>
            </motion.div>

            {/* Location info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="p-6 text-center border border-primary/30 bg-black/40"
            >
              <p className="font-body text-muted-foreground text-lg">
                Based in <span className="font-manga text-foreground text-xl tracking-wider">INDIA</span>
              </p>
              <p className="font-body text-muted-foreground mt-2">
                Available for freelance & full-time opportunities
              </p>
              
              <div className="flex justify-center gap-2 mt-4">
                <span 
                  className="px-4 py-1.5 text-sm font-manga tracking-wider bg-primary/20 text-primary border border-primary/40"
                  style={{ boxShadow: '0 0 10px rgba(29,185,84,0.2)' }}
                >
                  AVAILABLE FOR QUESTS
                </span>
              </div>
            </motion.div>

            {/* Animated symbols - English only */}
            <div className="flex justify-center gap-6">
              {['⟁', '◇', '⬡', '◈', '⟐'].map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="text-2xl text-primary/40 cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

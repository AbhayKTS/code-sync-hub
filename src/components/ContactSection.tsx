import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, Scroll } from 'lucide-react';
import { useState } from 'react';

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
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@abhay.dev', label: 'Email' },
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
      {/* Background kanji */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 font-manga text-[200px] text-foreground leading-none pointer-events-none"
      >
        聯繫
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm text-muted-foreground tracking-[0.3em] uppercase">Final Chapter</span>
          <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2 tracking-wider">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">「</span>
            聯繫
            <span className="block text-primary text-4xl md:text-5xl mt-2">CONTACT</span>
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-2xl font-body">」</span>
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
          {/* Contact form - murim scroll style */}
          <motion.div
            variants={panelLeftVariants}
            className="manga-panel-lg p-8 relative"
            style={{ perspective: '1000px' }}
          >
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-foreground/40" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-foreground/40" />
            
            {/* Title badge */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-3 left-8 rank-badge"
            >
              <Scroll size={14} />
              <span>SEND MESSAGE</span>
            </motion.div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5 relative z-10">
              <div>
                <label className="font-manga text-foreground text-sm mb-2 block tracking-wider">
                  NAME
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-foreground/30 bg-parchment/50 font-body text-foreground focus:outline-none focus:border-primary transition-all"
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
                  className="w-full px-4 py-3 border-2 border-foreground/30 bg-parchment/50 font-body text-foreground focus:outline-none focus:border-primary transition-all"
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
                  className="w-full px-4 py-3 border-2 border-foreground/30 bg-parchment/50 font-body text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                className="w-full manga-btn bg-primary text-primary-foreground justify-center text-lg"
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ☯
                  </motion.span>
                ) : (
                  <>
                    <Send size={20} />
                    DISPATCH
                  </>
                )}
              </motion.button>
            </form>

            {/* Chapter number */}
            <div className="absolute bottom-4 right-6 chapter-number">
              伍
            </div>
          </motion.div>

          {/* Social links and info */}
          <motion.div
            variants={panelRightVariants}
            className="space-y-6"
            style={{ perspective: '1000px' }}
          >
            {/* Social icons - system panel */}
            <div className="system-panel p-6">
              <h3 className="font-manga text-lg text-parchment mb-6 tracking-wider">TRANSMISSION CHANNELS</h3>
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
                    whileHover={{ y: -4 }}
                    className="w-14 h-14 bg-parchment/10 border-2 border-parchment/30 flex items-center justify-center hover:bg-parchment/20 transition-colors"
                  >
                    <link.icon size={22} className="text-parchment" />
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
              className="manga-panel p-6"
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
              className="manga-panel p-6 text-center"
            >
              <p className="font-body text-muted-foreground text-lg">
                Based in <span className="font-manga text-foreground text-xl tracking-wider">INDIA</span>
              </p>
              <p className="font-body text-muted-foreground mt-2">
                Available for freelance & full-time opportunities
              </p>
              
              <div className="flex justify-center gap-2 mt-4">
                <span className="skill-tag bg-primary/20 text-primary border-primary/40">⚔ AVAILABLE FOR QUESTS</span>
              </div>
            </motion.div>

            {/* Murim symbols */}
            <div className="flex justify-center gap-6">
              {['劍', '道', '氣', '武', '功'].map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="text-2xl font-manga text-foreground/20 cursor-default"
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
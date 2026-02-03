import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/AbhayKTS', label: 'GitHub', color: 'from-gray-700 to-gray-900' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'from-sky-400 to-sky-600' },
  { icon: Mail, href: 'mailto:contact@abhay.dev', label: 'Email', color: 'from-primary to-pink-600' },
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
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 font-manga text-[200px] text-manga-border leading-none pointer-events-none"
      >
        連絡
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Chapter title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-manga text-sm text-muted-foreground tracking-[0.3em] uppercase">Final Chapter</span>
          <h2 className="font-manga text-5xl md:text-7xl text-foreground relative mt-2">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-primary text-3xl md:text-4xl">「</span>
            LET'S <span className="text-primary">CONNECT</span>
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-primary text-3xl md:text-4xl">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">Let's create something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact form - action panel style */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="action-panel p-8 relative"
          >
            <div className="focus-lines absolute inset-0 rounded-xl opacity-30" />
            
            {/* Title badge */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-5 left-8 shout-bubble bg-gradient-to-r from-secondary to-cyan-400 px-5 py-2"
            >
              <span className="font-manga text-lg text-white flex items-center gap-2">
                <MessageCircle size={18} />
                SEND MESSAGE
              </span>
            </motion.div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5 relative z-10">
              <div>
                <label className="font-manga text-foreground text-sm mb-2 block">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl border-3 border-manga-border bg-white/90 font-body text-foreground focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all shadow-manga"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="font-manga text-foreground text-sm mb-2 block">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-xl border-3 border-manga-border bg-white/90 font-body text-foreground focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all shadow-manga"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-manga text-foreground text-sm mb-2 block">
                  YOUR MESSAGE
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border-3 border-manga-border bg-white/90 font-body text-foreground focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all resize-none shadow-manga"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full manga-btn bg-gradient-to-r from-primary via-pink-500 to-primary text-white justify-center text-xl"
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ⚡
                  </motion.span>
                ) : (
                  <>
                    <Send size={22} />
                    SEND MESSAGE
                    <Sparkles size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social links and info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Social icons - manga panel */}
            <div className="manga-panel p-6">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="text-primary fill-primary" size={20} />
                <h3 className="font-manga text-xl text-foreground">CONNECT WITH ME</h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center border-3 border-manga-border shadow-manga`}
                  >
                    <link.icon size={26} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="speech-bubble bg-gradient-to-br from-white to-pastel-cream"
            >
              <p className="font-manga text-xl text-foreground text-center leading-relaxed">
                "Every collaboration is a new chapter in my story. Let's write something great together!"
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
                Based in <span className="font-manga text-foreground text-xl">INDIA</span>
              </p>
              <p className="font-body text-muted-foreground mt-2">
                Available for freelance & full-time opportunities
              </p>
              
              <div className="flex justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-manga">🟢 AVAILABLE</span>
              </div>
            </motion.div>

            {/* Floating emojis */}
            <div className="flex justify-center gap-6">
              {['⚔️', '✨', '🎮', '💻', '🚀'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="text-3xl cursor-default"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
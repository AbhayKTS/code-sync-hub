import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/AbhayKTS', label: 'GitHub', color: 'hover:bg-pastel-lavender' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-pastel-blue' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-pastel-mint' },
  { icon: Mail, href: 'mailto:contact@abhay.dev', label: 'Email', color: 'hover:bg-pastel-pink' },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Message sent! Thank you for reaching out.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-manga text-4xl md:text-5xl text-foreground inline-block relative">
            <span className="absolute -left-8 top-0 text-primary text-2xl">「</span>
            Contact
            <span className="absolute -right-8 top-0 text-primary text-2xl">」</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">Let's create something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact form panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="manga-panel-lg p-8 relative"
          >
            <div className="absolute -top-4 left-8 bg-secondary text-secondary-foreground px-6 py-2 font-manga text-lg border-2 border-manga-border shadow-manga rounded-md flex items-center gap-2">
              <MessageCircle size={18} />
              SEND MESSAGE
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="font-body font-bold text-foreground text-sm mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-manga-border bg-white/80 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="font-body font-bold text-foreground text-sm mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-manga-border bg-white/80 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-body font-bold text-foreground text-sm mb-2 block">
                  Your Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-manga-border bg-white/80 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-manga text-lg border-2 border-manga-border shadow-manga hover:shadow-manga-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social links and info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Social icons floating */}
            <div className="manga-panel p-6">
              <h3 className="font-manga text-xl text-foreground mb-6">CONNECT WITH ME</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className={`w-14 h-14 rounded-xl border-2 border-manga-border shadow-manga flex items-center justify-center bg-white ${link.color} transition-colors`}
                  >
                    <link.icon size={24} className="text-foreground" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="speech-bubble bg-gradient-to-br from-pastel-cream to-white"
            >
              <p className="font-body text-foreground italic text-center">
                "Every collaboration is a new chapter in my story. Let's write something great together!"
              </p>
            </motion.div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 text-center"
            >
              <p className="font-body text-muted-foreground">
                Based in <span className="font-bold text-foreground">India</span>
                <br />
                Available for freelance & full-time opportunities
              </p>
            </motion.div>

            {/* Decorative elements */}
            <div className="flex justify-center gap-4">
              {['⚔', '✨', '🎮', '💻'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="text-2xl"
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

import { motion } from 'framer-motion';
import { ChevronDown, MessageSquare, Zap, Brain, Target, Sparkles, Cpu, Zap as Energy } from 'lucide-react';
import { SystemPanel, StatDisplay } from './SystemPanel';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center lg:justify-start px-6 lg:px-20 overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/From KlickPin CF Samurai Practice Live Wallpaper.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
          style={{ filter: 'contrast(1.2) brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text & Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-md rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-[10px] font-manga tracking-[0.3em] text-primary uppercase">SYSTEM_INITIALIZED_v2.0</span>
          </div>

          <div className="space-y-2">
            <motion.h1
              className="text-7xl md:text-9xl font-manga font-black text-white leading-none tracking-tighter"
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              PROJECT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">LEVEL_UP</span>
            </motion.h1>
            <p className="text-xl md:text-2xl font-body text-white/60 max-w-lg leading-relaxed">
              Ascending the peak of full-stack cultivation through AI-driven breakthroughs and Web3 mastery.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-background font-manga font-bold tracking-widest text-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center gap-3"
            >
              <Zap size={18} />
              ENTER_DUNGEON
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-manga tracking-widest text-sm backdrop-blur-md hover:bg-white/5 transition-all flex items-center gap-3"
            >
              <MessageSquare size={18} />
              COMM_LINK
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Player Status Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative max-w-md mx-auto lg:ml-auto perspective-1000"
        >
          <SystemPanel
            title="PLAYER_STATUS"
            subtitle="CULTIVATOR_ID: CHAOS_IMMORTAL"
            className="w-full backdrop-blur-xl border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-8">
              {/* Profile Header */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-3xl font-manga font-bold text-white tracking-widest">ABHAY KUMAR</h2>
                  <div className="flex items-center gap-3 opacity-60">
                    <span className="text-[10px] font-manga text-secondary uppercase tracking-[0.2em]">The System Walker</span>
                    <div className="h-px w-8 bg-white/20" />
                    <span className="text-[10px] font-manga text-primary uppercase">SS-RANK</span>
                  </div>
                </div>
                <div className="w-20 h-20 border-2 border-primary/40 bg-primary/5 flex items-center justify-center p-2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  <div className="text-primary font-manga text-4xl font-black relative z-10 group-hover:scale-110 transition-transform">EX</div>
                  {/* Scanning line */}
                  <motion.div
                    className="absolute inset-x-0 h-0.5 bg-primary/50 shadow-[0_0_10px_var(--primary)] z-20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Core Stats */}
              <div className="grid grid-cols-2 gap-4">
                <StatDisplay label="STRENGTH" value="999" rank="+∞" icon={<Energy size={14} />} />
                <StatDisplay label="INTELLECT" value="999" rank="+∞" icon={<Brain size={14} />} />
                <StatDisplay label="AGILITY" value="999" rank="S" icon={<Cpu size={14} />} />
                <StatDisplay label="LUCK" value="999" rank="S" icon={<Target size={14} />} />
              </div>

              {/* Cultivation Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-manga uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-secondary" />
                    <span>QI_CULTIVATION</span>
                  </div>
                  <span className="text-secondary">NASCENT_SOUL_STAGE</span>
                </div>
                <div className="system-progress h-2 bg-secondary/10">
                  <motion.div
                    className="system-progress-fill bg-secondary shadow-[0_0_15px_var(--secondary)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-[9px] font-manga opacity-40">
                  <span>PROGRESS_EXP: 8,443 / 10,000</span>
                  <span>ASCENSION_NEAR</span>
                </div>
              </div>

              {/* Passive Skills */}
              <div className="space-y-4">
                <span className="text-[10px] font-manga tracking-widest opacity-40 uppercase">ACTIVE_MODES</span>
                <div className="flex gap-3">
                  <div className="flex-1 px-4 py-2 bg-primary/5 border border-primary/20 text-[10px] font-manga text-primary tracking-widest text-center">
                    FULL_STACK_DOMAIN
                  </div>
                  <div className="flex-1 px-4 py-2 bg-secondary/5 border border-secondary/20 text-[10px] font-manga text-secondary tracking-widest text-center">
                    AI_SYNCHRONIZATION
                  </div>
                </div>
              </div>
            </div>
          </SystemPanel>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown size={32} className="text-primary/40" />
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-10 font-manga text-9xl text-white/5 select-none pointer-events-none tracking-tighter">
        IMMORTAL
      </div>
    </section>
  );
}

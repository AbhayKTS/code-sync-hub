import { motion } from 'framer-motion';
import { ChevronDown, MessageSquare, Zap, Brain, Target, Sparkles, Cpu, Zap as Energy } from 'lucide-react';
import { SystemPanel, StatDisplay } from './SystemPanel';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center lg:justify-start px-4 md:px-10 lg:px-20 py-20 lg:py-0 overflow-hidden bg-background">
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
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 lg:h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side: Text & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 lg:space-y-8 text-center lg:text-left pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-md rounded-full mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-manga tracking-[0.3em] text-primary uppercase">SYSTEM_INITIALIZED_v2.0</span>
          </div>

          <div className="space-y-2 lg:space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-9xl font-manga font-black text-white leading-none tracking-tighter"
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              PROJECT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">LEVEL_UP</span>
            </motion.h1>
            <p className="text-lg md:text-xl lg:text-2xl font-body text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              Ascending the peak of full-stack cultivation through AI-driven breakthroughs and Web3 mastery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 px-6 lg:px-0">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-manga font-bold tracking-widest text-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-3"
            >
              <Zap size={18} />
              ENTER_DUNGEON
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-manga tracking-widest text-sm backdrop-blur-md hover:bg-white/5 transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare size={18} />
              COMM_LINK
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Player Status Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto perspective-1000 mb-20 lg:mb-0"
        >
          <SystemPanel
            title="PLAYER_STATUS"
            subtitle="CULTIVATOR_ID: CHAOS_IMMORTAL"
            className="w-full backdrop-blur-xl border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-6 lg:space-y-8">
              {/* Profile Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-manga font-bold text-white tracking-widest">ABHAY KUMAR</h2>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-3 opacity-60">
                    <span className="text-[8px] md:text-[10px] font-manga text-secondary uppercase tracking-[0.2em]">The System Walker</span>
                    <div className="h-px w-4 lg:w-8 bg-white/20 hidden xs:block" />
                    <span className="text-[8px] md:text-[10px] font-manga text-primary uppercase">SS-RANK</span>
                  </div>
                </div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-primary/40 bg-primary/5 flex items-center justify-center p-2 relative overflow-hidden group flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  <div className="text-primary font-manga text-2xl lg:text-4xl font-black relative z-10 group-hover:scale-110 transition-transform">EX</div>
                  <motion.div
                    className="absolute inset-x-0 h-0.5 bg-primary/50 shadow-[0_0_10px_var(--primary)] z-20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Core Stats */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <StatDisplay label="STRENGTH" value="999" rank="+∞" icon={<Energy size={12} />} />
                <StatDisplay label="INTELLECT" value="999" rank="+∞" icon={<Brain size={12} />} />
                <StatDisplay label="AGILITY" value="999" rank="S" icon={<Cpu size={12} />} />
                <StatDisplay label="LUCK" value="999" rank="S" icon={<Target size={12} />} />
              </div>

              {/* Cultivation Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[9px] lg:text-[11px] font-manga uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-secondary" />
                    <span className="truncate">QI_CULTIVATION</span>
                  </div>
                  <span className="text-secondary text-right truncate">NASCENT_SOUL_STAGE</span>
                </div>
                <div className="system-progress h-1.5 lg:h-2 bg-secondary/10">
                  <motion.div
                    className="system-progress-fill bg-secondary shadow-[0_0_15px_var(--secondary)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-[8px] lg:text-[9px] font-manga opacity-40">
                  <span>EXP: 8,443 / 10,000</span>
                  <span>ASCENSION_NEAR</span>
                </div>
              </div>

              {/* Active Modes */}
              <div className="space-y-3 lg:space-y-4">
                <span className="text-[9px] lg:text-[10px] font-manga tracking-widest opacity-40 uppercase">ACTIVE_MODES</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                  <div className="px-3 lg:px-4 py-2 bg-primary/5 border border-primary/20 text-[9px] lg:text-[10px] font-manga text-primary tracking-widest text-center uppercase">
                    Full_Stack
                  </div>
                  <div className="px-3 lg:px-4 py-2 bg-secondary/5 border border-secondary/20 text-[9px] lg:text-[10px] font-manga text-secondary tracking-widest text-center uppercase">
                    AI_Sync
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
        className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown size={28} className="text-primary/40 md:size-32" />
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-6 lg:p-10 font-manga text-[40px] md:text-[80px] lg:text-[150px] text-white/5 select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        CHAOS_IMMORTAL
      </div>
    </section>
  );
}

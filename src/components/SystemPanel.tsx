import { motion } from 'framer-motion';
import { useState, useRef, useCallback, ReactNode } from 'react';

// System click sound (base64 encoded short beep)
const playSystemSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.15);
};

interface SystemPanelProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'default' | 'stat' | 'skill' | 'popup';
  showCorners?: boolean;
  onClick?: () => void;
  glowColor?: string;
}

export function SystemPanel({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  showCorners = true,
  onClick,
}: SystemPanelProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const baseVariants = {
    default: 'system-card',
    stat: 'hud-stat-card',
    skill: 'system-card',
    popup: 'system-panel system-popup-animate'
  };

  return (
    <motion.div
      ref={panelRef}
      className={`${baseVariants[variant]} ${className} group relative overflow-hidden flex flex-col`}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onClick={() => {
        playSystemSound();
        onClick?.();
      }}
      whileHover={{ scale: 1.002 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* System Window Header */}
      {(title || subtitle) && (
        <div className="system-header">
          <div className="flex items-center gap-3">
            <span className="status-pip bg-primary" />
            <span className="font-manga tracking-[0.2em]">{title || 'SYSTEM UNIT'}</span>
          </div>
          <div className="flex gap-1.5 opacity-40">
            <div className="w-2 h-0.5 bg-primary" />
            <div className="w-2 h-0.5 bg-primary" />
          </div>
        </div>
      )}

      {/* Edge Glow Overlay */}
      <div className="edge-glow opacity-40 group-hover:opacity-100 group-hover:border-primary/50 transition-all duration-500" />

      {/* Scanline Effect */}
      <div className="scanline opacity-[0.05] pointer-events-none group-hover:opacity-10 transition-opacity" />

      {/* Content Area with massive padding fix */}
      <div className="content-area relative z-10 flex-1 flex flex-col">
        {subtitle && (
          <div className="flex items-center gap-3 mb-6 opacity-40">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[9px] uppercase font-manga tracking-[0.4em]">{subtitle}</span>
          </div>
        )}
        <div className="flex-1">
          {children}
        </div>
      </div>

      {/* Corner Brackets */}
      {showCorners && (
        <>
          <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/20" />
          <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/20" />
          <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/20" />
          <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/20" />
        </>
      )}
    </motion.div>
  );
}

// Stat display component for HUD cards
interface StatDisplayProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  rank?: string;
}

export function StatDisplay({ label, value, icon, rank }: StatDisplayProps) {
  return (
    <div className="flex flex-col items-center text-center p-2 md:p-3 bg-black/40 border border-primary/30">
      <div className="flex items-center gap-1.5 mb-1">
        {icon && <span className="text-primary">{icon}</span>}
        <span className="text-foreground/60 text-[8px] md:text-[10px] font-manga tracking-wider uppercase truncate">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-manga text-foreground text-lg md:text-2xl" style={{ textShadow: '0 0 8px rgba(29,185,84,0.5)' }}>
          {value}
        </span>
        {rank && (
          <span className="system-tag text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5">{rank}</span>
        )}
      </div>
    </div>
  );
}

// System tag component with qi aura effect
interface SystemTagProps {
  children: ReactNode;
  variant?: 'default' | 'active' | 'legendary';
  icon?: ReactNode;
  onClick?: () => void;
  showAura?: boolean;
}

export function SystemTag({ children, variant = 'default', icon, onClick, showAura = true }: SystemTagProps) {
  const variantStyles = {
    default: 'border-primary/50 bg-black/60 text-foreground',
    active: 'border-primary bg-primary/20 text-primary',
    legendary: 'border-yellow-500/70 bg-yellow-900/30 text-yellow-200'
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-body border cursor-pointer transition-all ${variantStyles[variant]} ${showAura ? 'hover:bg-primary/30 hover:border-primary' : ''}`}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        e.stopPropagation();
        playSystemSound();
        onClick?.();
      }}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span>{children}</span>
    </motion.span>
  );
}

// Floating HUD card for skills/powers
interface SkillCardProps {
  name: string;
  level?: number;
  maxLevel?: number;
  description?: string;
  icon?: ReactNode;
  rank?: 'S' | 'A' | 'B' | 'C' | 'D';
}

export function SkillCard({ name, level = 1, maxLevel = 10, description, icon, rank }: SkillCardProps) {
  const rankColors = {
    S: 'text-emerald-300 border-emerald-400/50',
    A: 'text-green-400 border-green-500/50',
    B: 'text-teal-400 border-teal-500/50',
    C: 'text-cyan-400 border-cyan-500/50',
    D: 'text-gray-400 border-gray-500/50',
  };

  return (
    <div className="level-up-container relative">
      {/* Level Up text */}
      <span className="level-up-text">LEVEL UP!</span>

      {/* Sparkles */}
      <span className="level-up-sparkle" style={{ left: '20%' }} />
      <span className="level-up-sparkle" style={{ left: '40%' }} />
      <span className="level-up-sparkle" style={{ left: '60%' }} />
      <span className="level-up-sparkle" style={{ left: '80%' }} />

      <SystemPanel variant="skill" className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="w-12 h-12 bg-black/50 border border-primary/40 flex items-center justify-center flex-shrink-0">
            {icon || <span className="font-manga text-primary text-xl">技</span>}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h5 className="font-manga text-foreground tracking-wide truncate">{name}</h5>
              {rank && (
                <span className={`text-xs font-manga px-1.5 py-0.5 border ${rankColors[rank]}`}>
                  {rank}
                </span>
              )}
            </div>

            {description && (
              <p className="text-foreground/60 text-xs font-body line-clamp-2 mb-2">{description}</p>
            )}

            {/* Level bar */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-black/50 border border-primary/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/50"
                  initial={{ width: 0 }}
                  animate={{ width: `${(level / maxLevel) * 100}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
              <span className="text-[10px] text-primary font-manga">Lv.{level}</span>
            </div>
          </div>
        </div>
      </SystemPanel>
    </div>
  );
}

export default SystemPanel;

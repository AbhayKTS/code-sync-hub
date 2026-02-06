import { motion, AnimatePresence } from 'framer-motion';
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
  glowColor = 'rgba(29, 185, 84, 0.4)'
}: SystemPanelProps) {
  const [inkEffects, setInkEffects] = useState<{ id: number; x: number; y: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const panelRef = useRef<HTMLDivElement>(null);
  const effectIdRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    
    // Play system sound
    playSystemSound();
    
    // Create ink spread effect
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newEffect = { id: effectIdRef.current++, x, y };
    setInkEffects(prev => [...prev, newEffect]);
    
    // Remove effect after animation
    setTimeout(() => {
      setInkEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
    }, 600);

    onClick?.();
  }, [onClick]);

  const baseVariants = {
    default: 'system-card',
    stat: 'hud-stat-card',
    skill: 'system-card',
    popup: 'system-panel system-popup-animate'
  };

  return (
    <motion.div
      ref={panelRef}
      className={`${baseVariants[variant]} ${className}`}
      style={{ 
        '--mouse-x': `${mousePos.x}%`, 
        '--mouse-y': `${mousePos.y}%` 
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      whileHover={{ scale: variant === 'popup' ? 1 : 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Corner nodes */}
      {showCorners && (
        <>
          <motion.span 
            className="absolute top-1 left-2 text-[10px] z-10"
            style={{ color: 'hsl(var(--primary))', textShadow: `0 0 8px ${glowColor}` }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ◉
          </motion.span>
          <motion.span 
            className="absolute top-1 right-2 text-[10px] z-10"
            style={{ color: 'hsl(var(--primary))', textShadow: `0 0 8px ${glowColor}` }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            ◉
          </motion.span>
          <motion.span 
            className="absolute bottom-1 left-2 text-[10px] z-10"
            style={{ color: 'hsl(var(--primary))', textShadow: `0 0 8px ${glowColor}` }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            ◉
          </motion.span>
          <motion.span 
            className="absolute bottom-1 right-2 text-[10px] z-10"
            style={{ color: 'hsl(var(--primary))', textShadow: `0 0 8px ${glowColor}` }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            ◉
          </motion.span>
        </>
      )}

      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-3 pb-2 border-b border-primary/30">
          {subtitle && (
            <span className="text-[10px] text-primary/70 font-manga tracking-[0.3em] uppercase">
              {subtitle}
            </span>
          )}
          {title && (
            <h4 className="font-manga text-foreground text-lg tracking-wider" style={{ textShadow: '0 0 10px rgba(29,185,84,0.3)' }}>
              {title}
            </h4>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Ink spread effects */}
      <AnimatePresence>
        {inkEffects.map(effect => (
          <motion.div
            key={effect.id}
            className="ink-spread-effect"
            style={{
              left: effect.x,
              top: effect.y,
              width: 100,
              height: 100,
              marginLeft: -50,
              marginTop: -50,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon && <span className="text-primary">{icon}</span>}
        <span className="text-foreground/70 text-sm font-body">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-manga text-foreground text-xl" style={{ textShadow: '0 0 8px rgba(29,185,84,0.5)' }}>
          {value}
        </span>
        {rank && (
          <span className="system-tag text-[10px] px-2 py-0.5">{rank}</span>
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
    default: '',
    active: 'border-primary bg-primary/20',
    legendary: 'border-yellow-500/70 bg-yellow-900/30 text-yellow-200'
  };

  return (
    <motion.span
      className={`system-tag ${variantStyles[variant]} ${showAura ? 'qi-aura tag-aura' : ''}`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.stopPropagation();
        playSystemSound();
        onClick?.();
      }}
    >
      {icon && <span className="text-current">{icon}</span>}
      {children}
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

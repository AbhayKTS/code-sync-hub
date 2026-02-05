import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// HP/MP/EXP Bar component
interface StatBarProps {
  label: string;
  current: number;
  max: number;
  color: 'hp' | 'mp' | 'exp' | 'gold';
  showNumbers?: boolean;
}

export function StatBar({ label, current, max, color, showNumbers = true }: StatBarProps) {
  const percentage = (current / max) * 100;
  
  const colors = {
    hp: { bg: 'bg-red-900/50', fill: 'from-red-600 to-red-500', glow: 'shadow-red-500/30' },
    mp: { bg: 'bg-blue-900/50', fill: 'from-blue-600 to-blue-400', glow: 'shadow-blue-500/30' },
    exp: { bg: 'bg-purple-900/50', fill: 'from-purple-600 to-purple-400', glow: 'shadow-purple-500/30' },
    gold: { bg: 'bg-yellow-900/50', fill: 'from-yellow-500 to-yellow-400', glow: 'shadow-yellow-500/30' },
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-manga tracking-widest text-parchment/70 uppercase">{label}</span>
        {showNumbers && (
          <span className="text-xs font-manga text-parchment">
            {current.toLocaleString()}/{max.toLocaleString()}
          </span>
        )}
      </div>
      <div className={`h-3 ${colors[color].bg} border border-white/10 relative overflow-hidden`}>
        <motion.div
          className={`h-full bg-gradient-to-r ${colors[color].fill} shadow-lg ${colors[color].glow}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// Rank Badge component
interface RankBadgeProps {
  rank: 'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function RankBadge({ rank, size = 'md', animated = true }: RankBadgeProps) {
  const rankStyles = {
    SSS: 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-black border-yellow-300 shadow-yellow-400/50',
    SS: 'bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 text-black border-orange-300 shadow-orange-400/50',
    S: 'bg-gradient-to-br from-yellow-500 via-yellow-400 to-amber-500 text-black border-yellow-400 shadow-yellow-500/50',
    A: 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white border-purple-400 shadow-purple-500/50',
    B: 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white border-blue-400 shadow-blue-500/50',
    C: 'bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white border-green-400 shadow-green-500/50',
    D: 'bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600 text-white border-gray-400 shadow-gray-500/50',
    E: 'bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 text-white border-gray-500 shadow-gray-600/50',
    F: 'bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 text-white border-gray-600 shadow-gray-700/50',
  };

  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
  };

  return (
    <motion.div
      className={`${sizes[size]} ${rankStyles[rank]} font-manga font-bold flex items-center justify-center border-2 shadow-lg`}
      animate={animated ? { 
        boxShadow: ['0 0 15px currentColor', '0 0 25px currentColor', '0 0 15px currentColor']
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    >
      {rank}
    </motion.div>
  );
}

// Status Window component
interface StatusWindowProps {
  playerName: string;
  title: string;
  level: number;
  rank: 'SSS' | 'SS' | 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  stats: {
    hp: { current: number; max: number };
    mp: { current: number; max: number };
    exp: { current: number; max: number };
  };
  className?: string;
}

export function StatusWindow({ playerName, title, level, rank, stats, className = '' }: StatusWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`relative bg-black/95 border-2 border-primary/60 p-4 min-w-[280px] ${className}`}
      style={{
        boxShadow: '0 0 30px rgba(180,40,40,0.3), inset 0 0 20px rgba(0,0,0,0.5)',
      }}
    >
      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,40,40,0.03) 2px, rgba(180,40,40,0.03) 4px)'
        }}
      />
      
      {/* Corner decorations */}
      <span className="absolute top-1 left-2 text-xs text-primary animate-pulse">◉</span>
      <span className="absolute top-1 right-2 text-xs text-primary animate-pulse" style={{ animationDelay: '0.5s' }}>◉</span>
      <span className="absolute bottom-1 left-2 text-xs text-primary animate-pulse" style={{ animationDelay: '1s' }}>◉</span>
      <span className="absolute bottom-1 right-2 text-xs text-primary animate-pulse" style={{ animationDelay: '1.5s' }}>◉</span>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-primary/30">
        <div>
          <span className="text-[10px] text-primary/70 font-manga tracking-widest uppercase block">{title}</span>
          <h3 className="font-manga text-xl text-parchment tracking-wide" style={{ textShadow: '0 0 10px rgba(180,40,40,0.4)' }}>
            {playerName}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <span className="text-[9px] text-primary/60 font-manga tracking-widest block">LV</span>
            <span className="font-manga text-2xl text-secondary" style={{ textShadow: '0 0 10px rgba(200,160,50,0.5)' }}>
              {level}
            </span>
          </div>
          <RankBadge rank={rank} size="md" />
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <StatBar label="HP" current={stats.hp.current} max={stats.hp.max} color="hp" />
        <StatBar label="MP" current={stats.mp.current} max={stats.mp.max} color="mp" />
        <StatBar label="EXP" current={stats.exp.current} max={stats.exp.max} color="exp" />
      </div>
    </motion.div>
  );
}

// Quest Notification component
interface QuestNotificationProps {
  type: 'new' | 'complete' | 'failed';
  questName: string;
  reward?: string;
}

export function QuestNotification({ type, questName, reward }: QuestNotificationProps) {
  const typeStyles = {
    new: { bg: 'from-blue-900/90', border: 'border-blue-500', text: 'NEW QUEST', color: 'text-blue-400' },
    complete: { bg: 'from-green-900/90', border: 'border-green-500', text: 'QUEST COMPLETE', color: 'text-green-400' },
    failed: { bg: 'from-red-900/90', border: 'border-red-500', text: 'QUEST FAILED', color: 'text-red-400' },
  };

  const style = typeStyles[type];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      className={`relative bg-gradient-to-r ${style.bg} to-black/95 border-l-4 ${style.border} p-4 min-w-[250px]`}
      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
    >
      <span className={`text-[10px] font-manga tracking-widest ${style.color}`}>{style.text}</span>
      <h4 className="font-manga text-parchment text-lg mt-1">{questName}</h4>
      {reward && (
        <p className="text-xs text-secondary/80 mt-2 font-body">
          Reward: {reward}
        </p>
      )}
    </motion.div>
  );
}

// Level Up Effect component
interface LevelUpEffectProps {
  level: number;
  onComplete?: () => void;
}

export function LevelUpEffect({ level, onComplete }: LevelUpEffectProps) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
    >
      {/* Flash */}
      <motion.div
        className="absolute inset-0 bg-secondary/20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Level up text */}
      <motion.div
        className="text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 0.8, times: [0, 0.6, 1] }}
      >
        <motion.span
          className="block font-manga text-6xl text-secondary tracking-widest"
          style={{ textShadow: '0 0 30px rgba(200,160,50,0.8), 0 0 60px rgba(200,160,50,0.4)' }}
          animate={{ 
            textShadow: [
              '0 0 30px rgba(200,160,50,0.8), 0 0 60px rgba(200,160,50,0.4)',
              '0 0 50px rgba(200,160,50,1), 0 0 100px rgba(200,160,50,0.6)',
              '0 0 30px rgba(200,160,50,0.8), 0 0 60px rgba(200,160,50,0.4)'
            ]
          }}
          transition={{ duration: 1, repeat: 2 }}
        >
          LEVEL UP!
        </motion.span>
        <motion.span
          className="block font-manga text-8xl text-parchment mt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
        >
          {level}
        </motion.span>
      </motion.div>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-secondary rounded-full"
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 0,
            opacity: 1 
          }}
          animate={{ 
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            scale: [0, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.2 + i * 0.05,
            ease: 'easeOut'
          }}
          style={{
            boxShadow: '0 0 10px rgba(200,160,50,0.8)'
          }}
        />
      ))}
    </motion.div>
  );
}

// Skill Tag component
interface SkillTagProps {
  name: string;
  level?: number;
  rank?: 'S' | 'A' | 'B' | 'C' | 'D';
  icon?: ReactNode;
}

export function SkillTag({ name, level, rank, icon }: SkillTagProps) {
  const rankColors = {
    S: 'border-yellow-500/70 bg-yellow-900/30 text-yellow-200',
    A: 'border-purple-500/70 bg-purple-900/30 text-purple-200',
    B: 'border-blue-500/70 bg-blue-900/30 text-blue-200',
    C: 'border-green-500/70 bg-green-900/30 text-green-200',
    D: 'border-gray-500/70 bg-gray-900/30 text-gray-200',
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1.5 border-2 font-manga text-sm tracking-wider ${rank ? rankColors[rank] : 'border-primary/50 bg-black/80 text-parchment'}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      style={{ boxShadow: '0 0 15px rgba(0,0,0,0.5)' }}
    >
      {icon && <span className="text-current">{icon}</span>}
      <span>{name}</span>
      {level && <span className="text-xs opacity-70">Lv.{level}</span>}
      {rank && <span className="text-xs font-bold ml-1">[{rank}]</span>}
    </motion.div>
  );
}
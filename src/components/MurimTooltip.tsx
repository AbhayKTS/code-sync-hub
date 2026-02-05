import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MurimTooltipProps {
  children: ReactNode;
  content: string;
  title?: string;
  rank?: 'S' | 'A' | 'B' | 'C';
}

export default function MurimTooltip({ children, content, title, rank }: MurimTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const rankColors = {
    S: 'from-amber-500/20 to-amber-600/10 border-amber-500',
    A: 'from-blood-red/20 to-blood-red/10 border-blood-red',
    B: 'from-blue-500/20 to-blue-600/10 border-blue-500',
    C: 'from-gray-500/20 to-gray-600/10 border-gray-500',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 min-w-[200px] max-w-[280px]`}
          >
            {/* System window frame */}
            <div className={`
              relative bg-gradient-to-br ${rank ? rankColors[rank] : 'from-ink-black/95 to-ink-black/90'}
              border-2 ${rank ? '' : 'border-blood-red/60'}
              p-3 
            `}
            style={{
              boxShadow: '0 0 20px rgba(180, 50, 50, 0.3), inset 0 0 30px rgba(0,0,0,0.3)'
            }}
            >
              {/* Corner nodes */}
              <span className="absolute -top-1 -left-1 text-blood-red text-[8px]">◉</span>
              <span className="absolute -top-1 -right-1 text-blood-red text-[8px]">◉</span>
              <span className="absolute -bottom-1 -left-1 text-blood-red text-[8px]">◉</span>
              <span className="absolute -bottom-1 -right-1 text-blood-red text-[8px]">◉</span>
              
              {/* Scan lines overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,50,50,0.1) 2px, rgba(180,50,50,0.1) 4px)'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {title && (
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blood-red/30">
                    <span className="text-blood-red text-xs">『</span>
                    <span className="font-cinzel text-parchment text-sm font-bold tracking-wider">{title}</span>
                    <span className="text-blood-red text-xs">』</span>
                    {rank && (
                      <span className={`ml-auto font-cinzel text-xs px-1.5 py-0.5 border ${
                        rank === 'S' ? 'text-amber-400 border-amber-400' :
                        rank === 'A' ? 'text-blood-red border-blood-red' :
                        rank === 'B' ? 'text-blue-400 border-blue-400' :
                        'text-gray-400 border-gray-400'
                      }`}>
                        {rank}-RANK
                      </span>
                    )}
                  </div>
                )}
                <p className="font-crimson text-parchment/90 text-sm leading-relaxed">
                  {content}
                </p>
              </div>
              
              {/* Glowing effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 15px rgba(180, 50, 50, 0.2)'
                }}
              />
            </div>
            
            {/* Arrow pointer */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-blood-red/60" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

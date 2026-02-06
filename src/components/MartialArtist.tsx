import { motion } from 'framer-motion';

export default function MartialArtist() {
  return (
    <div className="relative w-80 h-96 md:w-96 md:h-[520px] character-aura">
      {/* Intense killing intent aura */}
      <motion.div
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-[-15%] blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(29, 185, 84, 0.5) 0%, rgba(0, 80, 40, 0.3) 40%, transparent 70%)'
        }}
      />
      
      {/* Shadow aura ring */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20%]"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(29,185,84,0.2), transparent, rgba(29,185,84,0.1), transparent)'
        }}
      />

      {/* Floating energy particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40 - i * 3, 0],
            x: [0, (i % 2 === 0 ? 12 : -12), 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute rounded-full"
          style={{
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            background: i % 3 === 0 ? 'rgba(255,180,50,0.8)' : 'rgba(255,60,60,0.6)',
            boxShadow: i % 3 === 0 ? '0 0 10px rgba(255,180,50,0.5)' : '0 0 8px rgba(255,60,60,0.4)',
            left: `${10 + i * 5.5}%`,
            top: `${55 + (i % 5) * 8}%`,
          }}
        />
      ))}

      {/* Martial Artist SVG */}
      <svg
        viewBox="0 0 400 520"
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.8))' }}
      >
        <defs>
          {/* Skin - battle-hardened warrior */}
          <linearGradient id="warriorSkin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c4a882" />
            <stop offset="50%" stopColor="#b49a75" />
            <stop offset="100%" stopColor="#a08968" />
          </linearGradient>
          
          {/* Muscular definition */}
          <linearGradient id="muscleShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          {/* Dark martial robes */}
          <linearGradient id="darkRobe" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#0d0d0d" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          
          {/* Hunter green sash/belt */}
          <linearGradient id="bloodSash" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a4a1a" />
            <stop offset="50%" stopColor="#1DB954" />
            <stop offset="100%" stopColor="#0a4a1a" />
          </linearGradient>
          
          {/* Glowing neon green eyes */}
          <radialGradient id="neonEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#44ff88" />
            <stop offset="50%" stopColor="#1DB954" />
            <stop offset="100%" stopColor="#0a5a2a" />
          </radialGradient>
          
          {/* Hair */}
          <linearGradient id="darkHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          
          {/* Power aura glow */}
          <filter id="powerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Scar texture */}
          <linearGradient id="scarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#9a7a6a" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Power circle behind */}
        <motion.circle
          cx="200"
          cy="280"
          r="160"
          fill="none"
          stroke="rgba(29,185,84,0.15)"
          strokeWidth="2"
          animate={{ r: [155, 165, 155], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="200"
          cy="280"
          r="180"
          fill="none"
          stroke="rgba(29,185,84,0.08)"
          strokeWidth="1"
          animate={{ r: [175, 188, 175], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />

        {/* BODY - Muscular torso visible */}
        {/* Bare muscular upper body */}
        <path
          d="M160 200 
             Q145 210 140 235
             Q135 260 145 290
             L155 320
             L200 330 
             L245 320
             Q255 290 260 260
             Q265 235 255 210
             Q240 200 200 195
             Q160 200 160 200"
          fill="url(#warriorSkin)"
        />
        
        {/* Chest muscle definition */}
        <path d="M170 220 Q185 215 200 218" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <path d="M230 220 Q215 215 200 218" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <path d="M175 235 Q190 250 200 248" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        <path d="M225 235 Q210 250 200 248" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        
        {/* Abs definition */}
        <path d="M185 265 L185 280" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        <path d="M215 265 L215 280" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        <path d="M178 275 Q200 280 222 275" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
        <path d="M180 290 Q200 295 220 290" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
        
        {/* Battle scars */}
        <path d="M220 230 L235 260" stroke="url(#scarGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <path d="M175 255 L165 275" stroke="url(#scarGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M195 200 L185 195" stroke="url(#scarGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

        {/* Lower robe/pants */}
        <motion.path
          d="M150 315 
             Q140 360 130 420
             Q125 470 140 510
             L180 515
             Q175 460 180 400
             L200 395
             L220 400
             Q225 460 220 515
             L260 510
             Q275 470 270 420
             Q260 360 250 315"
          fill="url(#darkRobe)"
          animate={{
            d: [
              "M150 315 Q140 360 130 420 Q125 470 140 510 L180 515 Q175 460 180 400 L200 395 L220 400 Q225 460 220 515 L260 510 Q275 470 270 420 Q260 360 250 315",
              "M150 315 Q138 360 128 420 Q123 470 138 513 L178 518 Q173 463 178 403 L200 398 L222 403 Q227 463 222 518 L262 513 Q277 470 272 420 Q262 360 250 315",
              "M150 315 Q140 360 130 420 Q125 470 140 510 L180 515 Q175 460 180 400 L200 395 L220 400 Q225 460 220 515 L260 510 Q275 470 270 420 Q260 360 250 315"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Belt/sash */}
        <rect x="148" y="305" width="104" height="18" fill="url(#bloodSash)" />
        <motion.path
          d="M152 315 Q135 345 125 400 Q120 440 130 480"
          fill="none"
          stroke="#6a1212"
          strokeWidth="12"
          strokeLinecap="round"
          animate={{
            d: [
              "M152 315 Q135 345 125 400 Q120 440 130 480",
              "M152 315 Q130 345 118 405 Q113 445 123 485",
              "M152 315 Q135 345 125 400 Q120 440 130 480"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* ARMS - Muscular forearms */}
        {/* Left arm */}
        <path
          d="M140 210 Q120 230 110 260 Q100 290 105 320"
          fill="none"
          stroke="url(#warriorSkin)"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M118 255 Q110 280 115 310"
          fill="none"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="3"
        />
        
        {/* Left hand - fist */}
        <ellipse cx="108" cy="335" rx="14" ry="18" fill="url(#warriorSkin)" />
        
        {/* Right arm */}
        <path
          d="M260 210 Q280 230 290 260 Q300 290 295 320"
          fill="none"
          stroke="url(#warriorSkin)"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M282 255 Q290 280 285 310"
          fill="none"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="3"
        />
        
        {/* Right hand */}
        <ellipse cx="292" cy="335" rx="14" ry="18" fill="url(#warriorSkin)" />

        {/* Arm wraps/bandages */}
        <g opacity="0.8">
          <path d="M105 280 L120 275" stroke="#2a2a2a" strokeWidth="4" />
          <path d="M108 290 L123 285" stroke="#2a2a2a" strokeWidth="4" />
          <path d="M280 280 L295 275" stroke="#2a2a2a" strokeWidth="4" />
          <path d="M277 290 L292 285" stroke="#2a2a2a" strokeWidth="4" />
        </g>

        {/* HEAD */}
        <path
          d="M168 160 
             Q168 110 200 100 
             Q232 110 232 160 
             Q232 180 222 195 
             L200 205 
             L178 195 
             Q168 180 168 160"
          fill="url(#warriorSkin)"
        />
        
        {/* Jaw definition */}
        <path d="M180 185 L200 200 L220 185" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        
        {/* Facial scar - across left eye */}
        <path d="M172 140 L188 165" stroke="#9a7a6a" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

        {/* HAIR - Short, spiky warrior style */}
        <path
          d="M165 130 
             Q155 90 180 70
             Q200 60 220 70
             Q245 90 235 130
             Q235 150 230 160
             Q215 145 200 145
             Q185 145 170 160
             Q165 150 165 130"
          fill="url(#darkHair)"
        />
        
        {/* Hair spikes */}
        <path d="M178 75 L172 55 L185 70" fill="#1a1a1a" />
        <path d="M195 65 L200 45 L205 65" fill="#1a1a1a" />
        <path d="M222 75 L228 55 L215 70" fill="#1a1a1a" />

        {/* EYES - Intense neon green glow */}
        <g filter="url(#powerGlow)">
          <motion.ellipse
            cx="183"
            cy="145"
            rx="6"
            ry="4"
            fill="url(#neonEye)"
            animate={{ 
              opacity: [0.8, 1, 0.8],
              rx: [6, 7, 6]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.ellipse
            cx="217"
            cy="145"
            rx="6"
            ry="4"
            fill="url(#neonEye)"
            animate={{ 
              opacity: [0.8, 1, 0.8],
              rx: [6, 7, 6]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          {/* Eye glow effect */}
          <circle cx="181" cy="144" r="1.5" fill="#80ffa0" opacity="0.9" />
          <circle cx="215" cy="144" r="1.5" fill="#80ffa0" opacity="0.9" />
        </g>

        {/* Eyebrows - intense */}
        <path d="M170 135 L190 130" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
        <path d="M210 130 L230 135" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />

        {/* Nose */}
        <path d="M200 150 L200 165 L195 170" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />

        {/* Mouth - stern expression */}
        <path d="M190 180 Q200 183 210 180" fill="none" stroke="#8a6a5a" strokeWidth="2" />

        {/* Power aura lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1={200}
            y1={280}
            x2={200 + Math.cos(i * 72 * Math.PI / 180) * 200}
            y2={280 + Math.sin(i * 72 * Math.PI / 180) * 200}
            stroke="rgba(29,185,84,0.1)"
            strokeWidth="1"
            animate={{ opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </svg>

      {/* Ground impact effect */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-8"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(29,185,84,0.25) 0%, rgba(0,0,0,0.4) 50%, transparent 70%)',
          filter: 'blur(6px)'
        }}
      />

      {/* Killing intent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`intent-${i}`}
            className="absolute h-px"
            style={{
              width: '200%',
              left: '-50%',
              top: `${25 + i * 10}%`,
              background: 'linear-gradient(90deg, transparent, rgba(29,185,84,0.25), transparent)',
              transform: `rotate(${-4 + i * 2}deg)`,
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              x: ['-5%', '5%', '-5%']
            }}
            transition={{ 
              duration: 3 + i * 0.3, 
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}
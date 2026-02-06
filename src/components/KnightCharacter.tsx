import { motion } from 'framer-motion';

export default function KnightCharacter() {
  return (
    <div className="relative w-80 h-96 md:w-96 md:h-[520px] character-aura">
      {/* Hunter aura - neon green energy */}
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute inset-[-10%] blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(29, 185, 84, 0.4) 0%, rgba(0, 40, 20, 0.2) 40%, transparent 70%)'
        }}
      />
      
      {/* Secondary power aura */}
      <motion.div
        animate={{ 
          scale: [1.05, 1.12, 1.05],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute inset-[-25%] blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(29, 185, 84, 0.15) 0%, transparent 60%)'
        }}
      />
      
      {/* Ink dust particles floating */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute bg-ink-black/60"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${15 + i * 6}%`,
            top: `${60 + (i % 4) * 8}%`,
            borderRadius: i % 2 === 0 ? '50%' : '0%',
          }}
        />
      ))}

      {/* Torn fabric particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`fabric-${i}`}
          animate={{
            y: [-5, 15, -5],
            rotate: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          className="absolute w-1 h-4 bg-gradient-to-b from-primary/40 to-transparent"
          style={{
            left: `${25 + i * 12}%`,
            top: `${75 + (i % 2) * 5}%`,
            transform: `rotate(${-15 + i * 8}deg)`,
          }}
        />
      ))}

      {/* Murim Warrior SVG - Dark Manhwa Style */}
      <svg
        viewBox="0 0 400 520"
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(6px 12px 24px rgba(0,0,0,0.5))' }}
      >
        <defs>
          {/* Ink wash texture gradient */}
          <linearGradient id="inkWash" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="30%" stopColor="#151515" />
            <stop offset="70%" stopColor="#0d0d0d" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>
          
          {/* Robe shadow gradient */}
          <linearGradient id="robeShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          
          {/* Inner robe - hunter green */}
          <linearGradient id="bloodRobe" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a4a1a" />
            <stop offset="50%" stopColor="#052a0a" />
            <stop offset="100%" stopColor="#031a05" />
          </linearGradient>
          
          {/* Green sash gradient */}
          <linearGradient id="sashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#083a1a" />
            <stop offset="50%" stopColor="#1DB954" />
            <stop offset="100%" stopColor="#083a1a" />
          </linearGradient>
          
          {/* Skin - pale martial artist */}
          <linearGradient id="paleSkin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8DFD0" />
            <stop offset="100%" stopColor="#D4C9B8" />
          </linearGradient>
          
          {/* Blade - ink wash steel */}
          <linearGradient id="bladeSteel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5a5a5a" />
            <stop offset="25%" stopColor="#9a9a9a" />
            <stop offset="50%" stopColor="#d0d0d0" />
            <stop offset="75%" stopColor="#9a9a9a" />
            <stop offset="100%" stopColor="#5a5a5a" />
          </linearGradient>
          
          {/* Glowing red eyes */}
          <radialGradient id="glowingEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3030" />
            <stop offset="60%" stopColor="#aa1515" />
            <stop offset="100%" stopColor="#550808" />
          </radialGradient>
          
          {/* Eye outer glow */}
          <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Ink brush filter */}
          <filter id="inkBrush" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Killing intent aura filter */}
          <filter id="auraFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feFlood floodColor="#aa2020" floodOpacity="0.3" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background ink splatter effect */}
        <motion.circle
          cx="200"
          cy="350"
          r="180"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.5"
          opacity="0.3"
          animate={{ r: [175, 185, 175] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Outer robe - flowing black hanfu with layered folds */}
        <motion.path
          d="M95 200 
             Q70 280 60 380 
             Q55 440 80 500 
             L140 510 
             Q130 450 135 380 
             L200 390 
             L265 380 
             Q270 450 260 510 
             L320 500 
             Q345 440 340 380 
             Q330 280 305 200"
          fill="url(#robeShadow)"
          filter="url(#inkBrush)"
          animate={{
            d: [
              "M95 200 Q70 280 60 380 Q55 440 80 500 L140 510 Q130 450 135 380 L200 390 L265 380 Q270 450 260 510 L320 500 Q345 440 340 380 Q330 280 305 200",
              "M95 200 Q65 280 55 380 Q50 440 75 505 L138 515 Q128 455 133 385 L200 395 L267 385 Q272 455 262 515 L325 505 Q350 440 345 380 Q335 280 305 200",
              "M95 200 Q70 280 60 380 Q55 440 80 500 L140 510 Q130 450 135 380 L200 390 L265 380 Q270 450 260 510 L320 500 Q345 440 340 380 Q330 280 305 200"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Robe fold shadows - ink strokes */}
        <path d="M120 250 Q125 320 130 400" stroke="#050505" strokeWidth="8" fill="none" opacity="0.6" />
        <path d="M280 250 Q275 320 270 400" stroke="#050505" strokeWidth="8" fill="none" opacity="0.6" />
        <path d="M150 300 Q155 360 150 420" stroke="#080808" strokeWidth="4" fill="none" opacity="0.5" />
        <path d="M250 300 Q245 360 250 420" stroke="#080808" strokeWidth="4" fill="none" opacity="0.5" />

        {/* Inner robe layer - deep hunter green showing */}
        <path
          d="M150 210 L200 195 L250 210 L255 380 L200 395 L145 380 Z"
          fill="url(#bloodRobe)"
        />
        
        {/* Gi fold details */}
        <path d="M155 220 L195 205" stroke="#082a08" strokeWidth="2" fill="none" />
        <path d="M245 220 L205 205" stroke="#082a08" strokeWidth="2" fill="none" />
        <path d="M160 250 L190 240" stroke="#051a05" strokeWidth="1.5" fill="none" />
        <path d="M240 250 L210 240" stroke="#051a05" strokeWidth="1.5" fill="none" />

        {/* Torso/chest armor plate subtle */}
        <path
          d="M165 230 L200 215 L235 230 L230 300 L200 315 L170 300 Z"
          fill="#0f0f0f"
          stroke="#252525"
          strokeWidth="1"
        />

        {/* Neck sash - blood red tied */}
        <motion.path
          d="M175 195 Q185 188 200 185 Q215 188 225 195 L220 215 Q200 220 180 215 Z"
          fill="url(#sashGradient)"
          animate={{
            d: [
              "M175 195 Q185 188 200 185 Q215 188 225 195 L220 215 Q200 220 180 215 Z",
              "M173 195 Q185 186 200 183 Q215 186 227 195 L222 215 Q200 222 178 215 Z",
              "M175 195 Q185 188 200 185 Q215 188 225 195 L220 215 Q200 220 180 215 Z"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Belt sash at waist */}
        <rect x="155" y="310" width="90" height="12" fill="url(#sashGradient)" />
        
        {/* Sash tail flowing */}
        <motion.path
          d="M155 315 Q140 340 130 380 Q125 410 135 440"
          fill="none"
          stroke="#5a1010"
          strokeWidth="10"
          strokeLinecap="round"
          animate={{
            d: [
              "M155 315 Q140 340 130 380 Q125 410 135 440",
              "M155 315 Q135 340 125 385 Q118 415 130 445",
              "M155 315 Q140 340 130 380 Q125 410 135 440"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Armored bracer - left arm */}
        <g>
          <path d="M105 240 Q95 260 100 300 Q105 320 115 340" fill="none" stroke="#1a1a1a" strokeWidth="18" />
          <rect x="92" y="260" width="25" height="40" rx="3" fill="#151515" stroke="#333" strokeWidth="1" />
          <line x1="95" y1="270" x2="115" y2="270" stroke="#444" strokeWidth="1" />
          <line x1="95" y1="280" x2="115" y2="280" stroke="#444" strokeWidth="1" />
          <line x1="95" y1="290" x2="115" y2="290" stroke="#444" strokeWidth="1" />
        </g>

        {/* Armored bracer - right arm (holding sword) */}
        <g>
          <path d="M295 240 Q305 260 300 300 Q295 320 285 340" fill="none" stroke="#1a1a1a" strokeWidth="18" />
          <rect x="283" y="260" width="25" height="40" rx="3" fill="#151515" stroke="#333" strokeWidth="1" />
          <line x1="285" y1="270" x2="305" y2="270" stroke="#444" strokeWidth="1" />
          <line x1="285" y1="280" x2="305" y2="280" stroke="#444" strokeWidth="1" />
          <line x1="285" y1="290" x2="305" y2="290" stroke="#444" strokeWidth="1" />
        </g>

        {/* Hand - left */}
        <ellipse cx="115" cy="350" rx="12" ry="16" fill="url(#paleSkin)" />
        
        {/* Hand - right gripping sword */}
        <ellipse cx="295" cy="365" rx="10" ry="14" fill="url(#paleSkin)" />

        {/* HEAD - Sharp jawline silhouette */}
        <path
          d="M170 150 
             Q170 100 200 95 
             Q230 100 230 150 
             Q230 170 220 185 
             L200 195 
             L180 185 
             Q170 170 170 150"
          fill="url(#paleSkin)"
        />

        {/* Sharp jaw shadow */}
        <path
          d="M180 175 L200 190 L220 175"
          fill="none"
          stroke="#b8a898"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Long flowing hair - ink black */}
        <motion.path
          d="M155 110 
             Q150 70 200 60 
             Q250 70 245 110 
             Q255 130 250 170 
             Q240 155 200 160 
             Q160 155 150 170 
             Q145 130 155 110"
          fill="#0a0a0a"
          animate={{
            d: [
              "M155 110 Q150 70 200 60 Q250 70 245 110 Q255 130 250 170 Q240 155 200 160 Q160 155 150 170 Q145 130 155 110",
              "M153 110 Q148 68 200 58 Q252 68 247 110 Q258 130 252 172 Q242 157 200 162 Q158 157 148 172 Q143 130 153 110",
              "M155 110 Q150 70 200 60 Q250 70 245 110 Q255 130 250 170 Q240 155 200 160 Q160 155 150 170 Q145 130 155 110"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Hair flowing down - left side */}
        <motion.path
          d="M150 160 Q130 180 115 240 Q100 300 90 360 Q85 400 95 440"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="25"
          strokeLinecap="round"
          animate={{
            d: [
              "M150 160 Q130 180 115 240 Q100 300 90 360 Q85 400 95 440",
              "M150 160 Q125 180 108 240 Q93 300 83 365 Q78 405 88 445",
              "M150 160 Q130 180 115 240 Q100 300 90 360 Q85 400 95 440"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Hair strands left */}
        <motion.path
          d="M145 155 Q120 175 105 235 Q90 295 85 355"
          fill="none"
          stroke="#151515"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{
            d: [
              "M145 155 Q120 175 105 235 Q90 295 85 355",
              "M145 155 Q115 175 98 235 Q83 295 78 360",
              "M145 155 Q120 175 105 235 Q90 295 85 355"
            ]
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }}
        />

        {/* Hair flowing down - right side (shorter, behind) */}
        <motion.path
          d="M250 160 Q265 180 275 220 Q285 260 280 300"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="18"
          strokeLinecap="round"
          animate={{
            d: [
              "M250 160 Q265 180 275 220 Q285 260 280 300",
              "M250 160 Q270 180 282 220 Q292 260 287 305",
              "M250 160 Q265 180 275 220 Q285 260 280 300"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Cold, disciplined expression - eyes */}
        {/* Eye shadow/brow area */}
        <path d="M175 125 Q185 120 195 123" fill="#c8b8a5" />
        <path d="M205 123 Q215 120 225 125" fill="#c8b8a5" />
        
        {/* Sharp eyebrows */}
        <path d="M172 118 L192 114" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M208 114 L228 118" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />

        {/* Glowing red eyes - subtle Nano Machine style */}
        <g filter="url(#eyeGlow)">
          <motion.ellipse
            cx="183"
            cy="130"
            rx="5"
            ry="3.5"
            fill="url(#glowingEye)"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              rx: [5, 5.5, 5]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.ellipse
            cx="217"
            cy="130"
            rx="5"
            ry="3.5"
            fill="url(#glowingEye)"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              rx: [5, 5.5, 5]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          />
          {/* Eye highlights */}
          <circle cx="181" cy="129" r="1" fill="#ff6060" opacity="0.8" />
          <circle cx="215" cy="129" r="1" fill="#ff6060" opacity="0.8" />
        </g>

        {/* Nose - sharp */}
        <path d="M200 135 L200 155 L195 160" fill="none" stroke="#c8b8a5" strokeWidth="1" opacity="0.6" />

        {/* Mouth - thin, cold line */}
        <path d="M190 170 Q200 172 210 170" fill="none" stroke="#a09080" strokeWidth="1.5" />

        {/* Curved blade with ink-wash texture - held at angle */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ transformOrigin: '310px 380px' }}
        >
          {/* Blade qi/aura glow */}
          <motion.path
            d="M300 380 Q320 280 340 100"
            fill="none"
            stroke="#aa2020"
            strokeWidth="20"
            opacity="0.15"
            filter="url(#auraFilter)"
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              strokeWidth: [18, 22, 18]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Main blade - slightly curved like a dao */}
          <path
            d="M295 390 
               Q298 350 305 280 
               Q315 180 340 80 
               L345 85 
               Q322 185 315 285 
               Q310 355 308 390 Z"
            fill="url(#bladeSteel)"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          
          {/* Blade edge highlight */}
          <path
            d="M340 80 Q322 180 315 280 Q310 350 308 390"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
          />

          {/* Ink wash texture on blade */}
          <path
            d="M300 350 Q310 300 320 200"
            fill="none"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="6"
          />

          {/* Blood groove */}
          <path
            d="M302 370 Q308 300 318 180 Q325 120 338 90"
            fill="none"
            stroke="rgba(100,100,100,0.3)"
            strokeWidth="2"
          />

          {/* Guard - circular with engravings */}
          <circle cx="302" cy="395" r="15" fill="#1a1a1a" stroke="#444" strokeWidth="1.5" />
          <circle cx="302" cy="395" r="10" fill="none" stroke="#333" strokeWidth="1" />
          <circle cx="302" cy="395" r="5" fill="#2a0808" />

          {/* Handle - wrapped in black */}
          <rect x="294" y="408" width="16" height="50" rx="3" fill="#0f0f0f" />
          
          {/* Handle wrapping pattern */}
          <path d="M296 415 L308 420" stroke="#252525" strokeWidth="2" />
          <path d="M296 425 L308 430" stroke="#252525" strokeWidth="2" />
          <path d="M296 435 L308 440" stroke="#252525" strokeWidth="2" />
          <path d="M296 445 L308 450" stroke="#252525" strokeWidth="2" />
          
          {/* Pommel */}
          <ellipse cx="302" cy="462" rx="10" ry="6" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
          <circle cx="302" cy="462" r="4" fill="#3a0808" />
        </motion.g>

        {/* Ink splatter effects around figure */}
        <circle cx="80" cy="420" r="3" fill="#1a1a1a" opacity="0.3" />
        <circle cx="95" cy="460" r="2" fill="#1a1a1a" opacity="0.25" />
        <circle cx="320" cy="440" r="2.5" fill="#1a1a1a" opacity="0.3" />
        <circle cx="335" cy="470" r="1.5" fill="#1a1a1a" opacity="0.2" />

      </svg>

      {/* Ground devastation effect - dust and debris */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-6"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(20,20,20,0.4) 0%, rgba(20,20,20,0.1) 50%, transparent 70%)',
          filter: 'blur(4px)'
        }}
      />

      {/* Killing intent lines radiating */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`intent-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              width: '200%',
              left: '-50%',
              top: `${30 + i * 8}%`,
              transform: `rotate(${-5 + i * 1.5}deg)`,
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: ['-10%', '10%', '-10%']
            }}
            transition={{ 
              duration: 4 + i * 0.3, 
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
}

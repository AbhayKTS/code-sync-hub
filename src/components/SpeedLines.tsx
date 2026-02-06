export default function SpeedLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle horizontal lines - aged parchment effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(0, 0, 0, 0.02) 100px,
            rgba(0, 0, 0, 0.02) 101px
          )`
        }}
      />

      {/* Corner ink stains */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.3) 0%, transparent 60%)'
        }}
      />
      
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.3) 0%, transparent 60%)'
        }}
      />

      {/* Green corner accent - top right */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(29,185,84,0.5) 0%, transparent 70%)'
        }}
      />

      {/* Ink brush strokes - decorative corners */}
      <svg className="absolute top-8 left-8 w-16 h-16 opacity-10" viewBox="0 0 100 100">
        <path
          d="M0 0 L40 0 L40 5 L5 5 L5 40 L0 40 Z"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>
      
      <svg className="absolute bottom-8 right-8 w-16 h-16 opacity-10 rotate-180" viewBox="0 0 100 100">
        <path
          d="M0 0 L40 0 L40 5 L5 5 L5 40 L0 40 Z"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>
    </div>
  );
}
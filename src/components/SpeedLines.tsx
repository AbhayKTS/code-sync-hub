export default function SpeedLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div className="absolute inset-0" style={{
        background: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 40px,
          rgba(0, 0, 0, 0.02) 40px,
          rgba(0, 0, 0, 0.02) 41px
        )`
      }} />
      <div className="absolute inset-0" style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 60px,
          rgba(0, 0, 0, 0.015) 60px,
          rgba(0, 0, 0, 0.015) 61px
        )`
      }} />
    </div>
  );
}

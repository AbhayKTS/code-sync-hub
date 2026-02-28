import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'paper' | 'ink' | 'speedline';
}

export default function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Extended for scroll
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const canvasHeight = canvas.height;
      const canvasWidth = canvas.width;

      // Paper scraps - subtle floating pieces
      for (let i = 0; i < 15; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          size: Math.random() * 20 + 10,
          speedY: Math.random() * 0.3 + 0.1,
          speedX: (Math.random() - 0.5) * 0.2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          opacity: Math.random() * 0.04 + 0.02, // Very subtle: 2-6% opacity
          type: 'paper',
        });
      }

      // Ink droplets - small dots
      for (let i = 0; i < 25; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          size: Math.random() * 4 + 1,
          speedY: Math.random() * 0.5 + 0.2,
          speedX: (Math.random() - 0.5) * 0.1,
          rotation: 0,
          rotationSpeed: 0,
          opacity: Math.random() * 0.06 + 0.02, // 2-8% opacity
          type: 'ink',
        });
      }

      // Speedlines - diagonal motion lines
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          size: Math.random() * 80 + 40,
          speedY: Math.random() * 0.8 + 0.4,
          speedX: Math.random() * 0.3 + 0.1,
          rotation: Math.PI * 0.15, // Slight angle
          rotationSpeed: 0,
          opacity: Math.random() * 0.03 + 0.01, // Very subtle: 1-4% opacity
          type: 'speedline',
        });
      }

      particlesRef.current = particles;
    };
    initParticles();

    // Handle scroll for parallax
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Draw paper scrap
    const drawPaper = (ctx: CanvasRenderingContext2D, p: Particle, parallaxY: number) => {
      ctx.save();
      ctx.translate(p.x, p.y - parallaxY * 0.3);
      ctx.rotate(p.rotation);
      ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity * 1.5})`;

      // Irregular paper shape
      ctx.beginPath();
      ctx.moveTo(-p.size / 2, -p.size / 3);
      ctx.lineTo(p.size / 2 - 2, -p.size / 2);
      ctx.lineTo(p.size / 2, p.size / 3);
      ctx.lineTo(-p.size / 3, p.size / 2);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    // Draw ink droplet
    const drawInk = (ctx: CanvasRenderingContext2D, p: Particle, parallaxY: number) => {
      ctx.save();
      ctx.translate(p.x, p.y - parallaxY * 0.3);

      // Main droplet
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity * 2})`;
      ctx.fill();

      // Small splatter dots
      if (p.size > 2) {
        for (let i = 0; i < 3; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = p.size * 1.5 + Math.random() * 3;
          ctx.beginPath();
          ctx.arc(
            Math.cos(angle) * dist,
            Math.sin(angle) * dist,
            p.size * 0.3,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity * 0.8})`;
          ctx.fill();
        }
      }

      ctx.restore();
    };

    // Draw speedline
    const drawSpeedline = (ctx: CanvasRenderingContext2D, p: Particle, parallaxY: number) => {
      ctx.save();
      ctx.translate(p.x, p.y - parallaxY * 0.3);
      ctx.rotate(p.rotation);

      // Gradient line
      const gradient = ctx.createLinearGradient(0, 0, p.size, 0);
      gradient.addColorStop(0, `rgba(34, 197, 94, 0)`);
      gradient.addColorStop(0.3, `rgba(255, 255, 255, ${p.opacity * 1.5})`);
      gradient.addColorStop(0.7, `rgba(34, 197, 94, ${p.opacity * 2})`);
      gradient.addColorStop(1, `rgba(34, 197, 94, 0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.size, 0);
      ctx.stroke();

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const parallaxY = scrollRef.current;

      particlesRef.current.forEach((p) => {
        // Update position
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y > canvas.height + 50) {
          p.y = -50;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;

        // Draw based on type
        switch (p.type) {
          case 'paper':
            drawPaper(ctx, p, parallaxY);
            break;
          case 'ink':
            drawInk(ctx, p, parallaxY);
            break;
          case 'speedline':
            drawSpeedline(ctx, p, parallaxY);
            break;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.8,
        mixBlendMode: 'multiply'
      }}
    />
  );
}

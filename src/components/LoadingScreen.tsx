import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

const THEMES = {
  neon: ['#b57bee','#5ec9f5','#f55e9e','#7bf5c5','#f5c45e','#ee7bbb','#7bcdf5','#f57b7b'],
};

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return [r,g,b];
}

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  // Progress logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Canvas Infinity Loop Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const trailPts: { x: number; y: number }[][] = [];
    let t = 0;

    const arms = 4;
    const ratio = 3;
    const speed = 8 * 0.003; // Doubled from 4 to 8 for faster animation
    const maxTrail = 700;
    const colors = THEMES.neon;

    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
      // make it responsive
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      trailPts.length = 0;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      const W = canvas.width / dpr;
      const H = canvas.height / dpr;
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(cx, cy) * 0.5; // Scale down a bit

      t += speed;

      const pts: { x: number; y: number }[] = [];
      for (let a = 0; a < arms; a++) {
        const phase = (a / arms) * Math.PI * 2;
        const r1 = R * 0.54;
        const r2 = R * 0.32;
        const x = cx + r1 * Math.cos(t + phase) + r2 * Math.cos(ratio * t + phase);
        const y = cy + r1 * Math.sin(t + phase) + r2 * Math.sin(ratio * t + phase);
        pts.push({ x, y });
      }
      
      trailPts.push(pts);
      if (trailPts.length > maxTrail) trailPts.shift();

      // Clear with trailing effect
      // Use theme aware fading
      if (isDark) {
        ctx.fillStyle = 'rgba(5, 8, 20, 0.14)';
      } else {
        ctx.fillStyle = 'rgba(248, 249, 252, 0.14)';
      }
      ctx.fillRect(0, 0, W, H);

      const len = trailPts.length;

      for (let i = 1; i < len; i++) {
        const alpha = (i / len);
        const prev = trailPts[i-1];
        const curr = trailPts[i];
        const maxA = curr.length;
        
        for (let a = 0; a < maxA; a++) {
          if (!prev[a]) continue;
          const [r,g,b] = hexToRgb(colors[a % colors.length]);
          ctx.beginPath();
          ctx.moveTo(prev[a].x, prev[a].y);
          ctx.lineTo(curr[a].x, curr[a].y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.9})`;
          ctx.lineWidth = 0.8 + alpha * 2.2;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      const last = trailPts[trailPts.length - 1];
      if (last) {
        last.forEach((p, a) => {
          const [r,g,b] = hexToRgb(colors[a % colors.length]);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},1)`;
          ctx.shadowColor = colors[a % colors.length];
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-600 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{ background: "var(--bg-deep)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 text-center flex flex-col items-center justify-center min-h-screen pt-32 pointer-events-none">
        {/* Progress text */}
        <div className="mt-auto pb-16">
          <p className="font-mono text-sm tracking-[0.4em] mb-4 text-foreground/60 uppercase">
            Initializing
          </p>
          <div className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-electric-cyan" style={{ filter: 'drop-shadow(0 0 20px rgba(108,99,255,0.4))' }}>
            {Math.min(Math.round(progress), 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

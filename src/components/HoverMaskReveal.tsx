import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const HoverMaskReveal = ({
  frontSrc,
  backSrc,
  frontAlt = "Front Image",
  backAlt = "Back Image",
  className = "",
}: {
  frontSrc: string;
  backSrc: string;
  frontAlt?: string;
  backAlt?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const maskSize = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 200 });
  const smoothMaskSize = useSpring(maskSize, { damping: 40, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => maskSize.set(150)}
      onMouseLeave={() => maskSize.set(0)}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
    >
      {/* Base Image */}
      <img
        src={frontSrc}
        alt={frontAlt}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      {/* Revealed Background Image with Mask */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(circle ${smoothMaskSize}px at ${smoothX}px ${smoothY}px, black 100%, transparent 100%)`,
          maskImage: useMotionTemplate`radial-gradient(circle ${smoothMaskSize}px at ${smoothX}px ${smoothY}px, black 100%, transparent 100%)`,
        }}
      >
        <img
          src={backSrc}
          alt={backAlt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </motion.div>
      
      {/* Any overlay content from the original component (like the gradient) can be added here if needed, but we'll apply it outside since it expects `absolute inset-0` child anyway */}
    </div>
  );
};

export default HoverMaskReveal;

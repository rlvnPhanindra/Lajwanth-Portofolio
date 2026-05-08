import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check if device supports hover (ignore touch devices)
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');

      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-electric-purple rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isClicking ? 0.8 : (isHovering ? 0 : 1)})`,
        }}
      />
      {/* Outer ring */}
      <div 
        className="fixed top-0 left-0 w-10 h-10 border-2 border-electric-cyan rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ 
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isClicking ? 0.8 : (isHovering ? 1.5 : 1)})`,
          backgroundColor: isHovering ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;

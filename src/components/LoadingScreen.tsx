import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

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

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-600 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{ background: "#050814" }}
    >
      {/* Aurora bg */}
      <div
        className="absolute inset-0 animate-aurora opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(0,212,255,0.1) 50%, rgba(255,101,132,0.1) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      <div className="relative text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="font-display text-5xl lg:text-7xl font-bold gradient-text tracking-tight">
            RLVNP
          </h1>
          <p className="font-mono text-xs text-foreground/30 tracking-[0.4em] mt-3 uppercase">
            Loading Portfolio
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 mx-auto">
          <div className="h-0.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #6C63FF, #00D4FF)",
                boxShadow: "0 0 15px rgba(108, 99, 255, 0.5)",
              }}
            />
          </div>
          <p className="font-mono text-xs text-foreground/20 mt-3">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

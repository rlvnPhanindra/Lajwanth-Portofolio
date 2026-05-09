import { useState, useEffect } from "react";
import ParticleField from "@/components/ParticleField";
import useTypewriter from "@/hooks/useTypewriter";
import { Download, Mail, ChevronDown, Sparkles, Eye } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { isDark } = useTheme();
  const displayRole = useTypewriter(
    [
      "Full Stack Developer",
      "React & Node.js Engineer",
      "Flutter Developer",
      "AI Solutions Builder",
      "Problem Solver",
    ],
    80,
    40,
    2000
  );

  const displayName = useTypewriter(["RAVURI LAJWANTH"], 100, 50, 2000, false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Aurora background gradient */}
      <div
        className="absolute inset-0 animate-aurora"
        style={{
          opacity: isDark ? 0.4 : 0.25,
          background: isDark
            ? "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,212,255,0.08) 25%, rgba(255,101,132,0.06) 50%, rgba(108,99,255,0.12) 75%, rgba(0,212,255,0.1) 100%)"
            : "linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(0,212,255,0.06) 25%, rgba(255,101,132,0.04) 50%, rgba(108,99,255,0.08) 75%, rgba(0,212,255,0.06) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Radial glow behind hero text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          opacity: isDark ? 0.2 : 0.12,
          background: isDark
            ? "radial-gradient(circle, rgba(108,99,255,0.3) 0%, rgba(0,212,255,0.1) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(108,99,255,0.2) 0%, rgba(0,212,255,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Particle field */}
      <ParticleField />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-mono text-green-400/90 tracking-wider">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 tracking-tight leading-none min-h-[1.2em]">
            <span className="gradient-text">{displayName}</span>
            <span className="typewriter-cursor ml-1" />
            <br />
            <span className="text-foreground/80 text-xl sm:text-2xl font-medium tracking-wide mt-4 block">
              V N P
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-12 flex items-center justify-center mb-6">
            <span className="font-display text-xl sm:text-2xl lg:text-3xl text-cyan-accent/90 font-light tracking-wide">
              {displayRole}
              <span className="typewriter-cursor ml-1" />
            </span>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10 max-w-2xl mx-auto">
            {[
              { name: "Java", color: "#FF6584" },
              { name: "Python", color: "#00D4FF" },
              { name: "C", color: "#6C63FF" },
              { name: "Flutter", color: "#00D4FF" },
              { name: "React", color: "#00D4FF" },
              { name: "Node.js", color: "#6C63FF" },
              { name: "MongoDB", color: "#FF6584" },
              { name: "MySQL", color: "#00D4FF" },
            ].map((tech, i) => (
              <div
                key={tech.name}
                className="glass rounded-full px-4 py-1.5 flex items-center gap-2 hover:bg-white/[0.08] transition-all duration-300 cursor-default group"
                style={{
                  animationDelay: `${i * 100}ms`,
                  borderColor: `${tech.color}30`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}80` }}
                />
                <span className="font-mono text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Ravuri_Lajwanth_Resume.pdf"
              className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base group"
            >
              <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
              <Sparkles className="h-4 w-4 opacity-60" />
            </a>
            
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-foreground font-semibold text-base group"
            >
              <Eye className="h-5 w-5 group-hover:text-electric-purple transition-colors" />
              View Resume
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="btn-glass inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-foreground font-semibold text-base"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono text-muted-foreground/60 tracking-widest">SCROLL</span>
        <ChevronDown className="h-5 w-5 text-electric-purple/60" />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: `linear-gradient(to top, var(--bg-deep), transparent)` }}
      />
    </section>
  );
};

export default Hero;

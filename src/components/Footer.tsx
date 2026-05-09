import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      {/* Wave SVG divider */}
      <div className="relative -mt-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 54C96 48 192 36 288 30C384 24 480 24 576 30C672 36 768 48 864 54C960 60 1056 60 1152 54C1248 48 1344 36 1392 30L1440 24V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="url(#wave-gradient)"
            fillOpacity="0.06"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="120">
              <stop stopColor="#6C63FF" />
              <stop offset="0.5" stopColor="#00D4FF" />
              <stop offset="1" stopColor="#FF6584" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pb-12 pt-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="glass glass-hover w-12 h-12 rounded-full flex items-center justify-center group transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-electric-purple group-hover:text-cyan-accent transition-colors" />
          </button>

          {/* Brand */}
          <div className="text-center">
            <span className="font-display text-xl font-bold gradient-text">
              RAVURI LAJWANTH V N P
            </span>
            <p className="text-sm text-foreground/30 mt-1 font-mono">
              Full Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/rlvnPhanindra", label: "GitHub" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/lajwanth-v-n-p-ravuri", label: "LinkedIn" },
              { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/_its_me_urstyl_phani_/", label: "Instagram" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:ravurilvnphanindra2005@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass glass-hover w-11 h-11 rounded-xl flex items-center justify-center text-foreground/50 hover:text-electric-purple transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-electric-purple/30 to-transparent" />

          {/* Copyright */}
          <p className="text-xs text-foreground/25 flex items-center gap-1.5">
            © {currentYear} Built with
            <Heart className="h-3 w-3 text-rose-accent fill-rose-accent" />
            by Ravuri Lajwanth V N P
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Use IntersectionObserver instead of getBoundingClientRect for performance
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is currently intersecting
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple, take the first one (highest on screen)
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -40% 0px", threshold: 0 }
    );

    const sections = ["home", "about", "projects", "achievements", "education", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Floating glass pill navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-4 mx-auto max-w-4xl px-4"
            : "top-0 mx-0 max-w-full px-0"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "glass rounded-2xl shadow-elevated mx-auto"
              : "bg-transparent"
          }`}
        >
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="font-display text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                RLVNP
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {activeSection === link.id && (
                      <div className="absolute inset-0 bg-electric-purple/20 rounded-xl border border-electric-purple/30" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                ))}

                {/* Theme toggle button */}
                <button
                  onClick={toggleTheme}
                  className="theme-toggle glass ml-2"
                  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                  title={`Switch to ${isDark ? "light" : "dark"} mode`}
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-electric-purple" />
                  )}
                </button>
              </div>

              {/* Mobile right side: toggle + hamburger */}
              <div className="flex md:hidden items-center gap-2">
                {/* Theme toggle (mobile) */}
                <button
                  onClick={toggleTheme}
                  className="theme-toggle glass"
                  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                >
                  {isDark ? (
                    <Sun className="h-4 w-4 text-yellow-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-electric-purple" />
                  )}
                </button>

                {/* Mobile hamburger */}
                <button
                  className="p-2 rounded-xl glass"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-foreground" />
                  ) : (
                    <Menu className="h-5 w-5 text-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-4 pb-4 border-t border-white/10">
              <div className="pt-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? "bg-electric-purple/20 text-white border border-electric-purple/30"
                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-bg opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              ↑
            </div>
          </button>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by Ravuri Lajwanth V N P
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

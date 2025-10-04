import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="hover:text-secondary transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-90">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} Built with <Heart className="h-4 w-4 text-secondary fill-secondary" /> by Your Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

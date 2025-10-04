import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(109, 40, 217, 0.9) 0%, rgba(147, 51, 234, 0.8) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Full Stack Developer
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            Crafting scalable web applications with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

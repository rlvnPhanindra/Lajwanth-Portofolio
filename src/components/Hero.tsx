import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown, Code } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-bg opacity-50" />
      
      {/* Decorative code symbols */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-primary font-mono">&lt;/&gt;</div>
        <div className="absolute bottom-40 right-20 text-4xl text-accent font-mono">{ }</div>
        <div className="absolute top-1/2 left-1/4 text-5xl text-primary font-mono">[ ]</div>
      </div>

      {/* Code icon in circle */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center backdrop-blur-sm bg-card/30">
          <Code className="h-10 w-10 text-primary" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight tracking-wider">
            RAVURI LAJWANTH V N P
          </h1>
          
          <p className="text-2xl sm:text-3xl text-primary mb-6 font-light tracking-wide">
            Aspiring Full Stack Developer
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Java • Python • Flutter • React | Building innovative web & mobile applications with a strong foundation in DSA
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
          <Button 
              size="lg" 
              asChild
              className="bg-gradient-button hover:opacity-90 shadow-glow text-white border-0 px-8 group"
            >
              <a href="/resume.pdf" download="Ravuri_Lajwanth_Resume.pdf">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-sm px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;

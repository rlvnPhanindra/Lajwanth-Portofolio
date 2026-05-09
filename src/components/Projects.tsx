import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.05);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full Stack", "AI & Automation"];

  const projects = [
    {
      title: "E-Commerce Website for Online Shopping",
      description: "Full-stack e-commerce web application for electronic items with product listings, secure user authentication, shopping cart, order management, and digital invoice generation.",
      image: project2,
      tech: ["JSP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/rlvnPhanindra/E-Commerce-Website-for-Online-Shopping",
      color: "#6C63FF",
      category: "Full Stack"
    },
    {
      title: "AI-Powered Autonomous Web Task Automation",
      description: "AI agent that executes multi-step web workflows from natural language prompts — navigating browsers, composing emails, and automating tasks across web platforms.",
      image: project1,
      tech: ["AI Agents", "Playwright", "NLP", "Gemini API"],
      liveUrl: "#",
      githubUrl: "https://github.com/rlvnPhanindra/AI-Browser-Task-Agent",
      color: "#00D4FF",
      category: "AI & Automation"
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="absolute inset-0 bg-gradient-bg opacity-30" />

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-cyan-accent tracking-[0.3em] uppercase mb-4 block">
            // FEATURED WORK
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-foreground/50">
            Production-grade applications built with modern technologies
          </p>
        </div>

        {/* Project Filtering Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-electric-purple text-white shadow-[0_0_15px_rgba(108,99,255,0.4)]" 
                  : "glass text-foreground/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
              />

              <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(var(--bg-deep-rgb), 1), rgba(var(--bg-deep-rgb), 0.2), transparent)" }} />

                  <div className="absolute top-4 right-4">
                    <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-md bg-black/30 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-glow rounded-xl px-5 py-2.5 text-white text-sm font-medium flex items-center gap-2 transition-transform hover:scale-105">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="glass rounded-xl px-5 py-2.5 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-all hover:scale-105">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-foreground/60 mb-6 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="font-mono text-xs px-3 py-1 rounded-full border transition-colors duration-300 bg-white/5" style={{ borderColor: `${project.color}30`, color: `${project.color}CC` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

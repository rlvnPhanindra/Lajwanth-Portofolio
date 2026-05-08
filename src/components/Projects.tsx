import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Website for Online Shopping",
      description: "Full-stack e-commerce web application for electronic items with product listings, secure user authentication, shopping cart, order management, and digital invoice generation.",
      image: project2,
      tech: ["JSP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/rlvnPhanindra",
      color: "#6C63FF",
    },
    {
      title: "AI-Powered Autonomous Web Task Automation",
      description: "AI agent that executes multi-step web workflows from natural language prompts — navigating browsers, composing emails, and automating tasks across web platforms.",
      image: project1,
      tech: ["AI Agents", "Playwright", "NLP", "Gemini API"],
      liveUrl: "#",
      githubUrl: "https://github.com/rlvnPhanindra",
      color: "#00D4FF",
    },
    {
      title: "IoT Embedded Systems Project",
      description: "Hands-on embedded systems & software development project completed during IoT internship at Shikara Embedded Solutions Pvt. Ltd.",
      image: project3,
      tech: ["Embedded C", "IoT", "Microcontrollers", "Sensors"],
      liveUrl: "#",
      githubUrl: "https://github.com/rlvnPhanindra",
      color: "#FF6584",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="absolute inset-0 bg-gradient-bg opacity-30" />

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-cyan-accent tracking-[0.3em] uppercase mb-4 block">
            // FEATURED WORK
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-foreground/50">
            A selection of projects showcasing my technical skills and problem-solving approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative glass rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
              />

              <div className="relative glass rounded-2xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(var(--bg-deep-rgb), 1), rgba(var(--bg-deep-rgb), 0.5), transparent)" }} />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="glass rounded-xl px-4 py-2 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="glass rounded-xl px-4 py-2 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-foreground/50 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="font-mono text-xs px-3 py-1 rounded-full border transition-colors duration-300" style={{ borderColor: `${project.color}30`, color: `${project.color}CC` }}>
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

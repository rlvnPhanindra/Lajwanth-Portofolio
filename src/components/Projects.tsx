import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Task Management Dashboard",
      description: "A comprehensive project management platform with real-time collaboration, task tracking, and team analytics. Built with modern best practices for scalability.",
      image: project1,
      tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online marketplace with payment integration, inventory management, and advanced search. Optimized for performance and conversion.",
      image: project2,
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Social Media App",
      description: "Mobile-first social networking application with real-time messaging, media sharing, and AI-powered content recommendations.",
      image: project3,
      tech: ["React Native", "Firebase", "Express", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing my technical skills and problem-solving approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button 
                  variant="default"
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 shadow-elegant"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

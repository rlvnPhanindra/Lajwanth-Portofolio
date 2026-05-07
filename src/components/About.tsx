import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    "Java", "Python", "C", "Flutter", "HTML", "CSS",
    "JavaScript", "React", "Node.js", "REST APIs",
    "MySQL", "MongoDB", "SQL", "DBMS",
    "Data Structures", "Algorithms", "OOP", "Git", "Agile"
  ];

  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Programming",
      description: "Strong foundation in Java, Python and C with focus on DSA & OOP"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Frontend & Mobile",
      description: "Building responsive UIs with Flutter, HTML, CSS, JavaScript and React"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Backend",
      description: "Server-side programming with Node.js and RESTful API design"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Databases",
      description: "Experience with MySQL, MongoDB, SQL and DBMS concepts"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aspiring Full Stack Developer with strong technical expertise in Java, C, and Python.
            Experienced in frontend development using Flutter and database management systems.
            Passionate about building innovative web and mobile applications with a solid foundation
            in Data Structures and Algorithms — seeking opportunities to contribute to impactful
            software development projects in IT Services & Consulting.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Smartphone, Download, Briefcase, MapPin } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import avatarImage from "@/assets/avatar.png";
import robotAvatarImage from "@/assets/robot_avatar.png";
import HoverMaskReveal from "@/components/HoverMaskReveal";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const technicalSkills = [
    "Java", "Python", "C", "Flutter", "HTML", "CSS",
    "JavaScript", "React", "Node.js", "RESTful APIs",
    "MySQL", "MongoDB", "SQL", "DBMS",
    "Data Structures", "Algorithms", "OOP", "Git",
    "API Integration", "Agile Methodologies", "Software Engineering"
  ];

  const softSkills = [
    "Team Collaboration", "Leadership", "Problem Solving", "Communication"
  ];

  const features = [
    {
      icon: <Code2 className="h-7 w-7" />,
      title: "Programming",
      description: "Strong foundation in Java, Python and C with focus on DSA & OOP",
      gradient: "from-electric-purple to-cyan-accent",
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Frontend & Mobile",
      description: "Building responsive UIs with Flutter, HTML, CSS, JavaScript and React",
      gradient: "from-cyan-accent to-electric-purple",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Backend",
      description: "Server-side programming with Node.js and RESTful API design",
      gradient: "from-rose-accent to-electric-purple",
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Databases",
      description: "Experience with MySQL, MongoDB, SQL and DBMS concepts",
      gradient: "from-electric-purple to-rose-accent",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-bg opacity-50" />

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-electric-purple tracking-[0.3em] uppercase mb-4 block">
            // ABOUT ME
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Aspiring Full Stack Developer with strong technical expertise in Java, C, and Python.
            Experienced in frontend development using Flutter and database management systems.
            Passionate about building innovative web and mobile applications with a solid foundation
            in Data Structures and Algorithms.
          </p>
        </div>

        {/* Bio glass card with digital avatar */}
        <div className={`glass rounded-2xl p-8 lg:p-10 mb-16 max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Digital Avatar */}
            <div className="relative flex-shrink-0 group">
              {/* Glow ring behind avatar */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-electric-purple via-cyan-accent to-electric-purple opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-52 h-64 lg:w-60 lg:h-72 rounded-2xl overflow-hidden border border-white/15 shadow-elevated">
                <HoverMaskReveal
                  frontSrc={avatarImage}
                  backSrc={robotAvatarImage}
                  frontAlt="Ravuri Lajwanth V N P — Digital Avatar"
                  backAlt="Ravuri Lajwanth V N P — Robot Avatar"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(var(--bg-deep-rgb), 0.6), transparent, transparent)" }}
                />
              </div>
              {/* Bottom badges */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="glass rounded-full px-3 py-1 text-[10px] font-mono text-electric-purple border border-electric-purple/30 flex items-center gap-1.5">
                  <Briefcase className="h-3 w-3" /> FULL STACK DEV
                </span>
                <span className="glass rounded-full px-3 py-1 text-[10px] font-mono text-cyan-accent border border-cyan-accent/30 flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> INDIA
                </span>
              </div>
            </div>

            {/* Bio text */}
            <div className="flex-1 text-center lg:text-left pt-4 lg:pt-0">
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                Ravuri Lajwanth V N P
              </h3>
              <p className="text-cyan-accent font-medium mb-4 text-lg">
                B.Tech IT — LBRCE (Autonomous), Mylavaram
              </p>
              <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-lg">
                Aspiring Full Stack Developer with strong technical expertise in Java, C, and Python.
                Experienced in frontend & mobile development using Flutter, React, and Node.js.
                Passionate about building innovative web and mobile applications with a solid
                foundation in Data Structures, Algorithms, and AI-powered solutions.
              </p>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Ravuri_Lajwanth_Resume.pdf"
                className="btn-glow inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm"
              >
                <Download className="h-4 w-4" />
                Download Résumé
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass glass-hover rounded-2xl p-6 group cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] hover:border-white/30 active:scale-95 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display text-2xl font-semibold text-center mb-8">
              <span className="gradient-text">Technical Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="glass rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-electric-purple/10 hover:border-electric-purple/30 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display text-2xl font-semibold text-center mb-8">
              <span className="gradient-text-rose">Soft Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="glass rounded-full px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-rose-accent/10 hover:border-rose-accent/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

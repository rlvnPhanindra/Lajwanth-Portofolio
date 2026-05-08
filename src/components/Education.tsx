import { GraduationCap, Calendar, MapPin } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const Education = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Lakireddy Bali Reddy College of Engineering (Autonomous)",
      location: "Mylavaram, Andhra Pradesh",
      period: "Aug 2023 – Aug 2027",
      grade: "Pursuing",
      color: "#6C63FF",
    },
    {
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      institution: "Oxford Junior College",
      location: "Narasaraopet, Andhra Pradesh",
      period: "2021 – 2023",
      grade: "Completed",
      color: "#00D4FF",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "Schooling",
      institution: "Oxford Concept School",
      location: "Narasaraopet, Andhra Pradesh",
      period: "2021",
      grade: "Completed",
      color: "#FF6584",
    },
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden" style={{ background: "#050814" }}>
      <div className="absolute inset-0 bg-gradient-bg opacity-20" style={{ transform: "rotate(180deg)" }} />

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-electric-purple tracking-[0.3em] uppercase mb-4 block">
            // LEARNING PATH
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className={`absolute left-6 lg:left-1/2 top-0 bottom-0 w-px transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'linear-gradient(to bottom, #6C63FF, #00D4FF, #FF6584)',
            }}
          />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                style={{
                  backgroundColor: '#050814',
                  borderColor: edu.color,
                  boxShadow: `0 0 15px ${edu.color}60`,
                }}
              />

              {/* Content card */}
              <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] glass glass-hover rounded-2xl p-6 group ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${edu.color}15` }}
                  >
                    <GraduationCap className="h-6 w-6" style={{ color: edu.color }} />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium mb-1" style={{ color: edu.color }}>
                      {edu.field}
                    </p>
                    <p className="text-sm text-foreground/50 mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-1 text-xs text-foreground/30 mb-3">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-foreground/40">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="font-mono text-xs">{edu.period}</span>
                      </div>
                      <span
                        className="font-mono text-xs px-3 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${edu.color}15`,
                          color: edu.color,
                        }}
                      >
                        {edu.grade}
                      </span>
                    </div>
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

export default Education;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "City, State",
      period: "2020 - 2024",
      grade: "CGPA: 8.5/10",
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream",
      institution: "Your School Name",
      location: "City, State",
      period: "2018 - 2020",
      grade: "Percentage: 85%",
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-bg opacity-30 rotate-180" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Education
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-lg text-primary font-medium mb-1">
                    {edu.field}
                  </p>
                  <p className="text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.location}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{edu.period}</span>
                </div>
                <div className="px-4 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">{edu.grade}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

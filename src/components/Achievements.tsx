import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Award, Lightbulb, Users, Trophy, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Best Performer – LINGUASPARK 2K25",
      organization: "College Event",
      year: "2025",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Third Prize – JNANA MANTHANA 2K25 (SAMVADA)",
      organization: "College Event",
      year: "2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "OCI 2025 Generative AI Professional",
      organization: "Oracle",
      year: "2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2025",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Complete Full-Stack Web Bootcamp",
      organization: "Udemy",
      year: "2024",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Advanced Prompt Engineering with ChatGPT",
      organization: "AI Certification",
      year: "2024",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Python, OS & Networking Basics",
      organization: "Cisco Networking Academy",
      year: "2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "SQL (Basic)",
      organization: "HackerRank",
      year: "2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Claude 101, Claude Code & AI Fluency",
      organization: "Anthropic",
      year: "2025",
      color: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-bg opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Achievements & Certifications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 group animate-scale-in overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardHeader className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {achievement.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground">
                  {achievement.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center space-y-3 relative z-10">
                <p className="text-sm text-muted-foreground">
                  {achievement.organization}
                </p>
                <Badge 
                  variant="secondary"
                  className="bg-gradient-button text-white border-0 px-4 py-1"
                >
                  {achievement.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import { Code, Award, Lightbulb, Users, Trophy, BookOpen } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const Achievements = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Best Performer – LINGUASPARK 2K25",
      organization: "College Event",
      year: "2025",
      color: "#6C63FF",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Third Prize – JNANA MANTHANA 2K25 (SAMVADA)",
      organization: "College Event",
      year: "2026",
      color: "#00D4FF",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "OCI 2025 Generative AI Professional",
      organization: "Oracle",
      year: "2025",
      color: "#FF6584",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2026",
      color: "#00D4FF",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Complete Full-Stack Web Bootcamp",
      organization: "Udemy",
      year: "2024",
      color: "#6C63FF",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Advanced Prompt Engineering with ChatGPT",
      organization: "AI Certification",
      year: "2024",
      color: "#FF6584",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Python, OS & Networking Basics",
      organization: "Cisco Networking Academy",
      year: "2024",
      color: "#00D4FF",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "SQL (Basic)",
      organization: "HackerRank",
      year: "2024",
      color: "#6C63FF",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Claude 101, Claude Code & AI Fluency",
      organization: "Anthropic",
      year: "2026",
      color: "#FF6584",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Edge – Young Professional",
      organization: "TCS iON",
      year: "2024",
      color: "#00D4FF",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Agile Methodology",
      organization: "Wingspan",
      year: "2024",
      color: "#6C63FF",
    },
  ];

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <div className="absolute inset-0 bg-gradient-bg opacity-30" />

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-rose-accent tracking-[0.3em] uppercase mb-4 block">
            // MILESTONES
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
        </div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group glass glass-hover rounded-2xl p-6 cursor-default transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${achievement.color}15`,
                    color: achievement.color,
                  }}
                >
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-foreground/40 mb-2">{achievement.organization}</p>
                  <span
                    className="inline-block font-mono text-xs px-3 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${achievement.color}15`,
                      color: achievement.color,
                    }}
                  >
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

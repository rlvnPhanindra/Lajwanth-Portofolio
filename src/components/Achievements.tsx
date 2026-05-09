import { Code, Award, Lightbulb, Users, Trophy, BookOpen, ExternalLink } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const Achievements = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Third Prize – SAMVADA 2K25",
      organization: "College Event",
      year: "2026",
      color: "#00D4FF",
      link: "certifications/Samvada 3rd prize.jpg"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "OCI 2025 Generative AI Professional",
      organization: "Oracle",
      year: "2025",
      color: "#FF6584",
      link: "certifications/OCI 2025 Generative AI Professional.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2026",
      color: "#00D4FF",
      link: "certifications/AWS Cloud Practitioner.pdf"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Complete Full-Stack Web Bootcamp",
      organization: "Udemy",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/Complete Full-Stack Web Bootcamp.pdf"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Advanced Prompt Engineering",
      organization: "AI Certification",
      year: "2024",
      color: "#FF6584",
      link: "certifications/Advanced Prompt Engineering.pdf"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Networking Basics",
      organization: "Cisco Networking Academy",
      year: "2024",
      color: "#00D4FF",
      link: "certifications/Networking Basics.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "SQL (Basic)",
      organization: "HackerRank",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/SQL (Basic).png"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "AI Fluency by Claude",
      organization: "Anthropic",
      year: "2026",
      color: "#FF6584",
      link: "certifications/AI_Fluency_by_claude.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Edge – Young Professional",
      organization: "TCS iON",
      year: "2024",
      color: "#00D4FF",
      link: "certifications/Career Edge - Young Professional.pdf"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Best Performer – LINGUASPARK 2K25",
      organization: "College Event",
      year: "2025",
      color: "#6C63FF",
      link: "certifications/Best Performer - LINGUASPARK 2K25.pdf"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Agile Methodology",
      organization: "Wingspan",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/Agile Methodology.pdf"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Introduction to Internet of Things",
      organization: "NPTEL",
      year: "2024",
      color: "#00D4FF",
      link: "certifications/Introduction to Internet of Things.pdf"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Flutter Workshop",
      organization: "Technical Event",
      year: "2024",
      color: "#FF6584",
      link: "certifications/flutter_wrkshop.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Web Development Bootcamp",
      organization: "Online Certification",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/WEBDEVELOPMENT_BOOTCAMP.pdf"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "HackIT Participation",
      organization: "Hackathon",
      year: "2025",
      color: "#00D4FF",
      link: "certifications/HACKiT.pdf"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "OJAS Blindcode",
      organization: "Coding Competition",
      year: "2025",
      color: "#FF6584",
      link: "certifications/OJAS-BLINDCODE.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Vibrance Poster Presentation",
      organization: "Technical Fest",
      year: "2025",
      color: "#6C63FF",
      link: "certifications/Vibrance_poster_paper_presentation.png"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "C Bootcamp",
      organization: "Bootcamp",
      year: "2024",
      color: "#00D4FF",
      link: "certifications/C_BOOTCAMP.pdf"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Code Bingo",
      organization: "Coding Competition",
      year: "2025",
      color: "#FF6584",
      link: "certifications/CODE_BINGO.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Code Spark",
      organization: "Technical Event",
      year: "2025",
      color: "#6C63FF",
      link: "certifications/CODE_SPARK.jpg"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Centric",
      organization: "Social Impact",
      year: "2025",
      color: "#00D4FF",
      link: "certifications/COMMUNITY_CENTRIC.pdf"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Claude 101",
      organization: "Anthropic",
      year: "2024",
      color: "#FF6584",
      link: "certifications/Claude_101.pdf"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Claude Code in Action",
      organization: "Anthropic",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/Claude_code_in_action.pdf"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "GD Best Performer",
      organization: "Group Discussion",
      year: "2025",
      color: "#00D4FF",
      link: "certifications/Gd_bestperformer.pdf"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Python Basic",
      organization: "Programming Basics",
      year: "2024",
      color: "#FF6584",
      link: "certifications/python_basic certificate (1).pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "RVR Colorido Fest",
      organization: "Cultural & Tech Fest",
      year: "2025",
      color: "#6C63FF",
      link: "certifications/RVR_Colorido_Fest.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "AI Appreciate Certificate",
      organization: "AI India",
      year: "2024",
      color: "#00D4FF",
      link: "certifications/RAVURI LAJWANTH V N P _AI_APPRECIATE_CERTIFICATE.png"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "AI Aware Certificate",
      organization: "AI India",
      year: "2024",
      color: "#FF6584",
      link: "certifications/RAVURI LAJWANTH V N P _AI_AWARE_CERTIFICATE.png"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Life & Engineering Skills",
      organization: "Skill Development",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/life Skills and Engineering Skills Participation Certificate 23761A1243 .pdf"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Listening Quiz",
      organization: "Communication Skills",
      year: "2025",
      color: "#00D4FF",
      link: "certifications/listening quiz.pdf"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Story Creation",
      organization: "Creative Skills",
      year: "2025",
      color: "#FF6584",
      link: "certifications/story creation.pdf"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "PDBS",
      organization: "Technical Event",
      year: "2024",
      color: "#6C63FF",
      link: "certifications/PDBS.png"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "LSRW",
      organization: "Linguistic Skills",
      year: "2024",
      color: "#00D4FF",
      link: "certifications/LSRW.pdf"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Python Degree",
      organization: "College Program",
      year: "2024",
      color: "#FF6584",
      link: "certifications/PYTHON_DEGREE_CLG.pdf"
    }
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
          <p className="text-lg text-foreground/50">
            Professional certifications and recognitions that validate my skills
          </p>
        </div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(108,99,255,0.15)] border-white/5 hover:border-white/20 flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${achievement.color}15`,
                    color: achievement.color,
                  }}
                >
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="font-display text-base font-semibold text-foreground mb-1.5 leading-snug group-hover:text-white transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-foreground/50">{achievement.organization}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                <span
                  className="font-mono text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: `${achievement.color}15`,
                    color: achievement.color,
                  }}
                >
                  {achievement.year}
                </span>

                {achievement.link && (
                  <a 
                    href={`${import.meta.env.BASE_URL}${achievement.link}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 hover:text-white transition-colors"
                  >
                    View Credential
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

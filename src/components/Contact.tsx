import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone, Send, MessageCircle, Sparkles } from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import useScrollReveal from "@/hooks/useScrollReveal";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_acqbjk8";
const EMAILJS_TEMPLATE_ID = "template_bniofy4";
const EMAILJS_PUBLIC_KEY = "tSKdA_0BXBMjpeh7m";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ravurilvnphanindra2005@gmail.com",
      link: "mailto:ravurilvnphanindra2005@gmail.com",
      color: "#6C63FF",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 93927 50400",
      link: "tel:+919392750400",
      color: "#00D4FF",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Lajwanth V N P Ravuri",
      link: "https://www.linkedin.com/in/lajwanth-v-n-p-ravuri",
      color: "#0A66C2",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "rlvnPhanindra",
      link: "https://github.com/rlvnPhanindra",
      color: "#8B5CF6",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+91 93927 50400",
      link: "https://wa.me/919392750400",
      color: "#25D366",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // Show confetti
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);

      toast({
        title: "Message sent! ✅",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsApp = () => {
    const name = formData.name || "someone";
    const message = formData.message || "";
    const text = encodeURIComponent(`Hi, I am ${name}. ${message}`);
    window.open(`https://wa.me/919392750400?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      {/* Background aurora */}
      <div
        className="absolute inset-0 opacity-20 animate-aurora"
        style={{
          background: "linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(0,212,255,0.1) 50%, rgba(255,101,132,0.1) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#6C63FF', '#00D4FF', '#FF6584', '#FFD700', '#8B5CF6'][i % 5],
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animation: `confetti-fall ${1.5 + Math.random() * 2}s ease-in forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
          <style>{`
            @keyframes confetti-fall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(100vh) rotate(${Math.random() * 720}deg); opacity: 0; }
            }
          `}</style>
        </div>
      )}

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-cyan-accent tracking-[0.3em] uppercase mb-4 block">
            // LET'S CONNECT
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact cards */}
          <div className={`lg:col-span-1 space-y-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 glass glass-hover rounded-xl p-4 group cursor-pointer transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${info.color}15`, color: info.color }}
                >
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm text-foreground/80 truncate group-hover:text-foreground transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className={`lg:col-span-2 glass rounded-2xl p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">Send a Message</h3>
            <p className="text-sm text-foreground/40 mb-6">Fill out the form and I'll get back to you shortly</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Name</label>
                  <input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-foreground placeholder:text-foreground/20 focus:border-electric-purple focus:ring-1 focus:ring-electric-purple/50 transition-all duration-300 outline-none text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-foreground placeholder:text-foreground/20 focus:border-electric-purple focus:ring-1 focus:ring-electric-purple/50 transition-all duration-300 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-foreground placeholder:text-foreground/20 focus:border-electric-purple focus:ring-1 focus:ring-electric-purple/50 transition-all duration-300 outline-none resize-none text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-glow inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send via Email
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 0 20px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

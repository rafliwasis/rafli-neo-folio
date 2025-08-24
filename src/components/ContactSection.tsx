import { useState } from "react";
import { Send, Mail, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:rafli@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">
            Let's discuss how data analytics can drive your business forward. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="futuristic-card animate-fade-up">
              <h3 className="text-2xl font-space font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-space font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground font-space">rafli@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-space font-medium mb-1">Response Time</h4>
                    <p className="text-muted-foreground font-space">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="futuristic-card animate-fade-up" style={{animationDelay: "0.2s"}}>
              <h4 className="text-lg font-space font-semibold text-foreground mb-4">
                What I can help you with:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-muted-foreground font-space text-sm">Business Intelligence Consulting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-glow-pulse"></div>
                  <span className="text-muted-foreground font-space text-sm">Data Analytics Projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-glow-pulse"></div>
                  <span className="text-muted-foreground font-space text-sm">Dashboard Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-muted-foreground font-space text-sm">Product Analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="futuristic-card animate-fade-up" style={{animationDelay: "0.1s"}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-foreground font-space font-medium mb-2">
                  <User className="w-4 h-4" />
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border focus:border-primary input-glow font-space"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-foreground font-space font-medium mb-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border focus:border-primary input-glow font-space"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-foreground font-space font-medium mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-muted border-border focus:border-primary input-glow font-space resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <Button 
                type="submit" 
                className="neon-button w-full font-space font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Download, Mail, Linkedin, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-bg">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-glow-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-glow-pulse opacity-40" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-glow-pulse opacity-50" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Profile Photo */}
          <div className="relative mx-auto w-40 h-40 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 animate-glow-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img 
                  src={profilePhoto} 
                  alt="Rafli Wasis Anggito"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rafli Wasis Anggito
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-space font-light leading-relaxed max-w-3xl mx-auto">
            Product and Data Enthusiast | Currently working as a Business Intelligence Analyst.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToProjects}
              className="neon-button text-lg font-space font-medium px-8 py-4"
            >
              View My Projects
            </button>
            
            <div className="flex gap-3">
              <a 
                href="/resume.pdf" 
                download
                className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
                title="Download CV"
              >
                <Download className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a 
                href="https://linkedin.com/in/raflianggito" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a 
                href="mailto:rafli@example.com"
                className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
                title="Send Email"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
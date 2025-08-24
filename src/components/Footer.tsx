import { Github, Linkedin, ArrowUp, Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 bg-background-secondary border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-muted-foreground font-space text-sm">
              © 2025 Rafli Wasis Anggito | Product and Data Enthusiast
            </p>
            <p className="text-muted-foreground font-space text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/raflianggito" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="https://github.com/raflianggito" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a 
              href="https://instagram.com/raflianggito" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              title="Instagram Profile"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a 
              href="https://wa.me/+628123456789" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a 
              href="mailto:rafli.wasis@gmail.com"
              className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              title="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <button 
              onClick={scrollToTop}
              className="p-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <div className="w-1 h-1 bg-secondary rounded-full animate-glow-pulse" style={{animationDelay: "0.5s"}}></div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-glow-pulse" style={{animationDelay: "1s"}}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
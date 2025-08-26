import { Mail, Linkedin, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">Let's discuss how data analytics can drive your business forward. I'm always open to new opportunities and collaborations.</p>
        </div>

        {/* Contact Cards */}
        <div className="futuristic-card animate-fade-up p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafliwasisanggito@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-2xl p-8 bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <p className="font-space text-sm text-muted-foreground group-hover:text-primary transition-colors">rafliwasisanggito@gmail.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rafliwasisanggito"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-2xl p-8 bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-secondary/20 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-4">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <p className="font-space text-sm text-muted-foreground group-hover:text-secondary transition-colors">rafliwasisanggito</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281973317513"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-2xl p-8 bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-accent/20 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <p className="font-space text-sm text-muted-foreground group-hover:text-accent transition-colors">+62 819-7331-7513</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

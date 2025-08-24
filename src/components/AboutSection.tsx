const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="futuristic-card animate-fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-space font-semibold mb-6 text-foreground">
                Passionate About Data & Product Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-space">
                I'm a dedicated Business Intelligence Analyst with a passion for transforming raw data into actionable insights. 
                My journey in the data world has led me to specialize in creating innovative solutions that drive business growth 
                and improve user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed font-space">
                I thrive at the intersection of data science and product development, where I can leverage analytics to inform 
                strategic decisions and create data-driven products that make a real impact. My goal is to bridge the gap 
                between complex data and meaningful business outcomes.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                <span className="text-foreground font-space">Data-Driven Decision Making</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse"></div>
                <span className="text-foreground font-space">Product Strategy & Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                <span className="text-foreground font-space">Business Intelligence Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                <span className="text-foreground font-space">Data Visualization & Storytelling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
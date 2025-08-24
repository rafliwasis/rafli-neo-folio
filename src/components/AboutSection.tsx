const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-8">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-muted-foreground leading-relaxed text-lg font-space max-w-3xl mx-auto mb-12">
            I'm a dedicated Business Intelligence Analyst with a passion for transforming raw data into actionable insights. 
            My journey in the data world has led me to specialize in creating innovative solutions that drive business growth 
            and improve user experiences. I thrive at the intersection of data science and product development, where I can 
            leverage analytics to inform strategic decisions and create data-driven products that make a real impact.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Business Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Data Analyst</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Data Science</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Product Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
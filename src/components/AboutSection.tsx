const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-8">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg font-space max-w-3xl mx-auto mb-12">
            Hi, my name is Rafli Wasis Anggito, a fresh graduate in Information Systems from the University of Indonesia with a strong interest in Data and Product Management. With hands-on experience in Python, SQL, BigQuery, Tableau, and
            other analytical tools, I am passionate about transforming raw data into actionable insights. Having worked as a Business Intelligence Analyst, I thrive at the intersection of data and product, where I leverage analytics to
            support strategic decisions and create impactful, data-driven solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-lg border-primary animate-glow-border">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Business Intelligence</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-lg border-secondary animate-glow-border">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Data Analyst</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-lg border-accent animate-glow-border">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              <span className="text-foreground font-space font-medium">Data Scientist</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-lg border-primary animate-glow-border">
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

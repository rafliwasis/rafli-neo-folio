const SkillsSection = () => {
  const skills = [
    "SQL", "Python", "Tableau", "Power BI", "Google Data Studio", "dbt", 
    "Apache Airflow", "Git", "Docker", "AWS", "PostgreSQL", "BigQuery", 
    "Snowflake", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "R", "Excel", "Jupyter"
  ];

  const skillCategories = {
    "Programming Language": ["Python", "R", "SQL"],
    "Data Analysis & BI": ["Tableau", "Power BI", "Google Data Studio", "Excel"],
    "Data Science": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter"],
    "Product Manager": ["Analytics", "A/B Testing", "User Research", "Strategy"]
  };

  // Duplicate the skills array for seamless scrolling
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-6 bg-background-secondary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">
            Tools and technologies I use to transform data into actionable insights and drive business success.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background-secondary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background-secondary to-transparent z-10"></div>
          
          {/* Scrolling Skills */}
          <div className="flex gap-4 animate-[scroll-x_40s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="futuristic-card min-w-max px-6 py-4 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-glow-pulse"></div>
                    <span className="text-foreground font-space font-medium text-lg group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {Object.entries(skillCategories).map(([category, tools], index) => (
            <div 
              key={category}
              className="text-center group animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-foreground font-space font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                {category}
              </h3>
              <div className="space-y-2">
                {tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground font-space text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
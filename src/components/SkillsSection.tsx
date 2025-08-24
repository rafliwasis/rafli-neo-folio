const SkillsSection = () => {
  const skills = [
    { name: "SQL", category: "Database" },
    { name: "Python", category: "Programming" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "Visualization" },
    { name: "Google Data Studio", category: "Visualization" },
    { name: "dbt", category: "Data Engineering" },
    { name: "Apache Airflow", category: "Data Engineering" },
    { name: "Git", category: "Version Control" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "PostgreSQL", category: "Database" },
    { name: "BigQuery", category: "Database" },
    { name: "Snowflake", category: "Database" },
    { name: "Pandas", category: "Programming" },
    { name: "NumPy", category: "Programming" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "R", category: "Programming" },
    { name: "Excel", category: "Tools" },
    { name: "Jupyter", category: "Tools" }
  ];

  const categoryColors = {
    "Database": "from-blue-500 to-blue-600",
    "Programming": "from-green-500 to-green-600", 
    "Visualization": "from-purple-500 to-purple-600",
    "Data Engineering": "from-orange-500 to-orange-600",
    "Version Control": "from-red-500 to-red-600",
    "DevOps": "from-yellow-500 to-yellow-600",
    "Cloud": "from-cyan-500 to-cyan-600",
    "Machine Learning": "from-pink-500 to-pink-600",
    "Tools": "from-indigo-500 to-indigo-600"
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
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[skill.category]} animate-glow-pulse`}></div>
                    <div>
                      <span className="text-foreground font-space font-medium text-lg group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <div className="text-muted-foreground font-space text-xs">
                        {skill.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
          {Object.keys(categoryColors).map((category, index) => (
            <div 
              key={category}
              className="futuristic-card text-center group animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${categoryColors[category]} mx-auto mb-3 group-hover:scale-110 transition-transform`}></div>
              <h3 className="text-foreground font-space font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                {category}
              </h3>
              <p className="text-muted-foreground font-space text-xs">
                {skills.filter(skill => skill.category === category).length} tools
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
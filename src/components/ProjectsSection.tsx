import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Analytics Dashboard",
      description: "Interactive BI dashboard built with Tableau to analyze customer behavior patterns and track KPIs. Features real-time data processing and predictive analytics.",
      techStack: ["Tableau", "SQL", "Python", "PostgreSQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/customer-analytics",
      category: "Business Intelligence",
    },
    {
      title: "Sales Forecasting Model",
      description: "Machine learning model that predicts quarterly sales with 92% accuracy using historical data and market indicators. Deployed with automated retraining pipeline.",
      techStack: ["Python", "Scikit-learn", "Docker", "Apache Airflow"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/sales-forecasting",
      category: "Data Science",
    },
    {
      title: "Supermarket Sales Dashboard ",
      description: "Real-time monitoring system for product metrics and user engagement. Features automated alerting and comprehensive reporting for product teams.",
      techStack: ["Power BI", "Azure", "SQL Server", "Python"],
      githubUrl: "https://lookerstudio.google.com/s/m0Qa7NltvXo",
      category: "Product Analytics",
    },
    {
      title: "Retail Transaction Dashboard",
      description: "ETL pipeline that processes 1M+ records daily from multiple sources. Includes data validation, transformation, and automated quality checks.",
      techStack: ["Google Looker Studio", "Google Sheets", "SQL"],
      demoUrl: "https://lookerstudio.google.com/s/sZwJ8KFZLps",
      category: "Data Engineering",
    },
    {
      title: "Market Research Analytics",
      description: "Comprehensive market analysis tool that combines internal data with external APIs to provide competitive intelligence and market trends.",
      techStack: ["R", "Shiny", "APIs", "PostgreSQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/market-research",
      category: "Market Analytics",
    },
    {
      title: "HR Analytics Platform",
      description: "Employee performance and retention analytics platform helping HR teams make data-driven decisions about talent management and workforce planning.",
      techStack: ["Google Data Studio", "BigQuery", "Python", "TensorFlow"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/hr-analytics",
      category: "HR Analytics",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">A showcase of my data analytics and business intelligence projects that drive meaningful business impact.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="futuristic-card group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-space font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-muted-foreground font-space text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-space text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.demoUrl ? "flex-1" : "w-1/2"
                      } flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group/icon`}
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                      <span className="text-muted-foreground group-hover/icon:text-primary transition-colors font-space text-sm">GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.githubUrl ? "flex-1" : "w-1/2"
                      } flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group/icon`}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                      <span className="text-muted-foreground group-hover/icon:text-primary transition-colors font-space text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

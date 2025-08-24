import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Analytics Dashboard",
      description: "Interactive BI dashboard built with Tableau to analyze customer behavior patterns and track KPIs. Features real-time data processing and predictive analytics.",
      techStack: ["Tableau", "SQL", "Python", "PostgreSQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/customer-analytics",
      category: "Business Intelligence"
    },
    {
      title: "Sales Forecasting Model",
      description: "Machine learning model that predicts quarterly sales with 92% accuracy using historical data and market indicators. Deployed with automated retraining pipeline.",
      techStack: ["Python", "Scikit-learn", "Docker", "Apache Airflow"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/sales-forecasting",
      category: "Data Science"
    },
    {
      title: "Product Performance Tracker",
      description: "Real-time monitoring system for product metrics and user engagement. Features automated alerting and comprehensive reporting for product teams.",
      techStack: ["Power BI", "Azure", "SQL Server", "Python"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/product-tracker",
      category: "Product Analytics"
    },
    {
      title: "Data Pipeline Automation",
      description: "ETL pipeline that processes 1M+ records daily from multiple sources. Includes data validation, transformation, and automated quality checks.",
      techStack: ["Apache Airflow", "dbt", "Snowflake", "Python"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/data-pipeline",
      category: "Data Engineering"
    },
    {
      title: "Market Research Analytics",
      description: "Comprehensive market analysis tool that combines internal data with external APIs to provide competitive intelligence and market trends.",
      techStack: ["R", "Shiny", "APIs", "PostgreSQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/market-research",
      category: "Market Analytics"
    },
    {
      title: "HR Analytics Platform",
      description: "Employee performance and retention analytics platform helping HR teams make data-driven decisions about talent management and workforce planning.",
      techStack: ["Google Data Studio", "BigQuery", "Python", "TensorFlow"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/rafli/hr-analytics",
      category: "HR Analytics"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">
            A showcase of my data analytics and business intelligence projects that drive meaningful business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="futuristic-card group animate-fade-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-space text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group/icon"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-primary/20 group/icon"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-space font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground font-space text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 rounded bg-muted text-muted-foreground font-space text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-muted-foreground font-space text-xs">
                    View Project
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
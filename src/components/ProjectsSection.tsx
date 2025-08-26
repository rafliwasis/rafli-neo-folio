import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tokopedia App Sentiment Analysis",
      description:
        "Analyzed Tokopedia app user reviews from Google Play Store (2024–2025) through web scraping, preprocessing, and sentiment classification. Built and evaluated machine learning models to understand customer sentiment trends and provide insights for product improvement.",
      techStack: ["Python", "Machine Learning", "Sentiment Analysis", "Data Scraping", "NLTK", "Classification"],
      githubUrl: "https://github.com/rafliwasis/Tokopedia-App-Sentiment-Analysis",
      category: "Data Scientist",
    },
    {
      title: "Talent DNA Projects",
      description:
        "A platform that generates personalized talent profiles from user assessments, providing insights into top strengths and areas for improvement. It delivers personalized job recommendations and supports HR professionals with talent placement.",
      techStack: ["Python", "Scikit-learn", "Machine Learning", "NLP", "TensorFlow", "OpenAI"],
      demoUrl: "https://www.canva.com/design/DAGIr_ZKw14/vHzj4MQ8XSDgHwUyZqHEOw/view?utm_content=DAGIr_ZKw14&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb65c566046",
      githubUrl: "https://github.com/rafliwasis/Capstone-Bangkit-C241-AS01",
      category: "Data Scientist",
    },
    {
      title: "Retail Transaction Dashboard",
      description: "Interactive dashboard providing insights into revenue, customers, profit, and sales trends, with detailed breakdowns by payment method and category.",
      techStack: ["Google Looker Studio", "Google Sheets", "SQL", "Sales Analytics"],
      demoUrl: "https://lookerstudio.google.com/s/sZwJ8KFZLps",
      category: "Data Analytics",
    },
    {
      title: "European Investment Analysis",
      description: "Explored European investment datasets through EDA, developed models for earnings growth and ratings, and applied clustering to identify distinct manager profiles.",
      techStack: ["Python", "Pandas", "Seaborn", "Scikit-learn", "Supervised & Unsupervised Learning"],
      demoUrl: "https://drive.google.com/file/d/1DdP8423Xw4z1u6e9qTZOSDeKifRBa4iA/view",
      githubUrl: "https://github.com/rafliwasis/EIM_Analytics",
      category: "Data Scientist",
    },
    {
      title: "Brand Awareness and Traffic Dashboard",
      description: "A dashboard for tracking brand awareness and traffic, with key insights on cost, ad recall, and campaign performance.",
      techStack: ["Tableau", "SQL", "Google Sheets", "Marketing Analytics"],
      demoUrl: "https://public.tableau.com/views/BrandAwarenessandTrafficGeneration/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      category: "Data Analytics",
    },
    {
      title: "Supermarket Sales Dashboard ",
      description: "Helps businesses understand sales trends, product performance, and customer behavior to drive better strategies and increase revenue.",
      techStack: ["Google Looker Studio", "Google Sheets", "SQL", "Sales Analytics"],
      demoUrl: "https://lookerstudio.google.com/s/m0Qa7NltvXo",
      category: "Data Analytics",
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
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 w-fit">{project.category}</div>
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
                        project.demoUrl ? "flex-1" : "w-full"
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
                        project.githubUrl ? "flex-1" : "w-full"
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

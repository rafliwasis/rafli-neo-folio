import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Business Intelligence Analyst",
      company: "TechCorp Solutions",
      location: "Jakarta, Indonesia",
      year: "2023 - Present",
      description: "Leading data analytics initiatives and developing comprehensive BI dashboards for executive decision-making. Implemented automated reporting systems that reduced manual work by 70%.",
      achievements: [
        "Built 15+ interactive dashboards using Tableau and Power BI",
        "Reduced reporting time from 2 days to 2 hours through automation",
        "Increased data accuracy by 95% through improved data validation processes"
      ]
    },
    {
      role: "Data Analyst",
      company: "Digital Innovations Ltd",
      location: "Jakarta, Indonesia",
      year: "2022 - 2023",
      description: "Analyzed customer behavior patterns and market trends to drive product development decisions. Collaborated with cross-functional teams to optimize business processes.",
      achievements: [
        "Identified key customer segments that contributed to 25% revenue increase",
        "Developed predictive models with 87% accuracy for customer churn",
        "Created automated data pipelines processing 1M+ records daily"
      ]
    },
    {
      role: "Junior Data Analyst",
      company: "StartupHub Indonesia",
      location: "Jakarta, Indonesia",
      year: "2021 - 2022",
      description: "Supported senior analysts in data collection, cleaning, and basic analysis. Gained hands-on experience with SQL, Python, and data visualization tools.",
      achievements: [
        "Mastered SQL queries and database management",
        "Created first data visualization reports for management",
        "Contributed to team projects that improved operational efficiency by 15%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary hidden md:block animate-glow-pulse" style={{top: '2rem'}}></div>
                
                <div className="futuristic-card md:ml-16">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-space font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-primary font-space font-semibold text-lg mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-space text-sm">{exp.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-space text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 animate-glow-pulse"></div>
                          <span className="text-muted-foreground font-space text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import { Award, Calendar, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google Career Certificates",
      date: "2023",
      credentialUrl: "https://coursera.org/certificate/example",
      description: "Comprehensive program covering data analysis process, tools, and techniques including SQL, R, Tableau, and data visualization.",
      skills: ["Data Analysis", "SQL", "R Programming", "Tableau", "Data Visualization"]
    },
    {
      title: "Microsoft Certified: Data Analyst Associate",
      issuer: "Microsoft",
      date: "2023",
      credentialUrl: "https://microsoft.com/certificate/example",
      description: "Advanced certification demonstrating expertise in Power BI, data modeling, and business intelligence solutions.",
      skills: ["Power BI", "DAX", "Data Modeling", "Azure", "Business Intelligence"]
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2022",
      credentialUrl: "https://tableau.com/certificate/example",
      description: "Certification validating skills in creating visualizations, dashboards, and data stories using Tableau Desktop.",
      skills: ["Tableau", "Data Visualization", "Dashboard Design", "Analytics"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialUrl: "https://aws.amazon.com/certificate/example",
      description: "Foundation-level certification demonstrating understanding of AWS cloud concepts and services.",
      skills: ["AWS", "Cloud Computing", "Data Storage", "Security"]
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2021",
      credentialUrl: "https://ibm.com/certificate/example",
      description: "Specialized certification focusing on Python programming for data analysis, manipulation, and visualization.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Science"]
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Udacity",
      date: "2021",
      credentialUrl: "https://udacity.com/certificate/example",
      description: "Advanced SQL skills certification covering complex queries, database optimization, and data extraction techniques.",
      skills: ["SQL", "Database Management", "Query Optimization", "Data Extraction"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data analytics and modern technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="futuristic-card group animate-fade-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-secondary/20 group/icon"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/icon:text-secondary transition-colors" />
                  </a>
                </div>

                <h3 className="text-lg font-space font-bold text-foreground mb-2 group-hover:text-secondary transition-colors leading-tight">
                  {cert.title}
                </h3>

                <h4 className="text-secondary font-space font-medium mb-2">
                  {cert.issuer}
                </h4>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="font-space text-sm">{cert.date}</span>
                </div>

                <p className="text-muted-foreground font-space text-sm leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 rounded text-xs bg-secondary/10 text-secondary border border-secondary/20 font-space"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
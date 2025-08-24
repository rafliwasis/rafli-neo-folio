import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Information Systems",
      institution: "University of Technology",
      year: "2018 - 2022",
      description: "Focused on data management, business analysis, and information system design. Graduated with honors.",
      gpa: "3.8/4.0"
    },
    {
      degree: "Data Science Certification",
      institution: "Institute of Data Analytics",
      year: "2022",
      description: "Intensive program covering machine learning, statistical analysis, and advanced data visualization techniques.",
      gpa: "Excellence Award"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="futuristic-card animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-space font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-space text-sm">{edu.year}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-primary font-space font-medium mb-3">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed font-space mb-3">
                    {edu.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-primary font-space text-sm font-medium">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
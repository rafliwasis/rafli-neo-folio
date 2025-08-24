import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Indonesia",
      year: "2021 - 2025",
      highlights: [
        "Majoring in Information Systems",
        "Involved in several organizations on campus such as BEM Fasilkom UI, COMPFEST, Pesta Rakyat Komputer, and many others",
        "Related Course: Interaction Systems, Artificial Intelligence & Basic Data Science, IT Project Management, Information Systems Analysis and Design, Business Management, Platform Based Programming",
      ],
    },
    {
      degree: "Machine Learning Cohort",
      institution: "Bangkit Academy by Google, Goto, and Traveloka",
      year: "2024",
      highlights: [
        "Participated in Bangkit Academy's Machine Learning Cohort, a program supported by Google, GoTo, and Traveloka, focusing on machine learning, data analysis, and AI deployment.",
        "Developed expertise in machine learning through courses like Google IT Automation with Python, Machine Learning,and DeepLearning.AI TensorFlow Developer Professional Certificate.",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="futuristic-card animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-space font-semibold text-foreground">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-space text-sm">{edu.year}</span>
                    </div>
                  </div>

                  <h4 className="text-primary font-space font-medium mb-3">{edu.institution}</h4>

                  <ul className="space-y-2">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0 animate-glow-pulse"></div>
                        <span className="text-muted-foreground font-space text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
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

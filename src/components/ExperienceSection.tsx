import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Jr. Business Intelligence Analyst",
      company: "Kumparan",
      location: "Jakarta, Indonesia",
      year: "June 2025 - Present",
      achievements: [
        "Delivered weekly multichannel insights to cluster leads and senior stakeholders, influencing content strategy and operational decisions",
        "Documented and maintained DBT models and ETL workflows, improving data reproducibility and reducing report preparation time",
        "Provided data-driven analysis for the Reimagine Kumparan project, helping define many platform sections and prioritize key features based on audience engagement metrics",
      ],
    },
    {
      role: "Business Intelligence Analyst Intern",
      company: "Kumparan",
      location: "Jakarta, Indonesia",
      year: "Aug 2024 - May 2025",
      achievements: [
        "Built and maintained 15+ dashboards using Google Looker Studio, providing actionable insights for Marketing, Content, Brand Communication, Product, and SEO teams",
        "Produced quarterly and annual reports on audience metrics, demographics, content engagement, and traffic performance, supporting strategic planning",
        "Responded to ad-hoc analytics requests, providing insights that informed optimization of 10+ platform features, content sections, campaigns, and topics",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "PT Aplikasinusa Lintasarta",
      location: "Jakarta, Indonesia",
      year: "Apr - June 2024",
      achievements: [
        "Built talent prediction models with TensorFlow Neural Networks to identify users' top skills from assessments.",
        "Developed a job recommendation system using cosine similarity and TensorFlow Recommenders (TFRS) for skill-role matching.",
        "Applied NLP with BERT and LLMs to summarize talent profiles, extract work styles, and map relevant tasks.",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "RX Labs",
      location: "Jakarta, Indonesia",
      year: "Dec 2023 - Feb 2024",
      achievements: [
        "Developed an RAG-based e-commerce chatbot leveraging LLAMA 2 and OpenAI LLMs for hybrid retrieval generation.",
        "Implemented data pipeline with web scraping and preprocessing to build a vectorized knowledge base",
        "Optimized prompt engineering and template design to enhance retrieval relevance and response consistency",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary hidden md:block animate-glow-pulse" style={{ top: "2rem" }}></div>

                <div className="futuristic-card md:ml-16">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-space font-bold text-foreground mb-2">{exp.role}</h3>
                      <h4 className="text-primary font-space font-semibold text-lg mb-2">{exp.company}</h4>
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
                          {/* <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 animate-glow-pulse"></div>
                          <span className="text-muted-foreground font-space text-sm leading-relaxed">{achievement}</span> */}
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0 animate-glow-pulse"></div>
                          <span className="text-muted-foreground font-space text-sm leading-relaxed">{achievement}</span>
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

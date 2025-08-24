import { Award, Calendar, ExternalLink } from "lucide-react";
import mlSpecialization from "@/assets/ml-specialization.jpeg";
import analyzeData from "@/assets/analyze-data.jpeg";
import processData from "@/assets/process-data.jpeg";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.ai",
      date: "Apr 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/7NGVAZAVDM9S",
      description: "Comprehensive machine learning course covering supervised & unsupervised learning, neural networks, decision trees, clustering, anomaly detection, recommender systems, and scikit-learn",
      skills: ["AI/ML", "Supervised Learning", "Unsupervised Learning", "Scikit-learn"],
      imageUrl: mlSpecialization,
    },
    {
      title: "Analyze Data to Answer Questions",
      issuer: "Google",
      date: "Mar 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/AUM8586LRV3T",
      description: "Learned to organize, format, and analyze data using spreadsheets and SQL, including sorting, filtering, functions, and multi-table queries",
      skills: ["Data Analysis", "Data Manipulation", "Google Spreadsheets", "Pivot Table & Chart"],
      imageUrl: analyzeData,
    },
    {
      title: "Process Data from Dirty to Clean",
      issuer: "Google",
      date: "Mar 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/CCBZSBHX6UAH",
      description: "Focused on ensuring data integrity, cleaning and querying databases with SQL, and validating cleaned data.",
      skills: ["Data Cleansing", "Data Quality", "SQL", "Data Processing"],
      imageUrl: processData,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground font-space text-lg max-w-2xl mx-auto">Professional certifications that validate my expertise in data analytics and modern technology stack.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="futuristic-card group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col h-full">
                {/* <div className="w-full h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-secondary" />
                </div> */}
                <div className="w-full h-40 rounded-md mb-4 flex items-center justify-center overflow-hidden bg-white">
                  <img src={cert.imageUrl} alt={`${cert.title} certificate`} className="object-contain w-full h-full" />
                </div>

                <h3 className="text-lg font-space font-bold text-foreground mb-2 group-hover:text-secondary transition-colors leading-tight">{cert.title}</h3>

                <h4 className="text-secondary font-space font-medium mb-2">{cert.issuer}</h4>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="font-space text-sm">{cert.date}</span>
                </div>

                <p className="text-muted-foreground font-space text-sm leading-relaxed mb-4 flex-grow">{cert.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 rounded text-xs bg-secondary/10 text-secondary border border-secondary/20 font-space">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-border bg-card hover:bg-card/80 transition-all hover:shadow-lg hover:shadow-secondary/20 group/icon"
                >
                  <span className="text-muted-foreground group-hover/icon:text-secondary transition-colors font-space text-sm">Verify Certificate</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/icon:text-secondary transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

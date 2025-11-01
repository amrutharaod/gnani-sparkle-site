import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock } from "lucide-react";

const Projects = () => {
  const completedProjects = [
    "Alexandria Building 900 – Shamirpet",
    "Alexandria Building 450 - Shamirpet",
    "Biological E Limited – Pharma Division – Turkapally",
    "Biological E Limited – Vaccine – Azamabad",
    "Sanzyme Biologics – Karkapatla",
    "Touchstone Square – Turkapally",
    "Oak Tree Infra - Keesara",
  ];

  const ongoingProjects = [
    "Biological E Limited - Turkapally",
    "IKP Knowledge Park - Turkapally",
    "All Units of Aurobindo Pharma",
    "All Units of Eugia Pharma Specialities",
    "All Units of Hetero Drugs",
    "Hetero Plasma Sciences Pvt Ltd",
  ];

  const majorWorks = [
    {
      client: "Alexandria",
      works: [
        "450 Chemical Stores (Footing to Finishing)",
        "450 Solvent Stores (Footing to Finishing)",
        "900 UG Fire Pump Room and RCC Tanks",
        "2700 Chemical Store (Footing to Finishing)",
      ]
    },
    {
      client: "Biological E Limited",
      works: [
        "Pharma Unit 500 KL UG RCC Tank",
        "Pharma Unit Admin Building",
        "Azamabad – Central Ware House",
        "Grape Garden – Compound Wall",
      ]
    },
    {
      client: "Touchstone",
      works: [
        "Fire Pump Room (Civil Works)",
        "ETP and STP (Civil Works)",
        "Building Internal Superstructure",
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Successfully completed 525,000+ sq ft of construction works for top-tier pharmaceutical and industrial companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-card hover:shadow-elegant transition-shadow animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Completed Projects</h3>
            </div>
            <ul className="space-y-3">
              {completedProjects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{project}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-elegant transition-shadow animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Projects in Hand</h3>
            </div>
            <ul className="space-y-3">
              {ongoingProjects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{project}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Major Works Executed</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {majorWorks.map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-bold text-primary mb-4">{item.client}</h4>
                <ul className="space-y-2">
                  {item.works.map((work, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{work}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

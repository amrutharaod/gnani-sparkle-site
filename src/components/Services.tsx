import { Card } from "@/components/ui/card";
import { Building, Paintbrush, Layers, Wrench } from "lucide-react";
import epoxyImage from "@/assets/epoxy-flooring.jpg";
import paintingImage from "@/assets/painting-work.jpg";
import ceilingImage from "@/assets/false-ceiling.jpg";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Industrial Civil Works",
      description: "Complete civil construction services for pharmaceutical and industrial buildings. Expertise in RCC structures, foundations, and finishing works.",
      image: null,
      features: [
        "Multi-storied Buildings",
        "RCC Tanks & Structures",
        "Foundations & Superstructure",
        "Road Works & Finishing"
      ]
    },
    {
      icon: Paintbrush,
      title: "Pharmaceutical Paintings",
      description: "Specialized industrial painting services for pharmaceutical facilities with strict adherence to industry standards and regulations.",
      image: paintingImage,
      features: [
        "Clean Room Coatings",
        "Industrial Grade Paints",
        "Wall Cladding & Papers",
        "Polishing & Finishing"
      ]
    },
    {
      icon: Layers,
      title: "Epoxy Flooring",
      description: "Professional epoxy flooring solutions including anti-skid, ESD/Anti-Static, and car park flooring with exceptional durability.",
      image: epoxyImage,
      features: [
        "Anti-Skid Epoxy Flooring",
        "ESD/Anti-Static Flooring",
        "PU Flooring Solutions",
        "Car Park Base Flooring"
      ]
    },
    {
      icon: Wrench,
      title: "False Ceilings & Fabrications",
      description: "Complete interior solutions including false ceilings, joinery works, and metal fabrications for industrial facilities.",
      image: ceilingImage,
      features: [
        "Suspended Ceiling Systems",
        "SS & MS Fabrications",
        "Glazing Works",
        "Modular Furniture"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence across all aspects of industrial construction with specialized expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {service.image && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

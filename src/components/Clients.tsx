import { Card } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    "Aurobindo Pharma",
    "Dr. Reddys Labs",
    "Biological E Limited",
    "Hetero Labs",
    "Sanzyme Limited",
    "Eugia Pharma Specialities",
    "Alexandria Knowledge Park",
    "IKP Knowledge Park",
    "Touchstone Properties",
    "Maithri Drugs",
    "Ichor Pvt Ltd",
    "Oak Tree Infrastructure",
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proud to serve leading pharmaceutical and industrial companies across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center hover:shadow-elegant transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-center font-semibold text-foreground group-hover:text-primary transition-colors">
                {client}
              </h3>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 bg-primary/5 border-primary/20 animate-fade-in">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Our Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                "No major complaints in completed projects",
                "Timely delivery as per client requirements",
                "Experienced and skilled staff",
                "Strict adherence to quality specifications",
                "Expert workforce with proven track record",
                "Comprehensive project management"
              ].map((strength, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Clients;

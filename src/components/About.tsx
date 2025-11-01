import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "25+" },
    { icon: Users, label: "Projects Completed", value: "500+" },
    { icon: Target, label: "Area Covered", value: "525K+ Sq.Ft" },
    { icon: TrendingUp, label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Trusted Construction Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With a view to incessant developments in construction and industrial sectors, GNANI PROJECTS stands as a leading contractor based in Hyderabad, Telangana
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-shadow duration-300 animate-scale-in border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground">
              The Person Behind GNANI PROJECTS
            </h3>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h4 className="text-xl font-bold text-foreground mb-2">GALLA GNANASEKHAR</h4>
              <p className="text-muted-foreground italic">Managing Director</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Having 25 years of experience in execution of various projects including Multi-Storied Buildings, Duplex, Bulk Drug, Pharmaceutical & Industrial Buildings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Previously worked as Director for more than 21 years, independently executing major projects for renowned pharmaceutical companies including Dr. Reddys Labs, Aurobindo Pharma, and Sanzyme Limited.
            </p>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold text-foreground">Our Quality Policy</h3>
            <Card className="p-6 bg-card shadow-card">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We intend to meet or exceed our esteemed client's requirements for performance and timescale through sheer honest and sincere approach.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our methodology is planning the work and working the plan by adopting and updating to latest trends and techniques in construction field.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xl font-bold text-primary italic text-center">
                    "Work is Worship"
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-1">- Our Motto</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

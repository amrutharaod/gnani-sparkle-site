import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Let's Build Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-card hover:shadow-elegant transition-shadow animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    Contact us for phone details
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    Contact us for email details
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-elegant transition-shadow animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">About GNANI PROJECTS</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Managing Director:</span><br />
                GALLA GNANASEKHAR
              </p>
              <p className="text-muted-foreground">
                With 25 years of experience in execution of various industrial and pharmaceutical projects, we have established ourselves as a trusted partner in the construction industry.
              </p>
              <div className="pt-6">
                <h4 className="font-semibold text-foreground mb-3">Our Specializations:</h4>
                <ul className="space-y-2">
                  {[
                    "Industrial Civil Works",
                    "Pharmaceutical Paintings",
                    "Epoxy Flooring Solutions",
                    "False Ceilings & Fabrications"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
                  Request a Quote
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

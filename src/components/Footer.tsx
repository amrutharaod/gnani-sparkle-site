import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-bold">GNANI PROJECTS</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Specialized in Industrial Civil Works, Paintings, Epoxy Floorings, False Ceilings and Fabrications with 25+ years of experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Clients
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Motto</h4>
            <p className="text-background/80 text-sm italic mb-2">
              "Work is Worship"
            </p>
            <p className="text-background/80 text-sm leading-relaxed">
              We intend to meet or exceed our client's requirements through honest and sincere approach, adopting latest trends in construction.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} GNANI PROJECTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

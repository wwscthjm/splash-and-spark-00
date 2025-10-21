import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Award, CheckCircle2 } from "lucide-react";

const operations = [
  { country: "China", location: "Beijing", active: true },
  { country: "India", location: "Mumbai & Delhi", active: true },
  { country: "EU", location: "Amsterdam", active: true },
  { country: "USA", location: "New York", active: true },
  { country: "Singapore", location: "Singapore", active: true }
];

const compliance = [
  { name: "MIIT", description: "China Ministry Approved" },
  { name: "TRAI", description: "India Telecom Authority" },
  { name: "CE", description: "European Conformity" },
  { name: "FCC", description: "USA Federal Certified" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Global IoT & M2M Connectivity, Engineered Locally
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            We bridge the gap between global reach and local expertise, delivering seamless IoT connectivity across continents.
          </p>
          <p className="text-lg text-muted-foreground">
            Trusted by enterprises worldwide, IISL powers millions of connected devices with carrier-grade reliability and regional compliance.
          </p>
        </div>

        {/* Operations Map */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Global Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {operations.map((op, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-primary/30 hover:border-primary bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {op.country}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {op.location}
                  </p>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Active
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values & Compliance */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Our Values */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
            </div>
            <div className="space-y-4">
              {[
                "Reliability: 99.9% uptime SLA backed by redundant networks",
                "Local Expertise: In-country regulatory compliance and support",
                "Innovation: Cutting-edge IoT solutions for evolving needs",
                "Transparency: Clear pricing with no hidden fees"
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Badges */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Compliance & Certifications</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {compliance.map((cert, index) => (
                <Card key={index} className="border-border/50 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Connect Globally?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a 15-minute discovery call to discuss your IoT connectivity needs
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Book Discovery Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

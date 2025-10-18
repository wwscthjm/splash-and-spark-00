import { Card, CardContent } from "@/components/ui/card";
import { Network, Shield, Zap, Globe, Database, Radio } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "IoT Connectivity",
    description: "Robust and scalable IoT infrastructure for seamless device communication and data transfer"
  },
  {
    icon: Radio,
    title: "M2M Solutions",
    description: "Advanced machine-to-machine connectivity enabling autonomous device interaction"
  },
  {
    icon: Shield,
    title: "Secure Networks",
    description: "Enterprise-grade security protocols protecting your IoT ecosystem from threats"
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Instant visibility into device performance, connectivity status, and data flows"
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Efficient data collection, storage, and analytics for actionable insights"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Worldwide connectivity solutions with reliable network partnerships"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive IoT M2M Support
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end solutions for your IoT infrastructure, ensuring reliable connectivity and seamless machine-to-machine communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card"
              >
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

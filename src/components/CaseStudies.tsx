import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Car, Gauge, CreditCard, Heart, Bike } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: Car,
    title: "EV Telematics",
    industry: "Automotive",
    metric: "1.2M SIMs • 28 Countries",
    description: "Real-time vehicle diagnostics and fleet management across Europe and Asia",
    highlight: "99.95% uptime",
    color: "from-blue-500 to-cyan-500",
    link: "/case-study/ev-telematics"
  },
  {
    icon: Gauge,
    title: "Smart Meter OEM",
    industry: "Energy",
    metric: "800K NB-IoT SIMs • 10-year battery",
    description: "Low-power metering solution with extended device lifecycle",
    highlight: "50% cost reduction",
    color: "from-green-500 to-emerald-500",
    link: "/case-study/smart-meter"
  },
  {
    icon: CreditCard,
    title: "POS Terminal",
    industry: "FinTech",
    metric: "PCI-DSS • Private APN • <2s auth",
    description: "Secure payment processing with ultra-low latency connectivity",
    highlight: "100% compliance",
    color: "from-purple-500 to-pink-500",
    link: "/case-study/pos-terminal"
  },
  {
    icon: Heart,
    title: "Medical Device",
    industry: "Healthcare",
    metric: "FDA + MIIT dual approval",
    description: "Remote patient monitoring across US and China markets",
    highlight: "Regulatory cleared",
    color: "from-red-500 to-orange-500",
    link: "/case-study/medical-device"
  },
  {
    icon: Bike,
    title: "Shared Mobility",
    industry: "Transportation",
    metric: "30M messages/month",
    description: "India DLT promotional SMS for bike-sharing platform",
    highlight: "48hr deployment",
    color: "from-indigo-500 to-blue-500",
    link: "/case-study/shared-mobility"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Customer Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See how leading companies trust IISL for their global IoT deployments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {study.industry}
                    </Badge>
                  </div>

                  {/* Title and Metric */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">
                    {study.metric}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Highlight */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">
                        {study.highlight}
                      </span>
                    </div>
                    <Link to={study.link}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary group-hover:translate-x-1 transition-transform"
                      >
                        Read Story
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customer Logos Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["AWS", "Airtel", "Tele2", "TATA", "ZEEKR", "LEAPMOTOR", "YUTONG", "SMART"].map((logo, index) => (
              <div 
                key={index}
                className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

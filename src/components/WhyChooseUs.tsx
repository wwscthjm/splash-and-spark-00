import { Check } from "lucide-react";

const benefits = [
  "Industry-leading uptime and reliability",
  "Scalable solutions growing with your business",
  "Expert technical support available 24/7",
  "Flexible deployment options",
  "Comprehensive security measures",
  "Competitive pricing and transparent billing"
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose ISL?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of expertise in IoT and M2M connectivity, we deliver reliable, 
                secure, and scalable solutions that power the future of connected devices.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Check className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-foreground text-lg pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary-glow p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-primary p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Expert Support</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-secondary p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-white/80">Devices Connected</div>
              </div>
              <div className="bg-gradient-to-br from-primary-glow to-accent p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80">Global Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

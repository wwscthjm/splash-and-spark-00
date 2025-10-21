import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Network, Zap, Globe, ChevronDown, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/80" />
      </div>

      {/* Animated network effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Company Name Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="outline" className="px-6 py-2 text-lg bg-white/10 border-white/20 text-white">
              <Network className="w-5 h-5 mr-2" />
              IISL - Inclusive Information Services Limited
            </Badge>
          </div>

          {/* Hero Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Global IoT & M2M Connectivity,
            <br />
            Engineered Locally
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Powering millions of IoT devices across China, India, EU, USA, and Singapore with carrier-grade reliability
          </p>

          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white">
              <Network className="inline-block w-4 h-4 mr-2" />
              IoT Solutions
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white">
              M2M Connectivity
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white">
              24/7 Support
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Car, MapPin, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudyEV = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">Automotive</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  EV Telematics Success Story
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              Real-time vehicle diagnostics and fleet management across Europe and Asia
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1.2M</div>
                  <div className="text-muted-foreground">Active SIMs</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">28</div>
                  <div className="text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.95%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </CardContent>
              </Card>
            </div>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A leading electric vehicle manufacturer needed a reliable, scalable IoT connectivity solution to support their rapidly expanding fleet across Europe and Asia. Their existing connectivity infrastructure was fragmented across multiple carriers, leading to coverage gaps, inconsistent performance, and complex billing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The company required real-time vehicle diagnostics, over-the-air updates, and fleet management capabilities across 28 countries, with seamless roaming and carrier-grade reliability.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Global Multi-IMSI SIM Cards
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Deployed eUICC-enabled SIM cards with multiple carrier profiles, enabling automatic network switching for optimal coverage and cost efficiency across all operating regions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Private APN & VPN Security
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Implemented enterprise-grade security with dedicated private APN and VPN tunnels to protect sensitive vehicle data and ensure secure over-the-air updates.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Real-Time Management Portal
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Provided comprehensive connectivity management platform with real-time diagnostics, usage analytics, and automated alerting for proactive issue resolution.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Results</h2>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">99.95% uptime</span> across all markets, exceeding SLA requirements
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">40% reduction</span> in connectivity costs through optimized carrier selection
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Seamless expansion</span> to 1.2M vehicles without infrastructure changes
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Real-time diagnostics</span> enabling predictive maintenance and reduced downtime
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Scale Your IoT Fleet?
                </h3>
                <p className="text-white/90 mb-6">
                  Let's discuss how IISL can power your connected vehicle solution
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  onClick={() => navigate('/#contact')}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyEV;

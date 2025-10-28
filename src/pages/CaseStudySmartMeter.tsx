import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Gauge, Battery, DollarSign, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudySmartMeter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">Energy</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Smart Meter OEM Success Story
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              Low-power metering solution with extended device lifecycle
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">800K</div>
                  <div className="text-muted-foreground">NB-IoT SIMs</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10 Years</div>
                  <div className="text-muted-foreground">Battery Life</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-muted-foreground">Cost Reduction</div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A smart meter manufacturer needed an ultra-low-power connectivity solution that could support 10+ year battery life for remote utility metering deployments. Traditional cellular connectivity was too power-hungry and costly for large-scale meter deployments.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The solution required deep indoor penetration, minimal power consumption, and cost-effective data plans for infrequent, small data transmissions typical of utility metering applications.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Battery className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          NB-IoT Connectivity
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Deployed specialized NB-IoT SIM cards optimized for ultra-low power consumption, enabling 10+ year battery life with superior indoor coverage and penetration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Optimized Data Plans
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Implemented cost-effective data plans tailored for infrequent, small-packet transmissions typical of smart meter communications, reducing operational costs by 50%.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Automated Provisioning
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Streamlined SIM activation and device onboarding through automated provisioning APIs, reducing deployment time and eliminating manual configuration errors.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

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
                        <span className="font-semibold">800,000 meters</span> deployed with 10+ year battery life achieved
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">50% cost reduction</span> compared to previous connectivity solution
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">99.8% read success rate</span> even in challenging indoor environments
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Zero-touch deployment</span> through automated provisioning APIs
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Low-Power IoT Connectivity?
                </h3>
                <p className="text-white/90 mb-6">
                  Discover how NB-IoT can power your utility or smart city deployment
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

export default CaseStudySmartMeter;

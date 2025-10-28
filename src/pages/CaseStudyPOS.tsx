import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Shield, Zap, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudyPOS = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2">FinTech</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  POS Terminal Success Story
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-12">
              Secure payment processing with ultra-low latency connectivity
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">PCI-DSS Compliance</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                  <div className="text-muted-foreground">Auth Time</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Private</div>
                  <div className="text-muted-foreground">APN Security</div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A leading payment processor needed to deploy thousands of mobile POS terminals across retail locations with strict security and performance requirements. The solution had to meet PCI-DSS compliance standards while delivering sub-2-second transaction authorization times.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional public cellular networks couldn't guarantee the security isolation and low latency required for financial transactions, posing both compliance and customer experience risks.
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
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Private APN + VPN
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Implemented dedicated private APN with encrypted VPN tunnels, creating an isolated network environment that meets PCI-DSS security requirements for cardholder data transmission.
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
                          Optimized Network Routing
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Configured direct routing paths and QoS policies to ensure consistent sub-2-second transaction processing times, even during peak hours and high network congestion.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Compliance Documentation
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Provided comprehensive security documentation and audit trails to support PCI-DSS certification, including network architecture diagrams and security attestations.
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
                        <span className="font-semibold">100% PCI-DSS compliance</span> achieved on first audit
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Average 1.7s</span> transaction authorization time
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">Zero security incidents</span> since deployment
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-foreground">
                        <span className="font-semibold">99.99% transaction success rate</span> across all terminals
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Secure Payment Connectivity?
                </h3>
                <p className="text-white/90 mb-6">
                  Let's discuss PCI-DSS compliant IoT solutions for your FinTech application
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

export default CaseStudyPOS;

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const Products = () => {
  const { t } = useLanguage();
  const [billingType, setBillingType] = useState<"prepaid" | "postpaid">("prepaid");
  
  const products = [
    {
      name: t('products.starterPack'),
      price: "$49",
      period: t('products.perSim3Months'),
      features: [
        "200 SMS included",
        "500 MB data",
        "3-month validity",
        "5 countries coverage",
        "Basic dashboard access"
      ],
      popular: false,
      type: "prepaid" as const
    },
    {
      name: t('products.volumePlans'),
      price: t('products.custom'),
      period: t('products.basedOnVolume'),
      features: [
        "100K – 100M messages",
        "Unlimited data options",
        "12-month contracts",
        "Global coverage",
        "Priority support",
        "Custom API integration"
      ],
      popular: true,
      type: "both" as const
    },
    {
      name: t('products.oemWhiteLabel'),
      price: "$0.50",
      period: t('products.perSimMoq'),
      features: [
        "Custom eSIM profile",
        "Laser-etched logo",
        "Custom packaging",
        "Dedicated APN",
        "SLA guarantee"
      ],
      popular: false,
      type: "postpaid" as const
    },
    {
      name: t('products.managementPortal'),
      price: t('products.included'),
      period: t('products.withAllPlans'),
      features: [
        "Real-time CDR access",
        "RESTful API",
        "Usage alerts",
        "GDPR-compliant export",
        "Multi-user access",
        "Webhook integration"
      ],
      popular: false,
      type: "both" as const
    }
  ];

  const filteredProducts = products.filter(
    product => product.type === "both" || product.type === billingType
  );

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('products.subtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setBillingType("prepaid")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingType === "prepaid"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t('products.prepaid')}
            </button>
            <button
              onClick={() => setBillingType("postpaid")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingType === "postpaid"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t('products.postpaid')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden ${
                product.popular 
                  ? "border-primary shadow-xl scale-105" 
                  : "border-border/50"
              }`}
            >
              {product.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-tl-none rounded-br-none bg-gradient-to-r from-primary to-secondary">
                    <Zap className="w-3 h-3 mr-1" />
                    {t('products.popular')}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{product.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    {product.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={product.popular ? "default" : "outline"}
                >
                  {t('products.getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {t('products.customSolution')} <a href="#contact" className="text-primary hover:underline font-medium">{t('products.contactSales')}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;

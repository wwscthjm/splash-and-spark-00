import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const CTA = () => {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95" />
      
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('cta.bookCall')}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>{t('cta.bookingTitle')}</DialogTitle>
                  <DialogDescription>{t('cta.bookingDescription')}</DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="grid gap-4">
                    <Input 
                      placeholder={t('cta.namePlaceholder')}
                      className="bg-background"
                    />
                    <Input 
                      type="email"
                      placeholder={t('cta.emailPlaceholder')}
                      className="bg-background"
                    />
                    <Input 
                      placeholder={t('cta.companyPlaceholder')}
                      className="bg-background"
                    />
                    <Input 
                      type="tel"
                      placeholder={t('cta.phonePlaceholder')}
                      className="bg-background"
                    />
                    <Input 
                      type="date"
                      placeholder={t('cta.preferredDatePlaceholder')}
                      className="bg-background"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full"
                  >
                    {t('cta.confirmBooking')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Contact form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder={t('cta.namePlaceholder')}
                  className="bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground"
                />
                <Input 
                  type="email"
                  placeholder={t('cta.emailPlaceholder')}
                  className="bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Input 
                placeholder={t('cta.companyPlaceholder')}
                className="bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                {t('cta.submitButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-white/80">
            <p>{t('cta.reachUs')}</p>
            <p className="text-xl font-semibold text-white mt-2">
              {t('cta.contactInfo')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

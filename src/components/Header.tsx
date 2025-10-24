import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronDown, Menu } from "lucide-react";
import logo from "@/assets/iisl-logo.png";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { data: partners, isLoading } = useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('category', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  // Group partners by category
  const partnersByCategory = partners?.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {} as Record<string, typeof partners>);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="IISL Logo" className="h-10 w-10" />
            <span className="font-bold text-lg text-foreground hidden sm:inline-block">
              IISL
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t('header.home')}
            </a>

            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                {t('header.partners')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                {isLoading ? (
                  <DropdownMenuItem disabled>{t('header.loading')}</DropdownMenuItem>
                ) : partnersByCategory && Object.keys(partnersByCategory).length > 0 ? (
                  <>
                    {Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
                      categoryPartners.map((partner) => (
                        <DropdownMenuItem 
                          key={partner.id} 
                          className="cursor-pointer"
                          onClick={() => partner.website_url && window.open(partner.website_url, '_blank')}
                        >
                          {partner.name} - {category}
                        </DropdownMenuItem>
                      ))
                    ))}
                  </>
                ) : (
                  <DropdownMenuItem disabled>{t('header.noPartners')}</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                {t('header.solutions')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                <DropdownMenuItem className="cursor-pointer">
                  {t('header.iotConnectivity')}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  {t('header.m2mPlatform')}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  {t('header.deviceManagement')}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  {t('header.analytics')}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  {t('header.customSolutions')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t('header.about')}
            </a>
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">
              {t('header.caseStudies')}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t('header.contact')}
            </a>
          </nav>

          {/* Language Switch */}
          <div className="hidden md:flex items-center gap-2">
            <Label htmlFor="language-switch" className="text-sm text-foreground">
              EN
            </Label>
            <Switch
              id="language-switch"
              checked={language === 'zh'}
              onCheckedChange={(checked) => setLanguage(checked ? 'zh' : 'en')}
            />
            <Label htmlFor="language-switch" className="text-sm text-foreground">
              中文
            </Label>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

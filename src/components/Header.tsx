import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import logo from "@/assets/iisl-logo.png";

const Header = () => {
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
              Home
            </a>

            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Partners
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                <DropdownMenuItem className="cursor-pointer">
                  Technology Partners
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Service Providers
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Resellers
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Become a Partner
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                <DropdownMenuItem className="cursor-pointer">
                  IoT Connectivity
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  M2M Platform
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Device Management
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Analytics & Insights
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Custom Solutions
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
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

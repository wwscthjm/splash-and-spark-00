import logo from "@/assets/iisl-logo.png";
import { Network, Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="IISL Logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-foreground">IISL</span>
            </div>
            <p className="text-muted-foreground">
              Leading provider of IoT M2M connectivity solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">IoT Connectivity</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">M2M Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Network Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@iisl.com" className="hover:text-primary transition-colors">
                  contact@iisl.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MessageCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Linkedin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="https://linkedin.com/company/iisl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">China Office</p>
                  <p>Beijing, China</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">India Office</p>
                  <p>Mumbai & Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">EU Office</p>
                  <p>Amsterdam, Netherlands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Inclusive Information Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

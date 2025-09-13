import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Suno Saathi</span>
            </div>
            <p className="text-gray-300 text-sm">
              A safe space where people can talk, share their problems, and receive emotional support in a friendly, non-judgmental environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/how-it-works" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                How It Works
              </Link>
              <Link to="/community" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Community
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                Help Center
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300 text-sm">hello@sunosaathi.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300 text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Suno Saathi. All rights reserved. | Made with ❤️ for mental wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  isHighContrast: boolean;
}

export default function Footer({ isHighContrast }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    platform: [
      { name: 'Features', path: '/features' },
      { name: 'Technology', path: '/technology' },
      { name: 'Community', path: '/community' },
      { name: 'Innovation', path: '/innovation' }
    ],
    resources: [
      { name: 'Getting Started', href: '#getting-started' },
      { name: 'Teacher Training', path: '/community' },
      { name: 'Success Stories', path: '/impact' },
      { name: 'Research Papers', href: '#research' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community Forums', path: '/community' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Accessibility Guide', href: '#accessibility' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Impact', path: '/impact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  };

  const renderLink = (link: any) => {
    if (link.path) {
      return (
        <Link
          to={link.path}
          className={`text-sm transition-colors duration-200 ${
            isHighContrast 
              ? 'text-gray-300 hover:text-yellow-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {link.name}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        className={`text-sm transition-colors duration-200 ${
          isHighContrast 
            ? 'text-gray-300 hover:text-yellow-400' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        {link.name}
      </a>
    );
  };

  return (
    <footer className={`${
      isHighContrast ? 'bg-black border-t-2 border-yellow-400' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${
                isHighContrast ? 'bg-yellow-400' : 'bg-blue-600'
              }`}>
                <Eye className={`h-6 w-6 ${
                  isHighContrast ? 'text-black' : 'text-white'
                }`} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  Divya Drishti
                </h3>
                <p className={`text-sm ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-400'
                }`}>
                  Divine Vision
                </p>
              </div>
            </Link>
            
            <p className={`text-sm leading-relaxed mb-6 ${
              isHighContrast ? 'text-gray-300' : 'text-gray-400'
            }`}>
              Empowering visually impaired students across India through AI-powered 
              education technology, creating inclusive learning experiences that unlock 
              every student's potential.
            </p>
            
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isHighContrast 
                      ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isHighContrast ? 'text-white' : 'text-white'
            }`}>
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isHighContrast ? 'text-white' : 'text-white'
            }`}>
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isHighContrast ? 'text-white' : 'text-white'
            }`}>
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isHighContrast ? 'text-white' : 'text-white'
            }`}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`border-t py-8 ${
          isHighContrast ? 'border-yellow-400' : 'border-gray-800'
        }`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className={`h-5 w-5 mr-3 ${
                isHighContrast ? 'text-yellow-400' : 'text-blue-400'
              }`} />
              <div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  Email Us
                </div>
                <div className={`font-medium ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  support@divyadrishti.org
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className={`h-5 w-5 mr-3 ${
                isHighContrast ? 'text-yellow-400' : 'text-green-400'
              }`} />
              <div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  Call Us
                </div>
                <div className={`font-medium ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  +91 1800-123-4567
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className={`h-5 w-5 mr-3 ${
                isHighContrast ? 'text-yellow-400' : 'text-red-400'
              }`} />
              <div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  Visit Us
                </div>
                <div className={`font-medium ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  New Delhi, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
          isHighContrast ? 'border-yellow-400' : 'border-gray-800'
        }`}>
          <div className={`text-sm ${
            isHighContrast ? 'text-gray-300' : 'text-gray-400'
          }`}>
            © 2024 Divya Drishti. All rights reserved. Empowering inclusive education through AI.
          </div>
          
          <button
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
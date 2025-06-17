import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Eye, Accessibility, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  isHighContrast: boolean;
  onToggleContrast: () => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
}

export default function Header({ 
  isHighContrast, 
  onToggleContrast, 
  isAudioActive, 
  onToggleAudio 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Technology', path: '/technology' },
    { name: 'Impact', path: '/impact' },
    { name: 'Community', path: '/community' },
    { name: 'Innovation', path: '/innovation' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isHighContrast 
        ? 'bg-black border-b-2 border-yellow-400' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${
              isHighContrast ? 'bg-yellow-400' : 'bg-blue-600'
            }`}>
              <Eye className={`h-6 w-6 ${
                isHighContrast ? 'text-black' : 'text-white'
              }`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Divya Drishti
              </h1>
              <p className={`text-sm ${
                isHighContrast ? 'text-yellow-400' : 'text-blue-600'
              }`}>
                Divine Vision
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg ${
                  isActivePath(item.path)
                    ? isHighContrast 
                      ? 'text-yellow-400 bg-gray-800' 
                      : 'text-blue-600 bg-blue-50'
                    : isHighContrast 
                      ? 'text-white hover:text-yellow-400 hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                aria-label={`Navigate to ${item.name} page`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Accessibility Controls */}
          <div className="flex items-center space-x-3">
            {/* Audio Toggle - Prominent Position */}
            <button
              onClick={onToggleAudio}
              className={`p-3 rounded-lg font-medium transition-all duration-200 hover:scale-110 border-2 ${
                isAudioActive
                  ? isHighContrast 
                    ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300' 
                    : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                  : isHighContrast 
                    ? 'bg-gray-800 text-yellow-400 border-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-blue-600 border-blue-600 hover:bg-gray-200'
              }`}
              aria-label={`${isAudioActive ? 'Stop' : 'Start'} audio reading`}
              title={`${isAudioActive ? 'Stop' : 'Start'} Audio Reading`}
            >
              {isAudioActive ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
            
            <button
              onClick={onToggleContrast}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                isHighContrast 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
              title={`${isHighContrast ? 'Disable' : 'Enable'} High Contrast`}
            >
              <Accessibility className="h-5 w-5" />
            </button>

            <Link
              to="/register"
              className={`hidden md:inline-flex px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                isHighContrast 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Register Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isHighContrast 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${
            isHighContrast ? 'border-yellow-400' : 'border-gray-200'
          }`}>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-3 font-medium transition-colors duration-200 rounded-lg ${
                    isActivePath(item.path)
                      ? isHighContrast 
                        ? 'text-yellow-400 bg-gray-800' 
                        : 'text-blue-600 bg-blue-50'
                      : isHighContrast 
                        ? 'text-white hover:text-yellow-400 hover:bg-gray-800' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-3 font-semibold text-center rounded-lg transition-colors duration-200 ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Register Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
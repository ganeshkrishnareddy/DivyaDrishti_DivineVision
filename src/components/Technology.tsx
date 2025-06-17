import React from 'react';
import { 
  Cpu, 
  Globe, 
  Shield, 
  Smartphone,
  Brain,
  Eye,
  Headphones,
  Gamepad2
} from 'lucide-react';

interface TechnologyProps {
  isHighContrast: boolean;
}

export default function Technology({ isHighContrast }: TechnologyProps) {
  const technologies = [
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      items: [
        'Generative AI & Natural Language Processing',
        'Computer Vision & Multimodal AI',
        'Adaptive Learning Algorithms',
        'Real-time Content Transformation'
      ],
      color: 'blue'
    },
    {
      category: 'Immersive Learning',
      icon: Eye,
      items: [
        'Virtual Reality Simulations',
        'Augmented Reality Integration',
        'Haptic Feedback Systems',
        'Spatial Audio Technology'
      ],
      color: 'purple'
    },
    {
      category: 'Assistive Technology',
      icon: Headphones,
      items: [
        'Smart Navigation Systems',
        'Braille Display Integration',
        'Voice-Controlled Interface',
        'IoT Device Connectivity'
      ],
      color: 'teal'
    },
    {
      category: 'Secure Infrastructure',
      icon: Shield,
      items: [
        'Blockchain Data Security',
        'Edge Computing Processing',
        'Multi-factor Authentication',
        'Privacy-First Architecture'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    if (isHighContrast) {
      return 'bg-yellow-400 text-black';
    }
    
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-600 text-white',
      purple: 'bg-purple-600 text-white',
      teal: 'bg-teal-600 text-white',
      green: 'bg-green-600 text-white'
    };
    
    return colorMap[color] || 'bg-blue-600 text-white';
  };

  return (
    <section id="technology" className={`py-20 ${
      isHighContrast ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isHighContrast 
              ? 'bg-yellow-400 text-black' 
              : 'bg-purple-100 text-purple-800'
          }`}>
            <Cpu className="h-4 w-4 mr-2" />
            Technology Stack
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Cutting-Edge{' '}
            <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
              Technology Integration
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Leveraging the latest advancements in AI, immersive technologies, and assistive 
            devices to create an unparalleled learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isHighContrast 
                  ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${getColorClasses(tech.color)}`}>
                  <tech.icon className="h-8 w-8" />
                </div>
                <h3 className={`text-xl font-bold ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      isHighContrast ? 'bg-yellow-400' : 'bg-blue-500'
                    }`}></div>
                    <span className={`${
                      isHighContrast ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className={`p-8 rounded-2xl ${
          isHighContrast 
            ? 'bg-gray-900 border-2 border-yellow-400' 
            : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Platform Architecture
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className={`text-center p-6 rounded-xl ${
              isHighContrast ? 'bg-black' : 'bg-white'
            } shadow-lg`}>
              <Smartphone className={`h-12 w-12 mx-auto mb-4 ${
                isHighContrast ? 'text-yellow-400' : 'text-blue-600'
              }`} />
              <h4 className={`font-semibold mb-2 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                User Interface
              </h4>
              <p className={`text-sm ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Accessible, voice-controlled frontend
              </p>
            </div>
            
            <div className={`text-center p-6 rounded-xl ${
              isHighContrast ? 'bg-black' : 'bg-white'
            } shadow-lg`}>
              <Cpu className={`h-12 w-12 mx-auto mb-4 ${
                isHighContrast ? 'text-yellow-400' : 'text-purple-600'
              }`} />
              <h4 className={`font-semibold mb-2 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                AI Processing
              </h4>
              <p className={`text-sm ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Real-time content transformation
              </p>
            </div>
            
            <div className={`text-center p-6 rounded-xl ${
              isHighContrast ? 'bg-black' : 'bg-white'
            } shadow-lg`}>
              <Globe className={`h-12 w-12 mx-auto mb-4 ${
                isHighContrast ? 'text-yellow-400' : 'text-teal-600'
              }`} />
              <h4 className={`font-semibold mb-2 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Cloud Services
              </h4>
              <p className={`text-sm ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Scalable, secure infrastructure
              </p>
            </div>
            
            <div className={`text-center p-6 rounded-xl ${
              isHighContrast ? 'bg-black' : 'bg-white'
            } shadow-lg`}>
              <Gamepad2 className={`h-12 w-12 mx-auto mb-4 ${
                isHighContrast ? 'text-yellow-400' : 'text-green-600'
              }`} />
              <h4 className={`font-semibold mb-2 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                IoT Integration
              </h4>
              <p className={`text-sm ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Assistive device connectivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
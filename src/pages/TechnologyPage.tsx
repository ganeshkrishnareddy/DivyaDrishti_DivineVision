import React from 'react';
import { 
  Cpu, 
  Brain, 
  Eye, 
  Globe, 
  Zap,
  Smartphone,
  Cloud,
  Shield,
  Wifi,
  Database,
  Layers,
  Sparkles
} from 'lucide-react';

interface TechnologyPageProps {
  isHighContrast: boolean;
}

export default function TechnologyPage({ isHighContrast }: TechnologyPageProps) {
  const aiTechnologies = [
    {
      icon: Brain,
      title: 'Generative AI',
      description: 'Creates descriptions, summaries, and adaptive quizzes tailored to individual learning needs.',
      applications: ['Content generation', 'Quiz creation', 'Personalized explanations', 'Learning path optimization']
    },
    {
      icon: Globe,
      title: 'Natural Language Processing',
      description: 'Powers multi-lingual Text-to-Speech and voice control with contextual understanding.',
      applications: ['23 Indian languages', 'Context-aware speech', 'Voice commands', 'Sentiment analysis']
    },
    {
      icon: Zap,
      title: 'Adaptive Learning Algorithms',
      description: 'Continuously optimize the learning experience based on student progress and preferences.',
      applications: ['Difficulty adjustment', 'Content recommendation', 'Learning style adaptation', 'Progress prediction']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Interprets visual content including diagrams, charts, and complex educational materials.',
      applications: ['Image analysis', 'Diagram interpretation', 'Text extraction', 'Visual scene understanding']
    },
    {
      icon: Layers,
      title: 'Multimodal AI',
      description: 'Integrates information from text, audio, and images for comprehensive understanding.',
      applications: ['Cross-modal learning', 'Content synthesis', 'Holistic comprehension', 'Rich descriptions']
    }
  ];

  const futureScope = [
    {
      icon: Smartphone,
      title: 'IoT & Edge Computing',
      description: 'Integration with smart wearables for real-time environmental descriptions and localized processing.',
      benefits: ['Offline processing', 'Real-time feedback', 'Reduced latency', 'Enhanced privacy']
    },
    {
      icon: Database,
      title: 'Web3 Elements',
      description: 'Exploring decentralized storage for secure student data and content ownership.',
      benefits: ['Data ownership', 'Enhanced security', 'Transparent governance', 'Community rewards']
    },
    {
      icon: Sparkles,
      title: 'AR/VR Integration',
      description: 'Future applications include haptic feedback devices for tactile representations of visual concepts.',
      benefits: ['Immersive learning', 'Tactile feedback', 'Spatial understanding', 'Interactive simulations']
    }
  ];

  const architectureComponents = [
    {
      icon: Smartphone,
      title: 'User Interface',
      description: 'Accessible, voice-controlled frontend optimized for screen readers and assistive devices.',
      features: ['Voice navigation', 'Screen reader support', 'High contrast modes', 'Keyboard accessibility']
    },
    {
      icon: Cpu,
      title: 'AI Processing Engine',
      description: 'Real-time content transformation and personalization powered by advanced machine learning.',
      features: ['Content adaptation', 'Real-time processing', 'Personalization', 'Multi-modal analysis']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud services ensuring high availability and performance.',
      features: ['Auto-scaling', 'Load balancing', 'Global CDN', 'Disaster recovery']
    },
    {
      icon: Shield,
      title: 'Security Layer',
      description: 'Comprehensive security measures protecting sensitive student data and privacy.',
      features: ['End-to-end encryption', 'Multi-factor auth', 'Privacy compliance', 'Audit logging']
    }
  ];

  const getColorClasses = (index: number) => {
    const colors = ['blue', 'purple', 'teal', 'orange', 'green', 'red', 'indigo', 'pink'];
    const color = colors[index % colors.length];
    
    if (isHighContrast) {
      return 'bg-yellow-400 text-black';
    }
    
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-600 text-white',
      purple: 'bg-purple-600 text-white',
      teal: 'bg-teal-600 text-white',
      orange: 'bg-orange-600 text-white',
      green: 'bg-green-600 text-white',
      red: 'bg-red-600 text-white',
      indigo: 'bg-indigo-600 text-white',
      pink: 'bg-pink-600 text-white'
    };
    
    return colorMap[color];
  };

  return (
    <div className={`pt-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
              isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-purple-100 text-purple-800'
            }`}>
              <Cpu className="h-5 w-5 mr-2" />
              Technology & Innovation
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              The Power of{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                AI for Inclusive Education
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Divya Drishti leverages cutting-edge technologies to deliver transformative impact, 
              making education accessible, personalized, and engaging for every student.
            </p>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning Section */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Artificial Intelligence &{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Machine Learning
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The core of our platform, enabling dynamic content transformation and personalized learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index)}`}>
                  <tech.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {tech.description}
                </p>

                <div className="space-y-2">
                  <h4 className={`text-sm font-semibold mb-3 ${
                    isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                  }`}>
                    Applications:
                  </h4>
                  {tech.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-blue-500'
                      }`}></div>
                      <span className={`text-sm ${
                        isHighContrast ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Platform{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-teal-600'}>
                Architecture
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A robust, scalable architecture designed for accessibility, security, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureComponents.map((component, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-teal-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index + 5)}`}>
                  <component.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-lg font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {component.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {component.description}
                </p>

                <div className="space-y-1">
                  {component.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-teal-500'
                      }`}></div>
                      <span className={`text-xs ${
                        isHighContrast ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Future{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                Scope
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We envision further enhancements that will revolutionize accessible education even more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureScope.map((scope, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index + 9)}`}>
                  <scope.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {scope.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {scope.description}
                </p>

                <div className="space-y-2">
                  <h4 className={`text-sm font-semibold mb-3 ${
                    isHighContrast ? 'text-yellow-400' : 'text-purple-600'
                  }`}>
                    Benefits:
                  </h4>
                  {scope.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-purple-500'
                      }`}></div>
                      <span className={`text-sm ${
                        isHighContrast ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-12 rounded-2xl ${
            isHighContrast 
              ? 'bg-gray-900 border-2 border-yellow-400' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600'
          }`}>
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-white'
              }`}>
                Technical Excellence
              </h2>
              <p className={`text-lg ${
                isHighContrast ? 'text-gray-300' : 'text-indigo-100'
              }`}>
                Built with industry-leading technologies and best practices for maximum reliability and performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`text-center p-6 rounded-xl ${
                isHighContrast ? 'bg-black' : 'bg-white/20'
              }`}>
                <Wifi className={`h-8 w-8 mx-auto mb-3 ${
                  isHighContrast ? 'text-yellow-400' : 'text-white'
                }`} />
                <div className={`text-lg font-bold mb-1 ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  99.9%
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-indigo-100'
                }`}>
                  Uptime Guarantee
                </div>
              </div>
              
              <div className={`text-center p-6 rounded-xl ${
                isHighContrast ? 'bg-black' : 'bg-white/20'
              }`}>
                <Zap className={`h-8 w-8 mx-auto mb-3 ${
                  isHighContrast ? 'text-yellow-400' : 'text-white'
                }`} />
                <div className={`text-lg font-bold mb-1 ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  &lt;200ms
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-indigo-100'
                }`}>
                  Response Time
                </div>
              </div>
              
              <div className={`text-center p-6 rounded-xl ${
                isHighContrast ? 'bg-black' : 'bg-white/20'
              }`}>
                <Shield className={`h-8 w-8 mx-auto mb-3 ${
                  isHighContrast ? 'text-yellow-400' : 'text-white'
                }`} />
                <div className={`text-lg font-bold mb-1 ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  256-bit
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-indigo-100'
                }`}>
                  Encryption
                </div>
              </div>
              
              <div className={`text-center p-6 rounded-xl ${
                isHighContrast ? 'bg-black' : 'bg-white/20'
              }`}>
                <Globe className={`h-8 w-8 mx-auto mb-3 ${
                  isHighContrast ? 'text-yellow-400' : 'text-white'
                }`} />
                <div className={`text-lg font-bol mb-1 ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  Global
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-indigo-100'
                }`}>
                  CDN Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Experience Next-Generation Learning Technology
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join the revolution in accessible education powered by cutting-edge AI and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}>
              Explore Platform
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600'
            }`}>
              Technical Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, BookOpen, Users, Eye, Brain, Globe } from 'lucide-react';

interface HomePageProps {
  isHighContrast: boolean;
}

export default function HomePage({ isHighContrast }: HomePageProps) {
  const stats = [
    { number: '10M+', label: 'Visually Impaired Students in India', icon: Users },
    { number: '23', label: 'Indian Languages Supported', icon: Globe },
    { number: '95%', label: 'Accessibility Compliance', icon: Eye }
  ];

  const quickFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Transform any content into accessible formats instantly'
    },
    {
      icon: BookOpen,
      title: 'Adaptive Pathways',
      description: 'Personalized learning journeys for every student'
    },
    {
      icon: Globe,
      title: 'Multi-lingual Support',
      description: 'Learn in your preferred Indian language'
    }
  ];

  return (
    <div className={`pt-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
              isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              <Eye className="h-5 w-5 mr-2" />
              Empowering Education Through AI
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Divya Drishti:
              </span>
              <br />
              Illuminating Education for Visually Impaired Students in India
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              An AI-powered adaptive learning and assistive technology platform, transforming 
              educational access and fostering independence for millions of students across India.
            </p>

            <div className={`p-6 rounded-2xl max-w-4xl mx-auto ${
              isHighContrast ? 'bg-gray-900 border-2 border-yellow-400' : 'bg-white shadow-xl'
            }`}>
              <p className={`text-lg leading-relaxed ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                In India, millions of visually impaired students face significant barriers to quality education, 
                from the high cost and limited availability of assistive technologies to a pervasive digital divide. 
                Divya Drishti (Divine Vision/Insight) is here to change that. We are building an innovative, 
                AI-driven platform that makes any digital educational material accessible, personalized, and interactive, 
                empowering students to learn, grow, and thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/features"
                className={`group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <span className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/community"
                className={`group px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                  isHighContrast 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                <span className="flex items-center">
                  Get Involved
                  <Users className="ml-2 h-5 w-5" />
                </span>
              </Link>

              <Link
                to="/register"
                className={`group px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                  isHighContrast 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <span className="flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isHighContrast 
                    ? 'bg-black border-2 border-yellow-400' 
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-100 text-blue-600'
                }`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-lg font-medium ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Join us in creating a future where every visually impaired student can{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                unlock their full potential
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-600 text-white'
                }`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`leading-relaxed ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black border-t-2 border-yellow-400' 
          : 'bg-gradient-to-r from-blue-600 to-teal-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-white'
          }`}>
            Ready to Transform Education?
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-blue-100'
          }`}>
            Join thousands of students, educators, and advocates in building a more inclusive future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isHighContrast 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Start Your Journey
            </Link>
            <Link
              to="/about"
              className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                isHighContrast 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-white text-white hover:bg-white hover:text-blue-600'
              }`}
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
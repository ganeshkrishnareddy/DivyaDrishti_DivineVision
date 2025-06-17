import React from 'react';
import { 
  Volume2, 
  Eye, 
  Brain, 
  MessageSquare, 
  Globe, 
  Zap,
  BookOpen,
  Users
} from 'lucide-react';

interface FeaturesProps {
  isHighContrast: boolean;
}

export default function Features({ isHighContrast }: FeaturesProps) {
  const features = [
    {
      icon: Volume2,
      title: 'Text-to-Speech with NLP',
      description: 'Advanced AI converts PDFs, webpages, and e-books into high-quality, human-like audio supporting multiple Indian regional languages.',
      color: isHighContrast ? 'yellow' : 'blue'
    },
    {
      icon: Eye,
      title: 'Image-to-Description',
      description: 'Sophisticated Computer Vision analyzes complex diagrams and charts, generating detailed verbal descriptions for STEM subjects.',
      color: isHighContrast ? 'yellow' : 'teal'
    },
    {
      icon: Brain,
      title: 'Adaptive Learning Pathways',
      description: 'Intelligent algorithms personalize the learning journey, adjusting difficulty and pace based on individual progress.',
      color: isHighContrast ? 'yellow' : 'purple'
    },
    {
      icon: MessageSquare,
      title: 'AI-Powered Assessment',
      description: 'Interactive audio quizzes and verbal responses provide immediate, constructive feedback for continuous improvement.',
      color: isHighContrast ? 'yellow' : 'orange'
    },
    {
      icon: Globe,
      title: 'Real-time Translation',
      description: 'Seamlessly translates content into preferred Indian languages, breaking down linguistic barriers to education.',
      color: isHighContrast ? 'yellow' : 'green'
    },
    {
      icon: Zap,
      title: 'Smart Navigation',
      description: 'Voice-controlled interface enables effortless navigation, reducing reliance on visual cues for complete independence.',
      color: isHighContrast ? 'yellow' : 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    if (isHighContrast) {
      return {
        bg: 'bg-yellow-400',
        text: 'text-black',
        border: 'border-yellow-400'
      };
    }
    
    const colorMap: Record<string, any> = {
      blue: { bg: 'bg-blue-600', text: 'text-white', border: 'border-blue-200' },
      teal: { bg: 'bg-teal-600', text: 'text-white', border: 'border-teal-200' },
      purple: { bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-600', text: 'text-white', border: 'border-orange-200' },
      green: { bg: 'bg-green-600', text: 'text-white', border: 'border-green-200' },
      red: { bg: 'bg-red-600', text: 'text-white', border: 'border-red-200' }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="features" className={`py-20 ${
      isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isHighContrast 
              ? 'bg-yellow-400 text-black' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            <Zap className="h-4 w-4 mr-2" />
            Core Features
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Transforming Education with{' '}
            <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
              AI Innovation
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our comprehensive suite of AI-powered tools creates an inclusive learning environment 
            that adapts to each student's unique needs and learning style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${colorClasses.bg} ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`}>
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
            );
          })}
        </div>

        <div className={`mt-16 p-8 rounded-2xl ${
          isHighContrast 
            ? 'bg-black border-2 border-yellow-400' 
            : 'bg-gradient-to-r from-blue-600 to-teal-600'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isHighContrast ? 'text-white' : 'text-white'
              }`}>
                Universal Content Adaptor
              </h3>
              <p className={`text-lg ${
                isHighContrast ? 'text-gray-300' : 'text-blue-100'
              }`}>
                Transform any digital educational material into accessible, interactive formats 
                specifically tailored for visually impaired users.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`text-center p-4 rounded-lg ${
                isHighContrast ? 'bg-gray-900' : 'bg-white/20'
              }`}>
                <BookOpen className={`h-8 w-8 mx-auto mb-2 ${
                  isHighContrast ? 'text-yellow-400' : 'text-white'
                }`} />
                <div className={`text-sm font-medium ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  Content Types
                </div>
                <div className={`text-xs ${
                  isHighContrast ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  PDFs, Images, Videos
                </div>
              </div>
              
              <div className={`text-center p-4 rounded-lg ${
                isHighContrast ? 'bg-gray-900' : 'bg-white/20'
              }`}>
                <Users className={`h-8 w-8 mx-auto mb-2 ${
                  isHighContrast ? 'text-yellow-400' : 'text-white'
                }`} />
                <div className={`text-sm font-medium ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  Languages
                </div>
                <div className={`text-xs ${
                  isHighContrast ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  23 Indian Languages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
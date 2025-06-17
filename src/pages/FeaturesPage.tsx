import React from 'react';
import { 
  Volume2, 
  Eye, 
  Brain, 
  MessageSquare, 
  Globe, 
  Zap,
  BookOpen,
  Users,
  Mic,
  FileText,
  Headphones,
  Settings
} from 'lucide-react';

interface FeaturesPageProps {
  isHighContrast: boolean;
}

export default function FeaturesPage({ isHighContrast }: FeaturesPageProps) {
  const universalAdaptorFeatures = [
    {
      icon: Volume2,
      title: 'Text-to-Speech (TTS) with NLP',
      description: 'Converts PDFs, webpages, e-books into high-quality, human-like audio, understanding context and supporting multiple Indian regional languages.',
      benefits: ['Natural voice synthesis', '23 Indian languages', 'Context-aware reading', 'Adjustable speed & pitch']
    },
    {
      icon: Eye,
      title: 'Image-to-Description (I2D)',
      description: 'Sophisticated Computer Vision analyzes images, complex diagrams, charts, generating detailed, contextually relevant verbal descriptions.',
      benefits: ['STEM diagram analysis', 'Chart interpretation', 'Photo descriptions', 'Mathematical equation reading']
    },
    {
      icon: FileText,
      title: 'Video-to-Audio Summary',
      description: 'Processes educational videos, providing comprehensive audio descriptions of visual elements and summarizing key concepts.',
      benefits: ['Visual scene description', 'Key concept extraction', 'Lecture summarization', 'Interactive timestamps']
    },
    {
      icon: Globe,
      title: 'Real-time Translation',
      description: 'Seamlessly translates content into student\'s preferred Indian language, breaking down linguistic barriers.',
      benefits: ['Instant translation', 'Cultural context preservation', 'Regional dialect support', 'Technical term accuracy']
    }
  ];

  const adaptiveLearningFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Continuously assesses comprehension through interactive audio quizzes and verbal responses, providing immediate, constructive feedback.',
      benefits: ['Voice-based quizzes', 'Instant feedback', 'Progress tracking', 'Adaptive difficulty']
    },
    {
      icon: Settings,
      title: 'Personalized Curriculum Delivery',
      description: 'Dynamically adjusts learning paths, offering remedial content or introducing advanced topics based on individual progress.',
      benefits: ['Custom learning paths', 'Skill gap identification', 'Remedial content', 'Advanced challenges']
    },
    {
      icon: Users,
      title: 'Gamified Learning Modules',
      description: 'Incorporates interactive audio games and challenges to maintain engagement and motivation.',
      benefits: ['Audio-based games', 'Achievement system', 'Peer competitions', 'Progress rewards']
    }
  ];

  const assistiveTools = [
    {
      icon: Mic,
      title: 'Smart Navigation',
      description: 'Voice-controlled interface allows for effortless navigation, reducing reliance on visual cues.',
      benefits: ['Voice commands', 'Gesture recognition', 'Keyboard shortcuts', 'Screen reader optimization']
    },
    {
      icon: BookOpen,
      title: 'Braille Display Integration',
      description: 'Optional compatibility with external refreshable braille displays for tactile learners.',
      benefits: ['Multiple device support', 'Real-time sync', 'Tactile feedback', 'Portable compatibility']
    },
    {
      icon: Headphones,
      title: 'Audio Note-Taking',
      description: 'Students can take notes using voice commands, which the AI transcribes and organizes.',
      benefits: ['Voice-to-text', 'Smart organization', 'Search functionality', 'Export options']
    }
  ];

  const getColorClasses = (index: number) => {
    const colors = ['blue', 'teal', 'purple', 'orange', 'green', 'red'];
    const color = colors[index % colors.length];
    
    if (isHighContrast) {
      return 'bg-yellow-400 text-black';
    }
    
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-600 text-white',
      teal: 'bg-teal-600 text-white',
      purple: 'bg-purple-600 text-white',
      orange: 'bg-orange-600 text-white',
      green: 'bg-green-600 text-white',
      red: 'bg-red-600 text-white'
    };
    
    return colorMap[color];
  };

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
              <Zap className="h-5 w-5 mr-2" />
              How Divya Drishti Works
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Empowering Learning Through{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Intelligent Design
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Divya Drishti is built on a foundation of advanced AI and user-centric design, 
              offering a comprehensive suite of tools tailored for visually impaired learners.
            </p>
          </div>
        </div>
      </section>

      {/* Universal Content Adaptor */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Universal Content{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Adaptor
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our foundational technology uses advanced AI to transform virtually any digital 
              educational material into an accessible format in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {universalAdaptorFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index)}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-blue-500'
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

      {/* Adaptive Learning Pathways */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Adaptive Learning{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                Pathways
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Intelligent algorithms personalize the learning journey for each student, 
              adapting to individual needs and learning styles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adaptiveLearningFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index + 4)}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
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

      {/* Integrated Assistive Tools */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Integrated{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-teal-600'}>
                Assistive Tools
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Built-in features enhance usability and independence, providing seamless 
              interaction with educational content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {assistiveTools.map((tool, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-teal-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index + 7)}`}>
                  <tool.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {tool.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {tool.description}
                </p>

                <div className="space-y-2">
                  {tool.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-teal-500'
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

      {/* Teacher/Parent Dashboard */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-12 rounded-2xl ${
            isHighContrast 
              ? 'bg-gray-900 border-2 border-yellow-400' 
              : 'bg-gradient-to-r from-green-600 to-blue-600'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isHighContrast ? 'text-white' : 'text-white'
                }`}>
                  Teacher/Parent Dashboard
                </h2>
                <p className={`text-lg mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-green-100'
                }`}>
                  A streamlined dashboard provides essential insights into student progress, 
                  empowering educators to focus on personalized guidance rather than administrative tasks.
                </p>
                <p className={`text-base ${
                  isHighContrast ? 'text-gray-400' : 'text-green-200'
                }`}>
                  This helps bridge the "teacher training" gap by making inclusive education more manageable.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className={`text-center p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    Real-time
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-green-100'
                  }`}>
                    Progress Tracking
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    Automated
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-green-100'
                  }`}>
                    Content Adaptation
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    Personalized
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-green-100'
                  }`}>
                    Learning Insights
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    Simplified
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-green-100'
                  }`}>
                    Interface Design
                  </div>
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
            Experience the Future of Inclusive Education
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of students already benefiting from AI-powered accessible learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              Start Learning Today
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
            }`}>
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
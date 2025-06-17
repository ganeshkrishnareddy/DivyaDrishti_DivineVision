import React from 'react';
import { 
  Users, 
  MessageCircle, 
  BookOpen, 
  Award,
  Heart,
  Lightbulb,
  Calendar,
  Globe
} from 'lucide-react';

interface CommunityProps {
  isHighContrast: boolean;
}

export default function Community({ isHighContrast }: CommunityProps) {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Support Forums',
      description: 'Connect with peers, share experiences, and get help from our community of learners and educators.',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Teacher Training Hub',
      description: 'Comprehensive resources and modules for educators to master inclusive teaching methodologies.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Peer Mentorship',
      description: 'Be paired with experienced students who can guide you through your learning journey.',
      color: 'teal'
    },
    {
      icon: Award,
      title: 'Achievement Recognition',
      description: 'Celebrate milestones and achievements with our community recognition system.',
      color: 'orange'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'AI in Education Webinar',
      participants: '500+ registered'
    },
    {
      date: 'Dec 20',
      title: 'STEM Learning Workshop',
      participants: '200+ registered'
    },
    {
      date: 'Dec 25',
      title: 'Community Celebration',
      participants: '1000+ expected'
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
      orange: 'bg-orange-600 text-white'
    };
    
    return colorMap[color] || 'bg-blue-600 text-white';
  };

  return (
    <section id="community" className={`py-20 ${
      isHighContrast ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isHighContrast 
              ? 'bg-yellow-400 text-black' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            <Heart className="h-4 w-4 mr-2" />
            Community & Support
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Building a{' '}
            <span className={isHighContrast ? 'text-yellow-400' : 'text-orange-600'}>
              Supportive Learning Community
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join a vibrant community of learners, educators, and advocates working together 
            to create an inclusive educational ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isHighContrast 
                  ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className={`text-lg font-bold mb-3 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Community Stats */}
          <div className={`p-8 rounded-2xl ${
            isHighContrast 
              ? 'bg-gray-900 border-2 border-yellow-400' 
              : 'bg-white shadow-xl'
          }`}>
            <div className="flex items-center mb-6">
              <Globe className={`h-8 w-8 mr-3 ${
                isHighContrast ? 'text-yellow-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Global Reach
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                }`}>
                  10K+
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Active Members
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-teal-600'
                }`}>
                  28
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  States Covered
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-purple-600'
                }`}>
                  1000+
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Trained Teachers
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-orange-600'
                }`}>
                  500+
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Schools Connected
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className={`p-8 rounded-2xl ${
            isHighContrast 
              ? 'bg-gray-900 border-2 border-yellow-400' 
              : 'bg-white shadow-xl'
          }`}>
            <div className="flex items-center mb-6">
              <Calendar className={`h-8 w-8 mr-3 ${
                isHighContrast ? 'text-yellow-400' : 'text-purple-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Upcoming Events
              </h3>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    isHighContrast 
                      ? 'bg-black border-yellow-400' 
                      : 'bg-gray-50 border-blue-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className={`font-semibold ${
                        isHighContrast ? 'text-white' : 'text-gray-900'
                      }`}>
                        {event.title}
                      </div>
                      <div className={`text-sm ${
                        isHighContrast ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {event.participants}
                      </div>
                    </div>
                    <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isHighContrast 
                        ? 'bg-yellow-400 text-black' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}>
              View All Events
            </button>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className={`mt-16 p-8 rounded-2xl ${
          isHighContrast 
            ? 'bg-black border-2 border-yellow-400' 
            : 'bg-gradient-to-r from-purple-600 to-blue-600'
        }`}>
          <div className="text-center">
            <Lightbulb className={`h-12 w-12 mx-auto mb-4 ${
              isHighContrast ? 'text-yellow-400' : 'text-white'
            }`} />
            <h3 className={`text-2xl font-bold mb-4 ${
              isHighContrast ? 'text-white' : 'text-white'
            }`}>
              Innovation & Partnership Showcase
            </h3>
            <p className={`text-lg mb-6 ${
              isHighContrast ? 'text-gray-300' : 'text-purple-100'
            }`}>
              Discover the latest assistive technologies and connect with innovators 
              transforming inclusive education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isHighContrast 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-white text-purple-600 hover:bg-gray-100'
              }`}>
                Explore Innovations
              </button>
              <button className={`px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                isHighContrast 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-white text-white hover:bg-white hover:text-purple-600'
              }`}>
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
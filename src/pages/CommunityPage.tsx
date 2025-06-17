import React from 'react';
import { 
  Users, 
  MessageCircle, 
  BookOpen, 
  Award,
  Heart,
  Lightbulb,
  Calendar,
  Globe,
  UserPlus,
  GraduationCap,
  Megaphone,
  Target
} from 'lucide-react';

interface CommunityPageProps {
  isHighContrast: boolean;
}

export default function CommunityPage({ isHighContrast }: CommunityPageProps) {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Support Forums',
      description: 'Connect with peers, share experiences, and get help from our community of learners and educators.',
      members: '5,000+ active members',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Teacher Training Hub',
      description: 'Comprehensive resources and modules for educators to master inclusive teaching methodologies.',
      members: '1,200+ trained teachers',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Peer Mentorship',
      description: 'Be paired with experienced students who can guide you through your learning journey.',
      members: '800+ mentor pairs',
      color: 'teal'
    },
    {
      icon: Award,
      title: 'Achievement Recognition',
      description: 'Celebrate milestones and achievements with our community recognition system.',
      members: '2,500+ achievements',
      color: 'orange'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'AI in Education Webinar',
      participants: '500+ registered',
      type: 'Webinar',
      time: '3:00 PM IST'
    },
    {
      date: 'Dec 20',
      title: 'STEM Learning Workshop',
      participants: '200+ registered',
      type: 'Workshop',
      time: '10:00 AM IST'
    },
    {
      date: 'Dec 25',
      title: 'Community Celebration',
      participants: '1000+ expected',
      type: 'Celebration',
      time: '6:00 PM IST'
    },
    {
      date: 'Jan 5',
      title: 'Teacher Training Bootcamp',
      participants: '150+ registered',
      type: 'Training',
      time: '9:00 AM IST'
    }
  ];

  const trainingModules = [
    {
      title: 'Inclusive Pedagogy Fundamentals',
      description: 'Learn the core principles of teaching visually impaired students effectively.',
      duration: '4 hours',
      level: 'Beginner',
      enrolled: '2,500+'
    },
    {
      title: 'Assistive Technology Integration',
      description: 'Master the use of AI tools and assistive devices in the classroom.',
      duration: '6 hours',
      level: 'Intermediate',
      enrolled: '1,800+'
    },
    {
      title: 'AI Tools for Educators',
      description: 'Harness the power of AI to create accessible content and assessments.',
      duration: '5 hours',
      level: 'Advanced',
      enrolled: '1,200+'
    }
  ];

  const advocacyCampaigns = [
    {
      icon: Megaphone,
      title: 'Rights Awareness Campaign',
      description: 'Promoting understanding of RPWD Act 2016 and disability rights across India.',
      impact: '50,000+ people reached'
    },
    {
      icon: Heart,
      title: 'Inclusive Language Initiative',
      description: 'Combating social stigma through disability-sensitive language education.',
      impact: '25,000+ educators trained'
    },
    {
      icon: Target,
      title: 'Accessibility Standards Drive',
      description: 'Working with institutions to implement universal design principles.',
      impact: '500+ institutions engaged'
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
    <div className={`pt-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-orange-50 via-white to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
              isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-orange-100 text-orange-800'
            }`}>
              <Heart className="h-5 w-5 mr-2" />
              Community & Support Network
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Building a{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-orange-600'}>
                Supportive Learning Community
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A vital component of the platform is our robust community and support network. 
              Dedicated forums, virtual meeting spaces, and social networking features connect 
              visually impaired students, their families, educators, and advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Connect, Learn,{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Grow Together
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-100 text-blue-800'
                }`}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  {feature.members}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Training Section */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Comprehensive Teacher Training &{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                Professional Development
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Empowering educators with the skills and knowledge to create truly inclusive learning environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-purple-50 border-purple-200 hover:border-purple-400'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-purple-600 text-white'
                }`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                
                <h3 className={`text-lg font-bold mb-3 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {module.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {module.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`text-xs ${
                      isHighContrast ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Duration:
                    </span>
                    <span className={`text-xs font-medium ${
                      isHighContrast ? 'text-white' : 'text-gray-900'
                    }`}>
                      {module.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-xs ${
                      isHighContrast ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Level:
                    </span>
                    <span className={`text-xs font-medium ${
                      isHighContrast ? 'text-white' : 'text-gray-900'
                    }`}>
                      {module.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-xs ${
                      isHighContrast ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Enrolled:
                    </span>
                    <span className={`text-xs font-medium ${
                      isHighContrast ? 'text-yellow-400' : 'text-purple-600'
                    }`}>
                      {module.enrolled}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats & Events */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Community Stats */}
            <div className={`p-8 rounded-2xl ${
              isHighContrast 
                ? 'bg-black border-2 border-yellow-400' 
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
                ? 'bg-black border-2 border-yellow-400' 
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
                        ? 'bg-gray-900 border-yellow-400' 
                        : 'bg-gray-50 border-purple-500'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className={`font-semibold ${
                          isHighContrast ? 'text-white' : 'text-gray-900'
                        }`}>
                          {event.title}
                        </div>
                        <div className={`text-sm ${
                          isHighContrast ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {event.participants} • {event.time}
                        </div>
                      </div>
                      <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                        isHighContrast 
                          ? 'bg-yellow-400 text-black' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {event.date}
                      </div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      isHighContrast ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {event.type}
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
        </div>
      </section>

      {/* Advocacy & Awareness */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Advocacy &{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-green-600'}>
                Awareness Campaigns
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Promoting understanding of disability rights and combating social stigma through education and awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advocacyCampaigns.map((campaign, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-green-50 border-green-200 hover:border-green-400'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-green-600 text-white'
                }`}>
                  <campaign.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {campaign.title}
                </h3>
                
                <p className={`leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {campaign.description}
                </p>

                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-800'
                }`}>
                  <Award className="h-4 w-4 mr-2" />
                  {campaign.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-12 rounded-2xl ${
            isHighContrast 
              ? 'bg-black border-2 border-yellow-400' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600'
          }`}>
            <div className="text-center">
              <Lightbulb className={`h-12 w-12 mx-auto mb-4 ${
                isHighContrast ? 'text-yellow-400' : 'text-white'
              }`} />
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                isHighContrast ? 'text-white' : 'text-white'
              }`}>
                Innovation & Partnership Showcase
              </h3>
              <p className={`text-lg mb-6 max-w-3xl mx-auto ${
                isHighContrast ? 'text-gray-300' : 'text-purple-100'
              }`}>
                Discover the latest assistive technologies and connect with innovators 
                transforming inclusive education across India and beyond.
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

      {/* Call to Action */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Join Our Growing Community
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Be part of a supportive network that's transforming education and empowering lives across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}>
              Join Community
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600'
            }`}>
              Become a Mentor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
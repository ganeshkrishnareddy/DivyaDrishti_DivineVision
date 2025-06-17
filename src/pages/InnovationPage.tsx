import React from 'react';
import { 
  Lightbulb, 
  Rocket, 
  Users, 
  Award,
  Handshake,
  Star,
  TrendingUp,
  Globe,
  Zap,
  Eye,
  Brain,
  Smartphone,
  Building,
  Heart
} from 'lucide-react';

interface InnovationPageProps {
  isHighContrast: boolean;
}

export default function InnovationPage({ isHighContrast }: InnovationPageProps) {
  const innovations = [
    {
      icon: Eye,
      title: 'Smart Navigation Glasses',
      company: 'TorchIt Technologies',
      description: 'AI-powered glasses that provide real-time audio descriptions of surroundings and obstacles.',
      category: 'Mobility',
      stage: 'Commercial',
      impact: '5,000+ users'
    },
    {
      icon: Brain,
      title: 'Adaptive Learning AI',
      company: 'Thinker Bells Labs',
      description: 'Machine learning platform that personalizes educational content based on individual learning patterns.',
      category: 'Education',
      stage: 'Beta Testing',
      impact: '2,500+ students'
    },
    {
      icon: Smartphone,
      title: 'Voice-Controlled Learning App',
      company: 'Phoenix Medical Systems',
      description: 'Comprehensive mobile application with voice navigation and AI-powered content adaptation.',
      category: 'Mobile Tech',
      stage: 'Development',
      impact: '1,000+ downloads'
    },
    {
      icon: Zap,
      title: 'Haptic Feedback Device',
      company: 'IIT Delhi ASSISTECH',
      description: 'Tactile device that converts visual information into touch sensations for enhanced learning.',
      category: 'Assistive Hardware',
      stage: 'Research',
      impact: '500+ prototypes'
    }
  ];

  const partnerships = [
    {
      icon: Building,
      title: 'Government Collaboration',
      partner: 'Department of Empowerment of Persons with Disabilities (DEPwD)',
      description: 'Strategic partnership for policy development and nationwide implementation of accessible education initiatives.',
      type: 'Government',
      scope: 'National'
    },
    {
      icon: Users,
      title: 'NGO Alliance',
      partner: 'National Association for the Blind (NAB)',
      description: 'Collaborative content development and community outreach programs across India.',
      type: 'Non-Profit',
      scope: 'Pan-India'
    },
    {
      icon: Award,
      title: 'Corporate Partnership',
      partner: 'Infosys Foundation',
      description: 'Technology development and digital literacy programs for visually impaired students.',
      type: 'Corporate',
      scope: 'Multi-State'
    },
    {
      icon: Globe,
      title: 'International Cooperation',
      partner: 'Perkins School for the Blind',
      description: 'Knowledge exchange and best practices sharing for inclusive education methodologies.',
      type: 'International',
      scope: 'Global'
    }
  ];

  const impactStories = [
    {
      name: 'Arjun Mehta',
      role: 'Software Engineer',
      company: 'Tech Mahindra',
      story: 'Started as a student using assistive technology, now develops AI solutions for accessibility.',
      achievement: 'Led development of voice-controlled IDE',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Kavitha Rao',
      role: 'Research Scientist',
      company: 'Indian Institute of Science',
      story: 'Pioneered research in haptic feedback systems for educational applications.',
      achievement: 'Published 15+ papers on accessible technology',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ravi Kumar',
      role: 'Entrepreneur',
      company: 'AccessTech Innovations',
      story: 'Founded startup creating affordable assistive devices for rural communities.',
      achievement: 'Reached 10,000+ users in rural areas',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const collaborationAreas = [
    {
      icon: Lightbulb,
      title: 'Joint Research Projects',
      description: 'Collaborative research initiatives focusing on AI, accessibility, and inclusive design.',
      opportunities: ['AI model development', 'User experience research', 'Accessibility standards']
    },
    {
      icon: Rocket,
      title: 'Content Development',
      description: 'Creating accessible educational materials and resources for diverse learning needs.',
      opportunities: ['Curriculum design', 'Multimedia content', 'Assessment tools']
    },
    {
      icon: Handshake,
      title: 'Resource Sharing',
      description: 'Sharing expertise, infrastructure, and resources to maximize impact and reach.',
      opportunities: ['Technology platforms', 'Training programs', 'Distribution networks']
    }
  ];

  const getColorClasses = (index: number) => {
    const colors = ['blue', 'purple', 'teal', 'orange', 'green', 'red'];
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
          : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
              isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-indigo-100 text-indigo-800'
            }`}>
              <Rocket className="h-5 w-5 mr-2" />
              Innovation & Partnership Showcase
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Driving Innovation Through{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-indigo-600'}>
                Collaboration
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The platform actively functions as a market catalyst, transforming into a dynamic hub 
              for innovation and partnerships. Discover the latest cutting-edge assistive technologies 
              and EdTech innovations relevant to visually impaired learners.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Innovations */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Latest{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Innovations
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Showcasing cutting-edge assistive technologies and EdTech innovations from leading organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-xl ${getColorClasses(index)}`}>
                    <innovation.icon className="h-8 w-8" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {innovation.stage}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {innovation.title}
                </h3>
                
                <p className={`text-sm font-medium mb-4 ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                }`}>
                  {innovation.company}
                </p>
                
                <p className={`leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {innovation.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    isHighContrast ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {innovation.category}
                  </span>
                  <span className={`text-sm font-medium ${
                    isHighContrast ? 'text-white' : 'text-gray-900'
                  }`}>
                    {innovation.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Facilitating{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                Collaborations
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Strategic partnerships between innovators, educational institutions, government bodies, and NGOs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-l-4 ${
                  isHighContrast 
                    ? 'bg-gray-900 border-yellow-400' 
                    : 'bg-purple-50 border-purple-500'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    isHighContrast ? 'bg-yellow-400 text-black' : 'bg-purple-600 text-white'
                  }`}>
                    <partnership.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-lg font-bold ${
                        isHighContrast ? 'text-white' : 'text-gray-900'
                      }`}>
                        {partnership.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        isHighContrast ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {partnership.scope}
                      </span>
                    </div>
                    <p className={`text-sm font-medium mb-3 ${
                      isHighContrast ? 'text-yellow-400' : 'text-purple-600'
                    }`}>
                      {partnership.partner}
                    </p>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      isHighContrast ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {partnership.description}
                    </p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      isHighContrast ? 'bg-yellow-400 text-black' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {partnership.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Collaboration{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-teal-600'}>
                Opportunities
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationAreas.map((area, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-teal-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(index + 2)}`}>
                  <area.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {area.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {area.description}
                </p>

                <div className="space-y-2">
                  <h4 className={`text-sm font-semibold mb-3 ${
                    isHighContrast ? 'text-yellow-400' : 'text-teal-600'
                  }`}>
                    Opportunities:
                  </h4>
                  {area.opportunities.map((opportunity, oppIndex) => (
                    <div key={oppIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-teal-500'
                      }`}></div>
                      <span className={`text-sm ${
                        isHighContrast ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {opportunity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Showcasing{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-green-600'}>
                Impact Stories
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real-life stories of visually impaired individuals who have significantly benefited 
              from inclusive education and assistive technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-green-50 border-green-200 hover:border-green-400'
                }`}
              >
                <div className="text-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className={`text-lg font-bold ${
                    isHighContrast ? 'text-white' : 'text-gray-900'
                  }`}>
                    {story.name}
                  </h3>
                  <p className={`text-sm ${
                    isHighContrast ? 'text-yellow-400' : 'text-green-600'
                  }`}>
                    {story.role}
                  </p>
                  <p className={`text-xs ${
                    isHighContrast ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {story.company}
                  </p>
                </div>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {story.story}
                </p>

                <div className={`p-3 rounded-lg ${
                  isHighContrast ? 'bg-black border border-yellow-400' : 'bg-white border border-green-300'
                }`}>
                  <div className="flex items-center">
                    <Star className={`h-4 w-4 mr-2 ${
                      isHighContrast ? 'text-yellow-400' : 'text-green-600'
                    }`} />
                    <span className={`text-xs font-medium ${
                      isHighContrast ? 'text-white' : 'text-gray-900'
                    }`}>
                      {story.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black border-t-2 border-yellow-400' 
          : 'bg-gradient-to-r from-indigo-600 to-purple-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className={`h-12 w-12 mx-auto mb-6 ${
            isHighContrast ? 'text-yellow-400' : 'text-white'
          }`} />
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-white'
          }`}>
            Partner With Us to Drive Innovation
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-indigo-100'
          }`}>
            Join our ecosystem of innovators, educators, and advocates working together 
            to create breakthrough solutions for inclusive education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-white text-indigo-600 hover:bg-gray-100'
            }`}>
              Become a Partner
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-white text-white hover:bg-white hover:text-indigo-600'
            }`}>
              Submit Innovation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Globe, 
  Heart,
  BookOpen,
  Briefcase,
  Target,
  Star,
  Quote,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface ImpactPageProps {
  isHighContrast: boolean;
}

export default function ImpactPage({ isHighContrast }: ImpactPageProps) {
  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Enhanced Educational Access',
      description: 'Breaking down barriers to quality education through AI-powered content transformation and personalized learning experiences.',
      stats: '10,000+ students reached',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Fostering Independence',
      description: 'Empowering students with tools and skills that promote self-reliance and confidence in their educational journey.',
      stats: '95% improvement in self-confidence',
      color: 'teal'
    },
    {
      icon: Briefcase,
      title: 'Economic Empowerment',
      description: 'Preparing students for meaningful careers and economic participation in India\'s growing digital economy.',
      stats: '78% employment rate among graduates',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Scalability & Reach',
      description: 'Creating solutions that can serve millions of students across India\'s diverse linguistic and geographic landscape.',
      stats: '28 states covered',
      color: 'orange'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Computer Science Student, Delhi University',
      location: 'New Delhi',
      content: 'Divya Drishti transformed my STEM education completely. The AI-powered image descriptions made complex programming diagrams and flowcharts accessible for the first time. I can now pursue my dream of becoming a software engineer.',
      achievement: 'Pursuing B.Tech Computer Science',
      rating: 5,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Mathematics Teacher',
      location: 'Mumbai, Maharashtra',
      content: 'This platform revolutionized my teaching approach. The adaptive learning pathways help me personalize education for each of my visually impaired students. The teacher dashboard makes tracking progress so much easier.',
      achievement: 'Inclusive Education Pioneer Award 2024',
      rating: 5,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Anjali Patel',
      role: 'High School Student',
      location: 'Ahmedabad, Gujarat',
      content: 'The multilingual support in Gujarati and Hindi made learning so much easier. I can now access content in my preferred language seamlessly. The voice navigation is incredibly intuitive and fast.',
      achievement: 'State Academic Excellence Award',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Meera Nair',
      role: 'Special Education Coordinator',
      location: 'Kochi, Kerala',
      content: 'As an educator working with visually impaired students for over 15 years, I\'ve never seen technology this transformative. The platform doesn\'t just provide access—it creates genuine engagement and excitement for learning.',
      achievement: 'National Special Education Excellence Award',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nationalGoals = [
    {
      icon: Target,
      title: 'Digital India Initiative',
      description: 'Supporting India\'s vision of digital empowerment and inclusive technology access.',
      alignment: 'Directly contributes to making digital services accessible to all citizens'
    },
    {
      icon: BookOpen,
      title: 'National Education Policy 2020',
      description: 'Advancing inclusive education and technology integration in learning.',
      alignment: 'Implements AI-powered personalized learning as envisioned in NEP 2020'
    },
    {
      icon: Users,
      title: 'Skill India Mission',
      description: 'Developing skilled workforce through accessible vocational training.',
      alignment: 'Prepares visually impaired students for employment in digital economy'
    },
    {
      icon: Heart,
      title: 'Accessible India Campaign',
      description: 'Creating barrier-free environments for persons with disabilities.',
      alignment: 'Eliminates digital barriers in education and promotes universal access'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Empowered', icon: Users, change: '+150% this year' },
    { number: '500+', label: 'Schools Connected', icon: BookOpen, change: '+200% growth' },
    { number: '1,000+', label: 'Teachers Trained', icon: Award, change: '+180% increase' },
    { number: '28', label: 'States Reached', icon: Globe, change: 'All major states' },
    { number: '95%', label: 'Student Satisfaction', icon: Star, change: 'Consistently high' },
    { number: '78%', label: 'Employment Rate', icon: Briefcase, change: '+45% above average' }
  ];

  const getColorClasses = (color: string) => {
    if (isHighContrast) {
      return 'bg-yellow-400 text-black';
    }
    
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-600 text-white',
      teal: 'bg-teal-600 text-white',
      purple: 'bg-purple-600 text-white',
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
          : 'bg-gradient-to-br from-green-50 via-white to-blue-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
              isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-green-100 text-green-800'
            }`}>
              <Award className="h-5 w-5 mr-2" />
              Why Divya Drishti Matters
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Creating a More{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-green-600'}>
                Equitable and Empowered Future
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Divya Drishti is more than just a technological solution; it's a catalyst for profound social change, 
              transforming lives and building a more inclusive society.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Measurable{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                Impact
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-100 text-blue-600'
                }`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                
                <div className={`text-3xl font-bold mb-2 ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                }`}>
                  {stat.number}
                </div>
                
                <div className={`text-lg font-medium mb-2 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.label}
                </div>
                
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Transforming Lives Through{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-green-600'}>
                Four Key Areas
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-gray-900 border-gray-700 hover:border-yellow-400' 
                    : 'bg-gray-50 border-gray-200 hover:border-green-300'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(area.color)}`}>
                  <area.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {area.title}
                </h3>
                
                <p className={`leading-relaxed mb-4 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {area.description}
                </p>

                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                  isHighContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-800'
                }`}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {area.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Real Stories,{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                Real Impact
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Hear from students, educators, and families whose lives have been transformed 
              by accessible, AI-powered education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isHighContrast 
                    ? 'bg-black border-gray-700 hover:border-yellow-400' 
                    : 'bg-white border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-bold ${
                        isHighContrast ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`h-4 w-4 ${
                              isHighContrast ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className={`text-sm ${
                      isHighContrast ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <Quote className={`h-8 w-8 mb-4 ${
                  isHighContrast ? 'text-yellow-400' : 'text-purple-600'
                }`} />
                
                <blockquote className={`text-lg leading-relaxed mb-6 ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </blockquote>
                
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  <Award className="h-3 w-3 mr-1" />
                  {testimonial.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alignment with National Goals */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Alignment with{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-orange-600'}>
                National Goals
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Divya Drishti directly supports India's vision for inclusive development and digital empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nationalGoals.map((goal, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-l-4 ${
                  isHighContrast 
                    ? 'bg-gray-900 border-yellow-400' 
                    : 'bg-orange-50 border-orange-500'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    isHighContrast ? 'bg-yellow-400 text-black' : 'bg-orange-600 text-white'
                  }`}>
                    <goal.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 ${
                      isHighContrast ? 'text-white' : 'text-gray-900'
                    }`}>
                      {goal.title}
                    </h3>
                    <p className={`mb-4 ${
                      isHighContrast ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {goal.description}
                    </p>
                    <div className={`flex items-start space-x-2 ${
                      isHighContrast ? 'text-yellow-400' : 'text-orange-600'
                    }`}>
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        {goal.alignment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black border-t-2 border-yellow-400' 
          : 'bg-gradient-to-r from-green-600 to-blue-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-white'
          }`}>
            Be Part of This Transformation
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-green-100'
          }`}>
            Join thousands of students, educators, and advocates in building a more inclusive future for education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-white text-green-600 hover:bg-gray-100'
            }`}>
              <span className="flex items-center">
                Start Your Impact Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-white text-white hover:bg-white hover:text-green-600'
            }`}>
              Share Our Mission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
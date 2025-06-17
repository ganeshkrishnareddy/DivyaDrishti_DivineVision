import React from 'react';
import { Quote, Star, Award, TrendingUp } from 'lucide-react';

interface ImpactProps {
  isHighContrast: boolean;
}

export default function Impact({ isHighContrast }: ImpactProps) {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student, Delhi University',
      content: 'Divya Drishti transformed my STEM education. The AI-powered image descriptions made complex chemistry diagrams accessible for the first time.',
      rating: 5,
      achievement: 'Pursuing B.Sc. Chemistry'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Mathematics Teacher',
      content: 'This platform revolutionized my teaching approach. The adaptive learning pathways help me personalize education for each of my visually impaired students.',
      rating: 5,
      achievement: 'Inclusive Education Pioneer'
    },
    {
      name: 'Anjali Patel',
      role: 'Student, Mumbai',
      content: 'The multilingual support in Gujarati and Hindi made learning so much easier. I can now access content in my preferred language seamlessly.',
      rating: 5,
      achievement: 'Academic Excellence Award'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students Empowered', icon: TrendingUp },
    { number: '23', label: 'Languages Supported', icon: Award },
    { number: '95%', label: 'Success Rate', icon: Star },
    { number: '500+', label: 'Schools Connected', icon: Award }
  ];

  return (
    <section id="impact" className={`py-20 ${
      isHighContrast ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isHighContrast 
              ? 'bg-yellow-400 text-black' 
              : 'bg-green-100 text-green-800'
          }`}>
            <Award className="h-4 w-4 mr-2" />
            Real Impact Stories
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Transforming Lives Through{' '}
            <span className={isHighContrast ? 'text-yellow-400' : 'text-green-600'}>
              Inclusive Education
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Hear from students, educators, and families whose lives have been transformed 
            by accessible, AI-powered education.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isHighContrast 
                  ? 'bg-black border-2 border-yellow-400' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`inline-flex p-3 rounded-full mb-4 ${
                isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-100 text-blue-600'
              }`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`text-3xl font-bold mb-2 ${
                isHighContrast ? 'text-yellow-400' : 'text-gray-900'
              }`}>
                {stat.number}
              </div>
              <div className={`text-sm font-medium ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isHighContrast 
                  ? 'bg-black border-2 border-gray-700 hover:border-yellow-400' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-center mb-6">
                <Quote className={`h-8 w-8 ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                }`} />
                <div className="flex ml-auto">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-5 w-5 ${
                        isHighContrast ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className={`text-lg leading-relaxed mb-6 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-6">
                <div className={`font-semibold ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonial.name}
                </div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonial.role}
                </div>
                <div className={`mt-2 inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {testimonial.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          isHighContrast 
            ? 'bg-black border-2 border-yellow-400' 
            : 'bg-gradient-to-r from-blue-600 to-teal-600'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            isHighContrast ? 'text-white' : 'text-white'
          }`}>
            Join Thousands of Students Already Learning
          </h3>
          <p className={`text-lg mb-6 ${
            isHighContrast ? 'text-gray-300' : 'text-blue-100'
          }`}>
            Experience the future of inclusive education powered by AI
          </p>
          <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            isHighContrast 
              ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
              : 'bg-white text-blue-600 hover:bg-gray-100'
          }`}>
            Start Your Learning Journey
          </button>
        </div>
      </div>
    </section>
  );
}
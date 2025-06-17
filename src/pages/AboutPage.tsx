import React from 'react';
import { Heart, Target, Users, Globe, Award, BookOpen } from 'lucide-react';

interface AboutPageProps {
  isHighContrast: boolean;
}

export default function AboutPage({ isHighContrast }: AboutPageProps) {
  const missionPoints = [
    {
      icon: Target,
      title: 'Enhanced Educational Access',
      description: 'Breaking down barriers to quality education through AI-powered content transformation and personalized learning experiences.'
    },
    {
      icon: Users,
      title: 'Fostering Independence',
      description: 'Empowering students with tools and skills that promote self-reliance and confidence in their educational journey.'
    },
    {
      icon: Globe,
      title: 'Economic Empowerment',
      description: 'Preparing students for meaningful careers and economic participation in India\'s growing digital economy.'
    },
    {
      icon: Award,
      title: 'Scalability & Reach',
      description: 'Creating solutions that can serve millions of students across India\'s diverse linguistic and geographic landscape.'
    }
  ];

  const challenges = [
    {
      title: 'High Cost of Assistive Technologies',
      description: 'Traditional assistive devices are often prohibitively expensive, limiting access for many families.',
      impact: '68% of visually impaired students lack access to proper assistive technology'
    },
    {
      title: 'Limited Availability of Accessible Content',
      description: 'Shortage of educational materials in Braille, audio formats, and tactile diagrams.',
      impact: 'Only 5% of published content is available in accessible formats'
    },
    {
      title: 'Digital Divide',
      description: 'Unreliable internet connectivity and limited access to digital devices, especially in rural areas.',
      impact: '40% of rural students lack consistent internet access'
    },
    {
      title: 'Teacher Training Gap',
      description: 'Insufficient training for educators in inclusive teaching methods and assistive technology.',
      impact: '75% of teachers report lack of confidence in teaching visually impaired students'
    }
  ];

  return (
    <div className={`pt-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${
        isHighContrast 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
              isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-purple-100 text-purple-800'
            }`}>
              <Heart className="h-5 w-5 mr-2" />
              Our Mission
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Our Vision:{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-purple-600'}>
                Equitable Education for All
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Divya Drishti was born from a deep understanding of the challenges faced by Persons with Disabilities (PwDs) 
              in India's education system. Despite progressive policies, practical barriers like high costs, limited access 
              to assistive technologies, and a lack of trained professionals persist.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-12 rounded-2xl text-center ${
            isHighContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white shadow-xl'
          }`}>
            <BookOpen className={`h-16 w-16 mx-auto mb-6 ${
              isHighContrast ? 'text-yellow-400' : 'text-purple-600'
            }`} />
            <h2 className={`text-3xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Our Mission
            </h2>
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our mission is to bridge this accessibility gap by leveraging cutting-edge Artificial Intelligence 
              to deliver personalized, affordable, and scalable learning solutions. We believe that by empowering 
              visually impaired students with the right tools, we can foster independence, enhance educational outcomes, 
              and contribute to a more inclusive and skilled workforce for India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              How We're Making{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                a Difference
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
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
                  <point.icon className="h-8 w-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {point.title}
                </h3>
                
                <p className={`leading-relaxed ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges We Address */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Challenges We{' '}
              <span className={isHighContrast ? 'text-yellow-400' : 'text-red-600'}>
                Address
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Understanding the barriers that visually impaired students face is crucial to developing effective solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-l-4 ${
                  isHighContrast 
                    ? 'bg-black border-yellow-400' 
                    : 'bg-white border-red-500 shadow-lg'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  isHighContrast ? 'text-white' : 'text-gray-900'
                }`}>
                  {challenge.title}
                </h3>
                
                <p className={`mb-4 leading-relaxed ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {challenge.description}
                </p>

                <div className={`p-3 rounded-lg ${
                  isHighContrast ? 'bg-gray-800' : 'bg-red-50'
                }`}>
                  <p className={`text-sm font-medium ${
                    isHighContrast ? 'text-yellow-400' : 'text-red-800'
                  }`}>
                    Impact: {challenge.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={`py-20 ${
        isHighContrast ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-12 rounded-2xl ${
            isHighContrast 
              ? 'bg-gray-900 border-2 border-yellow-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          }`}>
            <div className="text-center">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-white'
              }`}>
                Our Approach: Technology for Inclusion
              </h2>
              <p className={`text-xl mb-8 max-w-4xl mx-auto ${
                isHighContrast ? 'text-gray-300' : 'text-blue-100'
              }`}>
                We leverage cutting-edge AI, machine learning, and assistive technologies to create a comprehensive 
                platform that transforms how visually impaired students access and interact with educational content. 
                Our solution is designed to be affordable, scalable, and culturally relevant to India's diverse population.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className={`p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    AI-Powered
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-blue-100'
                  }`}>
                    Content Transformation
                  </div>
                </div>
                
                <div className={`p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    Personalized
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-blue-100'
                  }`}>
                    Learning Pathways
                  </div>
                </div>
                
                <div className={`p-6 rounded-xl ${
                  isHighContrast ? 'bg-black' : 'bg-white/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    isHighContrast ? 'text-yellow-400' : 'text-white'
                  }`}>
                    Community
                  </div>
                  <div className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-blue-100'
                  }`}>
                    Support Network
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
            Join Our Mission
          </h2>
          <p className={`text-xl mb-8 ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Together, we can create a more inclusive educational landscape where every student has the opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              Get Involved
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
              isHighContrast 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
            }`}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
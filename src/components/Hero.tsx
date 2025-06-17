import React from 'react';
import { ArrowRight, Play, BookOpen, Users } from 'lucide-react';

interface HeroProps {
  isHighContrast: boolean;
}

export default function Hero({ isHighContrast }: HeroProps) {
  return (
    <section className={`pt-20 pb-16 ${
      isHighContrast 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                isHighContrast 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                <BookOpen className="h-4 w-4 mr-2" />
                Empowering Education Through AI
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
                  Divya Drishti
                </span>
                <br />
                Divine Vision for Learning
              </h1>
              
              <p className={`text-xl leading-relaxed max-w-2xl ${
                isHighContrast ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Revolutionizing education for visually impaired students across India through 
                AI-powered content transformation, adaptive learning, and inclusive technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isHighContrast 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                <span className="flex items-center">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className={`group px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                isHighContrast 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              }`}>
                <span className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                }`}>10K+</div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>Active Students</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-teal-600'
                }`}>23</div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>Indian Languages</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isHighContrast ? 'text-yellow-400' : 'text-orange-600'
                }`}>95%</div>
                <div className={`text-sm ${
                  isHighContrast ? 'text-gray-300' : 'text-gray-600'
                }`}>Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`relative rounded-2xl p-8 ${
              isHighContrast 
                ? 'bg-gray-900 border-2 border-yellow-400' 
                : 'bg-white shadow-2xl'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    isHighContrast ? 'bg-yellow-400' : 'bg-green-500'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    isHighContrast ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    AI Processing Active
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${
                    isHighContrast ? 'bg-gray-800' : 'bg-blue-50'
                  }`}>
                    <div className={`text-sm font-medium mb-2 ${
                      isHighContrast ? 'text-yellow-400' : 'text-blue-800'
                    }`}>
                      Text-to-Speech Conversion
                    </div>
                    <div className={`h-2 rounded-full ${
                      isHighContrast ? 'bg-gray-700' : 'bg-blue-200'
                    }`}>
                      <div className={`h-full w-4/5 rounded-full transition-all duration-1000 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-blue-600'
                      }`}></div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    isHighContrast ? 'bg-gray-800' : 'bg-teal-50'
                  }`}>
                    <div className={`text-sm font-medium mb-2 ${
                      isHighContrast ? 'text-yellow-400' : 'text-teal-800'
                    }`}>
                      Image Description Generation
                    </div>
                    <div className={`h-2 rounded-full ${
                      isHighContrast ? 'bg-gray-700' : 'bg-teal-200'
                    }`}>
                      <div className={`h-full w-3/5 rounded-full transition-all duration-1000 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-teal-600'
                      }`}></div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    isHighContrast ? 'bg-gray-800' : 'bg-orange-50'
                  }`}>
                    <div className={`text-sm font-medium mb-2 ${
                      isHighContrast ? 'text-yellow-400' : 'text-orange-800'
                    }`}>
                      Adaptive Learning Path
                    </div>
                    <div className={`h-2 rounded-full ${
                      isHighContrast ? 'bg-gray-700' : 'bg-orange-200'
                    }`}>
                      <div className={`h-full w-5/6 rounded-full transition-all duration-1000 ${
                        isHighContrast ? 'bg-yellow-400' : 'bg-orange-600'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className={`absolute -top-4 -right-4 p-3 rounded-full ${
              isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-600 text-white'
            } shadow-lg`}>
              <Users className="h-6 w-6" />
            </div>
            
            <div className={`absolute -bottom-4 -left-4 p-3 rounded-full ${
              isHighContrast ? 'bg-yellow-400 text-black' : 'bg-teal-600 text-white'
            } shadow-lg`}>
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
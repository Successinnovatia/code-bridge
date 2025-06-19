import React from 'react';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Your Journey to
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block mt-2">
              Tech Starts Here
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join an inclusive community where complete beginners become confident software engineers. 
            No matter your age or background, we'll guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/community" className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-50 transition-colors font-semibold text-base sm:text-lg">
              Explore Community
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-purple-100">
              <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Supportive Community</h3>
              <p className="text-sm sm:text-base text-gray-600">Connect with mentors and peers who understand your journey</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-blue-100">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Structured Learning</h3>
              <p className="text-sm sm:text-base text-gray-600">Follow proven paths designed for complete beginners</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-indigo-100 sm:col-span-2 lg:col-span-1">
              <div className="bg-indigo-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Real Success</h3>
              <p className="text-sm sm:text-base text-gray-600">Build actual projects and land your first tech job</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
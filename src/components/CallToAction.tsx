import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const benefits = [
    'Complete beginner-friendly curriculum',
    'Personal mentor assignment',
    'Active study group placement',
    'Real project portfolio building',
    'Job search support & guidance',
    '24/7 community access'
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Change Your Life?
        </h2>
        
        <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 leading-relaxed px-4">
          Join thousands of successful career changers who started exactly where you are now. 
          Your journey to tech begins with a single step.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">What You Get (100% Free to Start)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white">
                <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center px-4">
          <Link to="/signup" className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-bold text-base sm:text-lg flex items-center justify-center group">
            Start Your Free Journey
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/mentorship" className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-200 font-bold text-base sm:text-lg">
            Book a Call with Mentor
          </Link>
        </div>

        <p className="text-purple-200 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
          No credit card required • Cancel anytime • Join thousands of successful learners
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
import React from 'react';
import { CheckCircle, ArrowRight, Users, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  const nextSteps = [
    {
      icon: BookOpen,
      title: 'Explore Learning Paths',
      description: 'Choose your first learning path and start building your skills',
      action: 'Browse Paths',
      link: '/learning-paths',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Join the Community',
      description: 'Connect with fellow learners and mentors in our Discord',
      action: 'Join Discord',
      link: '/community',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Find a Mentor',
      description: 'Get paired with an experienced mentor for guidance',
      action: 'Find Mentor',
      link: '/mentorship',
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
            <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Welcome to CodeBridge! 🎉
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Congratulations on taking the first step toward your tech career! 
            We're excited to be part of your journey from beginner to confident developer.
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-green-100 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">
                  Check your email for a welcome message with getting started tips
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">
                  Explore our learning paths and choose one that excites you
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">
                  Join our supportive community and introduce yourself
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">
                  Start your first lesson and begin your transformation
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Ready to Get Started?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <Link
                    to={step.link}
                    className="inline-flex items-center bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors group-hover:translate-x-1 transition-transform text-sm sm:text-base"
                  >
                    {step.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Remember: Every Expert Was Once a Beginner
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              You're joining thousands of people who started exactly where you are now. 
              Take it one step at a time, be patient with yourself, and celebrate every small win. 
              We're here to support you every step of the way!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/learning-paths"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center group"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/"
                className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-50 transition-colors font-semibold text-base sm:text-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
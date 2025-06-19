import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BookOpen, Award } from 'lucide-react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    learningPath: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redirect to success page
    navigate('/success');
  };

  const benefits = [
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description: 'Follow proven paths designed for complete beginners'
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Connect with mentors and fellow learners'
    },
    {
      icon: Award,
      title: 'Real Projects',
      description: 'Build a portfolio that gets you hired'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Start Your
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                Tech Journey Today
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Join thousands of successful career changers who started exactly where you are now. 
              Your future in tech begins with this simple step.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-4 shadow-sm flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-100">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm sm:text-base font-medium text-gray-900">100% Free to Start</span>
              </div>
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm sm:text-base font-medium text-gray-900">No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm sm:text-base font-medium text-gray-900">Cancel Anytime</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Join CodeBridge
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Start your free learning journey today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="learningPath" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Learning Path
                  </label>
                  <select
                    id="learningPath"
                    name="learningPath"
                    value={formData.learningPath}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a path (optional)</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Programming Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select your level (optional)</option>
                    <option value="none">Complete beginner</option>
                    <option value="some">Some experience</option>
                    <option value="intermediate">Intermediate</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Creating Your Account...'
                  ) : (
                    <>
                      Start Learning for Free
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs sm:text-sm text-gray-500 text-center mt-4 sm:mt-6">
                By signing up, you agree to our Terms of Service and Privacy Policy. 
                We'll never spam you or share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
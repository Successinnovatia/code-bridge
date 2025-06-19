import React from 'react';
import { MessageSquare, Users, Calendar, Heart, ArrowRight, Star, Coffee, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
  const communityFeatures = [
    {
      icon: MessageSquare,
      title: 'Discord Community',
      description: 'Join our active Discord server with 15,000+ members. Get help, share progress, and make friends.',
      action: 'Join Discord',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join small study groups based on your learning path and schedule. Learn together, stay motivated.',
      action: 'Find Study Group',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Weekly Events',
      description: 'Attend coding workshops, career talks, and social events. All beginner-friendly and welcoming.',
      action: 'View Events',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Coffee,
      title: 'Virtual Coffee Chats',
      description: 'Casual conversations with fellow learners and mentors. Perfect for networking and making friends.',
      action: 'Schedule Chat',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Web Development Student',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'I was terrified to ask questions at first, but this community is so welcoming. Everyone celebrates your wins, no matter how small.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Career Changer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'My study group became my accountability partners and closest friends. We motivated each other through the tough days.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'New Developer',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'The mentors here don\'t just teach code - they teach you how to think like a developer and believe in yourself.',
      rating: 5
    }
  ];

  const reasons = [
    {
      icon: Heart,
      title: 'You\'re Never Alone',
      description: 'Struggling with a concept? Feeling overwhelmed? Our community is here 24/7 to support you.'
    },
    {
      icon: Lightbulb,
      title: 'Learn from Others',
      description: 'See how others solve problems, share your own solutions, and learn different approaches.'
    },
    {
      icon: Star,
      title: 'Celebrate Together',
      description: 'Every milestone matters. Share your wins and celebrate others\' achievements in a positive environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join Our Learning Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Connect with thousands of learners, mentors, and career changers who understand your journey. 
            Get support, make friends, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {feature.description}
                </p>
               
              </div>
            );
          })}
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Why Join Our Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-purple-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Connect?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of supportive learners who are on the same journey as you. 
              Your coding community is waiting!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center group">
                Join For Free
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              Free to join • No spam • Supportive environment guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
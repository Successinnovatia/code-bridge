import React from 'react';
import { Users, BookOpen, Trophy, Briefcase, MessageCircle, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Personalized Learning Paths',
      description: 'Choose from web development, mobile apps, data science, or cybersecurity. Each path is designed for complete beginners.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Get paired with experienced developers who provide guidance, code reviews, and career advice.',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'Study Groups',
      description: 'Join small groups of learners at your level. Learn together, solve problems, and build lasting friendships.',
      color: 'green'
    },
    {
      icon: Trophy,
      title: 'Gamified Progress',
      description: 'Earn badges, maintain streaks, and celebrate milestones. Learning becomes fun and addictive.',
      color: 'orange'
    },
    {
      icon: Briefcase,
      title: 'Real-World Projects',
      description: 'Build actual applications that make a difference. Create a portfolio that employers will notice.',
      color: 'indigo'
    },
    {
      icon: Star,
      title: 'Career Support',
      description: 'Resume reviews, interview prep, and job search assistance. We help you land your first tech role.',
      color: 'pink'
    }
  ];

  const colorClasses = {
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    pink: 'bg-pink-100 text-pink-600'
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Our comprehensive platform provides all the tools, support, and community you need to transition into tech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200 group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
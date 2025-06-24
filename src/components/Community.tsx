import React from 'react';
import { Users, MessageSquare, Calendar, Trophy } from 'lucide-react';

const Community = () => {
  const stats = [
    { label: 'Active Members', value: '15,000+', icon: Users },
    { label: 'Study Groups', value: '500+', icon: MessageSquare },
    { label: 'Events Monthly', value: '50+', icon: Calendar },
    { label: 'Success Stories', value: '2,000+', icon: Trophy }
  ];

  const testimonials = [
    {
      name: 'Sarah Aigbe',
      role: 'Former Teacher → Software Engineer',
      image: 'https://img.freepik.com/free-photo/smiley-businesswoman-working-laptop_23-2148816808.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740',
      quote: 'At 45, I thought it was too late to change careers. CodeBridge proved me wrong. The mentorship and community support were incredible.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Retail Manager → Full Stack Developer',
      image: 'https://img.freepik.com/premium-photo/portrait-man-sunglasses_1048944-1828780.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740',
      quote: 'Starting with zero coding experience was scary, but my study group became like family. We all got jobs within 8 months!'
    },
    {
      name: 'Anna Peters',
      role: 'Stay-at-home Mom → Mobile Developer',
      image: 'https://img.freepik.com/free-photo/woman-with-laptop-home_1157-45677.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740',
      quote: 'The flexible learning schedule let me study while caring for my kids. My mentor helped me build confidence I never knew I had.'
    }
  ];

  return (
    <section id="community" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join a Thriving Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            You're never alone on your journey. Connect with thousands of learners and mentors who celebrate every milestone with you.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200">
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
              <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
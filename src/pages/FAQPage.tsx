import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, DollarSign, Users, BookOpen, Award, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Learning & Support',
      icon: Users,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Pricing & Access',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Career & Jobs',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'Do I need any prior programming experience?',
      answer: 'Absolutely not! CodeBridge is designed specifically for complete beginners. We start from the very basics and assume no prior knowledge. Our courses begin with fundamental concepts like "What is programming?" and gradually build your skills step by step.'
    },
    {
      category: 'Getting Started',
      question: 'What equipment or software do I need?',
      answer: 'All you need is a computer (Windows, Mac, or Linux) and an internet connection. We\'ll guide you through installing any necessary software, and most of our initial lessons work directly in your web browser. We provide detailed setup guides for everything you need.'
    },
    {
      category: 'Getting Started',
      question: 'How do I choose the right learning path?',
      answer: 'We offer a quick assessment quiz to help you discover which path aligns with your interests and goals. You can also explore each path\'s overview, talk to mentors, or join our community discussions. Remember, you can always switch paths as you learn more about what excites you!'
    },
    {
      category: 'Learning & Support',
      question: 'Can I really learn at my own pace?',
      answer: 'Yes! Our platform is designed for flexible, self-paced learning. Whether you can dedicate 30 minutes a day or several hours on weekends, you can progress through the material at a speed that works for your schedule and learning style.'
    },
    {
      category: 'Learning & Support',
      question: 'What if I get stuck or need help?',
      answer: 'You\'re never alone! We have multiple support systems: active Discord community, study groups, one-on-one mentorship, office hours with instructors, and comprehensive help documentation. Our community is known for being incredibly supportive and welcoming to beginners.'
    },
    {
      category: 'Learning & Support',
      question: 'How long does it typically take to complete a learning path?',
      answer: 'Most students complete a learning path in 4-9 months, depending on the path and time commitment. However, everyone learns differently. Some finish faster, others take longer - both are perfectly fine! The important thing is consistent progress, not speed.'
    },
    {
      category: 'Pricing & Access',
      question: 'Is CodeBridge really free?',
      answer: 'Yes! All our core learning content, community access, basic mentorship, and essential tools are completely free. We believe everyone should have access to quality tech education regardless of their financial situation. We do offer premium features for those who want additional support.'
    },
    {
      category: 'Pricing & Access',
      question: 'Are there any hidden costs or fees?',
      answer: 'No hidden costs! Our free tier includes everything you need to learn programming and start your tech career. We\'re transparent about what\'s free and what\'s premium. You can succeed completely with our free offerings.'
    },
    {
      category: 'Pricing & Access',
      question: 'Can I access the content on mobile devices?',
      answer: 'Yes! Our platform works on all devices - desktop, tablet, and mobile. While we recommend using a computer for coding exercises, you can read lessons, watch videos, and participate in community discussions from anywhere.'
    },
    {
      category: 'Career & Jobs',
      question: 'Will I be job-ready after completing a learning path?',
      answer: 'Our learning paths are designed to make you job-ready for entry-level positions. You\'ll build real projects, learn industry-standard tools, and develop both technical and soft skills. We also provide career support including resume reviews, interview prep, and job search guidance.'
    },
    {
      category: 'Career & Jobs',
      question: 'Do you help with job placement?',
      answer: 'While we don\'t guarantee job placement, we provide extensive career support: portfolio reviews, resume assistance, interview preparation, networking opportunities, and connections to hiring partners. Many of our graduates have successfully transitioned to tech careers.'
    },
    {
      category: 'Career & Jobs',
      question: 'What kinds of jobs can I get after completing the program?',
      answer: 'Depending on your learning path, you could pursue roles like: Web Developer, Frontend Developer, Backend Developer, Full Stack Developer, Mobile App Developer, Data Analyst, Junior Data Scientist, Cybersecurity Analyst, and many more entry-level tech positions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about starting your journey with CodeBridge. 
            Can't find what you're looking for? Reach out to our community!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {faqCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="text-xs sm:text-sm text-purple-600 font-medium mb-1">
                    {faq.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100 text-center">
            <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our friendly community and support team are here to help! Join our Discord, 
              schedule a call with a mentor, or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg">
                Join Our Community
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-50 transition-colors font-semibold text-base sm:text-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
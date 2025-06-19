import React, { useState } from 'react';
import { Users, Calendar, MessageCircle, Star, ArrowRight, Clock, CheckCircle, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorshipPage = () => {
  const [selectedMentorType, setSelectedMentorType] = useState('career-changer');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mentorTypes = [
    {
      id: 'career-changer',
      title: 'Career Changer Mentors',
      description: 'Mentors who successfully transitioned from other careers into tech',
      icon: Users,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 'industry-expert',
      title: 'Industry Expert Mentors',
      description: 'Experienced developers and tech professionals',
      icon: Star,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'peer-mentor',
      title: 'Peer Mentors',
      description: 'Fellow learners who are a few steps ahead in their journey',
      icon: MessageCircle,
      color: 'from-green-500 to-blue-500'
    }
  ];

  const mentors = {
    'career-changer': [
      {
        name: 'Sarah Johnson',
        previousCareer: 'Teacher → Software Engineer',
        experience: '3 years in tech',
        specialties: ['Web Development', 'Career Transition', 'Work-Life Balance'],
        image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'I changed careers at 35 and understand the challenges of starting over. I love helping others navigate their transition.',
        availability: 'Weekends'
      },
      {
        name: 'Marcus Williams',
        previousCareer: 'Sales → Data Scientist',
        experience: '2 years in tech',
        specialties: ['Python', 'Data Analysis', 'Interview Prep'],
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'From selling products to analyzing data - I can help you make the leap into data science.',
        availability: 'Evenings'
      }
    ],
    'industry-expert': [
      {
        name: 'Jennifer Chen',
        previousCareer: 'Senior Frontend Developer',
        experience: '8 years in tech',
        specialties: ['React', 'JavaScript', 'System Design'],
        image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'I lead a team at a major tech company and love mentoring the next generation of developers.',
        availability: 'Flexible'
      },
      {
        name: 'David Rodriguez',
        previousCareer: 'Full Stack Engineer',
        experience: '6 years in tech',
        specialties: ['Node.js', 'Databases', 'API Design'],
        image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'I enjoy breaking down complex concepts and helping beginners build confidence.',
        availability: 'Weekdays'
      }
    ],
    'peer-mentor': [
      {
        name: 'Lisa Park',
        previousCareer: 'CodeBridge Graduate',
        experience: '6 months learning',
        specialties: ['HTML/CSS', 'Beginner Support', 'Study Tips'],
        image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'I just completed the web development path and remember what it\'s like to be a complete beginner.',
        availability: 'Evenings'
      },
      {
        name: 'Tom Anderson',
        previousCareer: 'Current Student',
        experience: '4 months learning',
        specialties: ['JavaScript', 'Problem Solving', 'Motivation'],
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        bio: 'Learning alongside you! I love helping fellow beginners overcome the same challenges I faced.',
        availability: 'Weekends'
      }
    ]
  };

  const benefits = [
    {
      icon: User,
      title: 'Personalized Guidance',
      description: 'Get advice tailored to your specific situation and goals'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Meet when it works for both you and your mentor'
    },
    {
      icon: MessageCircle,
      title: 'Ongoing Support',
      description: 'Regular check-ins and continuous encouragement'
    },
    {
      icon: CheckCircle,
      title: 'Accountability',
      description: 'Stay on track with someone invested in your success'
    }
  ];

  const openModal = (mentor: any) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Auto-close modal after 2 seconds
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Find Your Perfect Mentor
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Connect with experienced mentors who understand your journey. Get personalized guidance, 
            support, and accountability to accelerate your learning.
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Why Mentorship Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Choose Your Mentor Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {mentorTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedMentorType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedMentorType(type.id)}
                  className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 text-left ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {mentors[selectedMentorType as keyof typeof mentors].map((mentor, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start mb-4 sm:mb-6">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-600 font-medium mb-1">
                      {mentor.previousCareer}
                    </p>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {mentor.experience}
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-purple-100 text-purple-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="text-xs sm:text-sm text-gray-600">
                    <strong>Available:</strong> {mentor.availability}
                  </div>
                  <button 
                    onClick={() => openModal(mentor)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    Connect with {mentor.name.split(' ')[0]}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Fill out our mentorship form and we'll match you with the perfect mentor 
              based on your goals, schedule, and learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="signup" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              Free mentorship • Flexible scheduling • Perfect matches guaranteed
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Connecting with {selectedMentor?.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message or Reason for connecting *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us why you'd like to connect with this mentor..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold"
                  >
                    Send Connection Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been sent to {selectedMentor?.name}. 
                    They'll get back to you soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipPage;
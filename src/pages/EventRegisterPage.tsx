import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, CheckCircle, X } from 'lucide-react';

const EventRegisterPage = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const events: { [key: string]: any } = {
    'intro-to-web-development': {
      title: 'Introduction to Web Development Workshop',
      date: '2025-02-15',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'workshop',
      description: 'Perfect for absolute beginners! Learn the basics of HTML, CSS, and JavaScript in this hands-on workshop. We\'ll guide you through creating your first web page and introduce you to the fundamental concepts of web development.',
      fullDescription: 'This comprehensive 2-hour workshop is designed specifically for complete beginners who want to get started with web development. You\'ll learn the building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this session, you\'ll have created your first web page and understand the basics of how websites work.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2',
      attendees: 45,
      maxAttendees: 50,
      instructor: 'Sarah Martinez',
      prerequisites: 'None - complete beginner friendly',
      whatToExpect: [
        'Introduction to HTML structure and elements',
        'Basic CSS styling and layout',
        'Simple JavaScript interactions',
        'Hands-on coding exercises',
        'Q&A session with the instructor',
        'Resources for continued learning'
      ]
    },
    'career-change-panel': {
      title: 'Career Change Success Stories Panel',
      date: '2025-02-20',
      time: '7:00 PM - 8:30 PM EST',
      location: 'Virtual (Discord)',
      category: 'career',
      description: 'Hear from CodeBridge graduates who successfully transitioned into tech careers. Q&A session included.',
      fullDescription: 'Join us for an inspiring panel discussion featuring CodeBridge graduates who have successfully made the transition from various backgrounds into thriving tech careers. Our panelists will share their journeys, challenges they overcame, and practical advice for making your own career change.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2',
      attendees: 120,
      maxAttendees: 200,
      instructor: 'Panel of CodeBridge Graduates',
      prerequisites: 'None',
      whatToExpected: [
        'Personal success stories from career changers',
        'Timeline and strategies for career transition',
        'Overcoming imposter syndrome and self-doubt',
        'Building a portfolio while learning',
        'Job search tips and interview preparation',
        'Live Q&A with the panel'
      ]
    },
    'react-fundamentals-workshop': {
      title: 'React Fundamentals Deep Dive',
      date: '2025-02-25',
      time: '1:00 PM - 5:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'workshop',
      description: 'Build your first React application from scratch. Prerequisites: Basic JavaScript knowledge.',
      fullDescription: 'This intensive 4-hour workshop will take you from React beginner to building your first interactive React application. We\'ll cover components, state management, event handling, and modern React patterns. Perfect for those who have basic JavaScript knowledge and want to learn the most popular frontend framework.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2',
      attendees: 28,
      maxAttendees: 30,
      instructor: 'David Chen',
      prerequisites: 'Basic JavaScript knowledge required',
      whatToExpect: [
        'React components and JSX syntax',
        'State and props management',
        'Event handling and user interactions',
        'Building a complete todo application',
        'Modern React hooks introduction',
        'Best practices and common patterns'
      ]
    },
    'networking-coffee-chat': {
      title: 'Virtual Coffee Chat & Networking',
      date: '2025-03-01',
      time: '10:00 AM - 11:00 AM EST',
      location: 'Virtual (Discord)',
      category: 'networking',
      description: 'Casual networking session for learners, mentors, and industry professionals. Bring your coffee!',
      fullDescription: 'Join our relaxed virtual coffee chat where learners, mentors, and industry professionals come together for informal networking. This is a great opportunity to make connections, ask questions, share experiences, and build relationships within the CodeBridge community.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2',
      attendees: 67,
      maxAttendees: 100,
      instructor: 'Community Team',
      prerequisites: 'None - all levels welcome',
      whatToExpect: [
        'Casual conversation and networking',
        'Breakout rooms for smaller group discussions',
        'Share your learning journey and goals',
        'Connect with mentors and peers',
        'Learn about others\' career paths',
        'Exchange contact information and resources'
      ]
    },
    'data-science-bootcamp': {
      title: 'Data Science Bootcamp Preview',
      date: '2025-03-05',
      time: '6:00 PM - 8:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'webinar',
      description: 'Explore the world of data science with Python. Learn about data analysis, visualization, and machine learning basics.',
      fullDescription: 'Get a comprehensive preview of what a career in data science looks like. This 2-hour session will introduce you to Python for data analysis, data visualization techniques, and basic machine learning concepts. Perfect for those curious about the data science field.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2',
      attendees: 89,
      maxAttendees: 150,
      instructor: 'Dr. Maria Rodriguez',
      prerequisites: 'Basic programming knowledge helpful but not required',
      whatToExpect: [
        'Introduction to Python for data science',
        'Data analysis with Pandas library',
        'Creating visualizations with Matplotlib',
        'Basic machine learning concepts',
        'Real-world data science project examples',
        'Career paths and opportunities in data science'
      ]
    },
    'interview-prep-session': {
      title: 'Technical Interview Preparation',
      date: '2025-03-10',
      time: '3:00 PM - 5:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'career',
      description: 'Practice coding challenges, behavioral questions, and get tips from hiring managers.',
      fullDescription: 'Prepare for your first tech job interviews with this comprehensive 2-hour session. We\'ll cover technical coding challenges, behavioral interview questions, and provide insider tips from actual hiring managers. Includes mock interview practice and personalized feedback.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=2',
      attendees: 34,
      maxAttendees: 40,
      instructor: 'Alex Thompson & Industry Partners',
      prerequisites: 'Basic programming knowledge',
      whatToExpect: [
        'Common technical interview questions',
        'Coding challenge practice sessions',
        'Behavioral interview preparation',
        'Mock interview with feedback',
        'Tips from hiring managers',
        'Salary negotiation strategies'
      ]
    }
  };

  const event = events[eventId as string];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowModal(true);
    
    // Auto-close modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isEventFull = () => {
    return event && event.attendees >= event.maxAttendees;
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Link to="/events" className="text-purple-600 hover:text-purple-700">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Link 
                to="/events"
                className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center hover:bg-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </div>
            {isEventFull() && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Event Full
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-purple-50 rounded-xl px-4 py-3">
                  <Calendar className="h-5 w-5 mr-3 text-purple-600" />
                  <div>
                    <div className="text-sm text-purple-600 font-medium">Date</div>
                    <div className="text-gray-900 font-semibold">{formatDate(event.date)}</div>
                  </div>
                </div>
                <div className="flex items-center bg-blue-50 rounded-xl px-4 py-3">
                  <Clock className="h-5 w-5 mr-3 text-blue-600" />
                  <div>
                    <div className="text-sm text-blue-600 font-medium">Time</div>
                    <div className="text-gray-900 font-semibold">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center bg-green-50 rounded-xl px-4 py-3">
                  <MapPin className="h-5 w-5 mr-3 text-green-600" />
                  <div>
                    <div className="text-sm text-green-600 font-medium">Location</div>
                    <div className="text-gray-900 font-semibold">{event.location}</div>
                  </div>
                </div>
                <div className="flex items-center bg-orange-50 rounded-xl px-4 py-3">
                  <Users className="h-5 w-5 mr-3 text-orange-600" />
                  <div>
                    <div className="text-sm text-orange-600 font-medium">Attendees</div>
                    <div className="text-gray-900 font-semibold">{event.attendees}/{event.maxAttendees}</div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                {event.fullDescription}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2">
                    {event.whatToExpect.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Instructor:</span>
                      <span className="text-sm text-gray-900 ml-2">{event.instructor}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Prerequisites:</span>
                      <span className="text-sm text-gray-900 ml-2">{event.prerequisites}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Category:</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full ml-2 capitalize">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!isEventFull() ? (
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Register for This Event
                </h2>
                
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
                      Questions or Comments (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Any questions about the event or special requirements?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg"
                  >
                    Register for Event
                  </button>
                </form>

                <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
                  Registration is free. You'll receive event details and joining instructions via email.
                </p>
              </div>
            ) : (
              <div className="bg-red-50 rounded-2xl p-6 sm:p-8 text-center border border-red-200">
                <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-4">
                  Event is Full
                </h2>
                <p className="text-red-700 mb-6">
                  This event has reached maximum capacity. Check out our other upcoming events or 
                  join our community to be notified about future events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/events"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    View Other Events
                  </Link>
                  <Link
                    to="/community"
                    className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-xl hover:bg-red-50 transition-colors font-medium"
                  >
                    Join Community
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Registration Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for registering for <strong>{event.title}</strong>. 
                You'll receive a confirmation email with event details shortly.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegisterPage;
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFutureDate } from '../utils/generateEventDate';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'networking', name: 'Networking' },
    { id: 'career', name: 'Career Events' }
  ];

  const timeFilters = [
    { id: 'all', name: 'All Time' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'past', name: 'Past Events' }
  ];

  const events = [
    {
      id: 'intro-to-web-development',
      title: 'Introduction to Web Development Workshop',
      date: getFutureDate(5),
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'workshop',
      type: 'upcoming',
      description: 'Perfect for absolute beginners! Learn the basics of HTML, CSS, and JavaScript in this hands-on workshop.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 45,
      maxAttendees: 50,
      featured: true
    },
    {
      id: 'career-change-panel',
      title: 'Career Change Success Stories Panel',
      date: getFutureDate(8),
      time: '7:00 PM - 8:30 PM EST',
      location: 'Virtual (Discord)',
      category: 'career',
      type: 'upcoming',
      description: 'Hear from CodeBridge graduates who successfully transitioned into tech careers. Q&A session included.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 120,
      maxAttendees: 200,
      featured: false
    },
    {
      id: 'react-fundamentals-workshop',
      title: 'React Fundamentals Deep Dive',
      date: getFutureDate(10),
      time: '1:00 PM - 5:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'workshop',
      type: 'upcoming',
      description: 'Build your first React application from scratch. Prerequisites: Basic JavaScript knowledge.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 28,
      maxAttendees: 30,
      featured: true
    },
    {
      id: 'networking-coffee-chat',
      title: 'Virtual Coffee Chat & Networking',
      date: getFutureDate(15),
      time: '10:00 AM - 11:00 AM EST',
      location: 'Virtual (Discord)',
      category: 'networking',
      type: 'upcoming',
      description: 'Casual networking session for learners, mentors, and industry professionals. Bring your coffee!',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 67,
      maxAttendees: 100,
      featured: false
    },
    {
      id: 'data-science-bootcamp',
      title: 'Data Science Bootcamp Preview',
      date: getFutureDate(24),
      time: '6:00 PM - 8:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'webinar',
      type: 'upcoming',
      description: 'Explore the world of data science with Python. Learn about data analysis, visualization, and machine learning basics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 89,
      maxAttendees: 150,
      featured: false
    },
    {
      id: 'interview-prep-session',
      title: 'Technical Interview Preparation',
      date: getFutureDate(26),
      time: '3:00 PM - 5:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'career',
      type: 'upcoming',
      description: 'Practice coding challenges, behavioral questions, and get tips from hiring managers.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 34,
      maxAttendees: 40,
      featured: true
    },
    {
      id: 'javascript-fundamentals-past',
      title: 'JavaScript Fundamentals Workshop',
      date: '2025-01-20',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'workshop',
      type: 'past',
      description: 'Comprehensive introduction to JavaScript programming for beginners.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 50,
      maxAttendees: 50,
      featured: false
    },
    {
      id: 'portfolio-building-past',
      title: 'Portfolio Building Masterclass',
      date: '2025-01-15',
      time: '1:00 PM - 3:00 PM EST',
      location: 'Virtual (Zoom)',
      category: 'career',
      type: 'past',
      description: 'Learn how to create a portfolio that stands out to employers.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      attendees: 75,
      maxAttendees: 75,
      featured: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const timeMatch = selectedTime === 'all' || event.type === selectedTime;
    return categoryMatch && timeMatch;
  });

  const upcomingEvents = filteredEvents.filter(event => event.type === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.type === 'past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isEventFull = (attendees: number, maxAttendees: number) => {
    return attendees >= maxAttendees;
  };

  const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      {event.featured && !isPast && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-3 py-1 text-center">
          ⭐ Featured Event
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPast && (
          <div className="absolute top-3 right-3 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Past Event
          </div>
        )}
        {!isPast && isEventFull(event.attendees, event.maxAttendees) && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Full
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-purple-600" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-purple-600" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-purple-600" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-purple-600" />
            {event.attendees}/{event.maxAttendees} attendees
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full capitalize">
            {event.category}
          </span>
          
          {!isPast ? (
            <Link
              to={`/events/${event.id}/register`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center text-sm ${
                isEventFull(event.attendees, event.maxAttendees)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              {isEventFull(event.attendees, event.maxAttendees) ? 'Full' : 'Register'}
              {!isEventFull(event.attendees, event.maxAttendees) && (
                <ArrowRight className="h-4 w-4 ml-2" />
              )}
            </Link>
          ) : (
            <span className="text-sm text-gray-500 font-medium">Event Completed</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Community Events
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Join workshops, webinars, and networking events designed to accelerate your learning 
            and connect you with the CodeBridge community.
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              >
                {timeFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {(selectedTime === 'all' || selectedTime === 'upcoming') && upcomingEvents.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {(selectedTime === 'all' || selectedTime === 'past') && pastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more events.</p>
          </div>
        )}

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Want to Host an Event?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Have an idea for a workshop or want to share your expertise? 
              We'd love to hear from you!
            </p>
            <Link
              to="/community"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
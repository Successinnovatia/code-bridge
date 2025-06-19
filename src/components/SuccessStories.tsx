import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'David Kim',
      age: 52,
      previousJob: 'Construction Foreman',
      currentJob: 'Frontend Developer at TechCorp',
      timeline: '8 months',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      story: 'After 25 years in construction, an injury forced me to reconsider my career. CodeBridge gave me the structure and support I needed to completely change my life.',
      path: 'Web Development'
    },
    {
      name: 'Lisa Patel',
      age: 38,
      previousJob: 'Restaurant Manager',
      currentJob: 'Data Analyst at HealthTech Solutions',
      timeline: '7 months',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      story: 'I always loved solving puzzles and finding patterns. The data science path at CodeBridge helped me turn that passion into a rewarding career.',
      path: 'Data Science'
    },
    {
      name: 'James Wilson',
      age: 29,
      previousJob: 'Uber Driver',
      currentJob: 'Mobile Developer at StartupXYZ',
      timeline: '9 months',
      location: 'Denver, CO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      story: 'Driving for years gave me flexibility but no future. My study group became my accountability partners, and we all landed jobs together.',
      path: 'Mobile Development'
    }
  ];

  return (
    <section id="stories" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real People, Real Success
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            These are just a few of the thousands who have transformed their lives through CodeBridge. Your success story could be next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600">Age {story.age}</p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-600 flex-shrink-0" />
                    {story.location}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-600 flex-shrink-0" />
                    {story.timeline} to career change
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="text-xs text-gray-600 mb-1">From</div>
                      <div className="font-semibold text-red-700 text-xs sm:text-sm leading-tight">{story.previousJob}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mx-2 flex-shrink-0" />
                    <div className="text-center flex-1">
                      <div className="text-xs text-gray-600 mb-1">To</div>
                      <div className="font-semibold text-green-700 text-xs sm:text-sm leading-tight">{story.currentJob}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-4 sm:mb-6">
                  <span className="bg-purple-100 text-purple-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                    {story.path}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SuccessStories;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Clock } from 'lucide-react';

const CourseStartPage = () => {
  const { courseId } = useParams();

  const courseNames: { [key: string]: string } = {
    'intro-to-programming': 'Introduction to Programming',
    'computer-basics': 'Computer Basics for Programmers',
    'first-code': 'Writing Your First Code',
    'html-css-basics': 'HTML & CSS Fundamentals',
    'javascript-fundamentals': 'JavaScript Fundamentals',
    'responsive-design': 'Responsive Web Design',
    'react-basics': 'React Fundamentals',
    'project-portfolio': 'Building Your Project Portfolio',
    'apis-databases': 'APIs and Databases',
    'git-version-control': 'Git and Version Control',
    'testing-debugging': 'Testing and Debugging',
    'interview-prep': 'Technical Interview Preparation'
  };

  const courseName = courseNames[courseId as string] || 'Course';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center mb-4">
              <Link 
                to={`/course/${courseId}`}
                className="text-white/80 hover:text-white text-sm font-medium flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course Overview
              </Link>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-4">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Welcome!
                </h1>
                <p className="text-lg sm:text-xl text-white/90">
                  {courseName}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 mb-8">
                <Clock className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Coming Soon!
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Lesson content is coming soon. Bookmark this page and check back.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What to do while you wait:
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <p>• Join our community to connect with other learners</p>
                  <p>• Explore other available courses</p>
                  <p>• Set up your development environment</p>
                  <p>• Follow us for updates on new content</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/community"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg"
                >
                  Join Community
                </Link>
                <Link
                  to="/learning-paths"
                  className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-50 transition-colors font-semibold text-base sm:text-lg"
                >
                  Browse Other Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStartPage;
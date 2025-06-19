import React from 'react';
import { CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningPathPage = () => {
  const learningStages = [
    {
      id: 1,
      title: 'Foundation Stage',
      duration: '4-6 weeks',
      description: 'Start your journey with the absolute basics of programming and computer science.',
      achievements: [
        'Understand how computers and the internet work',
        'Learn basic programming concepts and terminology',
        'Write your first lines of code',
        'Set up your development environment'
      ],
      courses: [
        { id: 'intro-to-programming', title: 'Introduction to Programming', description: 'Learn what programming is and write your first code' },
        { id: 'computer-basics', title: 'Computer Basics', description: 'Understand how computers work for programmers' },
        { id: 'first-code', title: 'Writing Your First Code', description: 'Get hands-on experience with real programming' }
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Building Blocks Stage',
      duration: '8-10 weeks',
      description: 'Learn the core building blocks of web development: HTML, CSS, and JavaScript.',
      achievements: [
        'Create beautiful web pages with HTML and CSS',
        'Add interactivity with JavaScript',
        'Build responsive designs for mobile and desktop',
        'Understand web development fundamentals'
      ],
      courses: [
        { id: 'html-css-basics', title: 'HTML & CSS Fundamentals', description: 'Build and style beautiful web pages' },
        { id: 'javascript-fundamentals', title: 'JavaScript Fundamentals', description: 'Add interactivity to your websites' },
        { id: 'responsive-design', title: 'Responsive Web Design', description: 'Make websites work on all devices' }
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Project Building Stage',
      duration: '10-12 weeks',
      description: 'Apply your skills by building real projects and learning modern frameworks.',
      achievements: [
        'Build interactive web applications',
        'Learn React for modern web development',
        'Create a portfolio of projects',
        'Work with APIs and databases'
      ],
      courses: [
        { id: 'react-basics', title: 'React Fundamentals', description: 'Build modern web apps with React' },
        { id: 'project-portfolio', title: 'Building Your Portfolio', description: 'Create impressive projects for employers' },
        { id: 'apis-databases', title: 'APIs and Databases', description: 'Work with external data and build full-stack apps' }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Career Preparation Stage',
      duration: '6-8 weeks',
      description: 'Prepare for your first tech job with advanced skills and career guidance.',
      achievements: [
        'Master version control with Git',
        'Learn testing and debugging techniques',
        'Prepare for technical interviews',
        'Build a professional online presence'
      ],
      courses: [
        { id: 'git-version-control', title: 'Git & Version Control', description: 'Master the essential tool for code collaboration' },
        { id: 'testing-debugging', title: 'Testing & Debugging', description: 'Write reliable code and fix problems' },
        { id: 'interview-prep', title: 'Interview Preparation', description: 'Ace technical interviews and land your job' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Learning Journey
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Follow our structured path from complete beginner to job-ready developer. 
            Each stage builds on the previous one, ensuring you never feel lost or overwhelmed.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {learningStages.map((stage, index) => (
            <div key={stage.id} className="relative">
              {index < learningStages.length - 1 && (
                <div className="hidden sm:block absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-purple-300 to-blue-300"></div>
              )}
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${stage.color} flex items-center justify-center text-white font-bold text-xl sm:text-2xl`}>
                      {stage.id}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {stage.title}
                      </h2>
                      <div className="flex items-center text-purple-600 bg-purple-50 px-3 py-1 rounded-full text-sm font-medium w-fit">
                        <Clock className="h-4 w-4 mr-2" />
                        {stage.duration}
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        What You'll Achieve
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stage.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start">
                            <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                            </div>
                            <span className="text-sm sm:text-base text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Courses in This Stage</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {stage.courses.map((course, courseIndex) => (
                          <Link
                            key={courseIndex}
                            to={`/course/${course.id}`}
                            className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors group border border-gray-200 hover:border-purple-300"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {course.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                              {course.description}
                            </p>
                            <div className="flex items-center text-purple-600 text-sm font-medium">
                              Start Course
                              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-purple-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join thousands of learners who have successfully transitioned into tech careers.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathPage;
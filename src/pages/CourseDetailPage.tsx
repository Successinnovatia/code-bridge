import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, CheckCircle, ArrowRight, BookOpen, Monitor, Code } from 'lucide-react';

const CourseDetailPage = () => {
  const { courseId } = useParams();

  const courses = {
    'intro-to-programming': {
      title: 'Introduction to Programming',
      description: 'Your first step into the world of programming. Learn fundamental concepts that apply to all programming languages.',
      duration: '2-3 weeks',
      level: 'Complete Beginner',
      students: '12,000+',
      objectives: [
        'Understand what programming is and why it\'s useful',
        'Learn basic programming concepts like variables and functions',
        'Write simple programs to solve everyday problems',
        'Gain confidence to continue your learning journey'
      ],
      tools: ['Web Browser', 'No software installation required'],
      modules: [
        'What is Programming?',
        'Your First Program',
        'Variables and Data Types',
        'Making Decisions with Code',
        'Loops and Repetition',
        'Functions and Organization'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    'computer-basics': {
      title: 'Computer Basics for Programmers',
      description: 'Understand how computers work under the hood. Essential knowledge for every programmer.',
      duration: '1-2 weeks',
      level: 'Complete Beginner',
      students: '8,500+',
      objectives: [
        'Learn how computers process information',
        'Understand files, folders, and operating systems',
        'Master keyboard shortcuts and productivity tips',
        'Set up your computer for programming'
      ],
      tools: ['Any computer (Windows, Mac, or Linux)', 'Web browser'],
      modules: [
        'How Computers Think',
        'Files and Folders Mastery',
        'Operating System Basics',
        'Keyboard Shortcuts',
        'Setting Up Your Workspace',
        'Internet and Networking Basics'
      ],
      color: 'from-green-500 to-blue-500'
    },
    'first-code': {
      title: 'Writing Your First Code',
      description: 'Get hands-on experience writing real code. Build simple programs and see immediate results.',
      duration: '2-3 weeks',
      level: 'Complete Beginner',
      students: '10,200+',
      objectives: [
        'Write and run your first programs',
        'Use online coding environments',
        'Debug simple errors and problems',
        'Build confidence through practice'
      ],
      tools: ['Web browser', 'Online coding platform (provided)'],
      modules: [
        'Your First "Hello World"',
        'Working with Numbers',
        'Text and Strings',
        'Getting User Input',
        'Simple Calculations',
        'Your First Mini-Project'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    'html-css-basics': {
      title: 'HTML & CSS Fundamentals',
      description: 'Learn to create beautiful web pages from scratch using HTML for structure and CSS for styling.',
      duration: '3-4 weeks',
      level: 'Beginner',
      students: '15,000+',
      objectives: [
        'Build web pages with proper HTML structure',
        'Style websites with CSS to make them beautiful',
        'Create responsive layouts that work on all devices',
        'Understand web accessibility best practices'
      ],
      tools: ['Text Editor (VS Code recommended)', 'Web Browser'],
      modules: [
        'HTML Structure and Elements',
        'CSS Styling Basics',
        'Layout with Flexbox',
        'Responsive Design',
        'Forms and User Input',
        'Final Project: Personal Website'
      ],
      color: 'from-green-500 to-blue-500'
    },
    'javascript-fundamentals': {
      title: 'JavaScript Fundamentals',
      description: 'Add interactivity to your websites with JavaScript, the programming language of the web.',
      duration: '4-5 weeks',
      level: 'Beginner',
      students: '18,000+',
      objectives: [
        'Write JavaScript code to make websites interactive',
        'Handle user events like clicks and form submissions',
        'Work with data and manipulate web page content',
        'Debug and troubleshoot JavaScript programs'
      ],
      tools: ['Text Editor (VS Code)', 'Web Browser with Developer Tools'],
      modules: [
        'JavaScript Basics and Syntax',
        'Working with the DOM',
        'Event Handling',
        'Arrays and Objects',
        'Asynchronous JavaScript',
        'Project: Interactive Web App'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    'responsive-design': {
      title: 'Responsive Web Design',
      description: 'Master the art of creating websites that look great on all devices, from phones to desktops.',
      duration: '2-3 weeks',
      level: 'Beginner',
      students: '11,500+',
      objectives: [
        'Understand mobile-first design principles',
        'Use CSS Grid and Flexbox for layouts',
        'Implement responsive images and media',
        'Test and optimize for different screen sizes'
      ],
      tools: ['Text Editor (VS Code)', 'Web Browser', 'Browser Developer Tools'],
      modules: [
        'Mobile-First Design Philosophy',
        'CSS Grid Mastery',
        'Advanced Flexbox Techniques',
        'Responsive Images and Media',
        'Breakpoints and Media Queries',
        'Project: Responsive Portfolio Site'
      ],
      color: 'from-teal-500 to-blue-500'
    },
    'react-basics': {
      title: 'React Fundamentals',
      description: 'Learn React, the most popular JavaScript library for building modern web applications.',
      duration: '4-5 weeks',
      level: 'Intermediate',
      students: '9,800+',
      objectives: [
        'Understand React components and JSX',
        'Manage state and handle user interactions',
        'Build reusable UI components',
        'Create dynamic, interactive web applications'
      ],
      tools: ['Node.js', 'VS Code', 'Create React App'],
      modules: [
        'Introduction to React and JSX',
        'Components and Props',
        'State and Event Handling',
        'Lists and Conditional Rendering',
        'Forms and User Input',
        'Project: Interactive Dashboard'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    'project-portfolio': {
      title: 'Building Your Project Portfolio',
      description: 'Create impressive projects that showcase your skills and help you stand out to employers.',
      duration: '6-8 weeks',
      level: 'Intermediate',
      students: '7,200+',
      objectives: [
        'Plan and execute complete web projects',
        'Apply best practices for code organization',
        'Deploy projects to the web',
        'Document and present your work professionally'
      ],
      tools: ['VS Code', 'Git/GitHub', 'Deployment platforms (Netlify, Vercel)'],
      modules: [
        'Project Planning and Design',
        'Building a Task Management App',
        'Creating a Weather Dashboard',
        'E-commerce Product Showcase',
        'Deployment and Hosting',
        'Portfolio Presentation Skills'
      ],
      color: 'from-purple-500 to-red-500'
    },
    'apis-databases': {
      title: 'APIs and Databases',
      description: 'Learn to work with external data sources and build full-stack applications.',
      duration: '4-5 weeks',
      level: 'Intermediate',
      students: '6,500+',
      objectives: [
        'Understand how APIs work and how to use them',
        'Fetch and display data from external sources',
        'Learn database basics and data modeling',
        'Build applications that store and retrieve data'
      ],
      tools: ['VS Code', 'Postman (API testing)', 'Database tools'],
      modules: [
        'Introduction to APIs and HTTP',
        'Fetching Data with JavaScript',
        'Database Fundamentals',
        'Working with JSON Data',
        'Building a Data-Driven App',
        'Project: Social Media Dashboard'
      ],
      color: 'from-orange-500 to-pink-500'
    },
    'git-version-control': {
      title: 'Git and Version Control',
      description: 'Master Git, the essential tool for tracking changes and collaborating on code projects.',
      duration: '2-3 weeks',
      level: 'Intermediate',
      students: '8,900+',
      objectives: [
        'Understand version control concepts',
        'Use Git for tracking code changes',
        'Collaborate with others using GitHub',
        'Manage project history and branches'
      ],
      tools: ['Git', 'GitHub account', 'VS Code with Git integration'],
      modules: [
        'Version Control Fundamentals',
        'Git Basics: Add, Commit, Push',
        'Working with GitHub',
        'Branching and Merging',
        'Collaboration Workflows',
        'Project: Open Source Contribution'
      ],
      color: 'from-gray-600 to-gray-800'
    },
    'testing-debugging': {
      title: 'Testing and Debugging',
      description: 'Learn essential skills for writing reliable code and fixing problems when they arise.',
      duration: '3-4 weeks',
      level: 'Intermediate',
      students: '5,800+',
      objectives: [
        'Write tests to verify your code works correctly',
        'Debug problems systematically',
        'Use browser developer tools effectively',
        'Implement error handling in your applications'
      ],
      tools: ['VS Code', 'Browser Developer Tools', 'Testing frameworks'],
      modules: [
        'Introduction to Testing',
        'Unit Testing Basics',
        'Debugging Techniques',
        'Browser Developer Tools',
        'Error Handling and Logging',
        'Project: Bug-Free Calculator App'
      ],
      color: 'from-red-500 to-orange-500'
    },
    'interview-prep': {
      title: 'Technical Interview Preparation',
      description: 'Prepare for technical interviews and land your first job in tech.',
      duration: '4-6 weeks',
      level: 'Intermediate',
      students: '4,200+',
      objectives: [
        'Solve common coding interview problems',
        'Practice explaining your thought process',
        'Prepare for behavioral interview questions',
        'Build confidence for the job search'
      ],
      tools: ['Online coding platforms', 'Mock interview tools'],
      modules: [
        'Common Interview Question Types',
        'Problem-Solving Strategies',
        'Data Structures Review',
        'Algorithm Practice',
        'Behavioral Interview Prep',
        'Mock Interview Sessions'
      ],
      color: 'from-indigo-500 to-purple-600'
    }
  };

  const course = courses[courseId as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/learning-paths" className="text-purple-600 hover:text-purple-700">
            Back to Learning Paths
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${course.color} p-6 sm:p-8 lg:p-10 text-white`}>
            <div className="flex items-center mb-4">
              <Link 
                to="/learning-paths" 
                className="text-white/80 hover:text-white text-sm font-medium flex items-center"
              >
                ← Back to Learning Paths
              </Link>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {course.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm sm:text-base font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-sm sm:text-base font-medium">{course.level}</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm sm:text-base font-medium">{course.students} learners</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2" />
                  Learning Objectives
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {course.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <Monitor className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-2" />
                  Tools Needed
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {course.tools.map((tool, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <Code className="h-3 w-3 text-purple-600" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-blue-800">
                    <strong>Don't worry!</strong> We'll guide you through setting up everything you need.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Course Modules
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.modules.map((module, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-5 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-base font-medium text-gray-900">{module}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                to={`/course/${courseId}/start`}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:shadow-xl transition-all duration-200 font-bold text-lg sm:text-xl flex items-center justify-center mx-auto group"
              >
                Start Learning Now
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                100% Free • No Credit Card Required • Learn at Your Own Pace
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Need Help Getting Started?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/community"
              className="flex-1 bg-purple-50 hover:bg-purple-100 p-4 rounded-xl transition-colors text-center"
            >
              <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="font-medium text-gray-900">Join Our Community</div>
              <div className="text-sm text-gray-600">Connect with fellow learners</div>
            </Link>
            <Link
              to="/mentorship"
              className="flex-1 bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-colors text-center"
            >
              <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="font-medium text-gray-900">Find a Mentor</div>
              <div className="text-sm text-gray-600">Get personalized guidance</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
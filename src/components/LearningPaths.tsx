import React from 'react';
import { Globe, Smartphone, BarChart3, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningPaths = () => {
  const paths = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, and React to build modern websites and web applications.',
      duration: '4-6 months',
      level: 'Free to Start',
      color: 'from-blue-500 to-purple-600',
      skills: ['HTML & CSS', 'JavaScript', 'React', 'Node.js'],
      courses: [
        { id: 'intro-to-programming', title: 'Introduction to Programming' },
        { id: 'html-css-basics', title: 'HTML & CSS Fundamentals' },
        { id: 'javascript-fundamentals', title: 'JavaScript Fundamentals' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Create iOS and Android apps using React Native and modern mobile development practices.',
      duration: '5-7 months',
      level: 'Free to Start',
      color: 'from-green-500 to-blue-500',
      skills: ['React Native', 'iOS/Android', 'App Store', 'Mobile UX'],
      courses: [
        { id: 'intro-to-programming', title: 'Introduction to Programming' },
        { id: 'javascript-fundamentals', title: 'JavaScript Fundamentals' },
        { id: 'react-basics', title: 'React Fundamentals' }
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Science',
      description: 'Analyze data, create visualizations, and build machine learning models with Python.',
      duration: '6-8 months',
      level: 'Free to Start',
      color: 'from-orange-500 to-red-500',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'SQL'],
      courses: [
        { id: 'intro-to-programming', title: 'Introduction to Programming' },
        { id: 'computer-basics', title: 'Computer Basics' },
        { id: 'apis-databases', title: 'APIs and Databases' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect digital assets and learn ethical hacking, security analysis, and risk management.',
      duration: '6-9 months',
      level: 'Free to Start',
      color: 'from-purple-500 to-pink-500',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Analysis', 'Compliance'],
      courses: [
        { id: 'computer-basics', title: 'Computer Basics' },
        { id: 'intro-to-programming', title: 'Introduction to Programming' },
        { id: 'testing-debugging', title: 'Testing & Debugging' }
      ]
    }
  ];

  return (
    <section id="learning" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Every path is designed for complete beginners. Start where your interests lie and build a successful tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                    {path.level}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {path.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {path.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">You'll learn:</div>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="text-xs sm:text-sm text-gray-500 mb-3">Sample courses:</div>
                  <div className="space-y-2">
                    {path.courses.map((course, courseIndex) => (
                      <Link
                        key={courseIndex}
                        to={`/course/${course.id}`}
                        className="block bg-gray-50 hover:bg-purple-50 p-3 rounded-lg transition-colors group/course"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900 group-hover/course:text-purple-600">
                            {course.title}
                          </span>
                          <ArrowRight className="h-3 w-3 text-gray-400 group-hover/course:text-purple-600 group-hover/course:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="text-xs sm:text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{path.duration}</span> to complete
                  </div>
                  <Link
                    to="/learning-paths"
                    className="flex items-center justify-center sm:justify-start text-purple-600 hover:text-purple-700 font-medium group-hover:translate-x-1 transition-all bg-purple-50 sm:bg-transparent px-4 py-2 sm:px-0 sm:py-0 rounded-full sm:rounded-none"
                  >
                    View All Paths
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
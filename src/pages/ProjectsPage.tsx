import React, { useState } from 'react';
import { Code, ExternalLink, Github, Star, Clock, Users, Filter, Figma } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'data', name: 'Data Science' },
    { id: 'game', name: 'Games' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const projects = [
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio Website',
      description: 'Create a beautiful portfolio website to showcase your skills and projects. Perfect first project for web development.',
      category: 'web',
      level: 'beginner',
      duration: '1-2 weeks',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      difficulty: 'Easy',
      students: 2500,
      featured: true,
      links: {
        demo: 'https://example-portfolio.netlify.app',
        github: 'https://github.com/codebridge/portfolio-template',
        figma: null
      }
    },
    {
      id: 'todo-list',
      title: 'Todo List App',
      description: 'Build an interactive todo list with add, edit, delete, and filter functionality. Learn JavaScript fundamentals.',
      category: 'web',
      level: 'beginner',
      duration: '1 week',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      difficulty: 'Easy',
      students: 3200,
      featured: false,
      links: {
        demo: 'https://todo-app-demo.netlify.app',
        github: 'https://github.com/codebridge/todo-app',
        figma: 'https://figma.com/todo-design'
      }
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'Create a weather app that fetches data from an API and displays current conditions and forecasts.',
      category: 'web',
      level: 'intermediate',
      duration: '2-3 weeks',
      technologies: ['React', 'API', 'CSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      difficulty: 'Medium',
      students: 1800,
      featured: true,
      links: {
        demo: 'https://weather-dashboard-demo.netlify.app',
        github: null,
        figma: null
      }
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker',
      description: 'Build a mobile app to track personal expenses with categories, charts, and budget alerts.',
      category: 'mobile',
      level: 'intermediate',
      duration: '3-4 weeks',
      technologies: ['React Native', 'SQLite'],
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      difficulty: 'Medium',
      students: 950,
      featured: false,
      links: {
        demo: null,
        github: 'https://github.com/codebridge/expense-tracker',
        figma: 'https://figma.com/expense-tracker-design'
      }
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization Dashboard',
      description: 'Analyze and visualize real-world datasets using Python and create interactive charts and graphs.',
      category: 'data',
      level: 'intermediate',
      duration: '2-3 weeks',
      technologies: ['Python', 'Pandas', 'Matplotlib'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      difficulty: 'Medium',
      students: 1200,
      featured: true,
      links: {
        demo: 'https://data-viz-demo.herokuapp.com',
        github: 'https://github.com/codebridge/data-dashboard',
        figma: null
      }
    },
    {
      id: 'snake-game',
      title: 'Simple Snake Game',
      description: 'Create the classic Snake game using JavaScript. Learn game development basics and DOM manipulation.',
      category: 'game',
      level: 'beginner',
      duration: '1-2 weeks',
      technologies: ['JavaScript', 'HTML5 Canvas'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      difficulty: 'Easy',
      students: 1600,
      featured: false,
      links: {
        demo: 'https://snake-game-demo.netlify.app',
        github: 'https://github.com/codebridge/snake-game',
        figma: null
      }
    }
  ];

  const communityProjects = [
    {
      name: 'Sarah M.',
      title: 'Recipe Sharing Platform',
      description: 'A full-stack web app where users can share and discover recipes',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      name: 'David K.',
      title: 'Fitness Tracker Mobile App',
      description: 'Track workouts and progress with this React Native app',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      technologies: ['React Native', 'Firebase']
    },
    {
      name: 'Maria L.',
      title: 'Local Business Analytics',
      description: 'Data analysis project helping local businesses understand customer patterns',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      technologies: ['Python', 'Pandas', 'Tableau']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || project.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Build Real Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Learn by building! These beginner-friendly projects will help you apply your skills, 
            build a portfolio, and gain confidence as a developer.
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
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              {project.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-3 py-1 text-center">
                  ⭐ Featured Project
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.students.toLocaleString()} learners
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-sm"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    View Project
                  </Link>
                </div>

               
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Community Showcase
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            See what our amazing community members have built! Get inspired by their creativity and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {communityProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{project.name}</div>
                    <div className="text-xs sm:text-sm text-purple-600">Community Member</div>
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Start with a simple project and work your way up. Every expert was once a beginner, 
              and every project teaches you something new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center group"
              >
                Start Your First Project
                <Code className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/community"
                className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-50 transition-colors font-semibold text-base sm:text-lg"
              >
                Join Project Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
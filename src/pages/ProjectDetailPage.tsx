import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Code, ExternalLink, Github, Figma } from 'lucide-react';

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  const projects: { [key: string]: any } = {
    'personal-portfolio': {
      title: 'Personal Portfolio Website',
      description: 'Create a beautiful portfolio website to showcase your skills and projects. Perfect first project for web development.',
      fullDescription: 'Build a professional portfolio website from scratch using HTML, CSS, and JavaScript. This project will teach you the fundamentals of web development while creating something you can actually use to showcase your work to potential employers.',
      duration: '1-2 weeks',
      difficulty: 'Easy',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      students: 2500,
      links: {
        demo: 'https://example-portfolio.netlify.app',
        github: 'https://github.com/codebridge/portfolio-template',
        figma: null
      }
    },
    'todo-list': {
      title: 'Todo List App',
      description: 'Build an interactive todo list with add, edit, delete, and filter functionality. Learn JavaScript fundamentals.',
      fullDescription: 'Create a fully functional todo list application that helps you master JavaScript fundamentals. You\'ll learn about DOM manipulation, event handling, local storage, and creating interactive user interfaces.',
      duration: '1 week',
      difficulty: 'Easy',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      students: 3200,
      links: {
        demo: 'https://todo-app-demo.netlify.app',
        github: 'https://github.com/codebridge/todo-app',
        figma: 'https://figma.com/todo-design'
      }
    },
    'weather-dashboard': {
      title: 'Weather Dashboard',
      description: 'Create a weather app that fetches data from an API and displays current conditions and forecasts.',
      fullDescription: 'Build a modern weather dashboard that connects to real weather APIs. This project teaches you how to work with external data sources, handle asynchronous JavaScript, and create responsive layouts.',
      duration: '2-3 weeks',
      difficulty: 'Medium',
      technologies: ['React', 'API', 'CSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      students: 1800,
      links: {
        demo: 'https://weather-dashboard-demo.netlify.app',
        github: null,
        figma: null
      }
    },
    'expense-tracker': {
      title: 'Expense Tracker',
      description: 'Build a mobile app to track personal expenses with categories, charts, and budget alerts.',
      fullDescription: 'Create a comprehensive expense tracking mobile application using React Native. Learn mobile development patterns, data persistence, and creating intuitive user interfaces for financial applications.',
      duration: '3-4 weeks',
      difficulty: 'Medium',
      technologies: ['React Native', 'SQLite'],
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      students: 950,
      links: {
        demo: null,
        github: 'https://github.com/codebridge/expense-tracker',
        figma: 'https://figma.com/expense-tracker-design'
      }
    },
    'data-visualization': {
      title: 'Data Visualization Dashboard',
      description: 'Analyze and visualize real-world datasets using Python and create interactive charts and graphs.',
      fullDescription: 'Build an interactive data visualization dashboard using Python, Pandas, and modern charting libraries. Work with real datasets to create meaningful insights and beautiful visualizations.',
      duration: '2-3 weeks',
      difficulty: 'Medium',
      technologies: ['Python', 'Pandas', 'Matplotlib'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      students: 1200,
      links: {
        demo: 'https://data-viz-demo.herokuapp.com',
        github: 'https://github.com/codebridge/data-dashboard',
        figma: null
      }
    },
    'snake-game': {
      title: 'Simple Snake Game',
      description: 'Create the classic Snake game using JavaScript. Learn game development basics and DOM manipulation.',
      fullDescription: 'Build the classic Snake game from scratch using vanilla JavaScript and HTML5 Canvas. This project teaches game development fundamentals, collision detection, and creating smooth animations.',
      duration: '1-2 weeks',
      difficulty: 'Easy',
      technologies: ['JavaScript', 'HTML5 Canvas'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      students: 1600,
      links: {
        demo: 'https://snake-game-demo.netlify.app',
        github: 'https://github.com/codebridge/snake-game',
        figma: null
      }
    }
  };

  const project = projects[projectId as string];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-purple-600 hover:text-purple-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Link 
                to="/projects"
                className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center hover:bg-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </div>
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
                <div className="flex items-center bg-purple-50 rounded-full px-3 sm:px-4 py-2">
                  <Clock className="h-4 w-4 mr-2 text-purple-600" />
                  <span className="text-sm sm:text-base font-medium text-purple-800">{project.duration}</span>
                </div>
                <div className="flex items-center bg-blue-50 rounded-full px-3 sm:px-4 py-2">
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="text-sm sm:text-base font-medium text-blue-800">{project.students.toLocaleString()} learners</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies You'll Use:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 mb-8 border border-yellow-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                Project Guide Coming Soon!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 text-center leading-relaxed">
                We're working on detailed step-by-step instructions for this project. 
                Check back soon for the complete guide!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg flex items-center justify-center">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Start Building (Coming Soon)
              </button>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
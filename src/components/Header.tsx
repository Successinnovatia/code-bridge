import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CodeBridge
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/learning-paths" 
              className={`transition-colors font-medium ${
                isActive('/learning-paths') 
                  ? 'text-purple-600' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Learning Paths
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors font-medium ${
                isActive('/projects') 
                  ? 'text-purple-600' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/events" 
              className={`transition-colors font-medium ${
                isActive('/events') 
                  ? 'text-purple-600' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/community" 
              className={`transition-colors font-medium ${
                isActive('/community') 
                  ? 'text-purple-600' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Community
            </Link>
            <Link 
              to="/mentorship" 
              className={`transition-colors font-medium ${
                isActive('/mentorship') 
                  ? 'text-purple-600' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Mentorship
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium"
            >
              Join Free
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu}>
          <div className="bg-white w-full max-w-sm h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CodeBridge
                </span>
              </Link>
              <button
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-4 py-6 space-y-6">
              <Link 
                to="/learning-paths" 
                className={`block text-lg font-medium py-2 ${
                  isActive('/learning-paths') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={closeMenu}
              >
                Learning Paths
              </Link>
              <Link 
                to="/projects" 
                className={`block text-lg font-medium py-2 ${
                  isActive('/projects') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                to="/events" 
                className={`block text-lg font-medium py-2 ${
                  isActive('/events') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={closeMenu}
              >
                Events
              </Link>
              <Link 
                to="/community" 
                className={`block text-lg font-medium py-2 ${
                  isActive('/community') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={closeMenu}
              >
                Community
              </Link>
              <Link 
                to="/mentorship" 
                className={`block text-lg font-medium py-2 ${
                  isActive('/mentorship') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={closeMenu}
              >
                Mentorship
              </Link>
              
              <div className="pt-6 border-t border-gray-200 space-y-4">
               
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium text-lg block text-center"
                >
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
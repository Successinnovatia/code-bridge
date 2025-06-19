import React from 'react';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">CodeBridge</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Bridging the gap between dreams and careers in technology. Join thousands who have 
              transformed their lives through our supportive community and proven learning paths.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                hello@codebridge.com
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                1-800-CODE-BRIDGE
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                Available Worldwide
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Learning Paths</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li><Link to="/learning-paths" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/learning-paths" className="hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link to="/learning-paths" className="hover:text-white transition-colors">Data Science</Link></li>
              <li><Link to="/learning-paths" className="hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li><Link to="/mentorship" className="hover:text-white transition-colors">Find a Mentor</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Join Study Groups</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Events & Workshops</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 CodeBridge. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
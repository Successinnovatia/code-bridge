import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LearningPathPage from './pages/LearningPathPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CourseStartPage from './pages/CourseStartPage';
import CommunityPage from './pages/CommunityPage';
import MentorshipPage from './pages/MentorshipPage';
import SignUpPage from './pages/SignUpPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import FAQPage from './pages/FAQPage';
import SuccessPage from './pages/SuccessPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning-paths" element={<LearningPathPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/course/:courseId/start" element={<CourseStartPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
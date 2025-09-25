import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isLinkedInBanner = location.pathname === '/linkedin-banner';

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isLinkedInBanner && <Navbar />}
      <main className={isLinkedInBanner ? '' : 'pt-20'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

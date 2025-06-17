import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import TechnologyPage from './pages/TechnologyPage';
import ImpactPage from './pages/ImpactPage';
import CommunityPage from './pages/CommunityPage';
import InnovationPage from './pages/InnovationPage';
import StudentRegistrationPage from './pages/StudentRegistrationPage';
import Footer from './components/Footer';
import AudioReader from './components/AudioReader';

function App() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const toggleAudio = () => {
    setIsAudioActive(!isAudioActive);
  };

  return (
    <Router>
      <div className={`min-h-screen ${
        isHighContrast ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}>
        <Header 
          isHighContrast={isHighContrast} 
          onToggleContrast={toggleHighContrast}
          isAudioActive={isAudioActive}
          onToggleAudio={toggleAudio}
        />
        
        <AudioReader 
          isActive={isAudioActive} 
          isHighContrast={isHighContrast}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage isHighContrast={isHighContrast} />} />
            <Route path="/about" element={<AboutPage isHighContrast={isHighContrast} />} />
            <Route path="/features" element={<FeaturesPage isHighContrast={isHighContrast} />} />
            <Route path="/technology" element={<TechnologyPage isHighContrast={isHighContrast} />} />
            <Route path="/impact" element={<ImpactPage isHighContrast={isHighContrast} />} />
            <Route path="/community" element={<CommunityPage isHighContrast={isHighContrast} />} />
            <Route path="/innovation" element={<InnovationPage isHighContrast={isHighContrast} />} />
            <Route path="/register" element={<StudentRegistrationPage isHighContrast={isHighContrast} />} />
          </Routes>
        </main>
        
        <Footer isHighContrast={isHighContrast} />
      </div>
    </Router>
  );
}

export default App;
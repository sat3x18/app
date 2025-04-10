import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreditsPage from './components/CreditsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route now loads the LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route for the Credits page */}
        <Route path="/credits" element={<CreditsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

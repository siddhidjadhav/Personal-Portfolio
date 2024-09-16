// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects'; // Import the Projects page
import Aboutme from './pages/Aboutme'; // Import the Aboutme page
import Portfolio_landing from './pages/Portfolio_landing'; // Import the Landing page
import Experience from './pages/Experience'; // Adjusted import for Experience

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio_landing />} />
        <Route path="./Projects" element={<Projects />} />
        <Route path="./Aboutme" element={<Aboutme />} />
        <Route path="./Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;

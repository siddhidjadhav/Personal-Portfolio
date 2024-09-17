import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects'; // Ensure this file exists
import Me from './pages/Me'; // Ensure this file exists and is named correctly
import Landing from './pages/Portfolio_landing'; // Ensure this file exists and is named correctly
import Experience from './pages/Experience'; // Ensure this file exists and is named correctly

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Landing />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Me" element={<Me />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;

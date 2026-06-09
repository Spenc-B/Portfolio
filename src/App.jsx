/* ============================================
   MAIN APP COMPONENT
   
   This is where everything comes together!
   
   STRUCTURE:
   1. UI Components (navigation, text sections)
   2. 3D Components (interactive 3D scene)
   3. Easy to understand, well-commented
   ============================================ */

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import HomePage from './pages/HomePage';
import PreviousRolesPage from './pages/PreviousRolesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/previous-roles" element={<PreviousRolesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

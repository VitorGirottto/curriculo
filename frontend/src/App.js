import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import CyberEffects from "./components/effects/CyberEffects";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App min-h-screen bg-black text-white relative overflow-x-hidden">
      <HashRouter>
        {/* Cyber Effects Background */}
        <CyberEffects />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/experiencias" element={<Experience />} />
            <Route path="/projetos" element={<Projects />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProgressionBar from "./components/ProgressionBar";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import { useOnboarding } from "./context/OnboardingContext";
import Success from "./components/Success";
import NotFound from "./components/NotFound";

function App() {
  const { currentStep, steps, isDarkMode } = useOnboarding();
  return (
    <div className={`flex flex-col w-screen min-h-auto md:h-screen  ${isDarkMode ? "bg-slate-800" : "bg-gray-100"}`}>
      <NavBar />
      <div className="flex flex-col md:flex-grow md:flex-row">
        <ProgressionBar />
        <Routes>
          <Route path="/" element={<Navigate to={`/form/${steps[currentStep].name.toLowerCase()}`} />} />
          <Route path="/form/:step" element={<MainContent />} />
          <Route path="/form/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

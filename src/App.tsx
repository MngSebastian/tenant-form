import React from "react";
import "./App.css";
import ProgressionBar from "./components/ProgressionBar";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import { useOnboarding } from "./context/OnboardingContext";
function App() {
  const { isDarkMode } = useOnboarding();
  return (
    <div className={`flex-scol w-screen h-screen ${isDarkMode ? "bg-slate-800" : "bg-gray-100"}`}>
      <NavBar />
      <div className="flex flex-col md:flex-row">
        <ProgressionBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

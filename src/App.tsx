import React from "react";
import "./App.css";
import ProgressionBar from "./components/ProgressionBar";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className={`md:flex w-screen h-screen bg-gray-100`}>
      <ProgressionBar />
      <MainContent />
    </div>
  );
}

export default App;

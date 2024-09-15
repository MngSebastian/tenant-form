import React from "react";
import "./App.css";
import ProgressionBar from "./components/ProgressionBar";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className={`flex-col md:fslex w-screen h-screen bg-gray-100`}>
      <NavBar />
      <div className="flex flex-col md:flex-row">
        <ProgressionBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

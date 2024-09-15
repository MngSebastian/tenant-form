import React from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";
function NavBar() {
  const { isDarkMode, handleDarkMode } = useOnboarding();
  return (
    <div className={`h-16 w-full ${isDarkMode ? "bg-gray-900" : "bg-white"} border-b-2`}>
      <div className="flex h-full justify-between items-center px-8">
        <p className={`${isDarkMode ? "text-white" : ""}`}>Buena</p>

        <button onClick={handleDarkMode}>
          {isDarkMode ? <Sun className={`${isDarkMode ? "text-yellow-600" : ""}`} /> : <Moon />}
        </button>
      </div>
    </div>
  );
}

export default NavBar;

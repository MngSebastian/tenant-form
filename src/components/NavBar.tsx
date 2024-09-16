import React from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";
function NavBar() {
  const { isDarkMode, handleDarkMode } = useOnboarding();
  return (
    <div className={`h-20 w-full ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white"} border-b-2`}>
      <div className="flex h-full justify-between items-center px-8">
        <p className={`${isDarkMode ? "text-white" : ""}`}>Buena</p>

        <button
          onClick={handleDarkMode}
          className={`flex items-center justify-center border ${
            isDarkMode ? "border-gray-300" : "border-gray-800"
          } rounded-full w-12 h-8`}
        >
          {isDarkMode ? (
            <Sun className="text-gray-300 hover:text-yellow-600" />
          ) : (
            <Moon className="text-blue-800 hover:text-blue-500" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;

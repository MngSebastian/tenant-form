import React from "react";
import { Link } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
function NotFound() {
  const { isDarkMode } = useOnboarding();
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
      <p className={`text-lg mb-4 ${isDarkMode ? "text-gray-200" : ""}`}>
        Oops! The page you are looking for does not exist.
      </p>
      <p className={`text-lg mb-4 ${isDarkMode ? "text-gray-200" : ""}`}>It might have been moved or deleted.</p>
      <Link
        to="/"
        className={`flex items-center px-4 rounded-md h-10 w-30 mb-2 ${
          isDarkMode
            ? "text-gray-100 bg-indigo-600 hover:text-gray-200 hover:bg-indigo-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Go back to the homepage.
      </Link>
    </div>
  );
}

export default NotFound;

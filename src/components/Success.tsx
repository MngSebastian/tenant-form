import React from "react";
import { CheckCircle } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";
function Success() {
  const { isDarkMode, handleReDoForm } = useOnboarding();

  return (
    <div className="flex flex-col items-center flex-grow mt-20">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
      <h2 className="text-2xl font-bol text-green-600 mb-2">Success.</h2>
      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-14`}>
        Your information has been submitted successfully.
      </p>

      <button
        className={`px-4 rounded-md h-10 w-30 mb-2 ${
          isDarkMode
            ? "text-gray-300 bg-indigo-600 hover:text-gray-200 hover:bg-indigo-700"
            : "bg-blue-600 text-gray-200 hover:bg-blue-700"
        }`}
        onClick={handleReDoForm}
      >
        Try the form again
      </button>
      <span className={isDarkMode ? "text-gray-300" : "text-gray-500"}>(For testing purposes only.)</span>
    </div>
  );
}

export default Success;

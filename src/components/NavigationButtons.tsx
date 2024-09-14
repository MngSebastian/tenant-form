import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function NavigationButtons() {
  const { currentStep, steps, handlePrevious, handleNext } = useOnboarding();

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white transition duration-300 text-gray-600
        hover:bg-gray-800 hover:text-white"
      >
        Back
      </button>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white transition duration-300 rounded-md
       hover:bg-blue-800"
      >
        Next
      </button>
    </div>
  );
}

export default NavigationButtons;

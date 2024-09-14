import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function NavigationButtons() {
  const { currentStep, steps, handlePrevious, handleNext, handleSubmit } = useOnboarding();

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={handlePrevious}
        className={`px-4 py-2 border border-gray-300 rounded-md bg-white transition duration-300 text-gray-600
         ${currentStep === 0 ? "cursor-not-allowed" : "hover:bg-gray-800 hover:text-white"}`}
        disabled={currentStep === 0}
      >
        Back
      </button>
      <button
        onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
        className="px-4 py-2 bg-blue-500 text-white transition duration-300 rounded-md
       hover:bg-blue-800"
      >
        {currentStep === steps.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default NavigationButtons;

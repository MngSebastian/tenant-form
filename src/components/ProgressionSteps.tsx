import React from "react";
import { CircleCheck } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";

function ProgressionSteps() {
  const { currentStep, steps, isSubmitted, isDarkMode } = useOnboarding();
  return (
    <>
      {steps.map((step, index) => (
        <div key={step.name} className="flex items-center mb-8 relative">
          <div className="w-12 h-12  flex items-center justify-center">
            <div
              className={`flex items-center justify-center rounded-full w-12 h-12 ${
                index === currentStep && !isSubmitted
                  ? "bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  : "shadow-[0_0_10px_rgba(220,220,220,1)] border border-gray-300 bg-white text-gray-600"
              } ${isDarkMode ? "text-gray-200 border-indigo-600 bg-gray-700" : ""}
                ${isDarkMode && index === currentStep && !isSubmitted ? "bg-indigo-800" : ""}
              `}
            >
              {index < currentStep || isSubmitted ? (
                <CircleCheck className={`w-8 h-8 ${isDarkMode ? "text-indigo-500" : "text-green-500"}`} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
          </div>
          <span
            className={`hidden md:inline ml-3 ${isDarkMode ? "text-white" : ""}
            ${
              index === currentStep && !isSubmitted
                ? isDarkMode
                  ? "font-semibold text-indigo-500" // Text color for dark mode when current step
                  : "font-semibold text-blue-500" // Text color for light mode when current step
                : "font-medium text-gray-600" // Default text color for non-current steps
            }
            
            `}
          >
            {step.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default ProgressionSteps;

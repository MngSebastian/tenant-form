import React from "react";
import { CircleCheck } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";

function ProgressionSteps() {
  const { currentStep, steps, isSubmitted, isDarkMode } = useOnboarding();

  return (
    <>
      {steps.map((step, index) => (
        <div key={step.name} className="flex items-center mb-8 relative">
          <div className=" md:w-12 md:h-12 flex items-center justify-center">
            <div
              className={`
              flex items-center justify-center rounded-full w-9 h-9 md:w-12 md:h-12
              ${
                index === currentStep && !isSubmitted
                  ? isDarkMode
                    ? "bg-indigo-800 text-white"
                    : "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700 text-gray-200 border-indigo-600"
                  : "bg-white text-gray-600 border-gray-300"
              }
              ${isDarkMode ? "shadow-[0_0_6px_#6969f4]" : "shadow-[0_0_10px_#c8c8c8]"}
              border shadow-lg
            `}
            >
              {index < currentStep || isSubmitted ? (
                <CircleCheck className={`w-6 h-6 md:w-8 md:h-8 ${isDarkMode ? "text-green-600" : "text-green-500"}`} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
          </div>
          <span
            className={`hidden md:inline ml-3
            ${
              index === currentStep && !isSubmitted
                ? isDarkMode
                  ? "font-semibold text-indigo-500" // Text color for dark mode when current step
                  : "font-semibold text-blue-500" // Text color for light mode when current step
                : "font-medium text-gray-500" // Default text color for non-current steps
            }
            
            `}
          >
            {step.name.replace(/([A-Z])/g, " $1").trim()}
          </span>
        </div>
      ))}
    </>
  );
}
export default ProgressionSteps;

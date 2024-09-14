import React from "react";
import { CircleCheck } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";

function ProgressionSteps() {
  const { currentStep, steps, isSubmitted } = useOnboarding();
  return (
    <>
      {steps.map((step, index) => (
        <div key={step.name} className="flex items-center mb-8 relative">
          <div className="w-12 h-12 flex items-center justify-center">
            <div
              className={`flex items-center justify-center rounded-full w-12 h-12 ${
                index === currentStep && !isSubmitted
                  ? "bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  : "shadow-[0_0_10px_rgba(220,220,220,1)] border border-gray-300 bg-white text-gray-600"
              }`}
            >
              {index < currentStep || isSubmitted ? (
                <CircleCheck className="w-8 h-8 text-green-500" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
          </div>
          <span
            className={`hidden md:inline ml-3 ${
              index === currentStep && !isSubmitted ? "font-semibold text-blue-500" : "font-medium texdt-gray-600"
            }`}
          >
            {step.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default ProgressionSteps;

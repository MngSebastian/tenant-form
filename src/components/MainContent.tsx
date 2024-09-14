import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function MainContent() {
  const { currentStep, steps, isSubmitted, isAnimating } = useOnboarding();
  return (
    <div className="flex-1 p-10">
      <div className="max-w-md mx-auto">
        {!isSubmitted ? (
          // add animation to this div later
          <div className="border-2 border-red-500">
            <h1 className="text-3xl font-bol mb-3">{steps[currentStep].question}</h1>
            {/* if current step is smaller than steps.length-1 add stepcontent componenet otherwise display summary */}
            {/* add navigation component */}
          </div>
        ) : (
          // if isSubmited, display Succes component.
          <p>a</p>
        )}
      </div>
    </div>
  );
}

export default MainContent;

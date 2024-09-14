import React from "react";
import { useOnboarding } from "../context/OnboardingContext";
import StepContent from "./StepContent";
import NavigationButtons from "./NavigationButtons";
import Summary from "./Summary";
import Success from "./Success";

function MainContent() {
  const { currentStep, steps, isSubmitted, isAnimating } = useOnboarding();
  return (
    <div className="flex-1 p-10">
      <div className="max-w-md mx-auto">
        {!isSubmitted ? (
          // add animation to this div later
          <div
            className={`transition-all duration-300 transform ${
              isAnimating ? "-translate-x-full opacity-0" : "-translate-x-0 opacity-100"
            }
            ${currentStep === steps.length - 1 ? "shadow-[0_0_10px_rgba(200,200,200,1)] rounded-lg p-4" : ""}`}
          >
            <h1 className="text-3xl font-bol mb-3">{steps[currentStep].question}</h1>
            {currentStep < steps.length - 1 ? <StepContent /> : <Summary />}
            <NavigationButtons />
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

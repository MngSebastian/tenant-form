import React, { useEffect } from "react";
import { useOnboarding } from "../context/OnboardingContext";
import { useNavigate, useParams } from "react-router-dom";
import StepContent from "./StepContent";
import NavigationButtons from "./NavigationButtons";
import Summary from "./Summary";
import Success from "./Success";

function MainContent() {
  const { currentStep, steps, isSubmitted, isAnimating, isDarkMode, goToStep } = useOnboarding();
  // const { step } = useParams();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const stepIndex = steps.findIndex((s) => s.name.toLowerCase() === step?.toLowerCase());

  //   if (stepIndex === -1) {
  //     // If the step in the URL is invalid, redirect to the first step
  //     navigate(`/form/${steps[0].name.toLowerCase()}`);
  //   } else if (stepIndex !== currentStep) {
  //     goToStep(stepIndex);
  //   }
  // }, [step, steps, currentStep, goToStep, navigate]);

  return (
    <div className="flex-1 p-10">
      <div className="max-w-md mx-auto">
        {!isSubmitted ? (
          <div
            className={`transition-all duration-300 transform ${
              isAnimating ? "-translate-x-full opacity-0" : "-translate-x-0 opacity-100"
            }
            ${currentStep === steps.length - 1 ? "shadow-[0_0_10px_rgba(200,200,200,1)] rounded-lg p-4" : ""}`}
          >
            <h1 className={`text-3xl mb-3 ${isDarkMode ? "text-gray-100" : "text-black"}`}>
              {steps[currentStep].question}
            </h1>
            {currentStep < steps.length - 1 ? <StepContent /> : <Summary />}
            <NavigationButtons />
          </div>
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
}

export default MainContent;

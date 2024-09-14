import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function NavigationButtons() {
  const { currentStep, steps } = useOnboarding();

  return (
    <div>
      <button>Back</button>
      <button>Next</button>
    </div>
  );
}

export default NavigationButtons;

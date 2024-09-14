import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function StepContent() {
  const { currentStep, steps, formData, errors, incomeOptions } = useOnboarding();
  return (
    <div className="space-y-2">
      {/* strictly equals 3 is not the best solution here incase something else is added and order changes */}
      {currentStep === 3 ? (
        <>
          {incomeOptions.map((option) => (
            <div key={option}>
              <input type="radio" name="income" value={option} checked={formData.income === option} />
              <label>{option}</label>
            </div>
          ))}
        </>
      ) : (
        <>
          <label htmlFor={steps[currentStep].name.toLowerCase()}></label>
          <input
            id={steps[currentStep].name.toLowerCase()}
            name={steps[currentStep].name.toLowerCase()}
            type={currentStep === 1 ? "email" : currentStep === 2 ? "tel" : "text"}
            placeholder={`Enter your ${steps[currentStep].name.toLowerCase()}`}
            required
          />
          {errors[steps[currentStep].name.toLowerCase()] && <p>{errors[steps[currentStep].name.toLowerCase()]}</p>}
        </>
      )}
    </div>
  );
}

export default StepContent;

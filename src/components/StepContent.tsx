import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function StepContent() {
  const { currentStep, steps, formData, errors, incomeOptions, handleInputChange, handleIncomeOptionChange } =
    useOnboarding();
  return (
    <div className="space-y-2">
      {/* strictly equals 3 is not the best solution here incase something else is added and order changes */}
      {currentStep === 3 ? (
        <>
          {incomeOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                name="income"
                value={option}
                checked={formData.income === option}
                onChange={() => handleIncomeOptionChange(option)}
                className="text-center w-10 h-10 mr-2"
              />
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
            value={formData[steps[currentStep].name.toLowerCase() as keyof typeof formData]}
            required
            onChange={handleInputChange}
            className={`mb-2 p-2 w-full rounded-lg shadow-[0_0_10px_rgba(100,100,100,0.5)] ${
              errors[steps[currentStep].name.toLowerCase()] ? "border-red-500" : ""
            }`}
          />

          {errors[steps[currentStep].name.toLowerCase()] && (
            <p className="text-red-500 ml-1">{errors[steps[currentStep].name.toLowerCase()]}</p>
          )}
        </>
      )}
    </div>
  );
}

export default StepContent;

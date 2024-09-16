import React from "react";
import { useOnboarding } from "../context/OnboardingContext";
import { CircleX } from "lucide-react";

function StepContent() {
  const {
    currentStep,
    steps,
    formData,
    errors,
    incomeOptions,
    isDarkMode,
    handleInputChange,
    handleIncomeOptionChange,
    handleClearInput,
  } = useOnboarding();

  return (
    <div className="space-y-2">
      {/* strictly equals 3 is not the best solution here incase something else is added or order steps changes */}
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
              <label className={`${isDarkMode ? "text-gray-300" : "text-balck"}`}>{option}</label>
            </div>
          ))}
        </>
      ) : (
        <>
          <label htmlFor={steps[currentStep].name.toLowerCase()}></label>
          <div className="relative">
            <input
              id={steps[currentStep].name.toLowerCase()}
              name={steps[currentStep].name.toLowerCase()}
              type={currentStep === 1 ? "email" : currentStep === 2 ? "tel" : "text"}
              placeholder={`Enter your ${steps[currentStep].name.toLowerCase()}`}
              value={formData[steps[currentStep].name.toLowerCase() as keyof typeof formData]}
              onChange={handleInputChange}
              className={`mb-2 p-2 w-full rounded-lg  ${
                isDarkMode
                  ? `bg-gray-900  text-gray-200 shadow-[0_0_10px_rgba(130,130,130,0.5)]`
                  : "bg-white shadow-[0_0_10px_rgba(100,100,100,0.5)]"
              } ${errors[steps[currentStep].name.toLowerCase()] ? "border-red-500" : ""}`}
              autoComplete="on"
              required
            />
            {formData[steps[currentStep].name.toLowerCase() as keyof typeof formData] && (
              <CircleX
                onClick={handleClearInput}
                className={`absolute right-3 top-5 transform -translate-y-1/2 ${
                  isDarkMode ? "text-indigo-600 hover:text-indigo-800" : "text-blue-600 hover:text-blue-800"
                }  rounded-full w-6 h-6 cursor-pointer`}
              />
            )}
          </div>
        </>
      )}
      <div className="h-5">
        {errors[steps[currentStep].name.toLowerCase()] && (
          <p className="text-red-500 ml-1">{errors[steps[currentStep].name.toLowerCase()]}</p>
        )}
      </div>
    </div>
  );
}

export default StepContent;

import { createContext, useContext, useState } from "react";
import steps from "../utils/steps";
import OnboardingContextType from "../utils/OnboardingContextType";

const incomeOptions = ["0-1.000", "1.000-2.000", "2.000-3.000", "3.000-4.000", ">4.000"];

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", income: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep = () => {
    const currentField = steps[currentStep].name.toLowerCase();
    const validationFunction = steps[currentStep].validation;
    if (validationFunction) {
      const error = validationFunction(formData[currentField as keyof typeof formData]);
      setErrors({ ...errors, [currentField]: error });
      return !error;
    }
    return true;
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(stepIndex);
        // add navigate when adding routes
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleIncomeOptionChange = (value: string) => {
    setFormData({ ...formData, income: value });
  };
  const handleNext = () => {
    if (validateStep() && currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        formData,
        isSubmitted,
        isAnimating,
        errors,
        steps,
        incomeOptions,
        goToStep,
        handleInputChange,
        handleIncomeOptionChange,
        handleNext,
        handlePrevious,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider.");
  }
  return context;
}

import { createContext, useContext, useEffect, useState } from "react";
import steps from "../utils/steps";
import OnboardingContextType from "../utils/OnboardingContextType";
import { useLocation, useNavigate } from "react-router-dom";

const incomeOptions = ["0-1.000", "1.000-2.000", "2.000-3.000", "3.000-4.000", ">4.000"];

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);
const STORAGE_KEY = "onboardingData";

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).currentStep : 0;
  });

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).formData : { name: "", email: "", phone: "", income: "" };
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).isDarkMode : false;
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();
  const location = useLocation();

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

  const handleSubmit = () => {};

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClearInput = () => {
    const currentField = steps[currentStep].name.toLowerCase();
    setFormData({
      ...formData,
      [currentField]: "",
    });
  };

  useEffect(() => {
    if (!isSubmitted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentStep, formData, isDarkMode }));
    }
  }, [currentStep, formData, isSubmitted, isDarkMode]);
  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        formData,
        isSubmitted,
        isAnimating,
        isDarkMode,
        errors,
        steps,
        incomeOptions,
        goToStep,
        handleInputChange,
        handleClearInput,
        handleIncomeOptionChange,
        handleNext,
        handlePrevious,
        handleSubmit,
        handleDarkMode,
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

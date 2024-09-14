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
  const [errors, setErrors] = useState({});

  return (
    <OnboardingContext.Provider
      value={{ currentStep, formData, isSubmitted, isAnimating, errors, steps, incomeOptions }}
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

import { createContext, useCallback, useContext, useEffect, useState } from "react";
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

  const validateAllSteps = useCallback(() => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    steps.forEach((step, index) => {
      const field = step.name.toLowerCase();
      if (step.validation) {
        const error = step.validation(formData[field as keyof typeof formData]);
        if (error) {
          isValid = false;
          newErrors[field] = error;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleIncomeOptionChange = (value: string) => {
    setFormData({ ...formData, income: value });
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

  const goToStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex >= 0 && stepIndex < steps.length) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentStep(stepIndex);
          navigate(`/form/${steps[stepIndex].name.toLowerCase()}`);
          setIsAnimating(false);
        }, 300);
      }
    },
    [navigate]
  );

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

  const handleSubmit = useCallback(() => {
    if (validateAllSteps()) {
      setIsSubmitted(true);
      navigate("/form/success");
      localStorage.removeItem(STORAGE_KEY);
      setFormData({ name: "", email: "", phone: "", income: "" });
      // setCurrentStep(0);
    } else {
      // If validation fails, navigate to first step with an error
      const firstErrorStep = steps.findIndex(
        (step) => errors[step.name.toLowerCase()] !== undefined && errors[step.name.toLowerCase()] !== ""
      );
      if (firstErrorStep !== -1) {
        goToStep(firstErrorStep);
      }
    }
  }, [navigate, validateAllSteps, errors, goToStep]);

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

  const handleReDoForm = useCallback(() => {
    setCurrentStep(0);
    setIsSubmitted(false);
    navigate("/", { replace: true });
  }, [navigate]);

  useEffect(() => {
    // Save to local storage.
    if (!isSubmitted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentStep, formData, isDarkMode }));
    }

    // handle URL changes
    const path = location.pathname.split("/").pop()?.toLowerCase();
    const stepIndex = steps.findIndex((step) => step.name.toLowerCase() === path);
    if (stepIndex !== -1 && stepIndex !== currentStep) {
      setCurrentStep(stepIndex);
    }
  }, [currentStep, formData, location, isSubmitted, isDarkMode]);

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
        handleReDoForm,
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

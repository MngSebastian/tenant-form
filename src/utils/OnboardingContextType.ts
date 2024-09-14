type OnboardingContextType = {
  currentStep: number;
  formData: { [key: string]: string };
  errors: { [key: string]: string };
  steps: {
    name: string;
    question: string;
    validation?: (value: string) => string;
  }[];
  incomeOptions: string[];
  isSubmitted: boolean;
  isAnimating: boolean;
};

export default OnboardingContextType;

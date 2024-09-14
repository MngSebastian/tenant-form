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
  isDarkMode: boolean;
  handleDarkMode: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncomeOptionChange: (value: string) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
  goToStep: (value: number) => void;
};

export default OnboardingContextType;

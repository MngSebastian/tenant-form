import React from "react";
import { CheckCircle } from "lucide-react";
import { useOnboarding } from "../context/OnboardingContext";
function Success() {
  const { isDarkMode } = useOnboarding();
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
      <h2 className="text-2xl font-bol text-green-600 mb-2">Success.</h2>
      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} `}>
        Your information has been submitted successfully.
      </p>
    </div>
  );
}

export default Success;

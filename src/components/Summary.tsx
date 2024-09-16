import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function Summary() {
  const { formData, isDarkMode } = useOnboarding();
  return (
    <div className="mb-6 space-y-2">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="flex gap-3">
          <span
            className={`${
              isDarkMode ? "text-gray-400" : "text-black"
            } font-semibold w-16 text-md md:text-lg capitalize`}
          >
            {key}:
          </span>
          <span className={`${isDarkMode ? "text-gray-200" : "text-black"} text-md md:text-lg`}>{value}</span>
        </div>
      ))}
    </div>
  );
}

export default Summary;

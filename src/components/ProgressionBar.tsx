import React from "react";
import ProgressionSteps from "./ProgressionSteps";
import { useOnboarding } from "../context/OnboardingContext";
function ProgressionBar() {
  const { isDarkMode } = useOnboarding();
  return (
    <div className={`md:w-64 h-full md:h-full ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="p-0 md:p-6 w-full md:h-[800px]">
        <h2
          className={`text-lg md:text-xl pt-4 pl-12 md:pl-0 font-semibold mb-6 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Onboarding Progress
        </h2>
        <div className="flex justify-center md:justify-start gap-6 md:gap-0 md:flex-col relative">
          <div className="absolute left-30 top-6 md:left-6 md:top-4 w-[300px] h-px bg-gray-400 md:w-px md:h-[calc(100%-60px)]"></div>
          <ProgressionSteps />
        </div>
      </div>
    </div>
  );
}

export default ProgressionBar;

import React from "react";
import ProgressionSteps from "./ProgressionSteps";
function ProgressionBar() {
  return (
    <div className="md:w-64 h-auto md:h-full bg-white shadow-md">
      <div className="p-6 w-full md:h-[800px]">
        <h2 className="text-xl font-semibold mb-6">Onboarding Progress</h2>
        <div className="flex justify-center md:justify-start gap-6 md:gap-0 md:flex-col relative">
          <div className="absolute left-14 top-6 md:left-6 md:top-4 w-[calc(100% - 110px)] h-px bg-gray-400 md:w-px md:h-[calc(100%-60px)]"></div>
          <ProgressionSteps />
        </div>
      </div>
    </div>
  );
}

export default ProgressionBar;

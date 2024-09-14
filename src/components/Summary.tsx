import React from "react";
import { useOnboarding } from "../context/OnboardingContext";

function Summary() {
  const { formData } = useOnboarding();
  return (
    <div className="mb-6 space-y-2">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="flex gap-2">
          <span className="font-semibold capitalize w-16">{key}:</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

export default Summary;

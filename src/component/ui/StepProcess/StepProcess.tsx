// stepprocess.tsx
import { useState } from "react";

export interface stepProcessProps {
  steps: string[];
  activeColor: string;
  lineColor?: string;
}

const StepProcess = ({ steps, activeColor }: stepProcessProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white `}
                style={{
                  backgroundColor: `${index === currentStep ? activeColor : "lightGrey"}`,
                }}
              >
                {index + 1}
              </div>
              <div>{step}</div>
              {index !== steps.length - 1 && (
                <div
                  className={`h-1 w-56 ml-2 mr-2`}
                  style={{
                    backgroundColor: `${index < currentStep ? "red" : "black"}`,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
          className="text-white bg-black font-semibold text-xs py-1 px-4 rounded-xl"
        >
          Previous
        </button>
        <div className="w-2"></div>
        <button
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          className="text-white bg-black font-semibold text-xs py-1 px-4 rounded-xl"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepProcess;

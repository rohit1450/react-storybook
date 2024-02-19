import { useState } from "react";

export interface stepProcessProps {
  steps: string[];
  activeColor: string;
  lineColor?: string;
  hasIcons: boolean;
  icons: React.ReactNode[];
  lineThickness?: string;
  detailComponent: JSX.Element[];
  vertical: boolean;
}

const StepProcess = ({
  steps,
  activeColor,
  hasIcons,
  icons,
  lineThickness,
  detailComponent,
  vertical,
}: stepProcessProps) => {
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
        <div
          className={`flex ${vertical && "flex-col"} gap-2 items-center justify-between`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex ${vertical && "flex-col"} items-center gap-2`}
            >
              <div
                className={`w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white cursor-pointer`}
                style={{
                  backgroundColor: `${index === currentStep ? activeColor : "lightGrey"}`,
                }}
                onClick={() => setCurrentStep(index)}
              >
                {hasIcons ? icons[index] : index + 1}
              </div>
              <div className="text-sm lg:text-base">{step}</div>
              {index !== steps.length - 1 && (
                <>
                  {vertical ? (
                    <div
                      className="h-20 bg-black"
                      style={{ width: `${lineThickness ?? "2px"}` }}
                    ></div>
                  ) : (
                    <div
                      className={`w-56 ml-2`}
                      style={{
                        backgroundColor: `${index < currentStep ? "red" : "black"}`,
                        height: `${lineThickness ?? "2px"}`,
                      }}
                    ></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={`flex justify-center gap-1 mt-4`}>
        {currentStep === steps.length - 1 ? (
          <>
            <div className="text-base font-semibold">
              All steps completed - you're finished
            </div>
            <div
              className="text-white bg-black font-semibold text-xs py-1 w-12 text-center rounded-xl cursor-pointer"
              onClick={() => setCurrentStep(0)}
            >
              reset
            </div>
          </>
        ) : (
          <>
            <button
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className="text-white bg-black font-semibold text-xs py-1 px-4 rounded-xl"
            >
              Previous
            </button>
            <button
              onClick={goToNextStep}
              disabled={currentStep === steps.length - 1}
              className="text-white bg-black font-semibold text-xs py-1 px-4 rounded-xl"
            >
              Next
            </button>
          </>
        )}
      </div>

      <div className="w-1/2 text-center mx-auto mt-5">
        {detailComponent[currentStep]}
      </div>
    </>
  );
};

export default StepProcess;

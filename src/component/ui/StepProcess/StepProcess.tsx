import { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
export interface stepProcessProps {
  steps: string[];
  activeColor: string;
  lineColor?: string;
  hasIcons: boolean;
  icons: React.ReactNode[];
  lineThickness?: string;
  vertical: boolean;
  measure?: string;
  detailComponents: {
    heading: string;
    content: string;
  }[];
  headingSize: string;
  contentSize: string;
  stepSize: string;
}

const StepProcess = ({
  steps,
  activeColor,
  hasIcons,
  icons,
  lineThickness,
  vertical,
  measure,
  detailComponents,
  headingSize,
  contentSize,
  stepSize,
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
      <div className={`${vertical && "flex gap-10 justify-center"}`}>
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
                  className={`rounded-full flex items-center justify-center text-white cursor-pointer`}
                  style={{
                    backgroundColor: `${index === currentStep ? activeColor : "lightGrey"}`,
                    height: measure ?? "2rem",
                    width: measure ?? "2rem",
                  }}
                  onClick={() => setCurrentStep(index)}
                >
                  {hasIcons ? (
                    index < currentStep ? (
                      <CheckBadgeIcon className="h-6 w-6" />
                    ) : (
                      icons[index]
                    )
                  ) : index < currentStep ? (
                    <CheckBadgeIcon className="h-6 w-6" />
                  ) : (
                    index + 1
                  )}
                </div>
                <div
                  className="font-semibold"
                  style={{ fontSize: stepSize ?? "16px" }}
                >
                  {step}
                </div>
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
        <div
          className={`w-1/2 ${vertical && "w-1/3"} text-center ${!vertical && "mx-auto"} mt-5`}
        >
          <h1
            className="font-semibold"
            style={{ fontSize: headingSize ?? "1.5rem" }}
          >
            {detailComponents[currentStep]["heading"]}
          </h1>
          <p style={{ fontSize: contentSize ?? "1rem" }}>
            {detailComponents[currentStep]["content"]}
          </p>
        </div>
      </div>
      <div className={`flex justify-center gap-1 mt-4`}>
        {currentStep === steps.length - 1 ? (
          <>
            <div className="text-base font-semibold">
              All steps are completed - everything else is done
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
    </>
  );
};

export default StepProcess;

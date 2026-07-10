import React from "react";
import { Check } from "lucide-react";

const steps = ["Address", "Delivery", "Payment", "Review"];
const CheckoutStepper = ({ currentStep }) => {
  return (
    <div className="mb-16">
      <CheckoutStepper currentStep={currentStep} />;
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const completed = currentStep > index + 1;
          const active = currentStep === index + 1;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300

                  ${
                    completed
                      ? "bg-stone-900 border-stone-900 text-white"
                      : active
                        ? "border-stone-900 text-stone-900 bg-white"
                        : "border-stone-300 text-stone-400 bg-white"
                  }`}
                >
                  {completed ? (
                    <Check size={22} />
                  ) : (
                    <span className="font-semibold">{index + 1}</span>
                  )}
                </div>

                <p
                  className={`mt-3 text-sm font-medium

                  ${active || completed ? "text-stone-900" : "text-stone-400"}`}
                >
                  {step}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 mx-2

                  ${completed ? "bg-stone-900" : "bg-stone-300"}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutStepper;

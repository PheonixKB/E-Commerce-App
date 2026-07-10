import React from "react";
import { ArrowLeft, ArrowRight, Truck, Zap } from "lucide-react";

import { DELIVERY_OPTIONS } from "../constants/Checkout";

const icons = {
  standard: Truck,
  express: Zap,
};

const DeliveryMethod = ({
  deliveryMethod,
  setDeliveryMethod,
  previousStep,
  nextStep,
}) => {
  return (
    <div className="flex flex-col gap-2 max-w-3xl mx-auto rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-semibold text-stone-900">
          Select Delivery Method
        </h2>

        <p className="mt-2 text-stone-500">
          Choose how you'd like your order to be delivered.
        </p>
      </div>

      {/* Delivery Options */}

      <div className="mt-8 space-y-5">
        {Object.values(DELIVERY_OPTIONS).map((option) => {
          const Icon = icons[option.id];

          const selected = deliveryMethod === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setDeliveryMethod(option.id)}
              className={`w-full rounded-xl border p-6 text-left transition-all duration-200

                ${
                  selected
                    ? "border-stone-900 bg-stone-100 shadow-sm"
                    : "border-stone-200 hover:border-stone-400 hover:bg-stone-50"
                }
              `}
            >
              <div className="flex items-start justify-between">
                {/* Left */}

                <div className="flex gap-5">
                  <div
                    className={`rounded-full p-3

                    ${
                      selected
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">
                      {option.name}
                    </h3>

                    <p className="mt-1 text-sm text-stone-500">
                      {option.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-6 text-sm">
                      <span className="font-medium text-stone-700">
                        {option.estimatedLabel} Business Days
                      </span>

                      <span className="font-semibold text-stone-900">
                        {option.price === 0 ? "FREE" : `$${option.price}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Radio */}

                <div
                  className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all

                  ${selected ? "border-stone-900" : "border-stone-300"}`}
                >
                  {selected && (
                    <div className="h-3 w-3 rounded-full bg-stone-900" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info Box */}

      <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-5">
        <h4 className="font-medium text-stone-900">Shipping Information</h4>

        <ul className="mt-3 space-y-2 text-sm text-stone-600">
          <li>• Orders are processed within 24 hours.</li>
          <li>• Tracking details are shared after dispatch.</li>
          <li>• Delivery timelines may vary during holidays.</li>
          <li>• Free shipping applies automatically where eligible.</li>
        </ul>
      </div>

      {/* Buttons */}

      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="flex items-center gap-2 rounded-lg border border-stone-300 px-6 py-3 font-medium text-stone-700 hover:bg-stone-100 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="flex items-center gap-2 rounded-lg bg-stone-900 px-8 py-3 font-medium text-white hover:bg-stone-800 transition"
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DeliveryMethod;

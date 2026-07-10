import React from "react";
import { CreditCard, Wallet, BadgeIndianRupee } from "lucide-react";

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
  previousStep,
  nextStep,
}) => {
  return (
    <section className="max-w-3xl flex flex-col gap-2 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          Payment Method
        </h2>

        <p className="mt-2 text-sm text-stone-500">
          Select your preferred payment option.
        </p>
      </div>

      {/* Payment Options */}

      <div className="flex flex-col gap-2 space-y-5">
        {/* Cash on Delivery */}

        <button
          type="button"
          onClick={() => setPaymentMethod("cod")}
          className={`w-full flex items-center justify-between rounded-xl border p-5 transition-all duration-300 ${
            paymentMethod === "cod"
              ? "border-stone-900 bg-stone-100 ring-2 ring-stone-200"
              : "border-stone-300 hover:border-stone-500 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100">
              <Wallet size={24} className="text-stone-700" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-stone-900">Cash on Delivery</h3>

              <p className="text-sm text-stone-500">
                Pay when your order arrives.
              </p>
            </div>
          </div>

          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
              paymentMethod === "cod"
                ? "border-stone-900 bg-stone-900"
                : "border-stone-400"
            }`}
          >
            {paymentMethod === "cod" && (
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            )}
          </div>
        </button>

        {/* Razorpay */}

        <button
          type="button"
          onClick={() => setPaymentMethod("razorpay")}
          className={`w-full flex items-center justify-between rounded-xl border p-5 transition-all duration-300 ${
            paymentMethod === "razorpay"
              ? "border-stone-900 bg-stone-100 ring-2 ring-stone-200"
              : "border-stone-300 hover:border-stone-500 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <BadgeIndianRupee size={24} className="text-blue-600" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-stone-900">Razorpay</h3>

              <p className="text-sm text-stone-500">
                UPI, Cards, Net Banking & Wallets
              </p>
            </div>
          </div>

          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
              paymentMethod === "razorpay"
                ? "border-stone-900 bg-stone-900"
                : "border-stone-400"
            }`}
          >
            {paymentMethod === "razorpay" && (
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            )}
          </div>
        </button>

        {/* Stripe */}

        <button
          type="button"
          onClick={() => setPaymentMethod("stripe")}
          className={`w-full flex items-center justify-between rounded-xl border p-5 transition-all duration-300 ${
            paymentMethod === "stripe"
              ? "border-stone-900 bg-stone-100 ring-2 ring-stone-200"
              : "border-stone-300 hover:border-stone-500 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
              <CreditCard size={24} className="text-indigo-600" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-stone-900">
                Credit / Debit Card
              </h3>

              <p className="text-sm text-stone-500">
                Secure payments powered by Stripe
              </p>
            </div>
          </div>

          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
              paymentMethod === "stripe"
                ? "border-stone-900 bg-stone-900"
                : "border-stone-400"
            }`}
          >
            {paymentMethod === "stripe" && (
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            )}
          </div>
        </button>
      </div>

      {/* Navigation */}

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="rounded-xl border border-stone-300 px-6 py-3 font-medium text-stone-700 transition hover:bg-stone-100"
        >
          ← Previous
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="rounded-xl bg-stone-900 px-8 py-3 font-medium text-white transition hover:bg-stone-800"
        >
          Review Order →
        </button>
      </div>
    </section>
  );
};

export default PaymentMethod;

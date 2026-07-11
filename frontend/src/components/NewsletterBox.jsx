import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToastContext } from "../context/toast/ToastContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterBox = () => {
  const navigate = useNavigate();
  const { showToast } = useToastContext();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const trimmedEmail = email.trim();

    // Empty email
    if (!trimmedEmail) {
      showToast("Email address cannot be empty.", "error");
      return;
    }

    // Email validation
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    // Success
    showToast("Redirecting to login...", "success");

    setTimeout(() => {
      navigate("/login", {
        state: {
          email: trimmedEmail,
        },
      });
    }, 800);
  };

  return (
    <div className="flex flex-col gap-5 max-w-8xl mt-24 pt-20">
      <div className="border-t border-stone-200"></div>
      <div className="flex flex-col gap-2 w-full mx-auto text-center">
        <h2 className="text-3xl font-semibold text-stone-900">
          Subscribe & Get 20% Off
        </h2>

        <p className="mt-4 text-stone-500">
          Join our newsletter to receive updates on new arrivals, exclusive
          offers, and fashion inspiration.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
          />

          <button
            type="button"
            onClick={handleSubscribe}
            className="w-full sm:w-40 h-10 rounded-xl bg-stone-900 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-stone-800 hover:shadow-lg active:scale-95"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBox;

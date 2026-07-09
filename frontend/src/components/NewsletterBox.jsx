import React, {useState, useRef} from "react";
import Toast from "../components/Toast";

import { useNavigate } from "react-router-dom";

const NewsletterBox = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const toastTimer = useRef(null);
  const showToast = (message, type = "error") => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setToast({
      show: true,
      message,
      type,
    });

    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 4000);
  };
  const handleSubscribe = () => {
    const trimmedEmail = email.trim();

    // Empty email
    if (!trimmedEmail) {
      showToast("Email address cannot be empty.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      showToast("Please enter a valid email address.");
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
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });
  return (
    <>
      <div className="mt-24 border-t border-stone-200 pt-20">
        <div className="max-w-8xl mx-auto text-center">
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
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast((prev) => ({
            ...prev,
            show: false,
          }))
        }
      />
    </>
  );
};

export default NewsletterBox;

import React, { useContext, useState, useRef } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const About = () => {
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
    <section className="flex flex-col gap-6 max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
      {/* Page Title */}
      <div className="text-center mb-16">
        <Title text1="ABOUT" text2="US" />

        <p className="max-w-4xl mx-auto mt-6 text-gray-500 leading-8 lg:translate-x-[140px] xl:translate-x-80">
          Welcome to Forever, your trusted destination for stylish and
          affordable fashion. We believe everyone deserves clothing that
          combines quality, comfort, and timeless design.
        </p>
      </div>

      {/* About Section */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div>
          <img
            src={assets.about_img}
            alt="About Forever"
            className="rounded-xl shadow-md w-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 text-gray-600 leading-8">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-3xl font-semibold text-stone-800">Our Story</h2>
            <p>
              Forever was created with a simple vision — to make fashion
              accessible to everyone. Whether you're shopping for everyday
              essentials, seasonal collections, or statement outfits, we bring
              together carefully selected styles for men, women, and children.
            </p>

            <p>
              We work closely with trusted manufacturers to ensure every product
              meets our standards for quality, comfort, and durability. Every
              collection is thoughtfully curated to help you express your unique
              style with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-stone-800 mb-3">
              Our Mission
            </h3>

            <p>
              Our mission is to provide fashionable clothing at affordable
              prices while delivering an exceptional shopping experience. From
              secure checkout to fast delivery and reliable customer support,
              we're committed to making online shopping simple and enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex flex-col gap-2">
        <div className="text-center mb-12">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-stone-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-stone-800">
              Premium Quality
            </h3>

            <p className="text-gray-600 leading-7">
              Carefully selected fabrics and craftsmanship ensure lasting
              comfort and style.
            </p>
          </div>

          <div className="border border-stone-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-stone-800">
              Fast Delivery
            </h3>

            <p className="text-gray-600 leading-7">
              Reliable shipping and quick order processing so your favorite
              styles reach you on time.
            </p>
          </div>

          <div className="border border-stone-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-stone-800">
              Customer First
            </h3>

            <p className="text-gray-600 leading-7">
              Dedicated support, hassle-free returns, and secure shopping every
              step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Subscibe Section */}
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
    </section>
  );
};

export default About;

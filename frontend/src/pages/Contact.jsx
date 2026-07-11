import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <section className="flex flex-col gap-4 max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
      {/* Page Title */}
      <div className="text-center mb-16">
        <Title text1="CONTACT" text2="US" />

        <p className="max-w-8xl mx-auto mt-6 text-gray-500 leading-8">
          We'd love to hear from you. Whether you have a question about our
          products, orders, shipping, or anything else, our team is always ready
          to help.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div>
          <img
            src={assets.contact_img}
            alt="Contact Forever"
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right Information */}
        <div className="flex flex-col gap-4 space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-stone-800 mb-5">
              Visit Our Store
            </h2>

            <div className="text-gray-600 leading-7">
              <p>Forever Fashion</p>
              <p>123 Fashion Street</p>
              <p>Bharuch, Gujarat 392001</p>
              <p>India</p>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-8">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              Contact Information
            </h3>

            <div className="flex flex-col gap-2 text-gray-600">
              <p>
                <span className="font-medium text-stone-700">Phone:</span> +91
                98765 43210
              </p>

              <p>
                <span className="font-medium text-stone-700">Email:</span>{" "}
                support@forever.com
              </p>

              <p>
                <span className="font-medium text-stone-700">
                  Customer Care:
                </span>{" "}
                Mon – Sat | 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-stone-200 pt-8">
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">
                Careers at Forever
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                We're always looking for passionate people to join our growing
                team. Explore exciting opportunities and help us shape the
                future of fashion.
              </p>
            </div>
            <div className="text-center">
              <button className="border border-stone-700 px-8 py-3 rounded-lg text-stone-700 hover:bg-stone-700 hover:text-white transition-all duration-300">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Letter Box */}
      <NewsletterBox />
    </section>
  );
};

export default Contact;

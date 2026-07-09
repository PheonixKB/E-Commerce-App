import React, { useContext, useState, useRef } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  
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

      {/* News Letter Box */}
      <NewsletterBox />
    </section>
  );
};

export default About;

import React, { useState } from "react";

const tabs = [
  "Description",
  "Shipping",
  "Returns",
];

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState("Description");

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="space-y-5">
            <p className="text-gray-600 leading-8">
              {product.description}
            </p>

            <p className="text-gray-600 leading-8">
              This {product.name.toLowerCase()} is crafted using premium-quality
              fabric to provide excellent durability and all-day comfort.
              Designed with a modern fit, it features practical pockets,
              quality stitching, and a timeless style suitable for casual
              outings, layering, and everyday wear.
            </p>
          </div>
        );

      case "Shipping":
        return (
          <div className="space-y-4 text-gray-600 leading-8">
            <p>• Free shipping on orders over $100.</p>
            <p>• Orders are processed within 24 hours.</p>
            <p>• Estimated delivery: 3–7 business days.</p>
            <p>• Live order tracking is available.</p>
            <p>• Cash on Delivery is available in selected locations.</p>
          </div>
        );

      case "Returns":
        return (
          <div className="space-y-4 text-gray-600 leading-8">
            <p>• Easy 7-Day Return Policy.</p>
            <p>• Items must be unused and in original packaging.</p>
            <p>• Refunds are processed after inspection.</p>
            <p>• Exchanges are available for size-related issues.</p>
            <p>• Customer Support is available 24/7.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="mt-20 flex flex-col gap-2 max-w-8xl">

      {/* ================= Tabs ================= */}

      <div className="flex max-w-8xl w-full gap-10 border-b border-gray-200 overflow-x-auto">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 whitespace-nowrap text-base transition-all duration-300 ${
              activeTab === tab
                ? "font-semibold text-black border-b-2 border-black"
                : "text-gray-500 border-b-2 border-transparent hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* ================= Content ================= */}

      <div className="pt-8 max-w-4xl">

        {renderContent()}

      </div>

    </section>
  );
};

export default ProductDetails;
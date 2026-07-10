import React from "react";

const AddressForm = ({ shippingInfo, handleInputChange }) => {
  return (
    <section className="flex flex-col max-w-8xl gap-2 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-stone-900">
          Shipping Address
        </h2>

        <p className="mt-2 text-sm text-stone-500">
          Enter your delivery details below.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleInputChange}
              placeholder="John"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={shippingInfo.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>
        </div>

        {/* Email & Phone */}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              placeholder="+91 9876543210"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>
        </div>

        {/* Street */}

        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">
            Street Address
          </label>

          <input
            type="text"
            name="street"
            value={shippingInfo.street}
            onChange={handleInputChange}
            placeholder="123 Fashion Street"
            className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
          />
        </div>

        {/* City & State */}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              City
            </label>

            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              placeholder="Mumbai"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              State
            </label>

            <input
              type="text"
              name="state"
              value={shippingInfo.state}
              onChange={handleInputChange}
              placeholder="Maharashtra"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>
        </div>

        {/* Zip & Country */}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              ZIP Code
            </label>

            <input
              type="text"
              name="zipCode"
              value={shippingInfo.zipCode}
              onChange={handleInputChange}
              placeholder="400001"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-700">
              Country
            </label>

            <input
              type="text"
              name="country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              placeholder="India"
              className="w-full sm:w-[480px] h-10 rounded-xl border border-stone-300 bg-white px-5 text-stone-700 placeholder:text-stone-400 outline-none transition-all duration-300 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressForm;

import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

import {
  DELIVERY_OPTIONS,
  PAYMENT_OPTIONS,
} from "../constants/Checkout";

const ReviewOrder = ({
  address,
  deliveryMethod,
  paymentMethod,
  orderedItems,
  pricing,
  previousStep,
  placeOrder,
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* ================= Address ================= */}

      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">

        <div className="flex items-center gap-3 mb-5">
          <MapPin className="text-stone-700" size={22} />
          <h2 className="text-xl font-semibold text-stone-900">
            Shipping Address
          </h2>
        </div>

        <div className="text-stone-600 leading-7">

          <p className="font-medium text-stone-900">
            {address.firstName} {address.lastName}
          </p>

          <p>{address.street}</p>

          <p>
            {address.city}, {address.state}
          </p>

          <p>
            {address.zipCode}, {address.country}
          </p>

          <p className="mt-3">
            {address.email}
          </p>

          <p>{address.phone}</p>

        </div>

      </div>

      {/* ================= Delivery + Payment ================= */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-4">

            <Truck className="text-stone-700" size={22} />

            <h2 className="text-lg font-semibold">
              Delivery
            </h2>

          </div>

          <p className="font-medium">
            {DELIVERY_OPTIONS[deliveryMethod].name}
          </p>

          <p className="text-sm text-stone-500 mt-2">
            {DELIVERY_OPTIONS[deliveryMethod].description}
          </p>

          <p className="text-sm text-stone-500 mt-2">
            Estimated Delivery:
            {" "}
            {DELIVERY_OPTIONS[deliveryMethod].estimatedDays}
          </p>

        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-4">

            <CreditCard className="text-stone-700" size={22} />

            <h2 className="text-lg font-semibold">
              Payment
            </h2>

          </div>

          <p className="font-medium">
            {PAYMENT_OPTIONS[paymentMethod].name}
          </p>

          <p className="text-sm text-stone-500 mt-2">
            {PAYMENT_OPTIONS[paymentMethod].description}
          </p>

        </div>

      </div>

      {/* ================= Ordered Products ================= */}

      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">

        <div className="flex items-center gap-3 mb-6">

          <Package className="text-stone-700" size={22} />

          <h2 className="text-xl font-semibold">
            Order Items
          </h2>

        </div>

        <div className="space-y-5">

          {orderedItems.map((item) => (

            <div
              key={`${item.productId}-${item.variant.size}`}
              className="flex flex-col sm:flex-row gap-5 border-b border-stone-200 pb-5 last:border-none"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-36 rounded-lg object-cover bg-stone-100"
              />

              <div className="flex-1">

                <h3 className="font-semibold text-lg text-stone-900">
                  {item.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-6 text-sm text-stone-600">

                  <p>
                    Size:
                    {" "}
                    <span className="font-medium">
                      {item.variant.size}
                    </span>
                  </p>

                  <p>
                    Qty:
                    {" "}
                    <span className="font-medium">
                      {item.quantity}
                    </span>
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="font-semibold text-lg text-stone-900">
                  ${item.total.toFixed(2)}
                </p>

                <p className="text-sm text-stone-500 mt-2">
                  ${item.price.toFixed(2)} each
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= Summary ================= */}

      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Order Summary
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">

            <span className="text-stone-600">
              Subtotal
            </span>

            <span>
              ${pricing.subtotal.toFixed(2)}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-stone-600">
              Shipping
            </span>

            <span>
              ${pricing.shipping.toFixed(2)}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-stone-600">
              Discount
            </span>

            <span>
              -${pricing.discount.toFixed(2)}
            </span>

          </div>

          <div className="border-t pt-5 flex justify-between text-xl font-bold">

            <span>Total</span>

            <span>
              ${pricing.total.toFixed(2)}
            </span>

          </div>

        </div>

      </div>

      {/* ================= Buttons ================= */}

      <div className="flex flex-col sm:flex-row justify-between gap-4">

        <button
          onClick={previousStep}
          className="flex items-center justify-center gap-2 border border-stone-300 rounded-lg px-6 py-3 hover:bg-stone-100 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={placeOrder}
          className="flex items-center justify-center gap-2 bg-stone-900 text-white rounded-lg px-8 py-3 hover:bg-stone-800 transition"
        >
          <CheckCircle2 size={20} />
          Place Order
        </button>

      </div>

    </div>
  );
};

export default ReviewOrder;
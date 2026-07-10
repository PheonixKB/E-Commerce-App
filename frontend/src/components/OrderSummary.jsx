import React, { useContext, useMemo } from "react";
import { ArrowRight } from "lucide-react";

import { ShopContext } from "../context/ShopContextDefinition";

const OrderSummary = ({
  cartItems,
  products,
  paymentMethod,
  deliveryMethod,
  onPlaceOrder,
}) => {
  const { currency, delivery_fee } = useContext(ShopContext);

  const orderedItems = useMemo(() => {
    const items = [];

    for (const productId in cartItems) {
      const product = products.find((p) => p._id === productId);

      if (!product) continue;

      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];

        if (quantity > 0) {
          items.push({
            ...product,
            size,
            quantity,
          });
        }
      }
    }

    return items;
  }, [cartItems, products]);

  const subtotal = orderedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    deliveryMethod === "express"
      ? 99
      : subtotal > 0
      ? delivery_fee
      : 0;

  const total = subtotal + shipping;

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">

      {/* Heading */}

      <h2 className="text-2xl font-semibold text-stone-900">
        Order Summary
      </h2>

      <p className="mt-2 text-sm text-stone-500">
        Review your order before placing it.
      </p>

      {/* Products */}

      <div className="mt-8 space-y-5 max-h-80 overflow-y-auto pr-2">

        {orderedItems.length === 0 ? (
          <p className="text-sm text-stone-500">
            Your cart is empty.
          </p>
        ) : (
          orderedItems.map((item) => (
            <div
              key={`${item._id}-${item.size}`}
              className="flex gap-4"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="h-20 w-20 rounded-xl bg-stone-100 object-cover"
              />

              <div className="flex-1">

                <h3 className="font-medium text-stone-900">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Size: {item.size}
                </p>

                <p className="text-sm text-stone-500">
                  Qty: {item.quantity}
                </p>

              </div>

              <p className="font-semibold text-stone-900">
                {currency}
                {item.price * item.quantity}
              </p>

            </div>
          ))
        )}

      </div>

      {/* Totals */}

      <div className="mt-8 space-y-4 border-t border-stone-200 pt-6">

        <div className="flex justify-between text-stone-600">
          <span>Subtotal</span>

          <span>
            {currency}
            {subtotal}
          </span>
        </div>

        <div className="flex justify-between text-stone-600">
          <span>Shipping</span>

          <span>
            {currency}
            {shipping}
          </span>
        </div>

        <div className="flex justify-between text-stone-600">
          <span>Payment</span>

          <span className="capitalize">
            {paymentMethod}
          </span>
        </div>

        <div className="flex justify-between border-t border-stone-200 pt-4 text-lg font-bold text-stone-900">

          <span>Total</span>

          <span>
            {currency}
            {total}
          </span>

        </div>

      </div>

      {/* Place Order */}

      <button
        onClick={onPlaceOrder}
        disabled={orderedItems.length === 0}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-stone-900 py-4 font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-400"
      >
        Place Order

        <ArrowRight size={20} />
      </button>

    </aside>
  );
};

export default OrderSummary;
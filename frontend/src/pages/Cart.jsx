import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContextDefinition";
import Title from "../components/Title";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const {
    products,
    cartItems,
    removeFromCart,
    currency,
    delivery_fee,
  } = useContext(ShopContext);

  // Convert cart object into an array for rendering
  const cartData = [];

  for (const itemId in cartItems) {
    const product = products.find((p) => p._id === itemId);

    if (!product) continue;

    for (const size in cartItems[itemId]) {
      cartData.push({
        ...product,
        size,
        quantity: cartItems[itemId][size],
      });
    }
  }

  // Calculate subtotal
  const subtotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal + (subtotal > 0 ? delivery_fee : 0);

  return (
    <section className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 py-12">

      {/* Heading */}
      <div className="mb-10">
        <Title text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">Your cart is empty.</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">

            {cartData.map((item) => (
              <div
                key={`${item._id}-${item.size}`}
                className="flex items-center justify-between border border-stone-200 rounded-lg p-5"
              >
                {/* Left */}
                <div className="flex items-center gap-5">

                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-28 rounded-lg"
                  />

                  <div>

                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Size: {item.size}
                    </p>

                    <p className="mt-2 font-medium">
                      {currency}
                      {item.price}
                    </p>

                  </div>

                </div>

                {/* Right */}
                <div className="flex items-center gap-8">

                  <span className="font-medium">
                    Qty: {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      removeFromCart(item._id, item.size)
                    }
                  >
                    <Trash2 className="text-red-500 hover:text-red-700" />
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* Totals */}

          <div className="mt-16 flex justify-end">

            <div className="w-full max-w-md border border-stone-200 rounded-lg p-8">

              <h2 className="text-xl font-semibold mb-6">
                Cart Total
              </h2>

              <div className="flex justify-between py-3 border-b">
                <span>Subtotal</span>
                <span>
                  {currency}
                  {subtotal}
                </span>
              </div>

              <div className="flex justify-between py-3 border-b">
                <span>Shipping</span>
                <span>
                  {currency}
                  {delivery_fee}
                </span>
              </div>

              <div className="flex justify-between py-4 text-lg font-semibold">
                <span>Total</span>
                <span>
                  {currency}
                  {total}
                </span>
              </div>

              <button className="mt-6 w-full bg-stone-700 text-white py-3 rounded-md hover:bg-stone-900 transition">
                Proceed to Checkout
              </button>

            </div>

          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
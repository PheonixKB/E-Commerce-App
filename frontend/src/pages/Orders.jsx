import React from "react";
import { Package, Truck, CheckCircle2, Clock3 } from "lucide-react";

import Title from "../components/Title";
import { useUIContext } from "../context/ui/UIContext";
import { useCheckoutContext } from "../context/checkout/CheckoutContext";

const statusIcon = (status) => {
  switch (status) {
    case "Processing":
      return <Clock3 size={18} className="text-amber-500" />;

    case "Shipped":
      return <Truck size={18} className="text-blue-500" />;

    case "Delivered":
      return <CheckCircle2 size={18} className="text-green-600" />;

    default:
      return <Package size={18} />;
  }
};

const formatDate = (isoString) => {
  return new Date(isoString).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const Orders = () => {
  const { currency } = useUIContext();
  const { orders } = useCheckoutContext();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
      {/* Heading */}
      <div className="text-center mb-14">
        <Title text1="MY" text2="ORDERS" />

        <p className="mt-4 text-gray-500">
          Track your purchases and monitor their delivery status.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition"
            >
              {/* Order header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <p className="text-sm text-gray-500">Order</p>
                  <p className="font-semibold text-stone-900">
                    {order.orderId}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  Ordered on {formatDate(order.orderDate)}
                </p>

                <div className="flex items-center gap-2 font-medium">
                  {statusIcon(order.orderStatus.current)}
                  {order.orderStatus.current}
                </div>
              </div>

              {/* Items in this order */}
              <div className="space-y-5">
                {order.items.map((item) => (
                  <div
                    key={`${item.productId}-${item.variant.size}`}
                    className="flex gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-28 rounded-xl object-cover bg-stone-100"
                    />

                    <div className="flex-1">
                      <h2 className="font-semibold text-stone-900">
                        {item.name}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.category} • {item.subCategory}
                      </p>

                      <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Quantity:</span>{" "}
                          {item.quantity}
                        </p>

                        <p>
                          <span className="font-medium">Size:</span>{" "}
                          {item.variant.size}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold text-stone-900">
                      {currency}
                      {item.total.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer: track + order total */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center">
                <button className="border border-stone-800 rounded-lg py-2.5 px-6 hover:bg-stone-900 hover:text-white transition">
                  Track Order
                </button>

                <p className="text-xl font-bold text-stone-900">
                  {currency}
                  {order.pricing.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Orders;

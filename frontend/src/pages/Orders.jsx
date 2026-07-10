import React, { useContext } from "react";
import { Package, Truck, CheckCircle2, Clock3 } from "lucide-react";

import Title from "../components/Title";
import { ShopContext } from "../context/ShopContextDefinition";

const Orders = () => {
  const { currency } = useContext(ShopContext);

  // Temporary data
  const orders = [
    {
      id: 1,
      name: "Men Blue Denim Jacket",
      category: "Men",
      subCategory: "Winterwear",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
      quantity: 1,
      size: "M",
      price: 350,
      status: "Processing",
      date: "14 Jul 2026",
    },
    {
      id: 2,
      name: "Oversized Hoodie",
      category: "Women",
      subCategory: "Winterwear",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
      quantity: 2,
      size: "L",
      price: 499,
      status: "Shipped",
      date: "12 Jul 2026",
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      category: "Men",
      subCategory: "Topwear",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      quantity: 1,
      size: "XL",
      price: 199,
      status: "Delivered",
      date: "08 Jul 2026",
    },
  ];

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

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

      {/* Heading */}

      <div className="text-center mb-14">
        <Title text1="MY" text2="ORDERS" />

        <p className="mt-4 text-gray-500">
          Track your purchases and monitor their delivery status.
        </p>
      </div>

      <div className="space-y-8">

        {orders.map((order) => (

          <div
            key={order.id}
            className="border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition"
          >

            <div className="flex flex-col md:flex-row gap-6">

              {/* Image */}

              <img
                src={order.image}
                alt={order.name}
                className="w-32 h-40 rounded-xl object-cover bg-stone-100"
              />

              {/* Details */}

              <div className="flex-1 flex flex-col justify-between">

                <div>

                  <h2 className="text-xl font-semibold text-stone-900">
                    {order.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {order.category} • {order.subCategory}
                  </p>

                  <div className="flex flex-wrap gap-6 mt-5 text-sm text-gray-600">

                    <p>
                      <span className="font-medium">Quantity:</span>{" "}
                      {order.quantity}
                    </p>

                    <p>
                      <span className="font-medium">Size:</span>{" "}
                      {order.size}
                    </p>

                  </div>

                  <p className="mt-5 text-2xl font-bold">
                    {currency}
                    {order.price}
                  </p>

                </div>

              </div>

              {/* Status */}

              <div className="md:w-56 flex flex-col justify-between">

                <div>

                  <div className="flex items-center gap-2 font-medium">

                    {statusIcon(order.status)}

                    {order.status}

                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Ordered on {order.date}
                  </p>

                </div>

                <button
                  className="mt-8 border border-stone-800 rounded-lg py-3 px-6 hover:bg-stone-900 hover:text-white transition"
                >
                  Track Order
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Orders;
import React, { useContext, useState } from "react";
import {
  Star,
  StarHalf,
  ShoppingCart,
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Minus,
  Plus,
} from "lucide-react";

import { ShopContext } from "../context/ShopContextDefinition";

const ProductInfo = ({ product }) => {
  const { currency, addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "S");

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Change this if your addToCart function accepts quantity.
    addToCart(product._id, selectedSize);
  };

  return (
    <div className="flex flex-col gap-2 lg:gap-5 lg:w-[500px]">
      {/* ================= Product Name ================= */}

      <h1 className="text-3xl lg:text-4xl font-bold text-black">
        {product.name}
      </h1>

      {/* ================= Rating ================= */}

      <div className="flex items-center gap-3 mt-5">
        <div className="flex text-orange-400">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <StarHalf size={20} fill="currentColor" />
        </div>

        <span className="text-gray-500 text-sm">(124 Reviews)</span>
      </div>

      {/* ================= Price ================= */}

      <h2 className="mt-6 text-3xl font-bold">
        {currency}
        {product.price}
      </h2>

      {/* ================= Description ================= */}

      <p className="mt-6 text-gray-600 leading-7">{product.description}</p>

      {/* ================= Size ================= */}
      <div className="flex flex-col mt-10 gap-2">
        <div className="flex justify-between items-center mt-10">
          <h3 className="font-semibold text-lg">Size</h3>

          <button className="text-sm underline hover:text-black">
            Size Guide
          </button>
        </div>

        {/* ================= Sizes ================= */}

        <div className="flex flex-wrap gap-3 mt-5">
          {(product.sizes || ["S", "M", "L", "XL", "XXL"]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-14 h-14 rounded-lg border transition-all duration-300 font-medium ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300 hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* ================= Quantity ================= */}
      <div className="flex flex-col mt-10 gap-2">
        <h3 className="font-semibold text-lg mt-12 mb-4">Quantity</h3>

        <div className="flex items-center mt-4 border rounded-lg w-fit overflow-hidden w-fit">
          <button
            onClick={decreaseQuantity}
            className="w-12 h-12 flex items-center justify-center hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>

          <div className="w-14 h-12 flex items-center justify-center border-x">
            {quantity}
          </div>

          <button
            onClick={increaseQuantity}
            className="w-12 h-12 flex items-center justify-center hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
      {/* ================= Buttons ================= */}

      <div className="flex flex-col mt-10 gap-2">
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white rounded-lg py-4 flex items-center justify-center gap-3 hover:bg-gray-800 transition"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        <button className="w-full border border-black rounded-lg py-4 font-medium hover:bg-gray-100 transition">
          Buy Now
        </button>
      </div>

      {/* ================= Trust Badges ================= */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col gap-6 lg:translate-y-2">
        <div className="flex items-center gap-4 text-gray-600">
          <Truck size={22} />

          <span>Free Shipping on orders over $100</span>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <ShieldCheck size={22} />

          <span>7-Day Returns & Exchanges</span>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <BadgeCheck size={22} />

          <span>100% Original Products</span>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <Headphones size={22} />

          <span>24/7 Customer Support</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

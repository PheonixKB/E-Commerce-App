import React from "react";
import { Link } from "react-router-dom";
import { useUIContext } from "../context/ui/UIContext";


const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useUIContext();

  const productImage = Array.isArray(image) ? image[0] : image;

  return (
    <Link
      to={`/product/${id}`}
      aria-label={name}
      className="group w-full max-w-[220px] text-center text-gray-700"
    >
      <div className="overflow-hidden rounded-lg bg-stone-100">
        <img
          src={productImage}
          alt={name}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-sm font-medium line-clamp-2 transition-colors group-hover:text-black">
        {name}
      </h3>

      <p className="mt-1 text-stone-800 font-semibold">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;

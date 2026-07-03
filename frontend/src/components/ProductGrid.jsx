import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContextDefinition";

const ProductGrid = ({ products }) => {
  const { currency } = useContext(ShopContext);

  if (!products.length) {
    return (
      <div className="border border-stone-200 rounded-lg py-16 text-center text-gray-500">
        No products match the selected filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      {products.map((product) => {
        const productImage = Array.isArray(product.image)
          ? product.image[0]
          : product.image;

        return (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="group w-full max-w-[220px] text-center text-gray-700"
          >
            {/* Product Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={productImage}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Product Name */}
            <p className="mt-4 text-sm font-medium line-clamp-2">
              {product.name}
            </p>

            {/* Product Price */}
            <p className="mt-1 text-stone-800 font-semibold">
              {currency}
              {product.price}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
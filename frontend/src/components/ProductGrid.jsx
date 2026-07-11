import React from "react";
import ProductItem from "./ProductItem";

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div className="border border-stone-200 rounded-lg py-16 text-center text-gray-500">
        No products match the selected filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      {products.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

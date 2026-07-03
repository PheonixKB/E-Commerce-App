import React from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 border-t border-gray-200 pt-16 items-center max-w-8xl mx-auto px-6 lg:px-8">

      {/* ================= Heading ================= */}

      <div className="text-center mb-12 xl:translate-x-25">

        <Title text1="RELATED" text2="PRODUCTS" />

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto xl:translate-x-76 leading-7 text-sm sm:text-base">
          Discover more products you might like from the same collection.
        </p>

      </div>

      {/* ================= Products Grid ================= */}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 xl:translate-x-25">

        {products.map((product) => (
          <div
            key={product._id}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <ProductItem
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;
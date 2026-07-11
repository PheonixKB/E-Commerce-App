import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useProductContext } from "../context/product/ProductContext";
import useProduct from "../hooks/useProduct";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productID } = useParams();

  const { products } = useProductContext();

  const { product, relatedProducts } = useProduct(products, productID);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productID]);

  if (!product) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Product not found
        </h2>

        <p className="mt-3 text-gray-500">
          The product you're looking for doesn't exist.
        </p>
      </section>
    );
  }

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* ================= Breadcrumb ================= */}

        <div className="mb-10">
          <p className="text-sm text-gray-500">
            <Link to="/">Home</Link>

            <span className="mx-2">&gt;</span>
            <Link to={`/collection`}>Collection</Link>

            <span className="mx-2">&gt;</span>

            <Link
              to={`/collection?category=${encodeURIComponent(product.category)}`}
              className="hover:text-black"
            >
              {product.category}
            </Link>

            <span className="mx-2">&gt;</span>

            <span className="text-gray-800 font-medium">{product.name}</span>
          </p>
        </div>

        {/* ================= Product Section ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>

        {/* ================= Product Details ================= */}

        <ProductDetails product={product} />


        {/* ================= Related Products ================= */}

        <RelatedProducts products={relatedProducts} />
      </section>
    </main>
  );
};

export default Product;

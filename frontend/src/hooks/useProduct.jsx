import { useMemo } from "react";

const useProduct = (products, productID) => {
    const numberOfRelatedProducts = 5;
  return useMemo(() => {
    if (!products.length) {
      return {
        product: null,
        relatedProducts: [],
      };
    }

    // Find current product
    const product =
      products.find((item) => item._id === productID) || null;

    if (!product) {
      return {
        product: null,
        relatedProducts: [],
      };
    }

    const relatedProducts = [];
    const addedIds = new Set([product._id]);

    // Helper function
    const addProducts = (items) => {
      for (const item of items) {
        if (!addedIds.has(item._id) && relatedProducts.length < numberOfRelatedProducts) {
          relatedProducts.push(item);
          addedIds.add(item._id);
        }
      }
    };

    // 1️⃣ Same category + subcategory
    addProducts(
      products.filter(
        (item) =>
          item.category === product.category &&
          item.subCategory === product.subCategory
      )
    );

    // 2️⃣ Same category
    if (relatedProducts.length < numberOfRelatedProducts) {
      addProducts(
        products.filter(
          (item) => item.category === product.category
        )
      );
    }

    // 3️⃣ Bestsellers
    if (relatedProducts.length < numberOfRelatedProducts) {
      addProducts(
        products.filter((item) => item.bestseller)
      );
    }

    // 4️⃣ New arrivals (sorted by newest)
    if (relatedProducts.length < numberOfRelatedProducts) {
      addProducts(
        [...products].sort((a, b) => b.date - a.date)
      );
    }

    return {
      product,
      relatedProducts,
    };
  }, [products, productID]);
};

export default useProduct;
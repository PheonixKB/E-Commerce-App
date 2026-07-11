import { useMemo } from "react";
import { products } from "../../assets/frontend_assets/assets";
import { ProductContext } from "./ProductContext";

const ProductProvider = ({ children }) => {
  // =========================
  // Product Lookup Map
  // =========================
  const productMap = useMemo(() => {
    return Object.fromEntries(
      products.map((product) => [product._id, product]),
    );
  }, []);

  const value = {
    products,
    productMap,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

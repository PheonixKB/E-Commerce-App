import { createContext, useContext } from "react";

export const ProductContext = createContext(undefined);

// Custom hook instead of raw useContext everywhere.
// Throws a clear error if a component forgets the provider,
// instead of silently returning undefined and crashing later
// with a confusing "cannot read property of undefined".
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be used within a ProductProvider",
    );
  }
  return context;
};

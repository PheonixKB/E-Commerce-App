import { createContext, useContext } from "react";

export const CheckoutContext = createContext(undefined);

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutContext must be used within a CheckoutProvider",
    );
  }
  return context;
};

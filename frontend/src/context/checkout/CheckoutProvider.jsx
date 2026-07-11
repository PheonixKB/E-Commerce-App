import { useState, useEffect } from "react";
import { CheckoutContext } from "./CheckoutContext";
import { useCartContext } from "../cart/CartContext";

const CheckoutProvider = ({ children }) => {
  const { cartItems } = useCartContext();

  const [checkout, setCheckout] = useState(() => {
    const savedCheckout = localStorage.getItem("checkout");
    return savedCheckout
      ? JSON.parse(savedCheckout)
      : {
          source: "",
          items: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(checkout));
  }, [checkout]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ==========================
  // Checkout from Cart
  // ==========================
  const startCartCheckout = () => {
    const items = [];

    Object.keys(cartItems).forEach((productId) => {
      Object.keys(cartItems[productId]).forEach((size) => {
        const quantity = cartItems[productId][size];

        if (quantity > 0) {
          items.push({
            productId,
            variant: {
              size,
            },
            quantity,
          });
        }
      });
    });

    setCheckout({
      source: "cart",
      items,
    });
  };

  // ========================
  // Checkout from Buy Now
  // ========================
  const startBuyNowCheckout = ({ productId, size, quantity }) => {
    setCheckout({
      source: "buyNow",
      items: [
        {
          productId,
          variant: {
            size,
          },
          quantity,
        },
      ],
    });
  };

  const value = {
    checkout,
    setCheckout,
    orders,
    setOrders,
    startCartCheckout,
    startBuyNowCheckout,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;

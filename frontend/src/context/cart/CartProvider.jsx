import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useProductContext } from "../product/ProductContext";
import { useToastContext } from "../toast/ToastContext";

const CartProvider = ({ children }) => {
  const { productMap } = useProductContext();
  const { showToast } = useToastContext();

  // =========================
  // Cart State
  // =========================
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // =========================
  // Add Product to Cart
  // =========================
  const addToCart = (itemId, size, quantity = 1) => {
    if (!size) {
      showToast("Please select a size.", "error");
      return;
    }

    const product = productMap[itemId];

    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };

      if (!updatedCart[itemId]) {
        updatedCart[itemId] = {};
      }

      if (!updatedCart[itemId][size]) {
        updatedCart[itemId][size] = 0;
      }

      updatedCart[itemId][size] += quantity;

      return updatedCart;
    });

    showToast(`${product?.name ?? "Product"} added to cart.`, "success");
  };

  // =========================
  // Remove Product from Cart
  // =========================
  const removeFromCart = (itemId, size) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };

      if (!updatedCart[itemId] || !updatedCart[itemId][size]) {
        return prevCart;
      }

      updatedCart[itemId][size]--;

      // Remove size if quantity becomes 0
      if (updatedCart[itemId][size] <= 0) {
        delete updatedCart[itemId][size];
      }

      // Remove product if no sizes remain
      if (Object.keys(updatedCart[itemId]).length === 0) {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
  };

  // =========================
  // Remove Ordered Items from Cart
  // =========================
  // Called after an order is placed. Removes exactly the quantities that
  // were ordered (not a blanket clear), so any items added to the cart
  // mid-checkout are left untouched. Safe to call with items that aren't
  // in the cart at all (e.g. a Buy Now order) — those are simply no-ops.
  const removeOrderedItemsFromCart = (orderedItems) => {
    if (!orderedItems?.length) return;

    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };

      orderedItems.forEach(({ productId, variant, quantity }) => {
        const size = variant?.size;

        if (!updatedCart[productId] || !updatedCart[productId][size]) {
          return;
        }

        const updatedSizes = { ...updatedCart[productId] };
        const remaining = updatedSizes[size] - quantity;

        if (remaining > 0) {
          updatedSizes[size] = remaining;
        } else {
          delete updatedSizes[size];
        }

        if (Object.keys(updatedSizes).length === 0) {
          delete updatedCart[productId];
        } else {
          updatedCart[productId] = updatedSizes;
        }
      });

      return updatedCart;
    });
  };

  // =========================
  // Count Total Items in Cart
  // =========================
  const getCartCount = () => {
    let total = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size];
      }
    }

    return total;
  };

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    removeOrderedItemsFromCart,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

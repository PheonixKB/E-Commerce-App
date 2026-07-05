import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "./ShopContextDefinition";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // =========================
  // Cart State
  // =========================
  const [cartItems, setCartItems] = useState({});

  // =========================
  // Add Product to Cart
  // =========================
  const addToCart = (itemId, size, quantity = 1) => {
    if (!size) {
      alert("Please select a size.");
      return;
    }

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

  // =========================
  // Context Values
  // =========================
  const value = {
    products,
    currency,
    delivery_fee,

    search,
    setSearch,
    showSearch,
    setShowSearch,

    searchQuery,
    setSearchQuery,

    cartItems,
    setCartItems,

    addToCart,
    removeFromCart,
    getCartCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

import { useState, useEffect, useMemo, useRef } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "./ShopContextDefinition";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // =========================
  // Toast Timer
  // =========================
  const toastTimeoutRef = useRef(null);

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
  // Product Lookup Map
  // =========================
  const productMap = useMemo(() => {
    return Object.fromEntries(
      products.map((product) => [product._id, product]),
    );
  }, []);

  const [checkout, setCheckout] = useState(() => {
    const savedCheckout = localStorage.getItem("checkout");
    return savedCheckout
      ? JSON.parse(savedCheckout)
      : {
          source: "",
          items: [],
        };
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // =========================
  // Toast State
  // =========================

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    // Remove previous timer if one exists
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setToast({
      show: true,
      message,
      type,
    });

    toastTimeoutRef.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));

      toastTimeoutRef.current = null;
    }, 4000);
  };
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

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
  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(checkout));
  }, [checkout]);

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

    checkout,
    setCheckout,

    addToCart,
    removeFromCart,
    getCartCount,

    startCartCheckout,
    startBuyNowCheckout,

    orders,
    setOrders,

    toast,
    setToast,
    showToast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

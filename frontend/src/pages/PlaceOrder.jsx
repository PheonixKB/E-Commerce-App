import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../context/ShopContextDefinition";

import CheckoutStepper from "../components/CheckoutStepper";
import AddressForm from "../components/AddressForm";
import DeliveryMethod from "../components/DeliveryMethod";
import PaymentMethod from "../components/PaymentMethod";
import ReviewOrder from "../components/ReviewOrder";
import { DELIVERY_OPTIONS, PAYMENT_OPTIONS } from "../constants/Checkout";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const {
    products,

    checkout,
    setCheckout,
  } = useContext(ShopContext);

  useEffect(() => {
    if (!checkout || checkout.items.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [checkout, navigate]);

  // -----------------------------
  // Stepper
  // -----------------------------

  const [currentStep, setCurrentStep] = useState(1);

  // -----------------------------
  // Shipping Address
  // -----------------------------

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  // -----------------------------
  // Handle Address Input
  // -----------------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // Delivery
  // -----------------------------

  const [deliveryMethod, setDeliveryMethod] = useState("standard");

  // -----------------------------
  // Payment
  // -----------------------------

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // -----------------------------
  // Navigation
  // -----------------------------

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // -----------------------------
  // Product Lookup Map
  // -----------------------------

  const productMap = React.useMemo(() => {
    return Object.fromEntries(
      products.map((product) => [product._id, product]),
    );
  }, [products]);

  // -----------------------------
  // Helper Functions
  // -----------------------------

  const buildOrderedItems = () => {
    if (!checkout?.items?.length) return [];

    return checkout.items
      .map((checkoutItem) => {
        const product = productMap[checkoutItem.productId];

        if (!product) return null;

        return {
          productId: product._id,

          name: product.name,

          image: product.image[0],

          category: product.category,

          subCategory: product.subCategory,

          variant: {
            ...checkoutItem.variant,
          },

          quantity: checkoutItem.quantity,

          price: product.price,

          total: product.price * checkoutItem.quantity,
        };
      })
      .filter(Boolean);
  };

  const calculatePricing = (orderedItems) => {
    const subtotal = orderedItems.reduce((sum, item) => sum + item.total, 0);

    const shipping = DELIVERY_OPTIONS[deliveryMethod].price;

    const discount = 0;

    const tax = 0;

    const total = subtotal + shipping + tax - discount;

    return {
      subtotal,
      shipping,
      discount,
      tax,
      total,
    };
  };

  const buildOrder = () => {
    const orderedItems = checkout ? buildOrderedItems() : [];

    const pricing = calculatePricing(orderedItems);

    const now = new Date();

    const estimatedDelivery = new Date(now);

    estimatedDelivery.setDate(
      estimatedDelivery.getDate() + (deliveryMethod === "express" ? 2 : 7),
    );

    return {
      // ==========================
      // Order Information
      // ==========================

      orderId: `ORD-${Date.now()}`,

      orderDate: now.toISOString(),

      estimatedDelivery: estimatedDelivery.toISOString(),

      // ==========================
      // Customer
      // ==========================

      customer: {
        firstName: address.firstName,
        lastName: address.lastName,
        email: address.email,
        phone: address.phone,
      },

      // ==========================
      // Shipping Address
      // ==========================

      shippingAddress: {
        street: address.street,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
        country: address.country,
      },

      // ==========================
      // Products
      // ==========================

      items: orderedItems,

      // ==========================
      // Pricing
      // ==========================

      pricing,

      // ==========================
      // Delivery
      // ==========================

      delivery: {
        ...DELIVERY_OPTIONS[deliveryMethod],

        status: "Preparing",

        trackingNumber: null,
      },

      // ==========================
      // Payment
      // ==========================

      payment: {
        ...PAYMENT_OPTIONS[paymentMethod],

        transactionId: null,
      },

      // ==========================
      // Order Status
      // ==========================

      orderStatus: {
        current: "Processing",

        history: [
          {
            status: "Order Placed",

            date: now.toISOString(),
          },
        ],
      },
    };
  };

  // -----------------------------
  // Place Order
  // -----------------------------

  const placeOrder = () => {
    const order = buildOrder();
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem("orders", JSON.stringify([order, ...existingOrders]));

    console.log("Order Created:", order);

    // TODO:
    // Save order to backend or localStorage.

    // Only clear the checkout session.
    // Do NOT modify the cart here.
    setCheckout({
      source: "",
      items: [],
    });

    navigate("/orders");
  };
  const orderedItems = React.useMemo(() => {
    return buildOrderedItems();
  }, [checkout, products]);

  const pricing = React.useMemo(() => {
    return calculatePricing(orderedItems);
  }, [orderedItems, deliveryMethod]);

  if (!checkout || checkout.items.length === 0) {
    return null;
  }

  return (
    <section className="max-w-8xl mx-auto px-6 py-12 flex flex-col gap-2">
      {/* Heading */}

      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold tracking-wide text-stone-900">
          PLACE ORDER
        </h1>

        <p className="mt-3 text-stone-500">
          Complete your checkout in just a few simple steps.
        </p>
      </div>

      {/* Stepper */}

      <CheckoutStepper currentStep={currentStep} />

      {/* ================= Address ================= */}

      {currentStep === 1 && (
        <div className="flex flex-col gap-2">
          <AddressForm
            shippingInfo={address}
            handleInputChange={handleInputChange}
          />
          <div className="flex justify-center">
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 rounded-lg bg-stone-900 px-8 py-3 font-medium text-white hover:bg-stone-800 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ================= Delivery ================= */}

      {currentStep === 2 && (
        <div className="flex max-w-8xl justify-center">
          <DeliveryMethod
            deliveryMethod={deliveryMethod}
            setDeliveryMethod={setDeliveryMethod}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        </div>
      )}

      {/* ================= Payment ================= */}

      {currentStep === 3 && (
        <div className="flex max-w-8xl justify-center">
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        </div>
      )}

      {/* ================= Review ================= */}

      {currentStep === 4 && (
        <ReviewOrder
          address={address}
          deliveryMethod={deliveryMethod}
          paymentMethod={paymentMethod}
          orderedItems={orderedItems}
          pricing={pricing}
          previousStep={previousStep}
          placeOrder={placeOrder}
        />
      )}
    </section>
  );
};

export default PlaceOrder;

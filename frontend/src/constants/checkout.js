export const DELIVERY_OPTIONS = {
  standard: {
    id: "standard",
    name: "Standard Delivery",
    description: "Delivery within 5–7 business days",
    price: 0,
    estimatedDays: 7,
    estimatedLabel: "5-7",
  },

  express: {
    id: "express",
    name: "Express Delivery",
    description: "Delivery within 1–2 business days",
    price: 99,
    estimatedDays: 2,
    estimatedLabel: "1-2",
  },
};

export const PAYMENT_OPTIONS = {
  cod: {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when your order arrives.",
    paymentStatus: "Pending",
  },

  razorpay: {
    id: "razorpay",
    name: "Razorpay",
    description: "Secure online payment.",
    paymentStatus: "Paid",
  },

  card: {
    id: "card",
    name: "Credit / Debit Card",
    description: "Visa, Mastercard, RuPay",
    paymentStatus: "Paid",
  },
};
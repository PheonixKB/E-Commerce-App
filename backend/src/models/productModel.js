import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: [String], required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: [String], required: true },
  // Matches the lowercase `bestseller` field your frontend already
  // filters on (BestSeller.jsx) — was `bestSeller` here, which would
  // never have matched.
  bestseller: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;

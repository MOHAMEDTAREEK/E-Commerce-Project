import mongoose from "mongoose";

enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenClothing = "men's clothing",
  WomenClothing = "women's clothing",
}

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(Category),
    required: true,
  },
  rating: {
    rate: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
});

export const Product = mongoose.model("Product", ProductSchema);

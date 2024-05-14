import { Product } from "../models/products";

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

const createProduct = async (product: any) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

export { getAllProducts, getProductById, createProduct };

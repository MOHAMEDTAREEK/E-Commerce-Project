import { Product } from "../models/product.model";

const getAllProducts = async () => {
  const products = await Product.find();

  return products;
};

const getAllCategories = async () => {
  const categories = await Product.distinct("category");

  return categories;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);

  return product;
};

const createProduct = async (product: any) => {
  const newProduct = await Product.create(product);

  return newProduct;
};

const addBulkProducts = async (products: any) => {
  const newProducts = await Product.insertMany(products);

  return newProducts;
};

const getByCategory = async (category: string) => {
  const productsGetByCategory = await Product.find({ category: category });

  return productsGetByCategory;
};

export default {
  getAllProducts,
  getAllCategories,
  getProductById,
  createProduct,
  addBulkProducts,
  getByCategory,
};

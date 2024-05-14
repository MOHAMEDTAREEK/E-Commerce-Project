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

const getByCategory = async (category: string) => {
  const productsGetByCategory = await Product.find({ category: category });
  return productsGetByCategory;
}
export { getAllProducts, getProductById, createProduct, getByCategory };

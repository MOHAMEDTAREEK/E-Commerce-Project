import { Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  getByCategory,
} from "../services/productService";

const getProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.json(products);
};

const getProduct = async (req: Request, res: Response) => {
  const product = await getProductById(req.params.id);
  res.json(product);
};

const addProduct = async (req: Request, res: Response) => {
  const product = await createProduct(req.body);
  res.json(product);
};

const getProductsByCategory = async (req: Request, res: Response) => {
  const products = await getByCategory(req.params.category);
  if (products.length === 0) {
    res.status(404).json({ message: "Category not found" });
    return;
  }
  res.json(products);
};
export default { getProducts, getProduct, addProduct, getProductsByCategory };

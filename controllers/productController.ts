import { Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
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

export default { getProducts, getProduct, addProduct };

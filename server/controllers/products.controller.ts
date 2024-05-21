import { Request, Response } from "express";
import productsService from "../services/products.service";

const getProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts();

  res.send(products);
};

const getCategories = async (req: Request, res: Response) => {
  const categories = await productsService.getAllCategories();

  res.send(categories);
};

const getProduct = async (req: Request, res: Response) => {
  const product = await productsService.getProductById(req.params.id);

  res.send(product);
};

const addProduct = async (req: Request, res: Response) => {
  const product = await productsService.createProduct(req.body);

  res.send(product);
};

const addBulkProducts = async (req: Request, res: Response) => {
  const products = await productsService.addBulkProducts(req.body);

  res.send(products);
};

const getProductsByCategory = async (req: Request, res: Response) => {
  const products = await productsService.getByCategory(req.params.category);
  if (products.length === 0) {
    res.status(404).send({ message: "Category not found" });
    return;
  }

  res.send(products);
};

export default {
  getProducts,
  getCategories,
  getProduct,
  addProduct,
  addBulkProducts,
  getProductsByCategory,
};

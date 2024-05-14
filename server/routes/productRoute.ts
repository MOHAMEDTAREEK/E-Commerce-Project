import express from "express";

import productsController from "../controllers/productController";

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProduct);
router.post("/", productsController.addProduct);
router.get("/category/:category", productsController.getProductsByCategory);

export default router;

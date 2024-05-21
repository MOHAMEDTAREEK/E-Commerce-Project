import express from "express";

import productsController from "../controllers/products.controller";

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/categories", productsController.getCategories);
router.get("/:id", productsController.getProduct);
router.post("/", productsController.addProduct);
router.post("/bulk", productsController.addBulkProducts);
router.get("/category/:category", productsController.getProductsByCategory);

export default router;

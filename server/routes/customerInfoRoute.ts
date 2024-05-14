import express from "express";

import customerInfoController from "../controllers/customerSupportService";

const router = express.Router();

router.get("/", customerInfoController.getCustomersSupportInfo);
router.get("/:id", customerInfoController.getCustomerSupportInfo);
router.post("/", customerInfoController.createCustomerInfo);

export default router;

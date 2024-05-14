import express from "express";

import userController from "../controllers/userConttroller";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.get("/username/:username", userController.getUserByName);
router.post("/", userController.addUser);

export default router;

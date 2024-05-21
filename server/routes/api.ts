import express from "express";
import productsRouter from "./products.route";
import customerInfoRouter from "./customer-support.route";
import userRouter from "./users.route";

const api = express.Router();

api.use("/products", productsRouter);
api.use("/customerInfo", customerInfoRouter);
api.use("/users", userRouter);

export default api;

import express from "express";
import productsRouter from "./productRoute";
import customerInfoRouter from "./customerInfoRoute";
import userRouter from "./userRoute";

const api = express.Router();

api.use("/products", productsRouter);
api.use("/customerInfo", customerInfoRouter);
api.use("/users", userRouter);

export default api;

import express from "express";
import productsRouter from "./productRoute"; // Import the productsRouter module

const api = express.Router();

api.use("/products", productsRouter);


export default api;
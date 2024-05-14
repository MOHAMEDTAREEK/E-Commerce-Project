import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "./config";
import api from "./routes/api";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "application/json"],
  })
);
app.use(express.static("public"));
app.use(morgan("dev"));
app.use("/api", api);

const startServer = async () => {
  const db = config.localDb!;

  await mongoose.connect(db);

  console.log(`Connected to database!`);
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};

startServer();

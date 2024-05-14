import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "./config";
import api from "./routes/api";
const app = express();

app.use(express.json());
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

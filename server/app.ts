import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "./config";
import api from "./routes/api";
import path from "path";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "*",
  })
);
app.use(express.json());
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use("/api", api);

// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/src/login.html"));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/src/contact.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/src/about.html"));
// });

// app.post("/add-data", (req, res) => {
//   const data = req.body;

//   res.send(data);
// });

// const users = [
//   { name: "John Doe", email: "john.doe@example.com" },
//   { name: "Jane Smith", email: "jane.smith@example.com" },
// ];

// // Route to serve the main page (index.ejs) with type for request and response
// app.get("/", (req, res) => {
//   res.render("index", { users: users });
// });

const startServer = async () => {
  const { localDb: db, port } = config;

  await mongoose.connect(db!);

  console.log(`Connected to database!`);
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import VideoRoutes from "./routes/VideoRoutes.js";
import CommentRoutes from "./routes/CommentRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

import "dotenv/config";

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

const app = express();
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Database connected");
});

app.use(cors());
app.use(express.json());
app.use(VideoRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(UserRoutes);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

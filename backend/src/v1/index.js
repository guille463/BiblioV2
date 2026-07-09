import express from "express";
import cors from "cors";
import { PORT } from "../v1/config.js";
import booksRoutes from "../v1/routes/book.routes.js";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", booksRoutes);

const server = app.listen(PORT, () => {
  console.log(`Puerto en: ${PORT}`);
});

server.on("error", (err) => {
  console.error(err);
});

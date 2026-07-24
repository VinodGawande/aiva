import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "AIVA Server Running 🚀",
  });
});

app.use("/api/auth", authRoutes);

// Global Error Handler (hamesha routes ke baad)
app.use(errorHandler);

export default app;

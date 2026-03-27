import dotenv from "dotenv";
dotenv.config();   // MUST BE FIRST

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", invoiceRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = new express();
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
dotenv.config({ path: "../properties/.env" });
import poolRoutes from "./routes/poolRoutes.js";

const port = process.env.port;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(port, () => console.log(`server running on port: ${port}`))
  );
app.use("/api/pools", poolRoutes);

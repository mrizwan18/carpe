import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import poolRoutes from "./routes/poolRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = new express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
dotenv.config({ path: "../properties/.env" });

const port = process.env.port;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(port, () => console.log(`server running on port: ${port}`))
  );

app.use(errorHandler);
app.use("/api/pools", poolRoutes);
app.post("/api/login", (req, res) => {
  //Test user

  const user = {
    id: 1,
    username: "ash",
    email: "ashkechum@pokemon.com",
    isRememberMe: true,
  };
  let expirationTime = user.isRememberMe ? "30d" : "1d";

  jwt.sign(
    { user },
    "secretkey",
    { expiresIn: expirationTime },
    (err, token) => {
      //Return Welcome page
      res.json({
        token,
      });
    }
  );
});

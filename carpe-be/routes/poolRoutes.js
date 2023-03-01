import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
import {
  getPools,
  getPool,
  setPool,
  updatePool,
  deletePool,
  addPoolTofav,
} from "../controllers/poolsController.js";

const verifyUserToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    //Verify Token
    jwt.verify(bearerToken, "secretkey", async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    //Token not found
    res.sendStatus(403);
  }
};

router.route("/").get(getPools).post(setPool);
router.get("/:id", getPool);
router.route("/:id").put(updatePool).delete(deletePool);
router.post("/addTofav", verifyUserToken, addPoolTofav);

export default router;

import express from "express";
const router = express.Router();
import {
  getPools,
  setPool,
  updatePool,
  deletePool,
  addPoolTofav,
} from "../controllers/poolsController.js";

router.route("/").get(getPools).post(setPool);

router.route("/:id").put(updatePool).delete(deletePool);

router.post("/addTofav", addPoolTofav);

export default router;

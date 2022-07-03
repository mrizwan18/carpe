import express from "express";
const router = express.Router();
import {
  getPools,
  getPool,
  setPool,
  updatePool,
  deletePool,
  addPoolTofav,
} from "../controllers/poolsController.js";

router.route("/").get(getPools).post(setPool);
router.get("/:id", getPool);
router.route("/:id").put(updatePool).delete(deletePool);
router.post("/addTofav", addPoolTofav);

export default router;

const express = require("express");
const router = express.Router();
const {
  getPools,
  setPool,
  updatePool,
  deletePool,
} = require("../controllers/poolsController");

router.route("/").get(getPools).post(setPool);

router.route("/:id").put(updatePool).delete(deletePool);

module.exports = router;

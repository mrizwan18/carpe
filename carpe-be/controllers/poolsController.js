import Pool from "../models/poolSchema.js";
import Fav from "../models/favSchema.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { isValidPool, isValidLength } from "../utils/validatePoolPost.js";

export const getPools = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    payload = await Pool.find();
    if (payload.length <= 0) {
      status = 404;
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    payload =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
  } finally {
    res.status(status).json({
      status: status_code,
      payload: payload,
    });
  }
});

export const getPool = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    const { id } = req.params;
    if (!isValidLength(id) || !mongoose.Types.ObjectId.isValid(id)) {
      status = 400;
      status_code = "12";
      payload = "Invalid pool id provided";
    } else {
      payload = await Pool.findOne({ _id: id });
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    payload =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
  } finally {
    res.status(status).json({
      status: status_code,
      payload: payload,
    });
  }
});

export const setPool = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    if (!isValidPool(req)) {
      status = 400;
      status_code = "12";
      payload = "Required data is missing";
    } else {
      const pool = req.body;
      const newPool = new Pool(pool);
      await newPool.save();
      payload = newPool;
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    payload =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
  } finally {
    res.status(status).json({
      status: status_code,
      payload: payload,
    });
  }
});

export const updatePool = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    const { id } = req.params;
    if (!isValidLength(id) || !mongoose.Types.ObjectId.isValid(id)) {
      status = 400;
      status_code = "12";
      payload = "Invalid pool id provided";
    } else {
      const updatedPool = req.body;
      await Pool.findByIdAndUpdate(id, updatedPool, { new: true });
      payload = updatedPool;
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    payload =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
  } finally {
    res.status(status).json({
      status: status_code,
      payload: payload,
    });
  }
});

export const deletePool = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    const { id } = req.params;
    if (!isValidLength(id) || !mongoose.Types.ObjectId.isValid(id)) {
      status = 400;
      status_code = "12";
      payload = "Invalid pool id provided";
    } else {
      await Pool.findByIdAndRemove(id);
      payload = `Pool with id ${id} deleted`;
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    payload =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
  } finally {
    res.status(status).json({
      status: status_code,
      payload: payload,
    });
  }
});

export const addPoolTofav = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    const { pool_id, owner_id } = req.body;
    if (
      !isValidLength(pool_id) ||
      !mongoose.Types.ObjectId.isValid(pool_id) ||
      !isValidLength(owner_id) ||
      !mongoose.Types.ObjectId.isValid(owner_id)
    ) {
      status = 400;
      status_code = "12";
      payload = "Invalid pool or owner id provided";
    } else {
      const rs = await Fav.findOneAndRemove({
        pool_id: pool_id,
        owner_id: owner_id,
      });
      if (!rs || rs.deletedCount === 0) {
        const fav = new Fav({ pool_id, owner_id });
        await fav.save();
        payload = fav;
      } else {
        payload = `Entry with owner_id ${owner_id} and pool_id ${pool_id} removed`;
      }
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    payload =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
  } finally {
    res.status(status).json({
      status: status_code,
      payload: payload,
    });
  }
});

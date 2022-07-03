import Pool from "../models/poolSchema.js";
import asyncHandler from "express-async-handler";

export const getPools = async (req, res) => {
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
};

export const setPool = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Required data missing");
  }
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    const pool = req.body;
    console.log(pool);
    const newPool = new Pool(pool);
    await newPool.save();
    payload = newPool;
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
  res.status(200).json({
    message: `${id} Pool updated`,
  });
});

export const deletePool = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `${id} Pool deleted`,
  });
});

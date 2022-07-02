import Pool from "../models/poolSchema.js";
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

export const setPool = async (req, res) => {
  let status = 200;
  let status_code = "00";
  let payload = [];
  try {
    const pool = req.body;
    console.log(pool)
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
};

export const updatePool = (req, res) => {
  res.status(200).json({
    message: `${id} Pool updated`,
  });
};

export const deletePool = (req, res) => {
  res.status(200).json({
    message: `${id} Pool deleted`,
  });
};

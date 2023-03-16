// Get all cities
export const getCities = asyncHandler(async (req, res) => {
  let statusCode = 200;
  let statusMessage = "Success";
  let cities = [];

  try {
    // pools = await Pool.find();
    pools = dummyData;

    if (pools.length === 0) {
      statusCode = 404;
      statusMessage = "No pools found";
    }
  } catch (error) {
    statusCode = 500;
    statusMessage = error.message;
  } finally {
    res.status(statusCode).json({
      status: statusCode === 200 ? "00" : "05",
      message: statusMessage,
      pools: pools,
    });
  }
});

//get a pool by id
export const getPool = asyncHandler(async (req, res) => {
  let status = 200;
  let status_code = "00";
  let pool = [];
  const { id } = req.params;

  try {
    if (!isValidLength(id) || !mongoose.Types.ObjectId.isValid(id)) {
      status = 400;
      status_code = "12";
      pool = "Invalid pool id provided";
      res.status(status).json({
        status: status_code,
        payload: pool,
      });
    } else {
      // pool = await Pool.findOne({ _id: id });
      pool = dummyData[0];
      res.status(status).json({
        status: status_code,
        payload: pool,
      });
    }
  } catch (error) {
    status = 500;
    status_code = "05";
    pool =
      process.env.NODE_ENV === "dev" ? error.message : "Something went wrong";
    res.status(status).json({
      status: status_code,
      payload: pool,
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
      // await newPool.save();
      dummyData.push(newPool);
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
    const updatedPool = req.body;

    if (!mongoose.Types.ObjectId.isValid(id) || !isValidPool(req)) {
      status = 400;
      status_code = "12";
      payload = "Invalid pool info provided";
    } else {
      // await Pool.findByIdAndUpdate(id, updatedPool, { new: true });
      dummyData[0] = updatedPool;
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
      // await Pool.findByIdAndRemove(id);
      dummyData.splice(0, 1);
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
      !mongoose.Types.ObjectId.isValid(pool_id) ||
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

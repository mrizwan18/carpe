const getPools = (req, res) => {
  res.status(200).json({
    message: "Get Pools",
  });
};

const setPool = (req, res) => {
  res.status(200).json({
    message: "Set Pool",
  });
};

const updatePool = (req, res) => {
  res.status(200).json({
    message: `${id} Pool updated`,
  });
};

const deletePool = (req, res) => {
  res.status(200).json({
    message: `${id} Pool deleted`,
  });
};

module.exports = {
  getPools,
  updatePool,
  setPool,
  deletePool,
};

export const isValidPool = (req) => {
  return (
    isValidLength(req.body.pool_title, 15) &&
    isValidLength(req.body.pool_description, 10) &&
    isValidLength(req.body.owner_id) &&
    isValidLength(req.body.car_pics) &&
    isValidLength(req.body.pool_from) &&
    isValidLength(req.body.pool_to) &&
    isValidLength(req.body.start_time) &&
    isValidLength(req.body.end_time) &&
    isValidLength(req.body.date_from) &&
    isValidLength(req.body.date_to) &&
    req.body.pool_capacity &&
    req.body.is_poolable &&
    isValidLength(req.body.pool_members)
  );
};

export const isValidLength = (obj, len = 0) => {
  return obj && obj.length >= len;
};

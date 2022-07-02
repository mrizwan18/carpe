import mongoose from "mongoose";

const poolSchema = mongoose.Schema({
  pool_title: String,
  pool_description: String,
  owner_id: String,
  car_pics: [String],
  pool_from: String,
  pool_to: String,
  start_time: String,
  end_time: String,
  date_from: {
    type: Date,
    default: new Date(),
  },
  date_to: {
    type: Date,
    default: new Date(),
  },
  pool_capacity: Number,
  is_poolable: Boolean,
  pool_members: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Pool = mongoose.model("Pool", poolSchema);

export default Pool;

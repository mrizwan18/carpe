import mongoose from "mongoose";

const favSchema = mongoose.Schema({
  pool_id: String,
  owner_id: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Fav = mongoose.model("Fav", favSchema);

export default Fav;

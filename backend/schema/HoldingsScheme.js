const { Schema } = require("mongoose");
const { authUser } = require("../middle/authMiddle");
const HoldingsScheme = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  authUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});
module.exports = {HoldingsScheme};
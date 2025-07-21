const {Schema} = require("mongoose");

const PositionsScheme = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
 
});

module.exports = {PositionsScheme};
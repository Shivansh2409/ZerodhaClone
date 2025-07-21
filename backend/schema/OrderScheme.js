const {Schema} = require("mongoose");
const OrderScheme = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  authUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});
module.exports= {OrderScheme};
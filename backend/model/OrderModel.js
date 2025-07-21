const {model} = require("mongoose");
const {OrderScheme}= require("../schema/OrderScheme");
const OrderModel = new model("order", OrderScheme);
module.exports = {OrderModel};
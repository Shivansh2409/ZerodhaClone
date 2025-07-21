const {model} = require("mongoose");
const {HoldingsScheme} = require("../schema/HoldingsScheme");

const HoldingsModel = new model("holding", HoldingsScheme);
module.exports = {HoldingsModel};
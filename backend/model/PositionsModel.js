const {model} = require("mongoose");
const {PositionsScheme} = require("../schema/PositionsScheme");
const PositionsModel = new model("position", PositionsScheme);
module.exports = {PositionsModel};
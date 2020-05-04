var mongoose = require("mongoose");

var foodSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    cost: Number
});

module.exports = mongoose.model("food", foodSchema);
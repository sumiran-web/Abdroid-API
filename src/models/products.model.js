const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String,
  category: String,
  location: String
});

module.exports = mongoose.model("restaurant", restaurantSchema);
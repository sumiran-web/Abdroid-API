let mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/restaurantfinder`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

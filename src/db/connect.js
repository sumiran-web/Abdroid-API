let mongoose = require("mongoose");
//mongoose
mongoose.connect(`mongodb://localhost:27017/restaurantfinder`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

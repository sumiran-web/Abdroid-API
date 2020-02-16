const mongoose = require("mongoose");
const Cart = mongoose.Schema({
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"register"
  },
  productid: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"restaurant"
  },
});
module.exports = mongoose.model("favourite", Cart);

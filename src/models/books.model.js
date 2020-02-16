const mongoose = require("mongoose");
const Book = mongoose.Schema({
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"register"
  },
  productid: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  dates: {
    type: String
  },
  timeses: {
    type: String
  }, 
  phone: {
    type: String
  }
});
module.exports = mongoose.model("book", Book);

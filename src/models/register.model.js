const mongoose = require("mongoose");
const Register = new mongoose.Schema({
  //Register
  fullname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("register", Register);
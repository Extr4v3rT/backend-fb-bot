const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255
  },
  businessName: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  abonamentVersion: {
    type: String,
    required: true,
    default: "None"
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", UserSchema);
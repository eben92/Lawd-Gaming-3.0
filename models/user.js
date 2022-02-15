const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  terms: {
    type: String,
    default: "agreed",
  },
});

module.exports = mongoose.models.user || mongoose.model("user", userSchema);

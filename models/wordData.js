const mongoose = require("mongoose");
const wordSchema = new mongoose.Schema({
  text: {
    type: String,
    default: ''
  },
  id: {
    type: Number,
    default: 0
  },
});
module.exports = mongoose.model("Word", wordSchema);

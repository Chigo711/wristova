const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: [true, "Model name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },

  inStock: {
    type: Boolean,
    default: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});
const Watch = mongoose.model("Watch", watchSchema);

module.exports = Watch;

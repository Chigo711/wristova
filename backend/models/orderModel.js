const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A User ID is required"],
  },
  items: [
    {
      watchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Watch",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
      },
      totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
      },
      status: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Pending",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);

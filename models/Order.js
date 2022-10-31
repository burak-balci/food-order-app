import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 50,
    },
    address: {
      type: String,
      required: true,
      maxlength: 150,
    },
    items: {
      type: [Object],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.Order || mongoose.model("Order", OrderSchema);

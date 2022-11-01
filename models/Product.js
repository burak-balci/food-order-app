import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 50,
    },
    type: {
      type: String,
      required: true,
      maxlength: 15,
    },
    subtitle: {
      type: String,
      required: true,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: [Object],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

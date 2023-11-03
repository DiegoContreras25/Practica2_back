import mongoose from "npm:mongoose@7.6.3";
import { products } from "./types.ts";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    stock: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

export type ProductModelType = mongoose.Document & Omit<products, "id">;

export default mongoose.model<ProductModelType>("producto", productSchema);

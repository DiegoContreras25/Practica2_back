import mongoose from "npm:mongoose@7.6.3";
import { invoice } from "./types.ts";

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    client: { type: String, required: true },
    products: { type: String, required: true },
    total: { type: Number, required: false },
  },
  { timestamps: true },
);

export type invoiceModelType = mongoose.Document & Omit<invoice, "id">;

export default mongoose.model<invoiceModelType>("invoice", invoiceSchema);

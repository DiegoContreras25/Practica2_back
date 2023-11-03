import mongoose from "npm:mongoose@7.6.3";
import { client } from "./types.ts";

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    cif: { type: String, required: true },
  },
  { timestamps: true },
);

export type clientModelType = mongoose.Document & Omit<client, "id">;

export default mongoose.model<clientModelType>("client", clientSchema);

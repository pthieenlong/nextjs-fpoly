import mongoose, { Schema } from "mongoose";
import { IBrand } from "../__types/brand.type";

const BrandSchema: Schema = new Schema<IBrand>({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
})

export const Brand = mongoose.model<IBrand>('Brand', BrandSchema);
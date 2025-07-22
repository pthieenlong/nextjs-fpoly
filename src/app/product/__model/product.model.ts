import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  _id: string,
  name: string,
  slug: string,
  price: number,
  images: string[];
  salePercent: number,
  isSale: boolean,
  category: string[],
  rating: number,
  colors: string[],
  sizes: string[],
  isVisible: boolean,
  updatedAt: Date,
  createdAt: Date
}

const ProductSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    default: ["https://placehold.co/600x400"],
  },
  salePercent: {
    type: Number,
    default: 0,
  },
  isSale: {
    type: Boolean,
    default: false,
  },
  category: {
    type: [String],
    ref: 'Category',
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  colors: {
    type: [String],
    default: ["#000", "#fff"],
  },
  sizes: {
    type: [String],
    default: ["XL", "L", "M", "SM"]
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  createdAt: {
    type: Date,
    default: Date.now()
  } 
});

const ProductModel: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default ProductModel;
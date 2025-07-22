import { Document } from "mongoose";
export type Brand = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
};

export interface IBrand extends Document {
  _id: string;
  name: string; 
  slug: string;
  image: string;
  description?: string;
}
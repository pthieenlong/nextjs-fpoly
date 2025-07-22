import { connectDB } from "@/config/database";
import { Brand } from "../__model/brand.model";

export class BrandService {
  static async getBrands() {
    await connectDB();
    const brands = await Brand.find();
    return brands;
  }
}

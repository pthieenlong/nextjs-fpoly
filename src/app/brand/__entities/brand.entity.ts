import { Brand } from "../__types/brand.type";

export class BrandEntity implements Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;

  constructor(data: Brand) {
    this._id = data._id;
    this.name = data.name;
    this.slug = data.slug;
    this.image = data.image;
    this.description = data.description;
  }
}
import { Product, ProductReview } from '../__types/product.type';

export class ProductEntity {
  private _product: Product;

  constructor(product: Product) {
    this._product = product;
  }

  get id(): string {
    return this._product.id;
  }

  get name(): string {
    return this._product.name;
  }

  get price(): number {
    return this._product.price;
  }

  get originalPrice(): number | undefined {
    return this._product.originalPrice;
  }

  get description(): string {
    return this._product.description;
  }

  get images(): string[] {
    return this._product.images;
  }

  get thumbnail(): string {
    return this._product.thumbnail;
  }

  get category(): string {
    return this._product.category;
  }

  get brand(): string {
    return this._product.brand;
  }

  get sizes(): string[] {
    return this._product.sizes;
  }

  get colors(): string[] {
    return this._product.colors;
  }

  get inStock(): boolean {
    return this._product.inStock;
  }

  get rating(): number {
    return this._product.rating;
  }

  get reviewCount(): number {
    return this._product.reviewCount;
  }

  get slug(): string {
    return this._product.slug;
  }

  // Business logic methods
  hasDiscount(): boolean {
    return this._product.originalPrice !== undefined && 
           this._product.originalPrice > this._product.price;
  }

  getDiscountPercentage(): number {
    if (!this.hasDiscount()) return 0;
    return Math.round(((this._product.originalPrice! - this._product.price) / this._product.originalPrice!) * 100);
  }

  isAvailableInSize(size: string): boolean {
    return this._product.sizes.includes(size);
  }

  isAvailableInColor(color: string): boolean {
    return this._product.colors.includes(color);
  }

  toJSON(): Product {
    return { ...this._product };
  }
}

export class ProductReviewEntity {
  private _review: ProductReview;

  constructor(review: ProductReview) {
    this._review = review;
  }

  get id(): string {
    return this._review.id;
  }

  get productId(): string {
    return this._review.productId;
  }

  get userName(): string {
    return this._review.userName;
  }

  get rating(): number {
    return this._review.rating;
  }

  get comment(): string {
    return this._review.comment;
  }

  get date(): string {
    return this._review.date;
  }

  get helpful(): number {
    return this._review.helpful;
  }

  // Business logic methods
  isRecent(): boolean {
    const reviewDate = new Date(this._review.date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - reviewDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30; // Recent if within 30 days
  }

  isHelpful(): boolean {
    return this._review.helpful > 5; // Consider helpful if more than 5 people found it helpful
  }

  toJSON(): ProductReview {
    return { ...this._review };
  }
} 
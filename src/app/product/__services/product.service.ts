import { Product, ProductReview, ProductFilters, ProductSortOption } from '../__types/product.type';
import { ProductEntity, ProductReviewEntity } from '../__entities/product.entity';

// Mock data - in real app, this would come from API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Graphic T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    description: 'Comfortable cotton graphic t-shirt with modern design',
    images: ['/products/graphic-t-shirt.png'],
    thumbnail: '/products/graphic-t-shirt.png',
    category: 'casual',
    brand: 'Fashion Brand',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue'],
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    slug: 'graphic-t-shirt'
  },
  {
    id: '2',
    name: 'Checkered Shirt',
    price: 49.99,
    description: 'Classic checkered pattern shirt for casual wear',
    images: ['/products/checkered-shirt.png'],
    thumbnail: '/products/checkered-shirt.png',
    category: 'casual',
    brand: 'Style Co',
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Blue'],
    inStock: true,
    rating: 4.2,
    reviewCount: 89,
    slug: 'checkered-shirt'
  },
  {
    id: '3',
    name: 'Jeans Pants',
    price: 79.99,
    originalPrice: 99.99,
    description: 'High-quality denim jeans with perfect fit',
    images: ['/products/jeans-pants.png'],
    thumbnail: '/products/jeans-pants.png',
    category: 'casual',
    brand: 'Denim Pro',
    sizes: ['30', '32', '34', '36'],
    colors: ['Blue', 'Black'],
    inStock: true,
    rating: 4.7,
    reviewCount: 256,
    slug: 'jeans-pants'
  }
];

const mockReviews: ProductReview[] = [
  {
    id: '1',
    productId: '1',
    userName: 'John D.',
    rating: 5,
    comment: 'Great quality and perfect fit!',
    date: '2024-01-15',
    helpful: 12
  },
  {
    id: '2',
    productId: '1',
    userName: 'Sarah M.',
    rating: 4,
    comment: 'Good material, but runs a bit small',
    date: '2024-01-10',
    helpful: 8
  }
];

export class ProductService {
  // Get all products with optional filtering and sorting
  static async getProducts(filters?: ProductFilters, sort?: ProductSortOption): Promise<ProductEntity[]> {
    let filteredProducts = [...mockProducts];

    // Apply filters
    if (filters) {
      if (filters.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filters.category);
      }
      if (filters.brand) {
        filteredProducts = filteredProducts.filter(p => p.brand === filters.brand);
      }
      if (filters.priceRange) {
        filteredProducts = filteredProducts.filter(p => 
          p.price >= filters.priceRange!.min && p.price <= filters.priceRange!.max
        );
      }
      if (filters.sizes && filters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter(p => 
          filters.sizes!.some(size => p.sizes.includes(size))
        );
      }
      if (filters.colors && filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter(p => 
          filters.colors!.some(color => p.colors.includes(color))
        );
      }
      if (filters.inStock !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.inStock === filters.inStock);
      }
    }

    // Apply sorting
    if (sort) {
      filteredProducts.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        switch (sort.field) {
          case 'name':
            aValue = a.name;
            bValue = b.name;
            break;
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          default:
            return 0;
        }

        if (sort.direction === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return filteredProducts.map(p => new ProductEntity(p));
  }

  // Get product by slug
  static async getProductBySlug(slug: string): Promise<ProductEntity | null> {
    const product = mockProducts.find(p => p.slug === slug);
    return product ? new ProductEntity(product) : null;
  }

  // Get product by ID
  static async getProductById(id: string): Promise<ProductEntity | null> {
    const product = mockProducts.find(p => p.id === id);
    return product ? new ProductEntity(product) : null;
  }

  // Get product reviews
  static async getProductReviews(productId: string): Promise<ProductReviewEntity[]> {
    const reviews = mockReviews.filter(r => r.productId === productId);
    return reviews.map(r => new ProductReviewEntity(r));
  }

  // Search products
  static async searchProducts(query: string): Promise<ProductEntity[]> {
    const searchTerm = query.toLowerCase();
    const results = mockProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.brand.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
    return results.map(p => new ProductEntity(p));
  }

  // Get products by category
  static async getProductsByCategory(category: string): Promise<ProductEntity[]> {
    const products = mockProducts.filter(p => p.category === category);
    return products.map(p => new ProductEntity(p));
  }

  // Get featured products (products with discount or high rating)
  static async getFeaturedProducts(): Promise<ProductEntity[]> {
    const featured = mockProducts.filter(p => 
      p.originalPrice !== undefined || p.rating >= 4.5
    );
    return featured.map(p => new ProductEntity(p));
  }

  // Get related products
  static async getRelatedProducts(productId: string, limit: number = 4): Promise<ProductEntity[]> {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return [];

    const related = mockProducts
      .filter(p => p.id !== productId && (p.category === product.category || p.brand === product.brand))
      .slice(0, limit);
    
    return related.map(p => new ProductEntity(p));
  }
} 
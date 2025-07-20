import { SearchOptions, SearchResponse, SearchResult, SearchSuggestion } from '../__types/search.type';
import { connectDB } from '@/config/database';
import ProductModel from '@/app/product/__model/product.model';

export class SearchService {
  static async search(options: SearchOptions): Promise<SearchResponse> {
    await connectDB();

    const { query, filters, sortBy = 'relevance', sortOrder = 'desc', page = 1, limit = 10 } = options;
    const mongoQuery: any = {};

    if (query) {
      mongoQuery.$or = [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { brand: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ];
    }
    if (filters?.category) mongoQuery.category = filters.category;
    if (filters?.brand) mongoQuery.brand = filters.brand;
    if (filters?.priceRange) {
      mongoQuery.price = { $gte: filters.priceRange.min, $lte: filters.priceRange.max };
    }
    if (filters?.rating) mongoQuery.rating = { $gte: filters.rating };
    if (filters?.inStock !== undefined) mongoQuery.inStock = filters.inStock;

    let sort: any = {};
    if (sortBy === 'price' || sortBy === 'rating' || sortBy === 'name') {
      sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
    }

    const totalResults = await ProductModel.countDocuments(mongoQuery);
    const products = await ProductModel.find(mongoQuery)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const results: SearchResult[] = products.map((p: any) => ({
      id: p._id.toString(),
      name: p.name,
      description: p.description,
      price: p.price,
      originalPrice: p.originalPrice,
      image: p.thumbnail,
      category: p.category,
      brand: p.brand,
      rating: p.rating,
      reviewCount: p.reviewCount,
      slug: p.slug,
      relevanceScore: 1,
    }));

    const totalPages = Math.ceil(totalResults / limit);

    return {
      results,
      totalResults,
      currentPage: page,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    };
  }
}
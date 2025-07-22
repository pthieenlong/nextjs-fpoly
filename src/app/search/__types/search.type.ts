export interface SearchResult {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  slug: string;
  relevanceScore: number;
}

export interface SearchFilters {
  category?: string;
  brand?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  inStock?: boolean;
}

export interface SearchOptions {
  query: string;
  filters?: SearchFilters;
  sortBy?: 'relevance' | 'price' | 'rating' | 'name';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface SearchResponse {
  results: SearchResult[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface SearchSuggestion {
  text: string;
  type: 'product' | 'category' | 'brand';
  count?: number;
} 
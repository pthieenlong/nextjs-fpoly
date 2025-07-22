"use client";

import React, { useEffect, useState } from "react";
import { ProductService } from "./__services/product.service";
import { ProductEntity } from "./__entities/product.entity";
import { Button } from "@/shared/components/Button";
import { formatPrice, formatRating } from "@/shared/utils/format";

export default function ProductDemo() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productEntities = await ProductService.getProducts();
        setProducts(productEntities);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className="p-4">Loading products...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Domain Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold">{formatPrice(product.price)}</span>
              {product.hasDiscount() && (
                <span className="text-red-600 text-sm">
                  Save {product.getDiscountPercentage()}%
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>{formatRating(product.rating)}</span>
              <span className="text-sm text-gray-500">
                {product.reviewCount} reviews
              </span>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => console.log("Add to cart:", product.name)}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

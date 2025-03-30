"use client";

import { ProductCard } from "./ProductCard";
import { ProductGridProps } from "./types";

export function ProductGrid({ filteredProducts }: ProductGridProps) {
  if (filteredProducts.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-lg font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ProductActiveFiltersProps } from "./types";

export function ProductActiveFilters({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedBrands,
  toggleBrand,
  selectedTags,
  toggleTag,
  selectedColors,
  toggleColor,
  inStockOnly,
  setInStockOnly,
  discountedOnly,
  setDiscountedOnly,
  resetFilters,
  colorMap
}: ProductActiveFiltersProps) {
  const hasActiveFilters = 
    selectedCategory !== "All" || 
    selectedBrands.length > 0 || 
    selectedTags.length > 0 || 
    selectedColors.length > 0 || 
    inStockOnly || 
    discountedOnly || 
    priceRange[0] > 0 || 
    priceRange[1] < 1500;

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-muted-foreground">Active filters:</span>
        
        {selectedCategory !== "All" && (
          <Badge variant="secondary" className="flex items-center gap-1">
            Category: {selectedCategory}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => setSelectedCategory("All")} 
            />
          </Badge>
        )}
        
        {(priceRange[0] > 0 || priceRange[1] < 1500) && (
          <Badge variant="secondary" className="flex items-center gap-1">
            Price: ${priceRange[0]} - ${priceRange[1]}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => setPriceRange([0, 1500])} 
            />
          </Badge>
        )}
        
        {selectedBrands.map(brand => (
          <Badge key={brand} variant="secondary" className="flex items-center gap-1">
            {brand}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => toggleBrand(brand)} 
            />
          </Badge>
        ))}
        
        {selectedTags.map(tag => (
          <Badge key={tag} variant="secondary" className="flex items-center gap-1 capitalize">
            {tag}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => toggleTag(tag)} 
            />
          </Badge>
        ))}
        
        {selectedColors.map(color => (
          <Badge key={color} variant="secondary" className="flex items-center gap-1 capitalize">
            <span 
              className={`w-3 h-3 rounded-full ${colorMap[color]} mr-1`}
            ></span>
            {color}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => toggleColor(color)} 
            />
          </Badge>
        ))}
        
        {inStockOnly && (
          <Badge variant="secondary" className="flex items-center gap-1">
            In Stock Only
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => setInStockOnly(false)} 
            />
          </Badge>
        )}
        
        {discountedOnly && (
          <Badge variant="secondary" className="flex items-center gap-1">
            On Sale
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => setDiscountedOnly(false)} 
            />
          </Badge>
        )}
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilters}
          className="h-7 text-xs"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
}
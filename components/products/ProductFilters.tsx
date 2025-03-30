"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sliders, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ProductFilterProps } from "./types";

export function ProductFilters({
  categories,
  brands,
  tags,
  colors,
  colorMap,
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
  showFilters,
  setShowFilters
}: ProductFilterProps) {
  return (
    <>
      {/* Mobile filter toggle */}
      <div className="lg:hidden w-full mb-4">
        <Button 
          variant="outline" 
          className="w-full flex justify-between items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span className="flex items-center">
            <Sliders className="mr-2 h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {/* Filters sidebar */}
      <motion.div 
        className={`lg:w-1/4 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-card rounded-lg p-4 border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Filters</h3>
            <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
              Reset All
            </Button>
          </div>

          {/* Category filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-sm">Category</h4>
            <div className="space-y-1">
              {categories.map(category => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "justify-start w-full h-8 px-2",
                    selectedCategory === category && "bg-primary/10 text-primary font-medium"
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Price range filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-sm">Price Range</h4>
            <div className="px-2">
              <Slider
                defaultValue={[0, 1500]}
                max={1500}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Brand filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-sm">Brand</h4>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {brands.map(brand => (
                <div key={brand} className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "justify-start w-full h-8 px-2",
                      selectedBrands.includes(brand) && "bg-primary/10 text-primary font-medium"
                    )}
                    onClick={() => toggleBrand(brand)}
                  >
                    <span className="flex items-center">
                      <span className={`w-4 h-4 mr-2 flex items-center justify-center rounded-sm border ${selectedBrands.includes(brand) ? 'bg-primary border-primary' : 'border-input'}`}>
                        {selectedBrands.includes(brand) && <Check className="h-3 w-3 text-white" />}
                      </span>
                      {brand}
                    </span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Tags filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-sm">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer capitalize",
                    selectedTags.includes(tag) ? "bg-primary" : ""
                  )}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Color filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-sm">Color</h4>
            <div className="flex flex-wrap gap-2">
              {colors.map(color => (
                <button
                  key={color}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    colorMap[color],
                    selectedColors.includes(color) ? "ring-2 ring-primary ring-offset-2" : ""
                  )}
                  onClick={() => toggleColor(color)}
                  title={color}
                >
                  {selectedColors.includes(color) && (
                    <Check className={`h-4 w-4 ${color === 'white' ? 'text-black' : 'text-white'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Availability filters */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "justify-start w-full h-8 px-2",
                  inStockOnly && "bg-primary/10 text-primary font-medium"
                )}
                onClick={() => setInStockOnly(!inStockOnly)}
              >
                <span className="flex items-center">
                  <span className={`w-4 h-4 mr-2 flex items-center justify-center rounded-sm border ${inStockOnly ? 'bg-primary border-primary' : 'border-input'}`}>
                    {inStockOnly && <Check className="h-3 w-3 text-white" />}
                  </span>
                  In Stock Only
                </span>
              </Button>
            </div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "justify-start w-full h-8 px-2",
                  discountedOnly && "bg-primary/10 text-primary font-medium"
                )}
                onClick={() => setDiscountedOnly(!discountedOnly)}
              >
                <span className="flex items-center">
                  <span className={`w-4 h-4 mr-2 flex items-center justify-center rounded-sm border ${discountedOnly ? 'bg-primary border-primary' : 'border-input'}`}>
                    {discountedOnly && <Check className="h-3 w-3 text-white" />}
                  </span>
                  On Sale
                </span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import { ProductFilters } from "./ProductFilters";
import { ProductSearchSort } from "./ProductSearchSort";
import { ProductActiveFilters } from "./ProductActiveFilters";
import { ProductGrid } from "./ProductGrid";
import { Product, SortOption } from "./types";
import { productData } from "./productData";

// Enhanced categories
const categories = ["All", "Electronics", "Wearables", "Photography", "Audio", "Computers", "Gaming", "Smart Home", "Storage"];

// Enhanced brands from products
const brands = [...new Set(productData.map(product => product.brand))];

// Enhanced tags from products
const tags = [...new Set(productData.flatMap(product => product.tags))];

// Enhanced colors from products
const colors = [...new Set(productData.flatMap(product => product.colors))];

// Color mapping for display
const colorMap: Record<string, string> = {
  black: "bg-black",
  white: "bg-white border border-gray-200",
  silver: "bg-gray-300",
  gold: "bg-amber-400",
  blue: "bg-blue-500",
  red: "bg-red-500",
  gray: "bg-gray-500",
  "space gray": "bg-gray-700",
  midnight: "bg-slate-900"
};

const sortOptions: SortOption[] = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating: High to Low", value: "rating" },
  { label: "Discount: High to Low", value: "discount" },
  { label: "Newest First", value: "newest" }
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("price-asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [discountedOnly, setDiscountedOnly] = useState(false);

  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedSort("price-asc");
    setSearchQuery("");
    setPriceRange([0, 1500]);
    setSelectedBrands([]);
    setSelectedTags([]);
    setSelectedColors([]);
    setInStockOnly(false);
    setDiscountedOnly(false);
  };

  // Filter products based on all criteria
  useEffect(() => {
    let filtered = [...productData];

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Apply tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(product => 
        product.tags.some(tag => selectedTags.includes(tag))
      );
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Apply in-stock filter
    if (inStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply discounted filter
    if (discountedOnly) {
      filtered = filtered.filter(product => product.discount > 0);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "discount":
          return b.discount - a.discount;
        case "newest":
          return b.id - a.id; // Using ID as a proxy for newness
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [
    selectedCategory, 
    selectedSort, 
    searchQuery, 
    priceRange, 
    selectedBrands, 
    selectedTags, 
    selectedColors,
    inStockOnly,
    discountedOnly
  ]);

  return (
    <section className="py-12 relative overflow-hidden container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Product Catalog</h2>
        <p className="text-muted-foreground">Discover our wide range of tech products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <ProductFilters 
          categories={categories}
          brands={brands}
          tags={tags}
          colors={colors}
          colorMap={colorMap}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedBrands={selectedBrands}
          toggleBrand={toggleBrand}
          selectedTags={selectedTags}
          toggleTag={toggleTag}
          selectedColors={selectedColors}
          toggleColor={toggleColor}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
          discountedOnly={discountedOnly}
          setDiscountedOnly={setDiscountedOnly}
          resetFilters={resetFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        {/* Main content */}
        <div className="lg:w-3/4">
          {/* Search and sort */}
          <ProductSearchSort 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            sortOptions={sortOptions}
          />

          {/* Active filters */}
          <ProductActiveFilters 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            selectedColors={selectedColors}
            toggleColor={toggleColor}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            discountedOnly={discountedOnly}
            setDiscountedOnly={setDiscountedOnly}
            resetFilters={resetFilters}
            colorMap={colorMap}
          />

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Product grid */}
          <ProductGrid filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
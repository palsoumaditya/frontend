export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  inStock: boolean;
  description: string;
  brand: string;
  discount: number;
  tags: string[];
  colors: string[];
}

export interface SortOption {
  label: string;
  value: string;
}

export interface ProductFilterProps {
  categories: string[];
  brands: string[];
  tags: string[];
  colors: string[];
  colorMap: Record<string, string>;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  selectedColors: string[];
  toggleColor: (color: string) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  discountedOnly: boolean;
  setDiscountedOnly: (value: boolean) => void;
  resetFilters: () => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
}

export interface ProductSearchSortProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  sortOptions: SortOption[];
}

export interface ProductActiveFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  selectedColors: string[];
  toggleColor: (color: string) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  discountedOnly: boolean;
  setDiscountedOnly: (value: boolean) => void;
  resetFilters: () => void;
  colorMap: Record<string, string>;
}

export interface ProductGridProps {
  filteredProducts: Product[];
}

export interface ProductCardProps {
  product: Product;
  index: number;
}
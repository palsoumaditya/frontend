"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, X, SortAsc } from "lucide-react";
import { ProductSearchSortProps } from "./types";

export function ProductSearchSort({
  searchQuery,
  setSearchQuery,
  selectedSort,
  setSelectedSort,
  sortOptions
}: ProductSearchSortProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
          {searchQuery && (
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
      </div>
      <div className="relative group w-full sm:w-auto">
        <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
          <SortAsc className="h-4 w-4" />
          {sortOptions.find(option => option.value === selectedSort)?.label || "Sort"}
        </Button>
        <div className="absolute top-full right-0 mt-2 w-48 bg-background rounded-lg border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
          <div className="py-1">
            {sortOptions.map(option => (
              <button
                key={option.value}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-accent",
                  selectedSort === option.value && "bg-primary/10 text-primary font-medium"
                )}
                onClick={() => setSelectedSort(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
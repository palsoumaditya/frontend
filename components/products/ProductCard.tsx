"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Percent, Search, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { ProductCardProps } from "./types";

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-lg overflow-hidden border shadow-sm group"
    >
      <div className="relative aspect-square overflow-hidden">
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-red-500 text-white">
              <Percent size={14} className="mr-1" />
              {product.discount}% OFF
            </Badge>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
            <Badge variant="outline" className="text-lg border-2">Out of Stock</Badge>
          </div>
        )}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {product.tags.includes('new') && (
            <Badge className="bg-blue-500 text-white">New</Badge>
          )}
          {product.tags.includes('bestseller') && (
            <Badge className="bg-amber-500 text-white">Best Seller</Badge>
          )}
          {product.tags.includes('premium') && (
            <Badge className="bg-purple-500 text-white">Premium</Badge>
          )}
        </div>
        <div className="relative h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button size="sm" variant="secondary" className="rounded-full">
            <Heart size={16} />
          </Button>
          <Button size="sm" className="rounded-full">
            <ShoppingCart size={16} />
          </Button>
          <Button size="sm" variant="secondary" className="rounded-full">
            <Search size={16} />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          <Badge variant="outline" className="text-xs font-normal">
            {product.category}
          </Badge>
          <span className="text-xs text-muted-foreground ml-2">{product.brand}</span>
        </div>
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
          <div className="flex items-center">
            {product.discount > 0 && (
              <span className="text-sm line-through text-muted-foreground mr-2">
                ${product.price.toFixed(2)}
              </span>
            )}
            <span className="font-bold text-lg">
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
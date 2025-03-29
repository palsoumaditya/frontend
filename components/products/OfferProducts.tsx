"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingCart, Heart, Eye, Zap, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const offerProducts = [
  {
    id: 1,
    name: "Limited Edition Smartwatch",
    price: 199.99,
    discountedPrice: 149.99,
    rating: 4.7,
    image: "/images/products/smartwatch.jpg",
    badge: "Limited Time",
    color: "from-blue-500/20 to-indigo-500/20",
    expiresIn: "2 days",
    percentOff: 25
  },
  {
    id: 2,
    name: "Premium Bluetooth Speaker",
    price: 129.99,
    discountedPrice: 89.99,
    rating: 4.5,
    image: "/images/products/speaker.jpg",
    badge: "Flash Sale",
    color: "from-green-500/20 to-emerald-500/20",
    expiresIn: "5 hours",
    percentOff: 30
  },
  {
    id: 3,
    name: "Designer Leather Backpack",
    price: 159.99,
    discountedPrice: 119.99,
    rating: 4.9,
    image: "/images/products/backpack.jpg",
    badge: "Weekend Special",
    color: "from-purple-500/20 to-pink-500/20",
    expiresIn: "3 days",
    percentOff: 25
  },
  {
    id: 4,
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    discountedPrice: 99.99,
    rating: 4.6,
    image: "/images/products/earbuds.jpg",
    badge: "Hot Deal",
    color: "from-amber-500/20 to-orange-500/20",
    expiresIn: "12 hours",
    percentOff: 33
  }
];

export default function OfferProducts() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              Special Offers
              <motion.span 
                className="inline-block ml-2 text-primary"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Percent size={20} />
              </motion.span>
            </h2>
            <p className="text-muted-foreground">Limited-time deals you don't want to miss</p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All Offers
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm group relative"
            >
              <div className="relative aspect-square">
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-primary text-white animate-pulse">
                    <Zap size={14} className="mr-1" />
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {product.percentOff}% OFF
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 z-10">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm flex items-center">
                    <Clock size={14} className="mr-1 text-primary" />
                    Ends in: {product.expiresIn}
                  </Badge>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">(120+ reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-bold text-lg">${product.discountedPrice.toFixed(2)}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">${product.price.toFixed(2)}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="rounded-full p-0 h-8 w-8 hover:bg-primary/10">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export function ProductPageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 container mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-2 flex items-center">
        Product Catalog
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="ml-3 inline-flex"
        >
          <ShoppingCart className="h-6 w-6 text-primary" />
        </motion.span>
      </h2>
      <p className="text-muted-foreground">Discover our wide range of tech products</p>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { ProductCatalogLayout } from "@/components/products/ProductCatalogLayout";

export default function ProductCatalogPage() {
  return (
    <div className="pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-2xl mx-auto"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl -z-10 blur-3xl opacity-50" />
          <ProductCatalogLayout />
        </div>
      </motion.div>
    </div>
  );
}
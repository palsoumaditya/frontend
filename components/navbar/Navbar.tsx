"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search, User, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after component mounts on client
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent hydration mismatch by not rendering motion elements until client-side
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/" 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
              >
                QuickCart
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              {["Home", "Shop", "Product Catalog", "Collections", "New Arrivals", "Sale"].map((item) => (
                <div key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="relative px-3 py-2 text-foreground/80 hover:text-foreground group"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="icon">
                <Search size={20} />
              </Button>
              {[
                { icon: Heart, label: "Wishlist", count: 0 },
                { icon: User, label: "Account", count: null },
                { icon: ShoppingCart, label: "Cart", count: 0 }
              ].map((item) => (
                <div key={item.label} className="relative">
                  <Button variant="ghost" size="icon" className="relative group">
                    <item.icon size={20} />
                    {item.count !== null && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                        {item.count}
                      </Badge>
                    )}
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-3 md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">0</Badge>
              </Button>
              
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Full animated version rendered only on client-side
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              href="/" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            >
              QuickCart
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Product Catalog", path: "/product-catalog" },
              { name: "Collections", path: "/collections" },
              { name: "New Arrivals", path: "/new-arrivals" },
              { name: "Sale", path: "/sale" }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.path}
                  className="relative px-3 py-2 text-foreground/80 hover:text-foreground group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <motion.div 
            className="hidden md:flex items-center overflow-hidden"
            animate={{ width: searchActive ? "16rem" : "2.5rem" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSearchActive(!searchActive)}
              className="text-foreground/80 hover:text-foreground"
            >
              <Search size={20} />
            </Button>
            <AnimatePresence>
              {searchActive && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent border-none focus:ring-0"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Action Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { icon: Heart, label: "Wishlist", count: 0 },
              { icon: User, label: "Account", count: null },
              { icon: ShoppingCart, label: "Cart", count: 0 }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button variant="ghost" size="icon" className="relative group">
                  <item.icon size={20} />
                  {item.count !== null && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                      {item.count}
                    </Badge>
                  )}
                  <motion.span 
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-3 md:hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">0</Badge>
              </Button>
            </motion.div>
            
            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="icon">
                    <Menu size={24} />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative w-full mb-6"
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10"
                  />
                </motion.div>
                
                <nav className="flex flex-col space-y-4">
                  {["Home", "Shop", "Product Catalog", "Collections", "New Arrivals", "Sale"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-lg font-medium py-2 border-b border-border/50 flex justify-between items-center"
                      >
                        {item}
                        <motion.span 
                          className="text-primary"
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div 
                  className="mt-auto mb-8 flex justify-around pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: User, label: "Account" },
                    { icon: Heart, label: "Wishlist" },
                    { icon: ShoppingCart, label: "Cart" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" className="flex flex-col items-center h-auto py-2">
                        <item.icon size={20} />
                        <span className="text-xs mt-1">{item.label}</span>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
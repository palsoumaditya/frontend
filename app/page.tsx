"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star, TrendingUp, Zap, Heart, ShoppingCart, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LiveStatus from "@/components/stats/LiveStatus";
import StoryCarousel from "@/components/stories/StoryCarousel";
import ShoppingInspiration from "@/components/inspiration/ShoppingInspiration";
import OfferProducts from "@/components/products/OfferProducts";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-rotate featured products
    const interval = setInterval(() => {
      setActiveProduct(prev => (prev + 1) % featuredProducts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129.99,
      discount: 20,
      rating: 4.8,
      image: "/images/products/headphones.jpg",
      badge: "Best Seller",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: 89.99,
      discount: 15,
      rating: 4.6,
      image: "/images/products/fitness-tracker.jpg",
      badge: "New Arrival",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 3,
      name: "Ultra HD Smart TV",
      price: 599.99,
      discount: 10,
      rating: 4.9,
      image: "/images/products/smart-tv.jpg",
      badge: "Top Rated",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      name: "Professional Camera Kit",
      price: 899.99,
      discount: 12,
      rating: 4.7,
      image: "/images/products/camera.jpg",
      badge: "Limited Edition",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-[100px] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent rounded-tr-[100px] blur-3xl"></div>
          
          {/* Animated background shapes */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
          />
          
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-col items-start space-y-6"
            >
              <motion.div variants={fadeIn} className="flex items-center space-x-2">
                <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 border-primary/20">
                  <Zap size={14} className="mr-1" />
                  <motion.span
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    New Season Collection
                  </motion.span>
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 animate-gradient">Trendy</span> Products for Your Lifestyle
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Shop the latest trends with confidence. Quality products, fast delivery, and exceptional service guaranteed.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
                <Button size="lg" variant="outline" className="group border-primary/30 hover:border-primary/80">
                  Explore Collections
                </Button>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { icon: Clock, label: "Fast Shipping", value: "2-3 Days" },
                  { icon: Star, label: "Trusted Reviews", value: "10,000+" },
                  { icon: TrendingUp, label: "Trending Items", value: "Updated Daily" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col p-3 rounded-lg hover:bg-accent/50 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-1">
                      <stat.icon className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold">{stat.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <motion.div 
                  className="relative bg-gradient-to-tr from-background to-muted p-6 rounded-3xl border border-border/50 shadow-xl backdrop-blur-sm"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/products/hero-product.jpg"
                      alt="Featured Product"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-4 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <h3 className="font-bold text-xl">Premium Collection</h3>
                      <p className="text-sm opacity-90">Discover the best quality products</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -bottom-6 -right-6 bg-background rounded-xl p-3 shadow-lg border border-border"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Limited Offer</p>
                        <p className="font-bold">30% OFF</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="absolute -top-6 -left-6 bg-background rounded-xl p-3 shadow-lg border border-border"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="bg-purple-500/10 p-2 rounded-full">
                        <Star className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Customer Rating</p>
                        <p className="font-bold">4.9/5.0</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Instagram-style Stories - Positioned under hero section */}
      
            
            {/* Instagram-style Stories - Positioned under hero section */}
            <section className="py-8 md:py-12 w-full max-w-full overflow-hidden">
              <div className="container mx-auto px-4">
                <StoryCarousel />
              </div>
            </section>
            
            {/* Featured Products Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-muted/30"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
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
                Featured Products
                <motion.span 
                  className="inline-block ml-2 text-primary"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Star size={20} fill="currentColor" />
                </motion.span>
              </h2>
              <p className="text-muted-foreground">Discover our most popular items</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          {/* Product Carousel Indicators */}
          <div className="flex justify-center mb-8">
            {featuredProducts.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${activeProduct === index ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                onClick={() => setActiveProduct(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm group relative ${index === activeProduct ? 'ring-2 ring-primary ring-offset-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                     style={{ backgroundImage: `linear-gradient(to bottom right, ${product.color.split(' ')[0].replace('from-', '')}, ${product.color.split(' ')[1].replace('to-', '')})` }}>
                </div>
                
                <div className="relative aspect-square">
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="animate-pulse">{product.badge}</Badge>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {product.discount}% OFF
                    </Badge>
                  </div>
                  <div className="h-full w-full relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Quick action buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <motion.button 
                        className="bg-background/80 backdrop-blur-sm p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart size={18} className="text-red-500" />
                      </motion.button>
                      <motion.button 
                        className="bg-primary text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ShoppingCart size={18} />
                      </motion.button>
                      <motion.button 
                        className="bg-background/80 backdrop-blur-sm p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye size={18} />
                      </motion.button>
                    </div>
                  </div>
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
                      <span className="font-bold text-lg">${(product.price * (1 - product.discount/100)).toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">${product.price.toFixed(2)}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="rounded-full p-0 h-8 w-8 hover:bg-primary/10">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Live Status Section */}
      <LiveStatus />
      
      {/* Offer Products Section */}
      <OfferProducts />
      
      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Shopping Experience?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Join thousands of satisfied customers who have discovered the joy of shopping with QuickCart.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
              <Button size="lg" variant="outline" className="group border-primary/30 hover:border-primary/80">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Existing Components */}
      <ShoppingInspiration />
      
    </div>
  );
}

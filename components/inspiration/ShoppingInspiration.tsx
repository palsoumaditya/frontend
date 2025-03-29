"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Image as ImageIcon, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock data - in a real app, this would come from an API
const inspirationData = [
  {
    type: "quote",
    text: "My wallet is like my phone battery - constantly drained by new tech releases!",
    author: "Tech Shopaholic"
  },
  {
    type: "quote",
    text: "I told myself I wouldn't buy another gadget this month. That was 5 gadgets ago.",
    author: "Anonymous Geek"
  },
  {
    type: "quote",
    text: "The only relationship I'm committed to is with my Wi-Fi... and maybe my new smartphone.",
    author: "Digital Nomad"
  },
  {
    type: "quote",
    text: "My shopping cart is like my browser - too many tabs open and I can't close any of them!",
    author: "Online Shopper"
  },
  {
    type: "quote",
    text: "I'm not addicted to buying tech. I can stop anytime... right after this purchase.",
    author: "Tech Enthusiast"
  },
  {
    type: "quote",
    text: "My budget said 'no' but my heart said 'add to cart'!",
    author: "Impulse Buyer"
  }
];

export default function ShoppingInspiration() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirationData.length);
    }, 5000); // Changed back to 5000 ms (5 seconds)
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? inspirationData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % inspirationData.length
    );
  };

  const currentItem = inspirationData[currentIndex];

  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    })
  };

  // Floating animation for the shopping bag icon
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  return (
    <section 
      className="py-12 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center">
            Tech Confessions
            <motion.span
              animate={floatingAnimation}
              className="ml-3 inline-flex"
            >
              <ShoppingBag className="h-6 w-6 text-primary" />
            </motion.span>
          </h2>
          <p className="text-muted-foreground">Relatable reasons why you need more tech</p>
        </motion.div>
        
        <div className="relative max-w-3xl mx-auto h-[250px] sm:h-[300px] rounded-xl overflow-hidden border border-border/50 shadow-sm bg-background/80 backdrop-blur-sm">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-muted/20 -z-10">
            <div className="absolute inset-0 opacity-10" style={{ 
              backgroundImage: "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.2) 2px, transparent 0)",
              backgroundSize: "40px 40px" 
            }}></div>
          </div>
          
          {/* Slider content */}
          <div className="h-full w-full relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center p-6"
              >
                <div className="text-center max-w-xl">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-4 flex justify-center"
                  >
                    <Quote className="h-12 w-12 text-primary/40" />
                  </motion.div>
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl font-medium italic mb-4"
                  >
                    {currentItem.text}
                  </motion.blockquote>
                  <motion.cite
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-muted-foreground block"
                  >
                    — {currentItem.author}
                  </motion.cite>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {inspirationData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <Button 
            className="group"
            onClick={() => window.location.href = '/shop'}
          >
            Feed Your Tech Addiction
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data - in a real app, this would come from an API
const storyData = [
  {
    id: 1,
    title: "New Arrivals",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 2,
    title: "Summer Sale",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 3,
    title: "Tech Deals",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 4,
    title: "Accessories",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 5,
    title: "Limited Edition",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 6,
    title: "Flash Sale",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  // Added new stories
  {
    id: 7,
    title: "Trending Now",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 8,
    title: "Best Sellers",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 9,
    title: "Gift Ideas",
    image: "/images/products/headphones.jpg",
    viewed: false
  },
  {
    id: 10,
    title: "New Season",
    image: "/images/products/headphones.jpg",
    viewed: false
  }
];

export default function StoryCarousel() {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 5 });
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Handle story selection
  const openStory = (id: number) => {
    setActiveStory(id);
    setProgress(0);
    setIsPaused(false);
  };
  
  // Close active story
  const closeStory = () => {
    setActiveStory(null);
    setProgress(0);
  };
  
  // Navigate between stories
  const goToNextStory = () => {
    if (activeStory === null) return;
    
    const currentIndex = storyData.findIndex(story => story.id === activeStory);
    if (currentIndex < storyData.length - 1) {
      setActiveStory(storyData[currentIndex + 1].id);
      setProgress(0);
    } else {
      closeStory();
    }
  };
  
  const goToPrevStory = () => {
    if (activeStory === null) return;
    
    const currentIndex = storyData.findIndex(story => story.id === activeStory);
    if (currentIndex > 0) {
      setActiveStory(storyData[currentIndex - 1].id);
      setProgress(0);
    }
  };
  
  // Scroll carousel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 200;
    const newScrollLeft = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount 
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    
    // Update visible range
    const itemWidth = 100; // Approximate width of each story item
    const newStart = Math.floor(newScrollLeft / itemWidth);
    setVisibleRange({
      start: Math.max(0, newStart),
      end: Math.min(storyData.length - 1, newStart + 5)
    });
  };
  
  // Progress timer for active story
  useEffect(() => {
    if (activeStory === null || isPaused) return;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          goToNextStory();
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (50ms * 100)
    
    return () => clearInterval(timer);
  }, [activeStory, isPaused]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeStory === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevStory();
          break;
        case 'ArrowRight':
          goToNextStory();
          break;
        case 'Escape':
          closeStory();
          break;
        case ' ': // Space bar
          setIsPaused(prev => !prev);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStory]);
  
  return (
    <section className="py-6 relative overflow-hidden bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-center font-semibold mb-4">Trending Stories</h2>
        
        {/* Stories Carousel */}
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-1 shadow-md hover:bg-background"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-1 shadow-md hover:bg-background"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Stories */}
          <div 
            ref={carouselRef}
            className="flex justify-between overflow-x-auto scrollbar-hide pb-2 pt-1 px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {storyData.map((story) => (
              <motion.div
                key={story.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-[100px] px-2"
              >
                <button
                  onClick={() => openStory(story.id)}
                  className="flex flex-col items-center space-y-2 focus:outline-none w-full"
                >
                  <div className={cn(
                    "w-20 h-20 rounded-full p-[3px]",
                    story.viewed 
                      ? "bg-muted" 
                      : "bg-gradient-to-br from-primary to-purple-500"
                  )}>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-center w-full truncate">{story.title}</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Active Story Overlay */}
        <AnimatePresence>
          {activeStory !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              onClick={closeStory}
            >
              {/* Story Content */}
              <div 
                className="relative w-full max-w-md h-[80vh] max-h-[800px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress bar */}
                <div className="absolute top-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden z-10">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                </div>
                
                {/* Story image */}
                {storyData.map((story) => (
                  story.id === activeStory && (
                    <div key={story.id} className="w-full h-full relative rounded-lg overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Story title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-xl font-bold">{story.title}</h3>
                        <p className="text-white/80 text-sm">Tap to explore our collection</p>
                      </div>
                      
                      {/* Navigation controls */}
                      <button
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 rounded-full p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrevStory();
                        }}
                      >
                        <ChevronLeft className="h-6 w-6 text-white" />
                      </button>
                      
                      <button
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 rounded-full p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNextStory();
                        }}
                      >
                        <ChevronRight className="h-6 w-6 text-white" />
                      </button>
                      
                      {/* Play/Pause button */}
                      <button
                        className="absolute top-4 right-4 bg-black/30 rounded-full p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPaused(!isPaused);
                        }}
                      >
                        {isPaused ? (
                          <Play className="h-4 w-4 text-white" />
                        ) : (
                          <Pause className="h-4 w-4 text-white" />
                        )}
                      </button>
                    </div>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
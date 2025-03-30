"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProductCatalog from "./ProductCatalog";
import { ProductPageHeader } from "./ProductPageHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ProductCatalogLayout() {
  const [showLaptopDialog, setShowLaptopDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [company, setCompany] = useState("");

  // Listen for category changes from ProductCatalog
  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      const category = event.detail.category;
      setSelectedCategory(category);
      
      if (category === "Computers") {
        setShowLaptopDialog(true);
      }
    };

    window.addEventListener('categoryChange' as any, handleCategoryChange);
    
    return () => {
      window.removeEventListener('categoryChange' as any, handleCategoryChange);
    };
  }, []);

  const handleFilterApply = () => {
    // Dispatch event to filter products based on budget and company
    window.dispatchEvent(new CustomEvent('laptopFilterChange', { 
      detail: { budget: Number(budget), company }
    }));
    setShowLaptopDialog(false);
  };

  return (
    <>
      <div className="pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl -z-10 blur-3xl opacity-50" />
            <ProductPageHeader />
            <ProductCatalog onCategoryChange={(category) => {
              // Dispatch custom event for category change
              window.dispatchEvent(new CustomEvent('categoryChange', { 
                detail: { category } 
              }));
            }} />
          </div>
        </motion.div>
      </div>

      <Dialog open={showLaptopDialog} onOpenChange={setShowLaptopDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>आपको लैपटॉप देखना है?</DialogTitle>
            <DialogDescription>
              अपना बजट और पसंदीदा कंपनी बताइए, हम आपके लिए सही लैपटॉप फ़िल्टर करेंगे।
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="budget" className="text-right">
                बजट
              </Label>
              <Input
                id="budget"
                type="number"
                placeholder="अपना बजट डालें"
                className="col-span-3"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                कंपनी
              </Label>
              <Select value={company} onValueChange={setCompany}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="कंपनी चुनें" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">सभी</SelectItem>
                  <SelectItem value="TechBook">TechBook</SelectItem>
                  <SelectItem value="Apple">Apple</SelectItem>
                  <SelectItem value="Dell">Dell</SelectItem>
                  <SelectItem value="HP">HP</SelectItem>
                  <SelectItem value="Lenovo">Lenovo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" onClick={handleFilterApply}>ठीक है, दिखाएं</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
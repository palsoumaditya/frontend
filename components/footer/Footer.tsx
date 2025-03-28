"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background to-muted pt-16 pb-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm border border-border/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-muted-foreground mb-4">Stay updated with the latest trends, exclusive offers, and new arrivals.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-background/50"
              />
              <Button className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-primary/20 backdrop-blur-sm"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-purple-500/20 backdrop-blur-sm"></div>
        </motion.div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">QuickCart</h2>
            </Link>
            <p className="text-muted-foreground mb-4">Your one-stop destination for trendy products at amazing prices. Shop smart, shop fast.</p>
            <div className="flex space-x-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                    <Icon size={18} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Shop", "Collections", "New Arrivals", "Sale", "About Us"].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Customer Service */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {["My Account", "Track Order", "Returns & Exchanges", "Shipping Policy", "FAQ", "Contact Us"].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "123 Fashion Street, Style City, SC 12345" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "support@quickcart.com" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="mr-3 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} QuickCart. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-foreground transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
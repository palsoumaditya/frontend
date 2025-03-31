"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, DollarSign, Clock, Award, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data - in a real app, this would come from an API
const mockStats = {
  ordersLast24h: 247,
  moneySpent: 12489.99,
  mostOrderedProduct: "Wireless Headphones",
  activeUsers: 189,
  averageOrderValue: 89.99,
  topCategory: "Electronics"
};

export default function LiveStatus() {
  const [stats, setStats] = useState(mockStats);
  const [highlightedStat, setHighlightedStat] = useState<string | null>(null);
  const [counters, setCounters] = useState({
    ordersLast24h: mockStats.ordersLast24h,
    moneySpent: mockStats.moneySpent,
    activeUsers: mockStats.activeUsers
  });

  useEffect(() => {
    const avgOrderValue = mockStats.averageOrderValue;

    // Increase the interval from 8000ms (8 seconds) to 30000ms (30 seconds)
    const majorInterval = setInterval(() => {
      const newOrders = Math.floor(Math.random() * 3 + 1);
      const newRevenue = newOrders * avgOrderValue;

      setStats((prevStats) => ({
        ...prevStats,
        ordersLast24h: prevStats.ordersLast24h + newOrders,
        moneySpent: +(prevStats.moneySpent + newRevenue).toFixed(2),
        activeUsers: Math.max(150, Math.floor(prevStats.activeUsers + (Math.random() * 15 - 4)))
      }));

      // Highlight stat less frequently
      if (Math.random() > 0.7) { // Only highlight sometimes (30% chance)
        const statKeys = Object.keys(mockStats);
        setHighlightedStat(statKeys[Math.floor(Math.random() * statKeys.length)]);
        
        // Reduce highlight duration
        setTimeout(() => setHighlightedStat(null), 2000);
      }
    }, 30000); // Changed from 8000 to 30000

    // Slow down the micro-updates by increasing interval from 300ms to 1000ms
    const microInterval = setInterval(() => {
      setCounters((prev) => ({
        // Reduce the rate of change by updating smaller increments
        ordersLast24h: prev.ordersLast24h < stats.ordersLast24h 
          ? prev.ordersLast24h + Math.ceil((stats.ordersLast24h - prev.ordersLast24h) / 200) 
          : stats.ordersLast24h,
        moneySpent: prev.moneySpent < stats.moneySpent 
          ? +(prev.moneySpent + Math.max(0.1, (stats.moneySpent - prev.moneySpent) / 200)).toFixed(2)
          : stats.moneySpent,
        activeUsers: prev.activeUsers !== stats.activeUsers
          ? prev.activeUsers + (Math.abs(stats.activeUsers - prev.activeUsers) > 5 ? Math.sign(stats.activeUsers - prev.activeUsers) : 0)
          : stats.activeUsers
      }));
    }, 1000); // Changed from 300 to 1000

    return () => {
      clearInterval(majorInterval);
      clearInterval(microInterval);
    };
  }, [stats]); // Added stats as a dependency to ensure counters update properly

  const statItems = [
    { key: "ordersLast24h", icon: ShoppingBag, label: "Orders (24h)", value: counters.ordersLast24h, format: (val: number) => val.toString(), color: "from-blue-500/20 to-cyan-500/20" },
    { key: "moneySpent", icon: DollarSign, label: "Revenue (24h)", value: counters.moneySpent, format: (val: number) => `$${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, color: "from-green-500/20 to-emerald-500/20" },
    { key: "mostOrderedProduct", icon: Award, label: "Most Ordered", value: stats.mostOrderedProduct, format: (val: string) => val, color: "from-purple-500/20 to-pink-500/20" },
    { key: "activeUsers", icon: Users, label: "Active Users", value: counters.activeUsers, format: (val: number) => val.toString(), color: "from-amber-500/20 to-orange-500/20" },
    { key: "averageOrderValue", icon: TrendingUp, label: "Avg. Order", value: stats.averageOrderValue, format: (val: number) => `$${val.toFixed(2)}`, color: "from-red-500/20 to-rose-500/20" },
    { key: "topCategory", icon: Clock, label: "Top Category", value: stats.topCategory, format: (val: string) => val, color: "from-indigo-500/20 to-violet-500/20" }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center">
            Live Store Activity
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="ml-2 inline-flex h-3 w-3 rounded-full bg-green-500"
            />
          </h2>
          <p className="text-muted-foreground">Real-time updates from our store</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={cn(
                "relative overflow-hidden rounded-xl border border-border/50 bg-background p-6 shadow-sm",
                highlightedStat === item.key && "ring-2 ring-primary"
              )}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 -z-10`} />

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={item.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {typeof item.format === 'function' ? item.format(item.value as number) : item.value}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

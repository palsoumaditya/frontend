import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "QuickCart - Shop Smart, Shop Fast",
  description: "Your one-stop shop for trendy products at amazing prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 pt-28 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

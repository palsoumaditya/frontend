import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AppNavbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppWrapper } from "@/components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const neueHaas = localFont({
  src: "../public/fonts/NeueHaasGrotDisp-55Roman-Trial.otf",
  variable: "--font-neue-haas",
});

const epilogue = localFont({
  src: "../public/fonts/Epilogue-Medium.ttf",
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "Plumb. Less hiring. More hires.",
  description: "Plumb runs the hiring funnel inside Slack. Brief once, get a ranked shortlist back, make the call.",
  openGraph: {
    images: ["/og.png"],
  },
  twitter: {
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${neueHaas.variable} ${epilogue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>
            {children}
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

